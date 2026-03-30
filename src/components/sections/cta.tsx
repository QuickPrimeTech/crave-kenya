"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/lib/config";
import Link from "next/link";

export function CTA() {
  return (
    <section className="py-10 bg-muted/30 border-y border-border">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-xl font-serif font-semibold text-foreground mb-1">
              Ready to dine with us?
            </h2>
            <div className="flex items-center justify-center md:justify-start gap-4 text-xs text-muted-foreground">
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {siteConfig.restaurant.hours.weekday}
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                {siteConfig.restaurant.location}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Button
              size="sm"
              className="rounded-full px-6 h-9"
              nativeButton={false}
              render={<Link href={"/reservations"} />}
            >
              Book Now
              <ArrowRight />
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="rounded-full px-4 h-9 gap-2"
              nativeButton={false}
              render={<Link href={`tel:${siteConfig.restaurant.phone}`} />}
            >
              <Phone />
              Call
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
