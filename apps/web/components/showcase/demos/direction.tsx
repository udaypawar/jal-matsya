"use client"

import * as React from "react"

import { Button } from "@jal-matsya/ui/components/button"
import { DirectionProvider } from "@jal-matsya/ui/components/direction"
import { ToggleGroup, ToggleGroupItem } from "@jal-matsya/ui/components/toggle-group"

export default function DirectionDemo() {
  const [dir, setDir] = React.useState<"ltr" | "rtl">("rtl")

  return (
    <div className="flex w-full max-w-md flex-col items-center gap-4">
      <ToggleGroup
        type="single"
        variant="outline"
        value={dir}
        onValueChange={(value) => value && setDir(value as "ltr" | "rtl")}
      >
        <ToggleGroupItem value="ltr">LTR</ToggleGroupItem>
        <ToggleGroupItem value="rtl">RTL</ToggleGroupItem>
      </ToggleGroup>
      <DirectionProvider dir={dir}>
        <div dir={dir} className="flex w-full items-center gap-2 rounded-lg border p-4">
          <span className="text-sm font-medium">
            {dir === "rtl" ? "مرحبا بالعالم" : "Hello world"}
          </span>
          <Button size="sm" className="ms-auto">
            {dir === "rtl" ? "إرسال" : "Send"}
          </Button>
        </div>
      </DirectionProvider>
    </div>
  )
}
