"use client"

import {
  CircleCheckIcon,
  InfoIcon,
  Loader2Icon,
  OctagonXIcon,
  TriangleAlertIcon,
} from "lucide-react"
import { useTheme } from "next-themes"
import { Toaster as Sonner, type ToasterProps } from "sonner"

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      richColors
      icons={{
        success: <CircleCheckIcon className="size-4" />,
        info: <InfoIcon className="size-4" />,
        warning: <TriangleAlertIcon className="size-4" />,
        error: <OctagonXIcon className="size-4" />,
        loading: <Loader2Icon className="size-4 animate-spin" />,
      }}
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)",
          "--border-radius": "var(--radius)",
          "--success-bg": "var(--success-subtle)",
          "--success-text": "var(--success)",
          "--success-border": "color-mix(in oklab, var(--success) 30%, transparent)",
          "--warning-bg": "var(--warning-subtle)",
          "--warning-text": "var(--warning-foreground)",
          "--warning-border": "color-mix(in oklab, var(--warning) 40%, transparent)",
          "--error-bg": "var(--destructive-subtle)",
          "--error-text": "var(--destructive)",
          "--error-border": "color-mix(in oklab, var(--destructive) 30%, transparent)",
          "--info-bg": "var(--info-subtle)",
          "--info-text": "var(--info)",
          "--info-border": "color-mix(in oklab, var(--info) 30%, transparent)",
        } as React.CSSProperties
      }
      {...props}
    />
  )
}

export { Toaster }
