# Contributing

Thank you for taking an interest in contributing to this project. All contributions are welcome.

## Contribution Workflow

1. Raise/find an [issue](https://github.com/coopmoney/vscode-nix-embedded-languages/issues) to fix
1. Fork the repository
1. Implement changes (see [Development Workflow](#development-workflow))
1. Create pull request

## Development Workflow

1. Implement changes
1. Run `bun run generate` to update `package.json` and `syntaxes`
1. Run `bun run build` to update `dist/extension.js`
1. Use F5 within VS Code to test the extension

> [!NOTE]
>
> - `package.json` is partially generated and `syntaxes` is fully generated. Relevant changes to these should be made in `src`.

## Release Workflow

1. Update `version` in `package.json` and run `bun install` to update lockfile
1. Update `CHANGELOG.md`
1. Create a git tag: `git tag v<version>`
1. Push with tags: `git push --tags`
