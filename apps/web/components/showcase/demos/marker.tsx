"use client"

import { CheckCircle2Icon, ClockIcon } from "lucide-react"

import { Marker, MarkerContent, MarkerIcon } from "@jal-matsya/ui/components/marker"

export default function MarkerDemo() {
  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <Marker variant="separator">
        <MarkerContent>Today</MarkerContent>
      </Marker>
      <Marker>
        <MarkerIcon>
          <CheckCircle2Icon />
        </MarkerIcon>
        <MarkerContent>Ticket resolved by Alex</MarkerContent>
      </Marker>
      <Marker variant="border">
        <MarkerIcon>
          <ClockIcon />
        </MarkerIcon>
        <MarkerContent>
          Conversation paused · <a href="#marker">resume</a>
        </MarkerContent>
      </Marker>
    </div>
  )
}
