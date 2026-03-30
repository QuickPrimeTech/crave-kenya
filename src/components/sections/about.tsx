"use client";

import { siteConfig } from "@/lib/config";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Image } from "@ui/image";

export function About() {
  return (
    <section id="about" className="py-20 bg-secondary rounded-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Text + Button */}
          <div className="space-y-6">
            <p className="text-primary text-sm font-semibold tracking-widest">
              ABOUT {siteConfig.name}
            </p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
              A Journey of Taste
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {siteConfig.restaurant.name} is Nairobi&apos;s premier fine dining
              destination. Experience exceptional food crafted with passion and
              the finest ingredients.
            </p>
            <Button
              nativeButton={false}
              render={<Link href="/about" />}
              size="lg"
            >
              About Us
            </Button>
          </div>

          {/* Right: Image */}
          <div className="relative w-full h-80 md:h-100px rounded-lg overflow-hidden">
            <Image
              src={
                "https://res.cloudinary.com/quick-prime-tech/image/upload/v1774897007/caption_xlgtua.jpg"
              }
              alt="About us image"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
