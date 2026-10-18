"use client"

import { ThemeProvider } from "next-themes"
import { Toaster } from "@jal-matsya/ui/components/sonner"
import { TooltipProvider } from "@jal-matsya/ui/components/tooltip"

// next-themes injects an inline <script> that applies the theme before first paint. It runs
// from the server HTML; on the client, React 19 warns about rendering any <script>. Marking it
// as a non-executable data block on the client silences that without changing behaviour.
const themeScriptProps =
  typeof window === "undefined" ? undefined : ({ type: "application/json" } as const)

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      scriptProps={themeScriptProps}
    >
      <TooltipProvider delayDuration={200}>
        {children}
        <Toaster richColors closeButton />
      </TooltipProvider>
    </ThemeProvider>
  )
}
