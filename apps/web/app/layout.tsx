import type { Metadata, Viewport } from "next"
import { Geist_Mono, Poppins } from "next/font/google"

import "@jal-matsya/ui/globals.css"
import { Providers } from "@/components/providers"

// Poppins for both body and headings (the storefront uses one family throughout).
const fontSans = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
})
const fontMono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" })

export const metadata: Metadata = {
  title: "Jal Matsya · Fresh fish delivered in Thane",
  description:
    "Fresh surmai, pomfret, prawns and more, cleaned and cut your way and delivered to your doorstep in Thane. Order on WhatsApp: 98332 08788.",
}

export const viewport: Viewport = {
  themeColor: "#074961",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${fontSans.variable} ${fontMono.variable} font-sans`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
