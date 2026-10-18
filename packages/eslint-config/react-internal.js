import eslintReact from "@eslint-react/eslint-plugin"
import pluginReactHooks from "eslint-plugin-react-hooks"
import globals from "globals"

import { config as baseConfig } from "./base.js"

/**
 * ESLint config for internal React libraries (e.g. @jal-matsya/ui).
 *
 * @type {import("eslint").Linter.Config[]}
 */
export const config = [
  ...baseConfig,
  {
    files: ["**/*.{ts,tsx}"],
    ...eslintReact.configs["recommended-typescript"],
  },
  pluginReactHooks.configs.flat.recommended,
  {
    languageOptions: {
      globals: { ...globals.browser },
    },
  },
]
