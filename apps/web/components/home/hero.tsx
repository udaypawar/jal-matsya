"use client"

import * as React from "react"
import { MessageCircle } from "lucide-react"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@jal-matsya/ui/components/carousel"
import { cn } from "@jal-matsya/ui/lib/utils"

import { Art } from "./art"
import { promos, slides } from "./content"
import { EnquireLink } from "./enquiry"

const AUTOPLAY_MS = 5000

export function Hero() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)

  React.useEffect(() => {
    if (!api) return
    const sync = () => setCurrent(api.selectedScrollSnap())
    api.on("select", sync)

    // Autoplay, paused for users who prefer reduced motion.
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const timer = reduce ? undefined : window.setInterval(() => api.scrollNext(), AUTOPLAY_MS)
    return () => {
      api.off("select", sync)
      window.clearInterval(timer)
    }
  }, [api])

  return (
    <section aria-label="Featured" className="mx-auto max-w-7xl px-4 pt-4 lg:pt-6">
      <Carousel setApi={setApi} opts={{ loop: true }} className="overflow-hidden rounded-2xl">
        <CarouselContent className="ml-0">
          {slides.map((s, i) => (
            <CarouselItem
              key={s.title}
              className="pl-0"
              aria-label={`Slide ${i + 1} of ${slides.length}`}
            >
              {/* Fixed dark teal backdrop (not theme tokens) so white text reads in both modes. */}
              <div className="relative grid min-h-[22rem] items-center overflow-hidden bg-linear-to-br from-[#053445] via-[#074961] to-[#0b6a8a] text-white sm:min-h-[26rem] md:grid-cols-2">
                <div className="relative z-10 space-y-4 p-6 sm:p-10 lg:p-14">
                  <p className="inline-block rounded-full bg-[#fbbc34] px-3 py-1 text-xs font-semibold tracking-wide text-[#242424] uppercase">
                    {s.eyebrow}
                  </p>
                  <h2 className="text-3xl leading-tight font-semibold sm:text-4xl lg:text-5xl">
                    {s.title}
                  </h2>
                  <p className="max-w-md text-sm text-white/85 sm:text-base">{s.body}</p>
                  <EnquireLink
                    message={s.cta.message}
                    className="inline-flex h-11 items-center gap-2 rounded-full bg-white px-6 text-sm font-semibold text-[#074961] transition hover:bg-[#fbbc34] hover:text-[#242424]"
                  >
                    <MessageCircle className="size-4" /> {s.cta.label}
                  </EnquireLink>
                </div>
                <Art
                  image={s.image}
                  alt=""
                  tone={s.tone}
                  icon={s.icon}
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="absolute inset-y-0 right-0 w-full opacity-30 md:relative md:h-full md:w-full md:[mask-image:linear-gradient(to_right,transparent,black_30%)] md:opacity-100"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute inset-x-0 bottom-4 z-10 flex justify-center gap-2">
          {slides.map((s, i) => (
            <button
              key={s.title}
              type="button"
              onClick={() => api?.scrollTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={current === i}
              className={cn(
                "h-2 rounded-full bg-white/50 transition-all",
                current === i ? "w-6 bg-white" : "w-2"
              )}
            />
          ))}
        </div>
      </Carousel>

      <div className="mt-4 grid gap-4 sm:grid-cols-3">
        {promos.map((p) => (
          <EnquireLink
            key={p.title}
            message={p.message}
            className="group relative flex min-h-32 items-center overflow-hidden rounded-xl border bg-card"
          >
            <div className="relative z-10 flex-1 p-5">
              <p className="font-semibold text-foreground group-hover:text-primary">{p.title}</p>
              <p className="mt-1 text-sm text-muted-foreground">{p.note}</p>
              <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold tracking-wide text-primary uppercase">
                <MessageCircle className="size-3.5" /> Enquire now
              </span>
            </div>
            <Art
              image={p.image}
              alt=""
              sizes="160px"
              tone={p.tone}
              icon={p.icon}
              className="h-full w-28 self-stretch rounded-l-full sm:w-24 lg:w-32"
            />
          </EnquireLink>
        ))}
      </div>
    </section>
  )
}
