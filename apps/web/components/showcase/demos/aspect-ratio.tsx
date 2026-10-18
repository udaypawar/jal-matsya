"use client"

import { AspectRatio } from "@jal-matsya/ui/components/aspect-ratio"

export default function AspectRatioDemo() {
  return (
    <div className="w-full max-w-md">
      <AspectRatio
        ratio={16 / 9}
        className="flex items-center justify-center rounded-lg bg-gradient-to-br from-chart-1 via-chart-2 to-chart-3 text-sm font-medium text-white"
      >
        16 / 9
      </AspectRatio>
    </div>
  )
}
