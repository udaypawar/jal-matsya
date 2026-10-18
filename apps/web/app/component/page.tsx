import type { Metadata } from "next"
import Link from "next/link"

import { Showcase } from "@/components/showcase/showcase"
import { showcase } from "@/components/showcase/registry"
import { ThemeToggle } from "@/components/theme-toggle"

export const metadata: Metadata = {
  title: "Components · Jal Matsya",
  description: "Every component in the @jal-matsya/ui design system, with live examples.",
}

export default function ComponentsPage() {
  return (
    <>
      <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur">
        <div className="mx-auto flex h-14 max-w-7xl items-center gap-4 px-4">
          <Link href="/" className="font-semibold tracking-tight">
            Jal Matsya
          </Link>
          <span className="text-sm text-muted-foreground">Design system</span>
          <div className="ml-auto">
            <ThemeToggle />
          </div>
        </div>
      </header>
      <main className="mx-auto max-w-7xl px-4 py-10">
        <div className="mb-10 max-w-2xl">
          <h1 className="text-3xl font-semibold tracking-tight">Components</h1>
          <p className="mt-2 text-muted-foreground">
            All {showcase.length} components in <code className="font-mono">@jal-matsya/ui</code>,
            rendered with the shared design tokens. Switch the theme in the top-right to preview
            light and dark.
          </p>
        </div>
        <Showcase />
      </main>
    </>
  )
}
