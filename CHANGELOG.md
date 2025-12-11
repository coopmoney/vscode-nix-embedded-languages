# Change Log

All notable changes to this extension will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/) and this project adheres to [Semantic Versioning](https://semver.org/).

## [1.0.0] - 2024-12-11

### Added

- Initial release
- Syntax highlighting for embedded languages inside Nix multi-line strings (`'' ... ''`)
- Support for `# lang`, `# syntax: lang`, and `// syntax: lang` markers inside strings
- Support for `# syntax: lang` comments before strings (for languages without comments like JSON)
- Built-in support for 14 languages: Shell, Python, JavaScript, TypeScript, JSON, YAML, SQL, Lua, Ruby, Rust, Go, HTML, CSS, and Nix
- Custom language configuration via `nix-embedded-languages.include` setting

[1.0.0]: https://github.com/coopmoney/vscode-nix-embedded-languages/releases/tag/v1.0.0
