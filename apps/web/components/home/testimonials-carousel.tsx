"use client"

import * as React from "react"
import { Quote } from "lucide-react"
import { A11y, Autoplay, Keyboard } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"

type Testimonial = { name: string; quote: string }

function subscribeToReducedMotion(onChange: () => void) {
  const query = window.matchMedia("(prefers-reduced-motion: reduce)")
  query.addEventListener("change", onChange)
  return () => query.removeEventListener("change", onChange)
}

/** Swiper's loop needs comfortably more slides than fit on screen; repeat short lists. */
const MIN_LOOP_SLIDES = 10

/** Time to glide one card's width; lower is faster (~30 px/s at 12 s). */
const GLIDE_MS = 12000

/**
 * Continuously scrolling customer feedback (marquee style): autoplay with no delay and
 * a long linear transition, so slides glide instead of stepping. Pauses while hovered,
 * and stays still (swipe/drag only) for reduced-motion visitors.
 */
export function TestimonialsCarousel({ items }: { items: Testimonial[] }) {
  const reducedMotion = React.useSyncExternalStore(
    subscribeToReducedMotion,
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    () => false
  )

  const repeats = Math.max(1, Math.ceil(MIN_LOOP_SLIDES / items.length))
  const slides = Array.from({ length: repeats }, (_, r) =>
    items.map((t) => ({ ...t, key: `${r}-${t.name}` }))
  ).flat()

  return (
    <Swiper
      // Remount when the preference flips so autoplay starts/stops cleanly.
      key={reducedMotion ? "static" : "auto"}
      modules={[Autoplay, A11y, Keyboard]}
      slidesPerView="auto"
      spaceBetween={16}
      loop
      grabCursor
      keyboard={{ enabled: true }}
      speed={reducedMotion ? 300 : GLIDE_MS}
      autoplay={
        reducedMotion ? false : { delay: 0, disableOnInteraction: false, pauseOnMouseEnter: true }
      }
      a11y={{
        containerMessage: "Customer feedback",
        slideLabelMessage: "{{index}} of {{slidesLength}}",
      }}
      // Linear easing keeps the glide at a constant speed between slides.
      className="[&_.swiper-wrapper]:ease-linear!"
    >
      {slides.map((t) => (
        <SwiperSlide key={t.key} className="h-auto! w-[280px]! sm:w-[340px]!">
          <figure className="flex h-full flex-col rounded-xl border bg-card p-6">
            <Quote className="size-8 text-emphasis" aria-hidden />
            <blockquote className="mt-3 flex-1 text-sm text-foreground-secondary">
              “{t.quote}”
            </blockquote>
            <figcaption className="mt-5 flex items-center gap-3">
              <span className="grid size-10 place-items-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                {t.name.charAt(0)}
              </span>
              <span className="text-sm font-semibold text-foreground">{t.name}</span>
            </figcaption>
          </figure>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
