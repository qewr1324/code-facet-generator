import * as vscode from "vscode";
import * as path from "path";
import { ConfigLoader } from "./utils/configLoader";

export class StatusBarManager {
	private statusBarItem: vscode.StatusBarItem;
	private animationInterval: NodeJS.Timeout | undefined;

	constructor(
		private context: vscode.ExtensionContext,
		private configLoader: ConfigLoader,
	) {
		this.statusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 100);
		this.initialize();
	}

	private initialize() {
		// Set custom SVG icon
		const iconPath = path.join(this.context.extensionPath, "media", "facet-icon.svg");

		this.statusBarItem.text = `$(facet-icon) Facet Gen`;
		this.statusBarItem.tooltip = "Code Facet Generator\nClick to generate code files";
		this.statusBarItem.command = "facetGenerator.generateFromStatusBar";
		this.statusBarItem.backgroundColor = new vscode.ThemeColor("statusBarItem.prominentBackground");

		this.statusBarItem.show();

		// Add hover animation effect
		this.startAnimation();
	}

	private startAnimation() {
		let frame = 0;
		const frames = ["⚡", "✨", "💫", "⭐"];

		this.animationInterval = setInterval(() => {
			frame = (frame + 1) % frames.length;
			this.statusBarItem.tooltip = `Code Facet Generator ${frames[frame]}\nClick to generate code files`;
		}, 2000);
	}

	public updateText(text: string) {
		this.statusBarItem.text = text;
	}

	public dispose() {
		if (this.animationInterval) {
			clearInterval(this.animationInterval);
		}
		this.statusBarItem.dispose();
	}
}
