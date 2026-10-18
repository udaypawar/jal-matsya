import { Hero } from "@/components/home/hero"
import { MobileBar } from "@/components/home/mobile-bar"
import {
  About,
  BestSellers,
  Categories,
  CategoryShelves,
  Follow,
  Process,
  Stats,
  Terms,
  Testimonials,
  TrustStrip,
  Videos,
  WhyUs,
} from "@/components/home/sections"
import { SiteFooter } from "@/components/home/site-footer"
import { SiteHeader } from "@/components/home/site-header"

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <TrustStrip />
        <BestSellers />
        <Categories />
        <CategoryShelves />
        <About />
        <WhyUs />
        <Stats />
        <Process />
        <Terms />
        <Videos />
        <Testimonials />
        <Follow />
      </main>
      <SiteFooter />
      <MobileBar />
    </>
  )
}
