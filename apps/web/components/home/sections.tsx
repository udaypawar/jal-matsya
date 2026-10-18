"use client"

import * as React from "react"
import Image from "next/image"
import { MessageCircle, Play } from "lucide-react"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@jal-matsya/ui/components/carousel"
import { cn } from "@jal-matsya/ui/lib/utils"

import { Art } from "./art"
import {
  about,
  bestSellerIds,
  categories,
  features,
  follow,
  process,
  productById,
  productsIn,
  socials,
  stats,
  terms,
  testimonials,
  videos,
  whyUs,
  type Product,
} from "./content"
import { EnquireLink } from "./enquiry"
import { ProductCard } from "./product-card"
import { TestimonialsCarousel } from "./testimonials-carousel"

/* Shared heading conventions: small uppercase eyebrow + medium-weight title. */
export const headingClass = "text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"

export function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <p className={cn("text-xs font-semibold tracking-[0.18em] text-primary uppercase", className)}>
      {children}
    </p>
  )
}

function SectionHeading({
  eyebrow,
  title,
  center = false,
}: {
  eyebrow?: string
  title: string
  center?: boolean
}) {
  return (
    <div
      className={cn(
        "mb-6 flex flex-wrap items-end justify-between gap-3 sm:mb-8",
        center && "flex-col items-center text-center"
      )}
    >
      <div className="space-y-2">
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
        <h2 className={headingClass}>{title}</h2>
        {/* Short underline accent under the title */}
        <span className={cn("block h-1 w-12 rounded-full bg-emphasis", center && "mx-auto")} />
      </div>
    </div>
  )
}

function Container({
  id,
  className,
  children,
  band = false,
}: {
  id?: string
  className?: string
  children: React.ReactNode
  band?: boolean
}) {
  return (
    <section
      id={id}
      className={cn("scroll-mt-40 py-10 sm:py-14", band && "bg-primary-subtle", className)}
    >
      <div className="mx-auto max-w-7xl px-4">{children}</div>
    </section>
  )
}

