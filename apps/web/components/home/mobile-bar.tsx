"use client"

import Link from "next/link"
import { House, LayoutGrid, MessageCircle, Phone } from "lucide-react"

import { site } from "./content"
import { EnquireLink } from "./enquiry"

const tabClass =
  "flex flex-col items-center gap-0.5 py-2 text-[11px] font-medium text-muted-foreground hover:text-primary"

/** Floating WhatsApp button (desktop) + mobile bottom bar with call and WhatsApp. */
export function MobileBar() {
  return (
    <>
      <EnquireLink
        aria-label="Enquire on WhatsApp"
        className="fixed right-6 bottom-6 z-40 hidden size-14 place-items-center rounded-full bg-[#25d366] text-white shadow-lg transition hover:scale-105 lg:grid"
      >
        <MessageCircle className="size-6" />
      </EnquireLink>

      <nav
        aria-label="Quick links"
        className="fixed inset-x-0 bottom-0 z-40 border-t bg-background/95 pb-[env(safe-area-inset-bottom)] backdrop-blur lg:hidden"
      >
        <ul className="grid grid-cols-[1fr_1fr_1fr_1.6fr] items-center">
          <li>
            <Link href="/" className={tabClass}>
              <House className="size-5" /> Home
            </Link>
          </li>
          <li>
            <a href="#shop" className={tabClass}>
              <LayoutGrid className="size-5" /> Categories
            </a>
          </li>
          <li>
            <a href={site.phoneHref} className={tabClass}>
              <Phone className="size-5" /> Call
            </a>
          </li>
          <li className="px-2">
            <EnquireLink className="flex h-11 items-center justify-center gap-2 rounded-full bg-[#25d366] text-sm font-semibold text-white">
              <MessageCircle className="size-5" /> WhatsApp
            </EnquireLink>
          </li>
        </ul>
      </nav>
    </>
  )
}
