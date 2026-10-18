import Image from "next/image"
import type { LucideIcon } from "lucide-react"
import { Fish } from "lucide-react"

import { cn } from "@jal-matsya/ui/lib/utils"

import type { Tone } from "./content"

/* Fixed brand tints (not theme tokens): placeholders keep the same look in light
   and dark mode, the way a photo would. */
const tones: Record<Tone, string> = {
  teal: "from-[#d9f1f8] to-[#9fd3e4] text-[#074961]",
  aqua: "from-[#effbff] to-[#c7ebf5] text-[#0b5a75]",
  sand: "from-[#fff4dc] to-[#f6d9a0] text-[#7a5410]",
  coral: "from-[#ffe9e3] to-[#f8bba8] text-[#8a3a24]",
  leaf: "from-[#eef6e4] to-[#c5e0a3] text-[#3c6416]",
  slate: "from-[#eef1f3] to-[#c9d3d9] text-[#33444d]",
}

/**
 * Image slot. Renders `image` when set, otherwise a tinted gradient with an icon so
 * the layout holds until real photography is dropped into apps/web/public/.
 */
export function Art({
  image,
  alt,
  tone,
  icon: Icon = Fish,
  className,
  iconClassName,
  sizes = "(min-width: 1024px) 25vw, 50vw",
}: {
  image?: string
  alt: string
  tone: Tone
  icon?: LucideIcon
  className?: string
  iconClassName?: string
  sizes?: string
}) {
  return (
    <div className={cn("relative overflow-hidden bg-linear-to-br", tones[tone], className)}>
      {image ? (
        <Image src={image} alt={alt} fill sizes={sizes} className="object-cover" />
      ) : (
        <Icon
          aria-hidden
          strokeWidth={1.25}
          className={cn("absolute inset-0 m-auto size-1/2 opacity-70", iconClassName)}
        />
      )}
    </div>
  )
}
