'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
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
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % dishes.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + dishes.length) % dishes.length);
  };

  const getVisibleDishes = () => {
    const visible = 3;
    const items = [];
    for (let i = 0; i < visible; i++) {
      items.push(dishes[(currentIndex + i) % dishes.length]);
    }
    return items;
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
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {getVisibleDishes().map((dish) => (
              <div
                key={dish.id}
                className="group cursor-pointer"
              >
                <div className="relative h-80 mb-6 rounded-lg overflow-hidden bg-background">
                  <Image
                    src={dish.image}
                    alt={dish.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-serif font-bold text-foreground mb-2">
                    {dish.name}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {dish.description}
                  </p>
                  <p className="text-primary text-lg font-semibold">
                    {dish.price}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Controls */}
          <div className="flex justify-center gap-4">
            <button
              onClick={prev}
              className="p-3 rounded-full bg-background hover:bg-primary hover:text-primary-foreground transition"
              aria-label="Previous dishes"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={next}
              className="p-3 rounded-full bg-background hover:bg-primary hover:text-primary-foreground transition"
              aria-label="Next dishes"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {dishes.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition ${
                  idx === currentIndex
                    ? 'bg-primary w-8'
                    : 'bg-muted w-2'
                }`}
                aria-label={`Go to dish ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
