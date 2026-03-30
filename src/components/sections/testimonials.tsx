"use client";

import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Star,
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  ExternalLink,
} from "lucide-react";
import { useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { siteConfig } from "@/lib/config";
import { Button } from "@ui/button";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";

function RatingStars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={18}
          className={
            i < rating
              ? "fill-yellow-500 text-yellow-500"
              : "text-muted-foreground"
          }
        />
      ))}
    </div>
  );
}

function ReviewDialog({
  testimonial,
  open,
  onOpenChange,
}: {
  testimonial: (typeof siteConfig.testimonials)[0];
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl px-0 bg-card border-border">
        <DialogHeader>
          <DialogTitle className="sr-only">
            Guest Review from {testimonial.name}
          </DialogTitle>
          <DialogDescription className="sr-only">
            Full review and details from {testimonial.name}
          </DialogDescription>
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-linear-to-br from-primary to-accent flex items-center justify-center text-3xl">
                {testimonial.image}
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-foreground">
                  {testimonial.name}
                </h3>
                <div className="flex gap-1.5 items-center">
                  <p className="text-xs text-muted-foreground mt-1">
                    {testimonial.date}
                  </p>
                  <RatingStars rating={testimonial.rating} />
                </div>
              </div>
            </div>
          </div>
        </DialogHeader>
        <ScrollArea className={"h-80 px-4"}>
          <div className="space-y-4">
            <p className="text-foreground leading-relaxed text-base">
              {testimonial.fullReview}
            </p>

            <div className="bg-secondary/50 border border-border rounded-lg p-4 mt-6">
              <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mb-2">
                About {testimonial.name}
              </p>
              <p className="text-sm text-foreground">
                {testimonial.title} - Verified Guest at{" "}
                {siteConfig.restaurant.name}
              </p>
            </div>
          </div>
          <ScrollBar orientation="vertical" />
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedTestimonial, setSelectedTestimonial] = useState(
    siteConfig.testimonials[0],
  );

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    });
  }, [emblaApi]);

  const scroll = (direction: "left" | "right") => {
    if (emblaApi) {
      direction === "left" ? emblaApi.scrollPrev() : emblaApi.scrollNext();
    }
  };

  const openFullReview = (testimonial: (typeof siteConfig.testimonials)[0]) => {
    setSelectedTestimonial(testimonial);
    setOpenDialog(true);
  };

  return (
    <>
      <section id="testimonials" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <p className="text-primary text-sm font-semibold mb-4 tracking-widest">
              WHAT GUESTS SAY
            </p>
            <h2 className="text-4xl font-serif font-bold text-foreground mb-4">
              Guest Testimonials
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Hear from our valued guests about their exceptional experiences at{" "}
              {siteConfig.restaurant.name}
            </p>
          </div>

          {/* Carousel Container */}
          <div className="relative">
            <div ref={emblaRef} className="overflow-hidden">
              <div className="flex gap-6">
                {siteConfig.testimonials.map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
                  >
                    <Card className="p-8 border border-border hover:border-primary/50 hover:shadow-xl transition-all h-full flex flex-col bg-secondary/30 backdrop-blur-sm">
                      <RatingStars rating={testimonial.rating} />

                      <p className="text-foreground text-base leading-relaxed my-6 grow">
                        &quot;{testimonial.content}&quot;
                      </p>

                      <div className="flex items-center justify-between pt-6 border-t border-border">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <p className="font-semibold text-foreground text-sm">
                              {testimonial.name}
                            </p>
                            {testimonial.verified && (
                              <CheckCircle
                                size={14}
                                className="text-primary fill-primary"
                              />
                            )}
                          </div>
                          <p className="text-xs text-primary">
                            {testimonial.title}
                          </p>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-linear-to-br from-primary to-accent flex items-center justify-center text-lg">
                          {testimonial.image}
                        </div>
                      </div>

                      <button
                        onClick={() => openFullReview(testimonial)}
                        className="mt-4 text-sm text-primary hover:text-primary/80 font-semibold transition-colors"
                      >
                        See more →
                      </button>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            {siteConfig.testimonials.length > 3 && (
              <div className="flex items-center justify-between mt-8">
                <Button
                  variant={"outline"}
                  size={"icon-lg"}
                  onClick={() => scroll("left")}
                  disabled={selectedIndex === 0}
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft size={20} />
                </Button>

                <div className="flex gap-2">
                  {siteConfig.testimonials.map((_, index) => (
                    <Button
                      key={index}
                      variant={index === selectedIndex ? "default" : "outline"}
                      onClick={() => emblaApi?.scrollTo(index)}
                      className={`size-1.5 rounded-full transition-all duration-300`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>

                <Button
                  size={"icon-lg"}
                  variant={"outline"}
                  onClick={() => scroll("right")}
                  disabled={selectedIndex >= siteConfig.testimonials.length - 1}
                  aria-label="Next testimonial"
                >
                  <ChevronRight size={20} />
                </Button>
              </div>
            )}
          </div>

          <div className="flex gap-4 justify-center mt-12">
            <Button
              nativeButton={false}
              render={
                <Link
                  href={
                    "https://search.google.com/local/writereview?placeid=ChIJ92Oj0mcRLxgRbeluM4tU1UY"
                  }
                  target="blank"
                  rel="noopener noreferrer"
                />
              }
            >
              <FcGoogle />
              Review Us <ExternalLink />
            </Button>
            <Button
              variant={"outline"}
              nativeButton={false}
              render={
                <Link
                  href={
                    "https://www.google.com/maps/place/CRAVE+KENYA+-+KILIMANI/@-1.2935272,32.1729832,7z/data=!4m12!1m2!2m1!1scrave+kenya+interior!3m8!1s0x182f1167d2a363f7:0x46d5548b336ee96d!8m2!3d-1.2935272!4d36.787241!9m1!1b1!15sChRjcmF2ZSBrZW55YSBpbnRlcmlvcloWIhRjcmF2ZSBrZW55YSBpbnRlcmlvcpIBCnJlc3RhdXJhbnSaASRDaGREU1VoTk1HOW5TMFZKUTBGblRVTkpjVGRIZFdsM1JSQULgAQD6AQQIABBA!16s%2Fg%2F11vk4jzg9s?entry=ttu&g_ep=EgoyMDI2MDMyNC4wIKXMDSoASAFQAw%3D%3D"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
            >
              <FcGoogle />
              Read all reviews
            </Button>
          </div>
        </div>
      </section>

      <ReviewDialog
        testimonial={selectedTestimonial}
        open={openDialog}
        onOpenChange={setOpenDialog}
      />
    </>
  );
}
