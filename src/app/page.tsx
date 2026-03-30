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
import { api, ApiResponse } from "@/lib/api-client";
import { MenuItem } from "@/types/menu";
import { Offer } from "@/types/offers";
import { ContactUs } from "@/components/sections/contact";

export default async function Home() {
  const { data: offers } = await api.get<ApiResponse<Offer[]>>("/offers");

  const { data: menuItems } = await api.get<ApiResponse<MenuItem[]>>(
    "/menu-items?popular=true&is_available=true",
  );
  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <Header />
      <main>
        <Hero />
        <PopularDishes menuItems={menuItems} />
        <CurrentOffers offers={offers} />
        <About />
        <Testimonials />
        <CTA />
        <ContactUs />
        <Instagram />
      </main>
      <Footer />
    </div>
  );
}
