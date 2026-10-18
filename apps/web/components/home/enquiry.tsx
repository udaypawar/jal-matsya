"use client"

import * as React from "react"

import { site } from "./content"

/*
 * Enquiries go to WhatsApp — there is no online checkout.
 *
 * The link's href is the universal https://wa.me URL, which works everywhere without
 * JavaScript (desktop opens WhatsApp Web / the desktop app). On phones the click is
 * intercepted: we try the app's whatsapp:// deep link, and if the page is still in
 * the foreground shortly after (app not installed), fall back to the phone dialer.
 * Browsers can't report whether an app is installed, so this timeout is the standard
 * workaround. On iOS Safari a "cannot open page" notice may flash before the dialer.
 */

const FALLBACK_MS = 1500

export function whatsappWebUrl(message: string) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`
}

function isPhone() {
  return /Android|iPhone|iPad|iPod/i.test(navigator.userAgent)
}

function openOnPhone(message: string) {
  let left = false
  const markLeft = () => {
    left = true
  }
  document.addEventListener("visibilitychange", markLeft)
  window.addEventListener("pagehide", markLeft)
  window.addEventListener("blur", markLeft)

  window.location.href = `whatsapp://send?phone=${site.whatsappNumber}&text=${encodeURIComponent(message)}`

  window.setTimeout(() => {
    document.removeEventListener("visibilitychange", markLeft)
    window.removeEventListener("pagehide", markLeft)
    window.removeEventListener("blur", markLeft)
    if (!left && document.visibilityState === "visible") window.location.href = site.phoneHref
  }, FALLBACK_MS)
}

/** Default greeting used when no specific product is being asked about. */
export const generalMessage = `Hi ${site.name}, I'd like to know what fresh fish is available for tomorrow and the prices.`

export function productMessage(name: string, pack: string) {
  return `Hi ${site.name}, I'd like to order ${name} (${pack}). Is it available for tomorrow?`
}

/** Anchor that starts a WhatsApp enquiry (dialer fallback on phones without WhatsApp). */
export function EnquireLink({
  message = generalMessage,
  onClick,
  ...props
}: Omit<React.ComponentProps<"a">, "href" | "target"> & { message?: string }) {
  return (
    <a
      href={whatsappWebUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => {
        onClick?.(e)
        if (e.defaultPrevented || !isPhone()) return
        e.preventDefault()
        openOnPhone(message)
      }}
      {...props}
    />
  )
}

export function formatPrice(value: number) {
  // Fixed grouping (not toLocaleString) so server and client render identically.
  const s = String(Math.round(value))
  const last3 = s.slice(-3)
  const rest = s.slice(0, -3).replace(/\B(?=(\d{2})+(?!\d))/g, ",")
  return `₹${rest ? `${rest},${last3}` : last3}`
}
