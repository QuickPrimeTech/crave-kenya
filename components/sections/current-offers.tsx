'use client';

import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const offers = [
  {
    id: 1,
    title: 'Happy Hour Specials',
    description: 'Enjoy 30% off selected appetizers and drinks from 4 PM to 6 PM daily',
    discount: '-30%',
    color: 'bg-primary/20 border-primary',
  },
  {
    id: 2,
    title: 'Sunset Dining Package',
    description: 'Three-course meal with wine pairing at a special rate. Perfect for couples.',
    discount: 'Bundle',
    color: 'bg-accent/20 border-accent',
  },
  {
    id: 3,
    title: 'Weekend Celebration',
    description: 'Reserve a table for 4+ and receive complimentary welcome drink and dessert',
    discount: 'Free',
    color: 'bg-primary/20 border-primary',
  },
];

export function CurrentOffers() {
  return (
    <section id="offers" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-semibold mb-4 tracking-widest">EXCLUSIVE DEALS</p>
          <h2 className="text-5xl font-serif font-bold text-foreground mb-4">
            Current Offers
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Limited time promotions to make your dining experience even more special
          </p>
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offers.map((offer) => (
            <Card
              key={offer.id}
              className={`p-8 border-2 ${offer.color} hover:shadow-2xl transition-all group cursor-pointer`}
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-serif font-bold text-foreground flex-1">
                  {offer.title}
                </h3>
                <Badge
                  variant="outline"
                  className="ml-4 bg-primary text-primary-foreground border-0 text-sm font-bold"
                >
                  {offer.discount}
                </Badge>
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {offer.description}
              </p>

              <button className="text-primary font-semibold hover:underline group-hover:translate-x-1 transition">
                Learn More →
              </button>
            </Card>
          ))}
        </div>

        {/* Fine Print */}
        <p className="text-center text-muted-foreground text-sm mt-12">
          *Terms and conditions apply. Valid for dine-in only. Offers cannot be combined.
        </p>
      </div>
    </section>
  );
}
