{ pkgs, lib, config, inputs, ... }:

{
  languages.javascript.enable = true;
  languages.javascript.bun.enable = true;
  languages.javascript.bun.install.enable = true;
  git-hooks.enable = true;
  git-hooks.hooks.biome.enable = true;
  git-hooks.hooks.commitizen.enable = true;
  git-hooks.hooks.mdformat.enable = true;
}
