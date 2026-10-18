import type { LucideIcon } from "lucide-react"
import {
  BadgeIndianRupee,
  Clock,
  Fish,
  FishSymbol,
  MapPin,
  MessageCircle,
  PackageCheck,
  Scale,
  Scissors,
  Shell,
  Shrimp,
  Ship,
  Truck,
} from "lucide-react"

/*
 * Home page content. Copy, prices, links and media paths live here so they can be
 * edited without touching layout code. Business details, prices, terms and reviews
 * come from the Jal Matsya digital card (mywebside.in/Jal-Matsya-2).
 *
 * Media: photos live in apps/web/public/images/. To change one, overwrite the file
 * (same name) or point the `image` field at a new file.
 */

export type Tone = "teal" | "aqua" | "sand" | "coral" | "leaf" | "slate"

export const site = {
  name: "Jal Matsya",
  tagline: "Fresh fish at your doorstep",
  motto: "Fresh catch · Honest weight · Trusted quality",
  founder: "Vaibhav Ramchandra Shelar",
  phone: "+91 98332 08788",
  phoneHref: "tel:+919833208788",
  /** WhatsApp number for enquiries: country code + number, digits only. */
  whatsappNumber: "919833208788",
  email: "vaibhavshelar2026@gmail.com",
  area: "Majiwada, Thane",
  serviceArea: "Thane",
  upi: { app: "Google Pay", number: "98332 08788", name: "Vaibhav Shelar" },
}

export const announcement =
  "Fresh fish delivered to your doorstep in Thane · Order a day in advance on WhatsApp"

export const socials = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/people/Jal-Matsya-A-Fresh-Fish-on-your-door-step-in-Thane/61588012957677/",
  },
  { label: "Instagram", href: "https://www.instagram.com/jalmatsya18" },
  { label: "YouTube", href: "https://www.youtube.com/@vaibhavshelar2026" },
]

/** Prices are per kilogram, calculated on gross weight (see `terms`). */
export const priceUnit = "per kg"

export type Category = {
  slug: string
  name: string
  blurb: string
  icon: LucideIcon
  tone: Tone
  image?: string
}

export const categories: Category[] = [
  {
    slug: "pomfret",
    image: "/images/pomfret-small.jpg",
    name: "Pomfret",
    blurb: "White, Khapari, Halwa",
    icon: Fish,
    tone: "teal",
  },
  {
    slug: "sea-fish",
    image: "/images/surmai-large.jpg",
    name: "Sea Fish",
    blurb: "Surmai, Rawas, Bangda, Bombil",
    icon: FishSymbol,
    tone: "aqua",
  },
  {
    slug: "prawns",
    image: "/images/red-tiger-large.jpg",
    name: "Prawns",
    blurb: "Red tiger, white, Ola Jawala",
    icon: Shrimp,
    tone: "coral",
  },
  {
    slug: "crabs-squid",
    image: "/images/mud-crab-4-6.jpg",
    name: "Crabs & Squid",
    blurb: "Mud crabs, Mahakul",
    icon: Shell,
    tone: "sand",
  },
]

export const navLinks = [
  { label: "Home", href: "/" },
  ...categories.map((c) => ({ label: c.name, href: `#${c.slug}` })),
  { label: "How to order", href: "#how-to-order" },
  { label: "Videos", href: "#videos" },
  { label: "Contact", href: "#contact" },
]

export type Slide = {
  eyebrow: string
  title: string
  body: string
  cta: { label: string; message: string }
  tone: Tone
  icon: LucideIcon
  image?: string
}

