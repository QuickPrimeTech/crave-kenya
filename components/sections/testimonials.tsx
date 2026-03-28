'use client';

import { Card } from '@/components/ui/card';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Kimani',
    title: 'Food Critic',
    content: 'Crave Kenya Kilimani is a testament to culinary excellence. Every dish is a masterpiece that celebrates local flavors with international sophistication.',
    rating: 5,
  },
  {
    id: 2,
    name: 'James Ochieng',
    title: 'Regular Guest',
    content: 'The ambiance, the service, the food - everything is exceptional. This is where I bring my most important guests. Never disappointed.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Amara Hassan',
    title: 'Celebration Planner',
    content: 'We celebrated our anniversary here and it was perfection. The team went above and beyond to make our evening unforgettable.',
    rating: 5,
  },
  {
    id: 4,
    name: 'David Mwangi',
    title: 'Business Executive',
    content: 'The perfect venue for business dinners. Professional service, incredible food, and a sophisticated atmosphere.',
    rating: 5,
  },
];

function RatingStars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={18}
          className={i < rating ? 'fill-primary text-primary' : 'text-muted'}
        />
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-semibold mb-4 tracking-widest">WHAT GUESTS SAY</p>
          <h2 className="text-5xl font-serif font-bold text-foreground mb-4">
            Testimonials
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hear from our valued guests about their experiences at Crave Kenya Kilimani
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="p-8 border border-border hover:border-primary/50 hover:shadow-xl transition-all"
            >
              <RatingStars rating={testimonial.rating} />
              
              <p className="text-foreground text-lg leading-relaxed my-6">
                &quot;{testimonial.content}&quot;
              </p>

              <div>
                <p className="font-semibold text-foreground">
                  {testimonial.name}
                </p>
                <p className="text-sm text-primary">
                  {testimonial.title}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
