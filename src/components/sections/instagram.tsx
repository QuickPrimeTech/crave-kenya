"use client";
import * as React from "react";
import Script from "next/script";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Button } from "@ui/button";

declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process: () => void;
      };
    };
  }
}

interface CarouselCard {
  id: number;
  url: string;
  likes?: string;
  caption?: string;
}

const CARDS: CarouselCard[] = [
  {
    id: 1,
    url: "https://www.instagram.com/reel/DWFRHq0CKzZ/",
    likes: "2.4K",
  },
  {
    id: 2,
    url: "https://www.instagram.com/reel/DWE0ZHSgGBm/",
    likes: "1.8K",
  },
  {
    id: 3,
    url: "https://www.instagram.com/reel/DVvxSsmjHNP/",
    likes: "3.2K",
  },
  {
    id: 4,
    url: "https://www.instagram.com/reel/DVs6SWCDakl/",
    likes: "4.1K",
  },
  {
    id: 5,
    url: "https://www.instagram.com/reel/DVq35GzDOcM/",
    likes: "2.9K",
  },
  {
    id: 6,
    url: "https://www.instagram.com/reel/DVfiAiqCG22/",
    likes: "5.3K",
  },
];

function InstagramEmbed({ url, isActive }: { url: string; isActive: boolean }) {
  const baseUrl = url.split("?")[0];

  React.useEffect(() => {
    if (isActive && window.instgrm) {
      window.instgrm.Embeds.process();
    }
  }, [isActive]);

  return (
    <div className="w-full h-full rounded-2xl overflow-hidden bg-muted">
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={`${baseUrl}?utm_source=ig_embed&utm_campaign=loading`}
        data-instgrm-version="14"
        style={{ width: "100%", height: "100%", margin: 0 }}
      >
        <div className="flex items-center justify-center h-full min-h-[400px]">
          <ExternalLink className="w-5 h-5 text-muted-foreground animate-pulse" />
        </div>
      </blockquote>
    </div>
  );
}

export function Instagram() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section className="py-24 bg-background">
      <Script
        src="https://www.instagram.com/embed.js"
        strategy="lazyOnload"
        onLoad={() => window.instgrm?.Embeds.process()}
      />

      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 space-y-3">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
            Follow Our Journey
          </h2>
          <p className="text-muted-foreground text-lg">
            Watch our latest culinary creations
          </p>
        </div>

        {/* Carousel */}
        <Carousel setApi={setApi} opts={{ align: "center", loop: true }}>
          <CarouselContent className="-ml-4">
            {CARDS.map((card, index) => {
              const isActive = current === index;

              return (
                <CarouselItem
                  key={card.id}
                  className="basis-[80%] sm:basis-1/2 md:basis-1/3 lg:basis-1/4 flex justify-center"
                >
                  <div
                    className={cn(
                      "relative w-full aspect-9/18 rounded-2xl border bg-card overflow-hidden transition-all duration-500",
                      isActive ? "scale-100" : "scale-85",
                    )}
                  >
                    {/* Active */}
                    {isActive ? (
                      <div className="relative w-full h-full group">
                        <InstagramEmbed url={card.url} isActive />

                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />

                        {/* Open icon */}
                        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition">
                          <ExternalLink className="w-5 h-5 text-white" />
                        </div>

                        <div
                          className="absolute inset-0 cursor-pointer"
                          onClick={() =>
                            window.open(
                              card.url,
                              "_blank",
                              "noopener,noreferrer",
                            )
                          }
                        />
                      </div>
                    ) : (
                      <div
                        className="w-full h-full flex items-center justify-center bg-muted cursor-pointer"
                        onClick={() => api?.scrollTo(index)}
                      >
                        <InstagramEmbed url={card.url} isActive />
                      </div>
                    )}
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>

        {/* Controls */}
        <div className="flex items-center justify-center gap-6 mt-12">
          <Button
            variant={"outline"}
            size={"icon-lg"}
            onClick={() => api?.scrollPrev()}
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>

          {/* Dots */}
          <div className="flex gap-2">
            {Array.from({ length: count }).map((_, i) => (
              <button
                key={i}
                onClick={() => api?.scrollTo(i)}
                className={cn(
                  "h-2 rounded-full transition-all duration-300",
                  i === current
                    ? "w-6 bg-primary"
                    : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/60",
                )}
              />
            ))}
          </div>

          <Button
            variant={"outline"}
            size={"icon-lg"}
            onClick={() => api?.scrollNext()}
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