export const slides: Slide[] = [
  {
    eyebrow: "Fresh fish at your doorstep",
    title: "The day's freshest catch, delivered in Thane",
    image: "/images/hero-boat.jpg",
    body: "Surmai, pomfret, prawns and more — handpicked, cleaned and cut the way you like, and delivered to your door between 8 am and 12 pm.",
    cta: {
      label: "Enquire now",
      message: "Hi Jal Matsya, what fresh fish is available for tomorrow's delivery?",
    },
    tone: "teal",
    icon: Ship,
  },
  {
    eyebrow: "Prawns",
    title: "Red tiger and white prawns from ₹600 a kg",
    image: "/images/hero-prawns.jpg",
    body: "Large and medium sizes, cleaned on request. Prawns are weighed before cleaning.",
    cta: {
      label: "Enquire about prawns",
      message: "Hi Jal Matsya, I'd like to order prawns. Which sizes are available for tomorrow?",
    },
    tone: "coral",
    icon: Shrimp,
  },
  {
    eyebrow: "Cleaned, cut & marinated",
    title: "Cut your way, marinated in our house masalas",
    image: "/images/hero-cut.jpg",
    body: "Curry cut, slices or whole — tell us how you cook it and we'll clean, cut and marinate it for you.",
    cta: {
      label: "Ask about marination",
      message:
        "Hi Jal Matsya, I'd like my fish cleaned, cut and marinated. Which masalas do you offer?",
    },
    tone: "sand",
    icon: Scissors,
  },
]

/** Three smaller promo tiles under the hero. */
export const promos = [
  {
    title: "Pomfret, cut your way",
    image: "/images/promo-pomfret.jpg",
    note: "Whole, scored or in pieces",
    message: "Hi Jal Matsya, I'd like pomfret. Can you clean and cut it for me?",
    tone: "aqua" as Tone,
    icon: Fish,
  },
  {
    title: "Halwa (black pomfret)",
    image: "/images/promo-halwa.jpg",
    note: "Medium and small sizes",
    message: "Hi Jal Matsya, is Halwa (black pomfret) available for tomorrow?",
    tone: "sand" as Tone,
    icon: Fish,
  },
  {
    title: "Packed fresh, sealed safe",
    image: "/images/promo-pack.jpg",
    note: "Hygienic Jal Matsya containers",
    message: "Hi Jal Matsya, I'd like to place an order for home delivery.",
    tone: "leaf" as Tone,
    icon: PackageCheck,
  },
]

export const features: { icon: LucideIcon; title: string; note: string }[] = [
  { icon: Truck, title: "Home delivery", note: "Across Thane, 8 am – 12 pm" },
  { icon: Scale, title: "Honest weight", note: "Priced on gross weight" },
  { icon: MessageCircle, title: "Order on WhatsApp", note: "Confirmed a day in advance" },
  { icon: BadgeIndianRupee, title: "Easy payment", note: "Google Pay or QR code" },
]

export type Product = {
  id: string
  name: string
  category: string
  /** Size shown under the name, e.g. "Large size" */
  pack: string
  /** Offer price per kg */
  price: number
  /** Regular price per kg, shown struck through */
  mrp?: number
  rating?: number
  soldOut?: boolean
  tone: Tone
  image?: string
}

