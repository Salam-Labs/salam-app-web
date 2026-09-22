import js from "@eslint/js";
import globals from "globals";
import astro from "eslint-plugin-astro";

export default [
  {
    ignores: ["**/*.config.mjs", "**/*.prettierrc.js", "**/*.config.cjs", "**/*.jsx"],
  },
  js.configs.recommended,
  {
    languageOptions: {
      globals: globals.browser,
    },
    rules: {
      "no-shadow": "off",
      "no-param-reassign": "off",
    },
  },
  ...astro.configs.recommended,
];
