import { readdirSync, readFileSync } from "node:fs"
import { join } from "node:path"

import js from "@eslint/js"
import eslintConfigPrettier from "eslint-config-prettier"
import turboPlugin from "eslint-plugin-turbo"
import tseslint from "typescript-eslint"

/**
 * Variable names defined in the linted package's `.env*` files. Next.js loads those
 * files itself, so their variables don't need to be declared in turbo.json; this lets
 * `turbo/no-undeclared-env-vars` accept them. ESLint runs from the package directory.
 */
function envFileVariables(dir = process.cwd()) {
  return readdirSync(dir, { withFileTypes: true })
    .filter((entry) => entry.isFile() && entry.name.startsWith(".env"))
    .flatMap((entry) => readFileSync(join(dir, entry.name), "utf8").split(/\r?\n/))
    .map((line) => line.match(/^\s*(?:export\s+)?([A-Za-z_][A-Za-z0-9_]*)\s*=/)?.[1])
    .filter((name) => name !== undefined)
}

/**
 * Shared ESLint config for every package in the monorepo.
 *
 * @type {import("eslint").Linter.Config[]}
 */
export const config = [
  js.configs.recommended,
  eslintConfigPrettier,
  ...tseslint.configs.recommended,
  {
    plugins: { turbo: turboPlugin },
    rules: {
      "turbo/no-undeclared-env-vars": [
        "warn",
        { allowList: [...new Set(envFileVariables())].map((name) => `^${name}$`) },
      ],
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
    },
  },
  {
    ignores: ["dist/**", ".next/**", "out/**", ".turbo/**", "node_modules/**", "next-env.d.ts"],
  },
]
