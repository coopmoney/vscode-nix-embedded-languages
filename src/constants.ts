import packageJson from "@package";

export const SUB_INCLUDE_CONFIG = "include";
export const INCLUDE_CONFIG = `${packageJson.name}.${SUB_INCLUDE_CONFIG}`;
export const VERSION_STATE = "version";

/**
 * Built-in language mappings.
 * Keys can use regex alternation (e.g., "shell|bash|sh") for aliases.
 * Values are either a scope name string or an object with scopeName.
 */
export const LANGUAGES: Record<
	string,
	string | { scopeName: string; name?: string }
> = {
	"shell|bash|sh": { name: "shellscript", scopeName: "source.shell" },
	"python|py": { name: "python", scopeName: "source.python" },
	"javascript|js": { name: "javascript", scopeName: "source.js" },
	"typescript|ts": { name: "typescript", scopeName: "source.ts" },
	json: "source.json",
	yaml: "source.yaml",
	sql: "source.sql",
	lua: "source.lua",
	ruby: "source.ruby",
	rust: "source.rust",
	go: "source.go",
	html: "text.html.derivative",
	css: "source.css",
	nix: "source.nix",
};
