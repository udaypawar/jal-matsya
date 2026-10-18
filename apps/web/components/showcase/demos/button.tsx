"use client"

import { ArrowUpIcon } from "lucide-react"

import { Button } from "@jal-matsya/ui/components/button"

export default function ButtonDemo() {
  return (
    <div className="flex flex-wrap items-center gap-2 md:flex-row">
      <Button>Button</Button>
      <Button variant="charcoal">Charcoal</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="link">Link</Button>
      <Button disabled>Disabled</Button>
      <Button size="icon" aria-label="Submit">
        <ArrowUpIcon />
      </Button>
    </div>
  )
}
