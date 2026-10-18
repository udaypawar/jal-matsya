"use client"

import { MessageCircle, Star } from "lucide-react"

import { cn } from "@jal-matsya/ui/lib/utils"

import { Art } from "./art"
import { categories, priceUnit, site, type Product } from "./content"
import { EnquireLink, formatPrice, productMessage } from "./enquiry"

export function ProductCard({ product, className }: { product: Product; className?: string }) {
  const category = categories.find((c) => c.slug === product.category)
  const off = product.mrp ? Math.round((1 - product.price / product.mrp) * 100) : 0
  const message = product.soldOut
    ? `Hi ${site.name}, ${product.name} (${product.pack}) is marked sold out. When will it be available again?`
    : productMessage(product.name, product.pack)

  return (
    <article
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-xl border bg-card transition-shadow hover:shadow-lg",
        className
      )}
    >
      <div className="relative">
        <Art
          image={product.image}
          alt={product.name}
          tone={product.tone}
          icon={category?.icon}
          className={cn("aspect-square", product.soldOut && "opacity-60 grayscale")}
          iconClassName="transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-2 left-2 flex flex-col items-start gap-1">
          {off > 0 && (
            <span className="rounded-full bg-emphasis px-2 py-0.5 text-xs font-semibold text-emphasis-foreground">
              -{off}%
            </span>
          )}
          {product.soldOut && (
            <span className="rounded-full bg-charcoal px-2 py-0.5 text-xs font-medium text-charcoal-foreground">
              Sold out
            </span>
          )}
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-1 p-3 sm:p-4">
        <p className="text-xs text-muted-foreground">{category?.name}</p>
        <h3 className="line-clamp-2 text-sm leading-snug font-medium text-foreground sm:text-base">
          {product.name}
        </h3>
        <p className="text-xs text-muted-foreground">{product.pack}</p>
        {product.rating && (
          <p className="flex items-center gap-1 text-xs text-foreground-secondary">
            <Star className="size-3.5 fill-emphasis text-emphasis" aria-hidden />
            {product.rating.toFixed(1)}
          </p>
        )}
        <div className="mt-auto flex flex-wrap items-baseline gap-x-2 pt-2">
          <span className="font-semibold text-primary">{formatPrice(product.price)}</span>
          <span className="text-xs text-muted-foreground">{priceUnit}</span>
          {product.mrp && (
            <span className="text-xs text-muted-foreground line-through">
              {formatPrice(product.mrp)}
            </span>
          )}
        </div>
        <EnquireLink
          message={message}
          aria-label={`Enquire about ${product.name} on WhatsApp`}
          className={cn(
            "mt-2 inline-flex h-8 w-full items-center justify-center gap-1.5 rounded-full text-sm font-medium transition-colors",
            product.soldOut
              ? "border border-input text-foreground hover:bg-accent"
              : "bg-success text-success-foreground hover:bg-success/90"
          )}
        >
          <MessageCircle className="size-4" />
          {product.soldOut ? "Ask availability" : "Enquire"}
        </EnquireLink>
      </div>
    </article>
  )
}