export const products: Product[] = [
  // Pomfret
  {
    id: "pomfret-jumbo",
    name: "Pomfret",
    pack: "Jumbo size",
    price: 2200,
    mrp: 2500,
    category: "pomfret",
    tone: "teal",
    image: "/images/pomfret-jumbo.jpg",
  },
  {
    id: "pomfret-large",
    name: "Pomfret",
    pack: "Large size",
    price: 1900,
    mrp: 2100,
    category: "pomfret",
    tone: "teal",
    image: "/images/pomfret-large.webp",
  },
  {
    id: "pomfret-medium",
    name: "Pomfret",
    pack: "Medium size",
    price: 1400,
    mrp: 1600,
    category: "pomfret",
    tone: "teal",
    image: "/images/pomfret-medium.jpg",
  },
  {
    id: "pomfret-small",
    name: "Pomfret",
    pack: "Small size",
    price: 1200,
    mrp: 1500,
    category: "pomfret",
    tone: "teal",
    image: "/images/pomfret-small.jpg",
  },
  {
    id: "khapari-jumbo",
    name: "Khapari Pomfret",
    pack: "Jumbo size",
    price: 2200,
    mrp: 2500,
    category: "pomfret",
    tone: "slate",
    image: "/images/khapari-jumbo.webp",
  },
  {
    id: "khapari-large",
    name: "Khapari Pomfret",
    pack: "Large size",
    price: 1900,
    mrp: 2100,
    category: "pomfret",
    tone: "slate",
    image: "/images/khapari-large.jpg",
  },
  {
    id: "khapari-medium",
    name: "Khapari Pomfret",
    pack: "Medium size",
    price: 1400,
    mrp: 1800,
    category: "pomfret",
    tone: "slate",
    image: "/images/khapari-medium.jpg",
  },
  {
    id: "khapari-small",
    name: "Khapari Pomfret",
    pack: "Medium size",
    price: 1200,
    mrp: 1500,
    category: "pomfret",
    tone: "slate",
    image: "/images/khapari-small.jpg",
  },
  {
    id: "halwa-medium",
    name: "Halwa (Black Pomfret)",
    pack: "Medium size",
    price: 1200,
    mrp: 1500,
    category: "pomfret",
    tone: "slate",
    image: "/images/halwa-medium.jpg",
  },
  {
    id: "halwa-small",
    name: "Halwa (Black Pomfret)",
    pack: "Medium size",
    price: 1100,
    mrp: 1300,
    category: "pomfret",
    tone: "slate",
    image: "/images/halwa-small.jpg",
  },
  // Sea fish
  {
    id: "surmai-large",
    name: "Surmai (King Fish)",
    pack: "Large size",
    price: 1500,
    mrp: 1800,
    category: "sea-fish",
    tone: "aqua",
    image: "/images/surmai-large.jpg",
  },
  {
    id: "surmai-medium",
    name: "Surmai (King Fish)",
    pack: "Medium size",
    price: 1100,
    mrp: 1300,
    category: "sea-fish",
    tone: "aqua",
    image: "/images/surmai-medium.jpg",
  },
  {
    id: "rawas-medium",
    name: "Rawas (Indian Salmon)",
    pack: "Medium size",
    price: 1300,
    mrp: 1500,
    category: "sea-fish",
    tone: "coral",
    image: "/images/rawas-medium.jpg",
  },
  {
    id: "rawas-small",
    name: "Rawas (Indian Salmon)",
    pack: "Medium size",
    price: 1100,
    mrp: 1300,
    category: "sea-fish",
    tone: "coral",
    image: "/images/rawas-small.jpg",
  },
  {
    id: "jitada",
    name: "Jitada / Seabass (Chanak, Betki)",
    pack: "Medium size",
    price: 850,
    mrp: 1000,
    category: "sea-fish",
    tone: "slate",
    image: "/images/jitada.jpg",
  },
  {
    id: "bangda-medium",
    name: "Bangda (Mackerel)",
    pack: "Medium size",
    price: 550,
    mrp: 650,
    category: "sea-fish",
    tone: "aqua",
    image: "/images/bangda-medium.jpg",
  },
  {
    id: "bangda-small",
    name: "Bangda (Mackerel)",
    pack: "Small size",
    price: 500,
    mrp: 600,
    category: "sea-fish",
    tone: "aqua",
    image: "/images/bangda-small.jpg",
  },
  {
    id: "bombil-large",
    name: "Bombil (Bombay Duck)",
    pack: "Large size",
    price: 550,
    mrp: 650,
    category: "sea-fish",
    tone: "sand",
    image: "/images/bombil-large.jpg",
  },
  {
    id: "bombil-mixed",
    name: "Bombil (Bombay Duck)",
    pack: "Medium & small mix",
    price: 500,
    mrp: 600,
    category: "sea-fish",
    tone: "sand",
    image: "/images/bombil-mixed.jpg",
  },
  {
    id: "karli",
    name: "Karli (Silver Barfish)",
    pack: "Regular size",
    price: 600,
    mrp: 650,
    category: "sea-fish",
    tone: "slate",
    image: "/images/karli.jpg",
  },
  {
    id: "mushi",
    name: "Mushi (Catfish)",
    pack: "Regular size",
    price: 600,
    mrp: 650,
    category: "sea-fish",
    tone: "slate",
    image: "/images/mushi.jpg",
  },
  {
    id: "mandeli",
    name: "Mandeli (Golden Anchovy)",
    pack: "Regular size",
    price: 400,
    mrp: 450,
    category: "sea-fish",
    tone: "sand",
    image: "/images/mandeli.jpg",
  },
  // Prawns
  {
    id: "red-tiger-large",
    name: "Red Tiger Prawns",
    pack: "Large size",
    price: 700,
    mrp: 900,
    category: "prawns",
    tone: "coral",
    image: "/images/red-tiger-large.jpg",
  },
  {
    id: "red-tiger-medium",
    name: "Red Tiger Prawns",
    pack: "Medium size",
    price: 600,
    mrp: 700,
    category: "prawns",
    tone: "coral",
    image: "/images/red-tiger-medium.jpg",
  },
  {
    id: "white-prawns-large",
    name: "White Farmed Prawns",
    pack: "Large size",
    price: 700,
    mrp: 900,
    category: "prawns",
    tone: "sand",
    image: "/images/white-prawns-large.jpg",
  },
  {
    id: "white-prawns-medium",
    name: "White Farmed Prawns",
    pack: "Medium size",
    price: 600,
    mrp: 700,
    category: "prawns",
    tone: "sand",
    image: "/images/white-prawns-medium.jpg",
  },
  {
    id: "ola-jawala",
    name: "Ola Jawala (Fresh Baby Shrimp)",
    pack: "Regular",
    price: 400,
    mrp: 450,
    category: "prawns",
    tone: "coral",
    image: "/images/ola-jawala.jpg",
  },
  // Crabs & squid
  {
    id: "mud-crab-4-6",
    name: "Mud Crabs",
    pack: "4–6 pcs per kg",
    price: 1300,
    mrp: 1500,
    category: "crabs-squid",
    tone: "sand",
    image: "/images/mud-crab-4-6.jpg",
  },
  {
    id: "mud-crab-5-7",
    name: "Mud Crabs",
    pack: "5–7 pcs per kg",
    price: 1000,
    mrp: 1200,
    category: "crabs-squid",
    tone: "sand",
    image: "/images/mud-crab-5-7.jpg",
  },
  {
    id: "mahakul",
    name: "Mahakul (Squid)",
    pack: "Regular size",
    price: 600,
    mrp: 650,
    category: "crabs-squid",
    tone: "slate",
    image: "/images/mahakul.jpg",
  },
]

