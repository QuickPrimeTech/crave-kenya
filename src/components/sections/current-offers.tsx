"use client";

import { Image } from "@ui/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, ArrowUpRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Offer } from "@/types/offers";
import { Button } from "@ui/button";
import Link from "next/link";

export function CurrentOffers({ offers }: { offers: Offer[] }) {
  return (
    <section id="offers" className="py-20 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-medium mb-3 tracking-widest uppercase">
            Exclusive Deals
          </p>
          <h2 className="text-4xl font-serif font-bold text-foreground mb-4">
            Current Offers
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm">
            Limited time promotions to make your dining experience at The Crave
            Kitchen even more special.
          </p>
        </div>

        {/* Carousel Container */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {offers.map((offer) => (
              <CarouselItem
                key={offer.id}
                className="pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
              >
                <Card className="group overflow-hidden py-0 pb-3">
                  {/* Image Container */}
                  <div className="relative aspect-3/2 overflow-hidden bg-muted">
                    <Image
                      src={offer.image_url}
                      alt={offer.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    {/* Badge Overlay */}
                    <div className="absolute top-3 left-3">
                      <Badge
                        variant="secondary"
                        className="bg-background/95 backdrop-blur-sm text-foreground font-medium text-xs shadow-sm"
                      >
                        {offer.is_recurring ? "Weekly" : "Limited"}
                      </Badge>
                    </div>
                  </div>

                  {/* Content */}
                  <CardContent className="space-y-3">
                    <h3 className="font-serif font-semibold text-card-foreground text-lg leading-tight line-clamp-2 group-hover:text-primary transition-colors">
                      {offer.title}
                    </h3>

                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
                      {offer.description}
                    </p>

                    {/* Time Info */}
                    <div className="flex items-center gap-3 text-xs text-muted-foreground pt-2 border-t border-border mt-auto">
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" />
                        <span className="font-medium tabular-nums">
                          {offer.start_time.slice(0, 5)} -{" "}
                          {offer.end_time.slice(0, 5)}
                        </span>
                      </div>
                    </div>

                    {/* CTA */}
                    <Button
                      variant={"secondary"}
                      className={"w-full group"}
                      nativeButton={false}
                      render={<Link href={`/offers/${offer.slug}`} />}
                    >
                      View Details
                      <ArrowUpRight className=" w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Button>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center gap-2 mt-8">
            <CarouselPrevious
              size={"icon-lg"}
              className="static translate-y-0 bg-background border-border hover:bg-muted hover:text-foreground"
            />
            <CarouselNext
              size={"icon-lg"}
              className="static translate-y-0 bg-background border-border hover:bg-muted hover:text-foreground"
            />
          </div>
        </Carousel>

        {/* Fine Print */}
        <p className="text-center text-muted-foreground text-xs mt-8">
          *Terms and conditions apply. Valid for dine-in only. Offers cannot be
          combined with other discounts.
        </p>
      </div>
    </section>
  );
}
