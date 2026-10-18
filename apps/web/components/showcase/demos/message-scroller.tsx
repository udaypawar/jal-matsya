"use client"

import { Bubble, BubbleContent } from "@jal-matsya/ui/components/bubble"
import { Message, MessageContent } from "@jal-matsya/ui/components/message"
import {
  MessageScroller,
  MessageScrollerButton,
  MessageScrollerContent,
  MessageScrollerItem,
  MessageScrollerProvider,
  MessageScrollerViewport,
} from "@jal-matsya/ui/components/message-scroller"

const messages = Array.from({ length: 16 }, (_, i) => ({
  id: `m${i + 1}`,
  mine: i % 3 === 1,
  text:
    i % 3 === 1
      ? `Reply #${i + 1} — scroll up to see history.`
      : `Message #${i + 1}: the scroller keeps the latest message pinned to the bottom.`,
}))

export default function MessageScrollerDemo() {
  return (
    <div className="h-80 w-full max-w-md rounded-lg border">
      <MessageScrollerProvider defaultScrollPosition="end">
        <MessageScroller>
          <MessageScrollerViewport aria-label="Conversation">
            <MessageScrollerContent className="gap-3 p-4">
              {messages.map((m) => (
                <MessageScrollerItem key={m.id} messageId={m.id}>
                  <Message align={m.mine ? "end" : "start"}>
                    <MessageContent>
                      <Bubble
                        variant={m.mine ? "default" : "muted"}
                        align={m.mine ? "end" : "start"}
                      >
                        <BubbleContent>{m.text}</BubbleContent>
                      </Bubble>
                    </MessageContent>
                  </Message>
                </MessageScrollerItem>
              ))}
            </MessageScrollerContent>
          </MessageScrollerViewport>
          <MessageScrollerButton />
        </MessageScroller>
      </MessageScrollerProvider>
    </div>
  )
}
