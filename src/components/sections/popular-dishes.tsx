"use client";
import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowRight, ChevronLeft, ChevronRight, Plus } from "lucide-react";
import { MenuItem } from "@/types/menu";
import { Image } from "@ui/image";
import { Button } from "@ui/button";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

export function PopularDishes({ menuItems }: { menuItems: MenuItem[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
      setCanScrollPrev(emblaApi.canScrollPrev());
      setCanScrollNext(emblaApi.canScrollNext());
    };

    const onInit = () => {
      setScrollSnaps(emblaApi.scrollSnapList());
    };

    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", () => {
      onSelect();
      onInit();
    });

    onInit();
    onSelect();
  }, [emblaApi]);

  const scroll = (direction: "left" | "right") => {
    if (!emblaApi) return;
    direction === "left" ? emblaApi.scrollPrev() : emblaApi.scrollNext();
  };

  return (
    <section
      id="dishes"
      className="py-20 rounded-t-xl flex flex-col items-center gap-8 -mt-4 relative z-30 bg-background"
    >
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 w-full">
        {/* Section Header */}
        <div className="text-center mb-10 px-4">
          <p className="text-primary text-sm font-semibold mb-4 tracking-widest">
            OUR SPECIALTIES
          </p>
          <h2 className="text-5xl font-serif font-bold text-foreground mb-4">
            Popular Dishes
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Carefully curated dishes that showcase the finest ingredients and
            culinary techniques
          </p>
        </div>

        {/* Carousel */}
        <div className="overflow-hidden mb-8" ref={emblaRef}>
          <div className="flex -pl-3 sm:-pl-4">
            {menuItems.map((dish) => (
              <div
                key={dish.id}
                className="pl-3 sm:pl-4 flex-[0_0_80%] lg:flex-[0_0_25%] group"
              >
                {/* Card */}
                <Card className="rounded-2xl overflow-hidden bg-card">
                  <div className="relative w-full aspect-4/3 overflow-hidden">
                    <Image
                      src={dish.image_url}
                      alt={dish.name}
                      placeholder={dish.lqip ? "blur" : "empty"}
                      blurDataURL={dish.lqip ?? undefined}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <CardContent>
                    <h3 className="font-semibold leading-snug line-clamp-1 mb-0.5">
                      {dish.name}
                    </h3>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400 line-clamp-2 leading-relaxed mb-3">
                      {dish.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-zinc-900 dark:text-zinc-50">
                        Ksh {dish.price}
                      </span>
                      <Button
                        size={"icon-lg"}
                        variant={"outline"}
                        aria-label={`Add ${dish.name} to cart`}
                        nativeButton={false}
                        render={<Link href={"/menu"} />}
                      >
                        <Plus size={13} strokeWidth={3} />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="flex justify-center items-center gap-4">
          <Button
            variant={"outline"}
            size={"icon-lg"}
            onClick={() => scroll("left")}
            disabled={!canScrollPrev}
            aria-label="Previous dishes"
          >
            <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
          </Button>

          {/* Dots */}
          <div className="flex gap-2 items-center">
            {scrollSnaps.map((_, idx) => (
              <button
                key={idx}
                onClick={() => emblaApi?.scrollTo(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  idx === selectedIndex ? "w-6 bg-primary" : "w-3 bg-border"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <Button
            variant={"outline"}
            size={"icon-lg"}
            onClick={() => scroll("right")}
            disabled={!canScrollNext}
            aria-label="Next dishes"
          >
            <ChevronRight size={20} className="sm:w-6 sm:h-6" />
          </Button>
        </div>
      </div>

      <Button size={"xl"} nativeButton={false} render={<Link href={"/menu"} />}>
        View Full Menu <ArrowRight />
      </Button>
    </section>
  );
}
