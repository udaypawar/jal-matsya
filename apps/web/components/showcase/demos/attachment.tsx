"use client"

import { FileTextIcon, ImageIcon, TriangleAlertIcon, XIcon } from "lucide-react"

import {
  Attachment,
  AttachmentAction,
  AttachmentActions,
  AttachmentContent,
  AttachmentDescription,
  AttachmentGroup,
  AttachmentMedia,
  AttachmentTitle,
} from "@jal-matsya/ui/components/attachment"
import { Spinner } from "@jal-matsya/ui/components/spinner"

const files = [
  { name: "quarterly-report.pdf", meta: "PDF · 2.4 MB", state: "done", icon: <FileTextIcon /> },
  { name: "hero-banner.png", meta: "Uploading… 64%", state: "uploading", icon: <Spinner /> },
  { name: "dataset.csv", meta: "Upload failed", state: "error", icon: <TriangleAlertIcon /> },
  { name: "logo.svg", meta: "SVG · 12 KB", state: "done", icon: <ImageIcon /> },
] as const

export default function AttachmentDemo() {
  return (
    <AttachmentGroup className="w-full max-w-xl">
      {files.map((file) => (
        <Attachment key={file.name} state={file.state}>
          <AttachmentMedia>{file.icon}</AttachmentMedia>
          <AttachmentContent>
            <AttachmentTitle>{file.name}</AttachmentTitle>
            <AttachmentDescription>{file.meta}</AttachmentDescription>
          </AttachmentContent>
          <AttachmentActions>
            <AttachmentAction aria-label={`Remove ${file.name}`}>
              <XIcon />
            </AttachmentAction>
          </AttachmentActions>
        </Attachment>
      ))}
    </AttachmentGroup>
  )
}
