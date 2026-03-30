"use client";

import { Hero } from "@/components/sections/hero";
import { PopularDishes } from "@/components/sections/popular-dishes";
import { CurrentOffers } from "@/components/sections/current-offers";
import { About } from "@/components/sections/about";
import { Testimonials } from "@/components/sections/testimonials";
import { CTA } from "@/components/sections/cta";
import { Instagram } from "@/components/sections/instagram";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { AnnouncementBar } from "@/components/announcement-bar";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <Header />
      <main>
        <Hero />
        <PopularDishes />
        <CurrentOffers />
        <About />
        <Testimonials />
        <CTA />
        <Instagram />
      </main>
      <Footer />
    </div>
  );
}