export const bestSellerIds = [
  "surmai-large",
  "pomfret-medium",
  "red-tiger-large",
  "rawas-medium",
  "bangda-medium",
  "halwa-medium",
  "bombil-large",
  "mud-crab-5-7",
]

export const about = {
  eyebrow: "About Jal Matsya",
  title: "Freshness, quality and trust",
  image: "/images/about.jpg",
  body: [
    "Jal Matsya set sail on 9 January 2026, born from a passion for freshness. Founded by Vaibhav Shelar, it is built on a simple promise: freshness, quality and trust.",
    "We carefully select the best catch — Surmai, Pomfret, Prawns and more — so every order brings the authentic taste of the ocean home. From the bustling fish market to your doorstep, every fish is handled with care, and we keep buying seafood easy, hygienic and honestly priced.",
  ],
  points: [
    { icon: Truck, label: "Doorstep delivery in Thane" },
    { icon: Scissors, label: "Cleaned & cut to order" },
    { icon: Scale, label: "Honest weight & pricing" },
    { icon: MessageCircle, label: "Easy WhatsApp ordering" },
  ],
}

export const whyUs = {
  eyebrow: "Why choose us",
  title: "Fresh catch, honest weight, trusted quality",
  items: [
    {
      title: "Handpicked catch",
      image: "/images/why-market.jpg",
      body: "We pick the best of the day's catch at the market, subject to what's fresh.",
      icon: Fish,
      tone: "teal" as Tone,
    },
    {
      title: "Cleaned & cut your way",
      image: "/images/why-cut.jpg",
      body: "Whole, scored, slices or curry cut — prepared exactly how you cook it.",
      icon: Scissors,
      tone: "aqua" as Tone,
    },
    {
      title: "Hygienic packing",
      image: "/images/why-pack.jpg",
      body: "Packed in sealed Jal Matsya containers, ready for your fridge.",
      icon: PackageCheck,
      tone: "sand" as Tone,
    },
    {
      title: "Honest weight",
      image: "/images/why-price.jpg",
      body: "Clear per-kg prices on gross weight, confirmed with you before delivery.",
      icon: Scale,
      tone: "leaf" as Tone,
    },
  ],
}

