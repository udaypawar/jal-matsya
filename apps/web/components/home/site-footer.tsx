import { Mail, MapPin, Phone, User } from "lucide-react"

import { categories, footer, site, socials } from "./content"
import { Logo } from "./site-header"

// Evaluated once per build/server start; fine for a copyright line.
const year = new Date().getFullYear()

export function SiteFooter() {
  return (
    // Fixed deep-teal footer (not theme tokens): same in light and dark mode.
    <footer id="contact" className="bg-[#042c3a] pb-20 text-white/80 lg:pb-0">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <Logo inverted />
          <p className="text-sm">{footer.blurb}</p>
          <ul className="flex flex-wrap gap-4 text-sm">
            {socials.map((s) => (
              <li key={s.label}>
                <a href={s.href} className="hover:text-white">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <FooterList title="Categories">
          {categories.map((c) => (
            <li key={c.slug}>
              <a href={`#${c.slug}`} className="hover:text-white">
                {c.name}
              </a>
            </li>
          ))}
        </FooterList>

        <FooterList title="Useful links">
          {footer.links.map((l) => (
            <li key={l.label}>
              <a href={l.href} className="hover:text-white">
                {l.label}
              </a>
            </li>
          ))}
        </FooterList>

        <FooterList title="Get in touch">
          <li className="flex gap-2">
            <User className="mt-0.5 size-4 shrink-0 text-[#fbbc34]" /> {site.founder}, Founder
          </li>
          <li className="flex gap-2">
            <MapPin className="mt-0.5 size-4 shrink-0 text-[#fbbc34]" /> {site.area} · Delivery in{" "}
            {site.serviceArea} only
          </li>
          <li>
            <a href={site.phoneHref} className="flex gap-2 hover:text-white">
              <Phone className="mt-0.5 size-4 shrink-0 text-[#fbbc34]" /> {site.phone}
            </a>
          </li>
          <li>
            <a href={`mailto:${site.email}`} className="flex gap-2 hover:text-white">
              <Mail className="mt-0.5 size-4 shrink-0 text-[#fbbc34]" /> {site.email}
            </a>
          </li>
        </FooterList>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-xs sm:flex-row">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <p className="text-center">
            Pay via {site.upi.app}:{" "}
            <span className="font-medium text-white">
              {site.upi.number} ({site.upi.name})
            </span>{" "}
            or scan the QR on your container
          </p>
        </div>
      </div>
    </footer>
  )
}

function FooterList({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="mb-4 text-sm font-semibold tracking-wide text-white uppercase">{title}</h2>
      <ul className="space-y-2.5 text-sm">{children}</ul>
    </div>
  )
}
