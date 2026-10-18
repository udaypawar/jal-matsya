"use client"

import { Checkbox } from "@jal-matsya/ui/components/checkbox"
import { Label } from "@jal-matsya/ui/components/label"

export default function LabelDemo() {
  return (
    <div>
      <div className="flex items-center space-x-2">
        <Checkbox id="terms" />
        <Label htmlFor="terms">Accept terms and conditions</Label>
      </div>
    </div>
  )
}
