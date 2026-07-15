import * as vscode from "vscode";
import { StatusBarManager } from "./statusBarManager.js";
import { FacetTreeProvider } from "./facetTreeProvider.js";
import { registerFacetCommands } from "./facetCommands.js";
import { ConfigLoader } from "./utils/configLoader.js";

export function activate(context: vscode.ExtensionContext) {
	console.log("🚀 Code Facet Generator activated");

	// Initialize Config Loader
	const configLoader = new ConfigLoader(context);

	// Initialize Tree Provider
	const facetTreeProvider: any = new FacetTreeProvider(configLoader);

	// Register Tree View
	const treeView = vscode.window.createTreeView("facetGeneratorTree", {
		treeDataProvider: facetTreeProvider,
		showCollapseAll: true,
		canSelectMany: false,
	});

	// Initialize Status Bar
	const statusBarManager = new StatusBarManager(context, configLoader);

	// Register all commands
	registerFacetCommands(context, configLoader, facetTreeProvider);

	// Add to subscriptions
	context.subscriptions.push(statusBarManager, treeView, facetTreeProvider);

	// Show welcome message
	vscode.window.showInformationMessage("🎯 Code Facet Generator ready! Click the facet icon in status bar or activity bar.");
}

export function deactivate() {}
