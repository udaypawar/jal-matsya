"use client"

import Link from "next/link"
import { Menu, MessageCircle, Phone } from "lucide-react"

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@jal-matsya/ui/components/sheet"

import { announcement, categories, navLinks, site, socials } from "./content"
import { EnquireLink } from "./enquiry"

export function Logo({ inverted = false }: { inverted?: boolean }) {
  return (
    <Link href="/" className="flex shrink-0 items-center gap-2" aria-label={`${site.name} home`}>
      <span
        className={
          inverted
            ? "grid size-9 place-items-center rounded-full bg-white text-sm font-bold text-[#074961]"
            : "grid size-9 place-items-center rounded-full bg-primary text-sm font-bold text-primary-foreground"
        }
      >
        JM
      </span>
      <span className="leading-tight">
        <span
          className={`block text-lg font-semibold tracking-tight ${inverted ? "text-white" : "text-primary"}`}
        >
          {site.name}
        </span>
        <span
          className={`block text-[11px] tracking-wide uppercase ${inverted ? "text-white/70" : "text-muted-foreground"}`}
        >
          {site.tagline}
        </span>
      </span>
    </Link>
  )
}

function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button
          type="button"
          aria-label="Open menu"
          className="grid size-10 place-items-center rounded-full text-primary hover:bg-accent lg:hidden"
        >
          <Menu className="size-6" />
        </button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[85vw] max-w-sm gap-0 overflow-y-auto p-0">
        <SheetHeader className="border-b bg-primary p-4 text-primary-foreground">
          <SheetTitle className="text-primary-foreground">Menu</SheetTitle>
          <SheetDescription className="text-primary-foreground/80">
            Browse by category
          </SheetDescription>
        </SheetHeader>
        <nav aria-label="Mobile">
          <ul className="divide-y border-b">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="block px-5 py-3.5 text-sm font-medium tracking-wide text-foreground uppercase hover:bg-accent"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="space-y-3 p-5 text-sm">
          <EnquireLink className="flex h-11 items-center justify-center gap-2 rounded-full bg-success font-semibold text-success-foreground">
            <MessageCircle className="size-4" /> Enquire on WhatsApp
          </EnquireLink>
          <a
            href={site.phoneHref}
            className="flex h-11 items-center justify-center gap-2 rounded-full border-2 border-primary font-semibold text-primary"
          >
            <Phone className="size-4" /> Call {site.phone}
          </a>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 bg-background shadow-sm lg:static">
      {/* Top bar */}
      <div className="bg-primary-hover text-xs text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2">
          <a href={site.phoneHref} className="hidden shrink-0 items-center gap-1.5 md:flex">
            <Phone className="size-3.5" /> {site.phone}
          </a>
          <p className="flex-1 truncate text-center md:flex-none">{announcement}</p>
          <div className="hidden shrink-0 items-center gap-4 md:flex">
            {socials.map((s) => (
              <a key={s.label} href={s.href} className="text-white/80 hover:text-white">
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main row */}
      <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-3 lg:py-5">
        <MobileMenu />
        <Logo />
        <div className="ml-auto flex items-center gap-2 sm:gap-3">
          <a
            href={site.phoneHref}
            aria-label={`Call ${site.phone}`}
            className="grid size-10 place-items-center rounded-full border-2 border-primary text-primary hover:bg-accent md:flex md:h-11 md:w-auto md:items-center md:gap-2 md:px-5 md:text-sm md:font-semibold"
          >
            <Phone className="size-4" />
            <span className="hidden md:inline">{site.phone}</span>
          </a>
          <EnquireLink
            aria-label="Enquire on WhatsApp"
            className="grid size-10 place-items-center rounded-full bg-success text-success-foreground hover:bg-success/90 md:flex md:h-11 md:w-auto md:items-center md:gap-2 md:px-5 md:text-sm md:font-semibold"
          >
            <MessageCircle className="size-4" />
            <span className="hidden md:inline">Enquire on WhatsApp</span>
          </EnquireLink>
        </div>
      </div>

      {/* Category nav (desktop) */}
      <nav aria-label="Categories" className="hidden bg-primary lg:block">
        <ul className="mx-auto flex max-w-7xl items-center gap-1 overflow-x-auto px-4">
          {navLinks.map((l) => (
            <li key={l.href} className="shrink-0">
              <a
                href={l.href}
                className="block px-3 py-3.5 text-[13px] font-medium tracking-wide whitespace-nowrap text-primary-foreground uppercase transition-colors hover:bg-white/10"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Category chips (mobile / tablet) */}
      <nav aria-label="Categories" className="border-t lg:hidden">
        <ul className="flex [scrollbar-width:none] gap-2 overflow-x-auto px-4 py-2">
          {categories.map((c) => (
            <li key={c.slug} className="shrink-0">
              <a
                href={`#${c.slug}`}
                className="block rounded-full bg-secondary px-3 py-1.5 text-xs font-medium text-secondary-foreground"
              >
                {c.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
