# Jal Matsya

Monorepo for the Jal Matsya website: **Next.js 16 · React 19 · Tailwind CSS v4 · shadcn/ui · Turborepo · Yarn workspaces**.

## Structure

```
.
├── apps/
│   └── web/                     # Next.js app (App Router)
│       ├── app/                 # routes, layouts
│       ├── components/          # app-specific components (providers, page sections)
│       ├── hooks/  lib/         # app-specific hooks / helpers
│       └── components.json      # shadcn config for app-level blocks
├── packages/
│   ├── ui/                      # @jal-matsya/ui — the design system
│   │   ├── src/components/      # shadcn primitives (button, card, dialog, …)
│   │   ├── src/hooks/           # shared hooks
│   │   ├── src/lib/utils.ts     # cn() helper
│   │   ├── src/styles/globals.css  # design tokens + Tailwind theme (single source of truth)
│   │   └── components.json      # shadcn config: components install here
│   ├── eslint-config/           # @jal-matsya/eslint-config — base / react-internal / next-js presets
│   └── typescript-config/       # @jal-matsya/typescript-config — base / react-library / nextjs
├── turbo.json
└── package.json                 # workspaces + root scripts
```

## Commands

| Command                        | What it does                                                                                            |
| ------------------------------ | ------------------------------------------------------------------------------------------------------- |
| `yarn dev`                     | Run all apps in dev mode (web → http://localhost:3000)                                                  |
| `yarn build`                   | Production build                                                                                        |
| `yarn lint` / `yarn typecheck` | Lint / typecheck every workspace                                                                        |
| `yarn clean`                   | Full reset: delete build artifacts and all `node_modules` (then `yarn install`); `--dry-run` to preview |
| `yarn format`                  | Prettier (sorts Tailwind classes too)                                                                   |
| `yarn ui:add <name…>`          | Add shadcn components to `@jal-matsya/ui`, e.g. `yarn ui:add accordion popover`                         |
| `yarn workspace web add <pkg>` | Add a dependency to a specific workspace                                                                |

## Using the design system

```tsx
import { Button } from "@jal-matsya/ui/components/button"
import { cn } from "@jal-matsya/ui/lib/utils"
```

The app imports the stylesheet once, in `apps/web/app/layout.tsx`:

```tsx
import "@jal-matsya/ui/globals.css"
```

### Component showcase

`/component` (http://localhost:3000/component) shows every `@jal-matsya/ui` component with a live demo, search,
and a Light / Dark / System theme switcher.

- Demos live in `apps/web/components/showcase/demos/<component>.tsx`
- `apps/web/components/showcase/registry.ts` lists them (category, description, demo)
- **After `yarn ui:add <name>`**, add a demo file and a registry entry so the new component shows up

### Conventions

- **Primitives go in `@jal-matsya/ui`.** Generic and reusable means it belongs in `packages/ui`. Page sections and
  feature components stay in `apps/web/components`.
- **Tokens only.** Use semantic utilities (`bg-primary`, `text-muted-foreground`, `bg-success`) and never raw
  colours, so theming and dark mode work everywhere.
- **Changing the brand** means editing the CSS variables in `packages/ui/src/styles/globals.css`
  (`:root` = light, `.dark` = dark). To add a new token, define the variable in both blocks and map it in
  `@theme inline` as `--color-<name>`.
- **New app?** Add `apps/<name>`, depend on `@jal-matsya/ui`, set `transpilePackages: ["@jal-matsya/ui"]`, re-export
  `@jal-matsya/ui/postcss.config`, and import `@jal-matsya/ui/globals.css`.
- **No server/client-dependent output during render.** Dates, timezones, locale formatting
  (`toLocaleString`) and `Math.random()` differ between the server and the browser and cause hydration
  errors. Wrap such UI with `useIsClient()` from `@jal-matsya/ui/hooks/use-is-client` and render a skeleton first.
- **Local patches to shadcn files** are marked with an `@jal-matsya:` comment (currently `command.tsx`, `calendar.tsx`).
  Re-apply them if you regenerate a file with `ui:add --overwrite`.
- `@jal-matsya/ui` ships raw TypeScript (no build step). Next compiles it through `transpilePackages`.

## Environment variables

Each app keeps its own `.env*` files (e.g. `apps/web/.env.development`). Next.js loads them itself — nothing
needs to be declared in `turbo.json`.

| File                  | Committed? | Use for                                        |
| --------------------- | ---------- | ---------------------------------------------- |
| `.env.development`    | yes        | non-secret defaults for `yarn dev`             |
| `.env.production`     | yes        | non-secret defaults for `yarn build` / `start` |
| `.env*.local`, `.env` | no         | secrets and machine-specific overrides         |

- Variables used in the browser must be prefixed `NEXT_PUBLIC_` (they're inlined at build time).
- Lint picks up variable names from the app's `.env*` files automatically, so `turbo/no-undeclared-env-vars`
  only flags variables that aren't defined anywhere.
- `.env*` files are Turborepo `inputs` for `build` and `lint`, so changing a value invalidates the cache.
- If a variable will come from the shell or CI instead of a file, add it to `env` on the `build` task in
  `turbo.json` — Turborepo's strict mode filters out undeclared shell variables.
