// @ts-check

import eslint from "@eslint/js";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import globals from "globals";
import tseslint from "typescript-eslint";

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    ignores: ["dist/*"],
  },
  {
    languageOptions: {
      globals: globals.node,
    },
  },
  eslintPluginPrettierRecommended, // Must be last
);
