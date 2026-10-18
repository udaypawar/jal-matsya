"use client"

import * as React from "react"
import { SearchIcon } from "lucide-react"

import { Badge } from "@jal-matsya/ui/components/badge"
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@jal-matsya/ui/components/empty"
import { InputGroup, InputGroupAddon, InputGroupInput } from "@jal-matsya/ui/components/input-group"
import { ScrollArea } from "@jal-matsya/ui/components/scroll-area"
import { cn } from "@jal-matsya/ui/lib/utils"

import { categories, showcase, type ShowcaseEntry } from "./registry"

export function Showcase() {
  const [query, setQuery] = React.useState("")

  const filtered = React.useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return showcase
    return showcase.filter((entry) =>
      [entry.title, entry.slug, entry.category].some((value) => value.toLowerCase().includes(q))
    )
  }, [query])

  const groups = categories
    .map((category) => ({
      category,
      entries: filtered.filter((entry) => entry.category === category),
    }))
    .filter((group) => group.entries.length > 0)

  return (
    <div className="grid gap-8 lg:grid-cols-[220px_minmax(0,1fr)]">
      <aside className="lg:sticky lg:top-20 lg:h-[calc(100svh-6rem)]">
        <InputGroup>
          <InputGroupAddon>
            <SearchIcon />
          </InputGroupAddon>
          <InputGroupInput
            placeholder="Search components…"
            aria-label="Search components"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </InputGroup>
        <ScrollArea className="mt-4 hidden h-[calc(100%-3.5rem)] lg:block">
          <nav aria-label="Components" className="flex flex-col gap-5 pr-3 pb-8">
            {groups.map(({ category, entries }) => (
              <div key={category}>
                <p className="mb-1.5 text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                  {category}
                </p>
                <ul className="flex flex-col">
                  {entries.map((entry) => (
                    <li key={entry.slug}>
                      <a
                        href={`#${entry.slug}`}
                        className="block rounded-md px-2 py-1 text-sm text-foreground/80 transition-colors hover:bg-accent hover:text-accent-foreground"
                      >
                        {entry.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </ScrollArea>
      </aside>

      <div className="flex min-w-0 flex-col gap-14">
        {groups.length === 0 && (
          <Empty className="border">
            <EmptyHeader>
              <EmptyMedia variant="icon">
                <SearchIcon />
              </EmptyMedia>
              <EmptyTitle>No components found</EmptyTitle>
              <EmptyDescription>Nothing matches “{query}”. Try another name.</EmptyDescription>
            </EmptyHeader>
          </Empty>
        )}
        {groups.map(({ category, entries }) => (
          <section
            key={category}
            aria-labelledby={`category-${category}`}
            className="flex flex-col gap-10"
          >
            <h2
              id={`category-${category}`}
              className="border-b pb-2 text-xl font-semibold tracking-tight"
            >
              {category}
            </h2>
            {entries.map((entry) => (
              <ShowcaseSection key={entry.slug} entry={entry} />
            ))}
          </section>
        ))}
      </div>
    </div>
  )
}

function ShowcaseSection({ entry }: { entry: ShowcaseEntry }) {
  const { Demo } = entry

  return (
    <article id={entry.slug} className="flex scroll-mt-20 flex-col gap-3">
      <header className="flex flex-wrap items-center gap-2">
        <h3 className="text-lg font-medium">
          <a href={`#${entry.slug}`} className="hover:underline">
            {entry.title}
          </a>
        </h3>
        <Badge variant="outline" className="font-mono text-xs">
          @jal-matsya/ui/components/{entry.slug}
        </Badge>
      </header>
      <p className="text-sm text-muted-foreground">{entry.description}</p>
      <div
        className={cn(
          "flex min-h-48 w-full items-center justify-center rounded-xl border bg-card p-4 sm:p-10",
          entry.wide && "*:w-full"
        )}
      >
        <Demo />
      </div>
    </article>
  )
}