export const stats = [
  { value: "30+", label: "Fish & seafood options" },
  { value: "8–12", label: "Morning delivery (am)" },
  { value: "₹400", label: "Minimum order" },
  { value: "2026", label: "Serving Thane since" },
]

export const process = {
  eyebrow: "How to order",
  title: "Order fresh fish in four easy steps",
  steps: [
    {
      title: "Message us on WhatsApp",
      body: "Tell us the fish, size and quantity (minimum 1 kg per fish).",
      icon: MessageCircle,
    },
    {
      title: "We confirm your order",
      body: "Orders are confirmed a day in advance, based on the fresh catch available.",
      icon: Clock,
    },
    {
      title: "Cleaned, cut & packed",
      body: "Prepared the way you like and sealed in a hygienic container.",
      icon: PackageCheck,
    },
    {
      title: "Delivered to your door",
      body: "Home delivery across Thane between 8 am and 12 pm. Pay by Google Pay or QR.",
      icon: Truck,
    },
  ],
}

/** Ordering terms, from the Jal Matsya terms & conditions card. */
export const terms = [
  {
    title: "Orders",
    icon: MessageCircle,
    items: [
      "Minimum quantity: 1 kg for each fish.",
      "Minimum order value: ₹400 (Thane only).",
      "Orders are confirmed one day in advance.",
      "All orders are subject to the availability of fresh catch in the market.",
    ],
  },
  {
    title: "Weight & pricing",
    icon: Scale,
    items: [
      "Prices are per kg, calculated on gross weight.",
      "Additional charges apply if the final weight increases.",
      "Prawns are weighed before cleaning.",
    ],
  },
  {
    title: "Cancellations",
    icon: Clock,
    items: [
      "If a fish is unavailable, we may cancel that item and let you know.",
      "Please tell us about any cancellation one day in advance, before 10:00 pm.",
    ],
  },
  {
    title: "Payment & delivery",
    icon: MapPin,
    items: [
      "Pay via Google Pay, or scan the QR code sticker on our container.",
      "Delivery is available only within the Thane area.",
      "Home delivery time: 8:00 am – 12:00 pm.",
    ],
  },
]

/** Customer feedback from the Jal Matsya digital card. */
export const testimonials = {
  eyebrow: "Feedback",
  title: "What our customers say",
  items: [
    {
      name: "Prajakta Desai",
      quote:
        "Ghari mase saglyana khup avadale, quality & taste donhi chhan hoti. Ashich service theva aani aata Mumbai pan start kara!",
    },
    { name: "Pratibha", quote: "Fish are very fresh & most important delivered on time." },
    {
      name: "Rupali",
      quote: "Fish was fresh, delivered on time & quality & taste, no words… Thanks.",
    },
    { name: "Priyanka", quote: "It was fresh, we enjoyed it. Thanks." },
    { name: "Bharti", quote: "Fresh food, very tasty." },
  ],
}

/** YouTube videos from the Jal Matsya channel. */
export const videos = {
  eyebrow: "Videos",
  title: "Watch Jal Matsya at work",
  channelHref: "https://www.youtube.com/@vaibhavshelar2026",
  ids: ["25kcftft4Nc", "6PizMTzlJ0M", "Q3iWVQLw5wI", "sIfo8zRQH9s", "wxKy1jEuQT0"],
}

export const follow = {
  title: "Follow, join & stay updated",
  body: "See the day's catch, cutting videos and offers on our social pages.",
}

export const footer = {
  blurb:
    "Fresh fish and seafood delivered to your doorstep in Thane — handpicked, cleaned and cut your way.",
  links: [
    { label: "About us", href: "#about" },
    { label: "How to order", href: "#how-to-order" },
    { label: "Terms & conditions", href: "#terms" },
    { label: "Videos", href: "#videos" },
    { label: "Contact", href: "#contact" },
  ],
}

export function productsIn(category: string) {
  return products.filter((p) => p.category === category)
}

export function productById(id: string) {
  return products.find((p) => p.id === id)
}
