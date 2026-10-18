"use client"

import { Avatar, AvatarFallback } from "@jal-matsya/ui/components/avatar"
import { Bubble, BubbleContent } from "@jal-matsya/ui/components/bubble"
import {
  Message,
  MessageAvatar,
  MessageContent,
  MessageFooter,
  MessageGroup,
  MessageHeader,
} from "@jal-matsya/ui/components/message"

export default function MessageDemo() {
  return (
    <MessageGroup className="w-full max-w-md gap-4">
      <Message>
        <MessageAvatar>
          <Avatar>
            <AvatarFallback>SA</AvatarFallback>
          </Avatar>
        </MessageAvatar>
        <MessageContent>
          <MessageHeader>Sam</MessageHeader>
          <Bubble variant="muted">
            <BubbleContent>Can you share the launch checklist?</BubbleContent>
          </Bubble>
          <MessageFooter>10:24 AM</MessageFooter>
        </MessageContent>
      </Message>
      <Message align="end">
        <MessageContent>
          <Bubble align="end">
            <BubbleContent>Sure, sending it over now.</BubbleContent>
          </Bubble>
          <MessageFooter>Read · 10:25 AM</MessageFooter>
        </MessageContent>
      </Message>
    </MessageGroup>
  )
}
