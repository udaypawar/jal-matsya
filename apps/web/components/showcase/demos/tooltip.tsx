"use client"

import { Button } from "@jal-matsya/ui/components/button"
import { Tooltip, TooltipContent, TooltipTrigger } from "@jal-matsya/ui/components/tooltip"

export default function TooltipDemo() {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">Hover</Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Add to library</p>
      </TooltipContent>
    </Tooltip>
  )
}
