'use client';

import { Card } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader } from '@/components/ui/dialog';
import { Star, ChevronLeft, ChevronRight, CheckCircle } from 'lucide-react';
import { useState, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { siteConfig } from '@/lib/config';

function RatingStars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={18}
          className={i < rating ? 'fill-primary text-primary' : 'text-muted-foreground'}
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
      <DialogContent className="max-w-2xl bg-card border-border">
        <DialogHeader>
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-3xl">
                {testimonial.image}
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-lg font-bold text-foreground">{testimonial.name}</h3>
                  {testimonial.verified && (
                    <CheckCircle size={18} className="text-primary fill-primary" />
                  )}
                </div>
                <p className="text-sm text-primary font-medium">{testimonial.title}</p>
                <p className="text-xs text-muted-foreground mt-1">{testimonial.date}</p>
              </div>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-4">
          <RatingStars rating={testimonial.rating} />

          <p className="text-foreground leading-relaxed text-base">
            {testimonial.fullReview}
          </p>

          <div className="bg-secondary/50 border border-border rounded-lg p-4 mt-6">
            <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mb-2">
              About {testimonial.name}
            </p>
            <p className="text-sm text-foreground">
              {testimonial.title} - Verified Guest at {siteConfig.restaurant.name}
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: 'start' });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedTestimonial, setSelectedTestimonial] = useState(
    siteConfig.testimonials[0]
  );

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on('select', () => {
      setSelectedIndex(emblaApi.selectedIndex);
    });
  }, [emblaApi]);

  const scroll = (direction: 'left' | 'right') => {
    if (emblaApi) {
      direction === 'left' ? emblaApi.scrollPrev() : emblaApi.scrollNext();
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
          <div className="text-center mb-16">
            <p className="text-primary text-sm font-semibold mb-4 tracking-widest">WHAT GUESTS SAY</p>
            <h2 className="text-5xl font-serif font-bold text-foreground mb-4">
              Guest Testimonials
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Hear from our valued guests about their exceptional experiences at {siteConfig.restaurant.name}
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

                      <p className="text-foreground text-base leading-relaxed my-6 flex-grow">
                        &quot;{testimonial.content}&quot;
                      </p>

                      <div className="flex items-center justify-between pt-6 border-t border-border">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <p className="font-semibold text-foreground text-sm">
                              {testimonial.name}
                            </p>
                            {testimonial.verified && (
                              <CheckCircle size={14} className="text-primary fill-primary" />
                            )}
                          </div>
                          <p className="text-xs text-primary">
                            {testimonial.title}
                          </p>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-lg">
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
                <button
                  onClick={() => scroll('left')}
                  disabled={selectedIndex === 0}
                  className="p-2 bg-secondary border border-border text-secondary-foreground hover:bg-accent disabled:opacity-50 disabled:cursor-not-allowed transition-colors rounded-lg"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft size={20} />
                </button>

                <div className="flex gap-2">
                  {siteConfig.testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => emblaApi?.scrollTo(index)}
                      className={`rounded-full transition-all duration-300 ${
                        index === selectedIndex
                          ? 'w-5 h-1.5 bg-primary'
                          : 'w-1.5 h-1.5 bg-muted-foreground/30 hover:bg-muted-foreground/50'
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={() => scroll('right')}
                  disabled={selectedIndex >= siteConfig.testimonials.length - 1}
                  className="p-2 bg-secondary border border-border text-secondary-foreground hover:bg-accent disabled:opacity-50 disabled:cursor-not-allowed transition-colors rounded-lg"
                  aria-label="Next testimonial"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            )}
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
