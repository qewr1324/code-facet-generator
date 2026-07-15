import * as vscode from "vscode";
import { ConfigLoader } from "./utils/configLoader";
import { FacetTreeProvider } from "./facetTreeProvider";
import { FileGenerator } from "./utils/fileGenerator";

export function registerFacetCommands(context: vscode.ExtensionContext, configLoader: ConfigLoader, treeProvider: FacetTreeProvider) {
	// Command: Open Panel (from status bar click)
	context.subscriptions.push(
		vscode.commands.registerCommand("facetGenerator.generateFromStatusBar", async () => {
			await showGenerationFlow(configLoader);
		}),
	);

	// Command: Open Panel
	context.subscriptions.push(
		vscode.commands.registerCommand("facetGenerator.openPanel", () => {
			vscode.commands.executeCommand("workbench.view.extension.facet-generator");
		}),
	);

	// Command: Generate File
	context.subscriptions.push(
		vscode.commands.registerCommand("facetGenerator.generateFile", async (language: string, facetKey: string, version: string) => {
			const generator = new FileGenerator(context, configLoader);
			await generator.generateFile(language, facetKey, version);
			treeProvider.refresh();
		}),
	);

	// Command: Reload Config
	context.subscriptions.push(
		vscode.commands.registerCommand("facetGenerator.reloadConfig", () => {
			configLoader.reloadConfig();
			treeProvider.refresh();
			vscode.window.showInformationMessage("✅ Configuration reloaded!");
		}),
	);

	// Command: Refresh Tree
	context.subscriptions.push(
		vscode.commands.registerCommand("facetGenerator.refreshTree", () => {
			treeProvider.refresh();
		}),
	);
}

async function showGenerationFlow(configLoader: ConfigLoader) {
	const config = configLoader.getConfig();
	const languages = Object.keys(config);

	if (languages.length === 0) {
		vscode.window.showErrorMessage("No languages configured in info.json");
		return;
	}

	// Step 1: Select Language
	const language = await showLanguageSelection(languages, config);
	if (!language) return;

	// Step 2: Select Facet
	const facets = Object.keys(config[language]);
	if (facets.length === 0) {
		vscode.window.showInformationMessage(`No facets available for ${language}`);
		return;
	}

	const facetKey = await showFacetSelection(language, facets, config[language]);
	if (!facetKey) return;

	// Step 3: Select Version
	const facetConfig = config[language][facetKey];
	const versions = Object.keys(facetConfig.version);

	if (versions.length === 0) {
		vscode.window.showErrorMessage(`No versions available for ${language}.${facetKey}`);
		return;
	}

	const version = await showVersionSelection(language, facetKey, versions, facetConfig);
	if (!version) return;

	// Step 4: Generate File
	await vscode.commands.executeCommand("facetGenerator.generateFile", language, facetKey, version);
}

async function showLanguageSelection(languages: string[], config: any): Promise<string | undefined> {
	const items = languages.map((lang) => ({
		label: `${getLanguageIcon(lang)} ${lang.toUpperCase()}`,
		description: `${Object.keys(config[lang]).length} facets`,
		detail: Object.keys(config[lang]).join(", "),
		language: lang,
	}));

	const selected = await vscode.window.showQuickPick(items, {
		placeHolder: "Select programming language",
		matchOnDescription: true,
		matchOnDetail: true,
	});

	return selected?.language;
}

async function showFacetSelection(language: string, facets: string[], languageConfig: any): Promise<string | undefined> {
	const items = facets.map((facet) => ({
		label: `📄 ${languageConfig[facet].name}${languageConfig[facet].extension}`,
		description: languageConfig[facet].description,
		detail: `Versions: ${Object.keys(languageConfig[facet].version).join(", ")}`,
		facetKey: facet,
	}));

	const selected = await vscode.window.showQuickPick(items, {
		placeHolder: `Select ${language} configuration type`,
		matchOnDescription: true,
		matchOnDetail: true,
	});

	return selected?.facetKey;
}

async function showVersionSelection(language: string, facetKey: string, versions: string[], facetConfig: any): Promise<string | undefined> {
	const items = versions.map((version) => ({
		label: `🎯 Version ${version}`,
		description: `Template: ${facetConfig.version[version]}`,
		detail: `${facetConfig.name}${facetConfig.extension} - ${facetConfig.description}`,
		version: version,
	}));

	const selected = await vscode.window.showQuickPick(items, {
		placeHolder: "Select version",
		matchOnDescription: true,
	});

	return selected?.version;
}

function getLanguageIcon(language: string): string {
	const icons: { [key: string]: string } = {
		java: "☕",
		javascript: "🟨",
		typescript: "🔷",
		python: "🐍",
		csharp: "🔮",
	};
	return icons[language.toLowerCase()] || "📦";
}
