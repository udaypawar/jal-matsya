"use client"

import {
  Bubble,
  BubbleContent,
  BubbleGroup,
  BubbleReactions,
} from "@jal-matsya/ui/components/bubble"

export default function BubbleDemo() {
  return (
    <BubbleGroup className="w-full max-w-md gap-3">
      <Bubble variant="muted">
        <BubbleContent>Hey! Did you get a chance to look at the new design tokens?</BubbleContent>
      </Bubble>
      <Bubble align="end">
        <BubbleContent>Yes — the dark theme looks great 🎉</BubbleContent>
        <BubbleReactions>👍 2</BubbleReactions>
      </Bubble>
      <Bubble variant="tinted">
        <BubbleContent>Tinted variant, derived from the primary token.</BubbleContent>
      </Bubble>
      <Bubble variant="outline" align="end">
        <BubbleContent>Outline variant</BubbleContent>
      </Bubble>
      <Bubble variant="destructive">
        <BubbleContent>Message failed to send.</BubbleContent>
      </Bubble>
    </BubbleGroup>
  )
}
