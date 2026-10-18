"use client"

import * as React from "react"

import { Calendar } from "@jal-matsya/ui/components/calendar"
import { Skeleton } from "@jal-matsya/ui/components/skeleton"
import { useIsClient } from "@jal-matsya/ui/hooks/use-is-client"

export default function CalendarDemo() {
  const [date, setDate] = React.useState<Date | undefined>(() => new Date())
  // "Today" depends on the viewer's timezone, which the server can't know — render
  // the calendar in the browser only to avoid a hydration mismatch.
  const isClient = useIsClient()

  if (!isClient) return <Skeleton className="h-[293px] w-[250px] rounded-md" />

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border shadow-sm"
      captionLayout="dropdown"
    />
  )
}
