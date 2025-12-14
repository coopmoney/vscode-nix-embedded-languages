import packageJson from "@package";
import vscode from "vscode";
import {
  INCLUDE_CONFIG,
  LANGUAGES,
  SUB_INCLUDE_CONFIG,
  VERSION_STATE,
} from "./constants";
import { generateFiles } from "./generate";
import type { LanguagesMap } from "./injection-grammar";

const updateExtension = () => {
  const settings = vscode.workspace.getConfiguration(packageJson.name);
  const includeLanguages = settings.get<LanguagesMap>(SUB_INCLUDE_CONFIG) ?? {};
  const allLanguages: LanguagesMap = { ...LANGUAGES, ...includeLanguages };

  const filesChanged = generateFiles(allLanguages);

  if (filesChanged) {
    vscode.window
      .showInformationMessage("Reload window to apply changes?", "Yes", "No")
      .then((choice) => {
        if (choice === "Yes") {
          vscode.commands.executeCommand("workbench.action.reloadWindow");
        }
      });
  }
};

export const activate = (context: vscode.ExtensionContext) => {
  const currentVersion = packageJson.version;
  const previousVersion = context.globalState.get<string>(VERSION_STATE);

  if (previousVersion !== currentVersion) {
    updateExtension();
    context.globalState.update(VERSION_STATE, currentVersion);
  }

  context.subscriptions.push(
    vscode.workspace.onDidChangeConfiguration((event) => {
      if (event.affectsConfiguration(INCLUDE_CONFIG)) {
        updateExtension();
      }
    }),
  );
};

export const deactivate = () => {};
