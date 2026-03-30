'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const dishes = [
  {
    id: 1,
    name: 'Grilled Salmon',
    description: 'Fresh Atlantic salmon with herb crust and seasonal vegetables',
    price: 'Ksh 1,850',
    image: '/dishes/grilled-salmon.jpg',
  },
  {
    id: 2,
    name: 'Beef Steak',
    description: 'Prime cut tenderloin with rosemary and signature sauce',
    price: 'Ksh 2,200',
    image: '/dishes/beef-steak.jpg',
  },
  {
    id: 3,
    name: 'Seafood Pasta',
    description: 'Tagliatelle with prawns, clams, and white wine sauce',
    price: 'Ksh 1,650',
    image: '/dishes/pasta-seafood.jpg',
  },
  {
    id: 4,
    name: 'Herb Chicken',
    description: 'Pan-seared chicken breast with seasonal accompaniments',
    price: 'Ksh 1,450',
    image: '/dishes/chicken-dish.jpg',
  },
  {
    id: 5,
    name: 'Vegetarian Bowl',
    description: 'Seasonal vegetables, grains, and tahini dressing',
    price: 'Ksh 1,200',
    image: '/dishes/vegetarian-bowl.jpg',
  },
];

export function PopularDishes() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedIndex);
      setCanScrollPrev(emblaApi.canScrollPrev());
      setCanScrollNext(emblaApi.canScrollNext());
    };

    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
    onSelect();
  }, [emblaApi]);

  const scroll = (direction: 'left' | 'right') => {
    if (emblaApi) {
      direction === 'left' ? emblaApi.scrollPrev() : emblaApi.scrollNext();
    }
  };

  return (
    <section id="dishes" className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-semibold mb-4 tracking-widest">OUR SPECIALTIES</p>
          <h2 className="text-5xl font-serif font-bold text-foreground mb-4">
            Popular Dishes
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Carefully curated dishes that showcase the finest ingredients and culinary techniques
          </p>
        </div>

        {/* Carousel */}
        <div className="overflow-hidden mb-8" ref={emblaRef}>
          <div className="flex gap-4 sm:gap-6">
            {dishes.map((dish) => (
              <div
                key={dish.id}
                className="flex-[0_0_100%] sm:flex-[0_0_calc(50%-0.75rem)] lg:flex-[0_0_calc(33.333%-1rem)] group cursor-pointer"
              >
                <div className="relative h-48 sm:h-64 lg:h-80 mb-6 rounded-lg overflow-hidden bg-background">
                  <Image
                    src={dish.image}
                    alt={dish.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="text-center px-2">
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-foreground mb-2">
                    {dish.name}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground mb-4 line-clamp-2">
                    {dish.description}
                  </p>
                  <p className="text-primary text-lg font-semibold">
                    {dish.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="flex justify-center items-center gap-4">
          <button
            onClick={() => scroll('left')}
            disabled={!canScrollPrev}
            className="p-2 sm:p-3 rounded-full bg-background border border-border hover:bg-primary hover:text-primary-foreground disabled:opacity-50 disabled:cursor-not-allowed transition"
            aria-label="Previous dishes"
          >
            <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
          </button>

          <div className="flex gap-2">
            {dishes.map((_, idx) => (
              <button
                key={idx}
                onClick={() => emblaApi?.scrollTo(idx)}
                className={`h-2 rounded-full transition ${
                  idx === selectedIndex
                    ? 'bg-primary w-6 sm:w-8'
                    : 'bg-muted w-2'
                }`}
                aria-label={`Go to dish ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={() => scroll('right')}
            disabled={!canScrollNext}
            className="p-2 sm:p-3 rounded-full bg-background border border-border hover:bg-primary hover:text-primary-foreground disabled:opacity-50 disabled:cursor-not-allowed transition"
            aria-label="Next dishes"
          >
            <ChevronRight size={20} className="sm:w-6 sm:h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
