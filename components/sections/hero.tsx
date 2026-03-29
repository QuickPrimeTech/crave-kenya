'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { siteConfig } from '@/lib/config';

export function Hero() {
  return (
    <section className="relative min-h-screen pt-20 flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/restaurant-interior-1.jpg"
          alt="Crave Kenya Kilimani"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/75 to-background/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          <p className="text-primary text-sm font-semibold mb-4 tracking-widest">WELCOME TO</p>
          <h1 className="text-6xl md:text-7xl font-serif font-bold text-foreground mb-6 leading-tight">
            Culinary Excellence
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-xl leading-relaxed">
            Experience the finest dining in Kilimani. We craft unforgettable moments through exquisite cuisine and impeccable service.
          </p>
          
          <div className="flex gap-4">
            <Button 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg"
            >
              Make a Reservation
            </Button>
            <Button 
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 px-8 py-6 text-lg"
            >
              View Menu
            </Button>
          </div>

          <p className="mt-12 text-sm text-muted-foreground">
            <span>{siteConfig.restaurant.location}</span>
            {' | '}
            <span>{siteConfig.restaurant.phone}</span>
          </p>
        </div>
      </div>
    </section>
  );
}