/** Horizontal product carousel; swipeable on touch, arrows on desktop. */
function ProductRow({ items }: { items: Product[] }) {
  return (
    <Carousel opts={{ align: "start" }} className="relative">
      <CarouselContent className="-ml-3 sm:-ml-4">
        {items.map((p) => (
          <CarouselItem
            key={p.id}
            className="basis-1/2 pl-3 sm:basis-1/3 sm:pl-4 lg:basis-1/4 xl:basis-1/5"
          >
            <ProductCard product={p} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="-left-3 hidden bg-background lg:inline-flex" />
      <CarouselNext className="-right-3 hidden bg-background lg:inline-flex" />
    </Carousel>
  )
}

export function TrustStrip() {
  return (
    <section aria-label="Why shop with us" className="mx-auto max-w-7xl px-4 pt-6 sm:pt-8">
      <ul className="grid grid-cols-2 gap-3 rounded-2xl border bg-card p-4 sm:gap-4 sm:p-6 lg:grid-cols-4">
        {features.map(({ icon: Icon, title, note }) => (
          <li key={title} className="flex items-center gap-3">
            <span className="grid size-11 shrink-0 place-items-center rounded-full bg-primary-subtle text-primary sm:size-12">
              <Icon className="size-5 sm:size-6" />
            </span>
            <span className="min-w-0">
              <span className="block text-sm font-semibold text-foreground">{title}</span>
              <span className="block text-xs text-muted-foreground">{note}</span>
            </span>
          </li>
        ))}
      </ul>
    </section>
  )
}

export function BestSellers() {
  const items = bestSellerIds.map(productById).filter((p): p is Product => Boolean(p))
  return (
    <Container id="best-sellers">
      <SectionHeading eyebrow="Our offers" title="Popular picks this week" />
      <ProductRow items={items} />
    </Container>
  )
}

export function Categories() {
  return (
    <Container id="shop" band>
      <SectionHeading eyebrow="Shop by category" title="Product categories" center />
      <ul className="mx-auto grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
        {categories.map((c) => (
          <li key={c.slug}>
            <a href={`#${c.slug}`} className="group flex flex-col items-center gap-2 text-center">
              <Art
                image={c.image}
                alt=""
                sizes="120px"
                tone={c.tone}
                icon={c.icon}
                className="aspect-square w-full max-w-28 rounded-full ring-4 ring-background transition group-hover:ring-emphasis"
              />
              <span className="text-xs font-semibold text-foreground group-hover:text-primary sm:text-sm">
                {c.name}
              </span>
              <span className="hidden text-xs text-muted-foreground sm:block">{c.blurb}</span>
            </a>
          </li>
        ))}
      </ul>
    </Container>
  )
}

/** One shelf per category, stacked, like a fishmonger's counter. */
export function CategoryShelves() {
  return (
    <>
      {categories.map((c, i) => {
        const items = productsIn(c.slug)
        if (!items.length) return null
        return (
          <Container key={c.slug} id={c.slug} band={i % 2 === 1}>
            <SectionHeading title={c.name} />
            <ProductRow items={items} />
          </Container>
        )
      })}
    </>
  )
}

export function About() {
  return (
    <Container id="about">
      <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
        <Art
          image={about.image}
          alt="Fish sellers at a local market"
          tone="teal"
          className="aspect-[4/3] rounded-2xl"
          sizes="(min-width: 1024px) 50vw, 100vw"
        />
        <div>
          <Eyebrow>{about.eyebrow}</Eyebrow>
          <h2 className={cn(headingClass, "mt-2")}>{about.title}</h2>
          <span className="mt-3 block h-1 w-12 rounded-full bg-emphasis" />
          <div className="mt-5 space-y-4 text-muted-foreground">
            {about.body.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <ul className="mt-6 grid grid-cols-2 gap-4">
            {about.points.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex items-center gap-3 text-sm font-medium text-foreground"
              >
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
                  <Icon className="size-5" />
                </span>
                {label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Container>
  )
}

export function WhyUs() {
  return (
    <Container band>
      <SectionHeading eyebrow={whyUs.eyebrow} title={whyUs.title} center />
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {whyUs.items.map(({ title, body, icon, tone, image }) => (
          <li key={title} className="overflow-hidden rounded-xl border bg-card">
            <Art image={image} alt="" tone={tone} icon={icon} className="aspect-[16/10]" />
            <div className="p-5">
              <h3 className="font-semibold text-foreground">{title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{body}</p>
            </div>
          </li>
        ))}
      </ul>
    </Container>
  )
}

export function Stats() {
  return (
    <section aria-label="Jal Matsya in numbers" className="bg-primary text-primary-foreground">
      <ul className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-10 text-center sm:py-12 lg:grid-cols-4">
        {stats.map((s) => (
          <li key={s.label}>
            <p className="text-3xl font-semibold text-emphasis sm:text-4xl">{s.value}</p>
            <p className="mt-1 text-sm text-primary-foreground/85">{s.label}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

export function Process() {
  return (
    <Container id="how-to-order">
      <SectionHeading eyebrow={process.eyebrow} title={process.title} center />
      <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {process.steps.map(({ title, body, icon: Icon }, i) => (
          <li key={title} className="relative rounded-xl border bg-card p-6">
            <span className="absolute top-4 right-5 text-4xl font-semibold text-primary/10">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="grid size-12 place-items-center rounded-full bg-primary-subtle text-primary">
              <Icon className="size-6" />
            </span>
            <h3 className="mt-4 font-semibold text-foreground">{title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{body}</p>
          </li>
        ))}
      </ol>
    </Container>
  )
}

export function Testimonials() {
  return (
    <section className="scroll-mt-40 overflow-hidden bg-primary-subtle py-10 sm:py-14">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading eyebrow={testimonials.eyebrow} title={testimonials.title} center />
        <TestimonialsCarousel items={testimonials.items} />
      </div>
    </section>
  )
}

/** Click-to-play YouTube embeds: only a thumbnail loads until a video is chosen. */
function Video({ id, index }: { id: string; index: number }) {
  const [playing, setPlaying] = React.useState(false)
  return (
    <div className="relative aspect-video overflow-hidden rounded-xl bg-charcoal">
      {playing ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
          title={`Jal Matsya video ${index + 1}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 size-full"
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label={`Play Jal Matsya video ${index + 1}`}
          className="group absolute inset-0"
        >
          <Image
            src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
            alt=""
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <span className="absolute inset-0 m-auto grid size-14 place-items-center rounded-full bg-[#ff0033] text-white shadow-lg transition group-hover:scale-110">
            <Play className="size-6 fill-current" />
          </span>
        </button>
      )}
    </div>
  )
}

export function Videos() {
  return (
    <Container id="videos">
      <SectionHeading eyebrow={videos.eyebrow} title={videos.title} />
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {videos.ids.map((id, i) => (
          <li key={id}>
            <Video id={id} index={i} />
          </li>
        ))}
      </ul>
      <a
        href={videos.channelHref}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
      >
        <Play className="size-4" /> More on our YouTube channel
      </a>
    </Container>
  )
}

export function Terms() {
  return (
    <Container id="terms" band>
      <SectionHeading eyebrow="Good to know" title="Terms & conditions" center />
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {terms.map(({ title, icon: Icon, items }) => (
          <li key={title} className="rounded-xl border bg-card p-5">
            <h3 className="flex items-center gap-2 font-semibold text-foreground">
              <span className="grid size-9 place-items-center rounded-full bg-primary-subtle text-primary">
                <Icon className="size-4" />
              </span>
              {title}
            </h3>
            <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-muted-foreground marker:text-primary">
              {items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </Container>
  )
}

export function Follow() {
  return (
    <section aria-label="Follow us" className="mx-auto max-w-7xl px-4 py-10 sm:py-14">
      <div className="grid items-center gap-6 rounded-2xl bg-highlight p-6 sm:p-10 lg:grid-cols-[1fr_auto]">
        <div>
          <h2 className="text-xl font-semibold text-highlight-foreground sm:text-2xl">
            {follow.title}
          </h2>
          <p className="mt-2 text-sm text-highlight-foreground/80">{follow.body}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <EnquireLink className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-[#25d366] px-6 text-sm font-semibold text-white hover:bg-[#1fb857]">
            <MessageCircle className="size-4" /> WhatsApp
          </EnquireLink>
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center justify-center rounded-full border-2 border-primary px-6 text-sm font-semibold text-primary hover:bg-primary hover:text-primary-foreground"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
