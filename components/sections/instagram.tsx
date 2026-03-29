'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Heart } from 'lucide-react';
import { useState, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

const posts = [
  {
    id: 1,
    emoji: '🍽️',
    likes: '2,345',
    handle: '@crave_kenya',
    caption: 'Culinary excellence',
    views: '12.5K',
    gradient: 'from-purple-600 via-purple-400 to-pink-500',
    avatar: '👨‍🍳',
  },
  {
    id: 2,
    emoji: '🥩',
    likes: '3,821',
    handle: '@crave_kenya',
    caption: 'Prime cuts, perfect sear',
    views: '18.9K',
    gradient: 'from-cyan-500 via-blue-500 to-purple-600',
    avatar: '👨‍🍳',
  },
  {
    id: 3,
    emoji: '🍤',
    likes: '2,156',
    handle: '@crave_kenya',
    caption: 'Fresh seafood daily',
    views: '9.3K',
    gradient: 'from-rose-500 via-pink-500 to-red-500',
    avatar: '👨‍🍳',
  },
  {
    id: 4,
    emoji: '🌿',
    likes: '1,923',
    handle: '@crave_kenya',
    caption: 'Garden to table',
    views: '7.8K',
    gradient: 'from-green-500 via-emerald-500 to-teal-600',
    avatar: '👨‍🍳',
  },
  {
    id: 5,
    emoji: '✨',
    likes: '4,102',
    handle: '@crave_kenya',
    caption: 'Moments of pure indulgence',
    views: '22.1K',
    gradient: 'from-amber-400 via-yellow-400 to-orange-500',
    avatar: '👨‍🍳',
  },
];

export function Instagram() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

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

  const getCardStyle = (index: number) => {
    const offset = index - selectedIndex;
    let normalizedOffset = offset;

    if (normalizedOffset > 2) {
      normalizedOffset -= posts.length;
    } else if (normalizedOffset < -2) {
      normalizedOffset += posts.length;
    }

    let translateX = 0;
    let rotate = 0;
    let scale = 1;
    let blur = 0;
    let opacity = 0;
    let zIndex = 0;

    if (normalizedOffset === 0) {
      translateX = 0;
      rotate = 0;
      scale = 1;
      blur = 0;
      opacity = 1;
      zIndex = 10;
    } else if (normalizedOffset === 1 || normalizedOffset === -4) {
      translateX = 145;
      rotate = 42;
      scale = 0.78;
      blur = 2;
      opacity = 0.7;
      zIndex = 7;
    } else if (normalizedOffset === -1 || normalizedOffset === 4) {
      translateX = -145;
      rotate = -42;
      scale = 0.78;
      blur = 2;
      opacity = 0.7;
      zIndex = 7;
    } else if (normalizedOffset === 2 || normalizedOffset === -3) {
      translateX = 240;
      rotate = 48;
      scale = 0.6;
      blur = 4;
      opacity = 0.4;
      zIndex = 4;
    } else if (normalizedOffset === -2 || normalizedOffset === 3) {
      translateX = -240;
      rotate = -48;
      scale = 0.6;
      blur = 4;
      opacity = 0.4;
      zIndex = 4;
    }

    return {
      transform: `translateX(${normalizedOffset < 0 ? -Math.abs(translateX) : translateX}px) rotate(${normalizedOffset < 0 ? -Math.abs(rotate) : rotate}deg) scale(${scale})`,
      filter: `blur(${blur}px)`,
      opacity,
      zIndex,
    };
  };

  return (
    <section className="py-24 bg-background overflow-hidden">
      {/* Decorative glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/8 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/25 rounded-full px-4 py-2 mb-6">
            <div className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-sm font-semibold text-primary">FOLLOW OUR JOURNEY</span>
          </div>

          <h2 className="text-5xl font-serif font-bold text-foreground mb-4">
            Follow Us on Instagram
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our latest culinary creations, exclusive behind-the-scenes moments, and special offers
          </p>
        </div>

        {/* Carousel */}
        <div className="flex justify-center mb-12">
          <div className="relative w-full max-w-3xl h-[420px]">
            {/* Invisible embla carousel for swipe/drag */}
            <div ref={emblaRef} className="opacity-0 absolute inset-0">
              <div className="flex">
                {posts.map(() => (
                  <div key={Math.random()} className="flex-[0_0_100%]" />
                ))}
              </div>
            </div>

            {/* Card container */}
            <div className="relative w-full h-full flex items-center justify-center">
              {posts.map((post, index) => (
                <div
                  key={post.id}
                  className="absolute w-[210px] h-[360px] rounded-2xl transition-all duration-500"
                  style={{
                    ...getCardStyle(index),
                    transitionTimingFunction: 'cubic-bezier(0.34,1.56,0.64,1)',
                  }}
                >
                  {/* Card gradient background */}
                  <div
                    className={`w-full h-full rounded-2xl bg-gradient-to-br ${post.gradient} relative overflow-hidden`}
                  >
                    {/* Shine overlay (center card only) */}
                    {selectedIndex === index && (
                      <div
                        className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/10 to-transparent pointer-events-none"
                        style={{
                          boxShadow: '0 32px 80px rgba(0, 0, 0, 0.3)',
                        }}
                      />
                    )}

                    {/* Top-left: like count */}
                    <div className="absolute top-3 left-3 bg-black/40 backdrop-blur-sm rounded-full px-3 py-1.5 flex items-center gap-1">
                      <Heart size={14} className="text-red-400 fill-red-400" />
                      <span className="text-xs font-semibold text-white">{post.likes}</span>
                    </div>

                    {/* Top-right: Instagram logo */}
                    <div className="absolute top-3 right-3 bg-black/40 backdrop-blur-sm rounded-full p-1.5">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.057-1.645.069-4.849.069-3.204 0-3.584-.012-4.849-.069-3.259-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12c0-3.403 2.759-6.162 6.162-6.162 3.403 0 6.162 2.759 6.162 6.162 0 3.403-2.759 6.162-6.162 6.162-3.403 0-6.162-2.759-6.162-6.162zm2.889 0c0 1.821 1.472 3.293 3.273 3.293 1.821 0 3.293-1.472 3.293-3.293 0-1.821-1.472-3.293-3.293-3.293-1.801 0-3.273 1.472-3.273 3.293zm9.576-6.422c0 .795.645 1.44 1.44 1.44.795 0 1.44-.645 1.44-1.44-.001-.795-.645-1.44-1.44-1.44-.795 0-1.44.645-1.44 1.44z" />
                      </svg>
                    </div>

                    {/* Center emoji */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-6xl">{post.emoji}</div>
                    </div>

                    {/* Bottom gradient overlay with caption */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 h-24 flex flex-col justify-end">
                      <p className="text-xs text-white/90 leading-tight mb-2">{post.caption}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-xs">
                            {post.avatar}
                          </div>
                          <span className="text-xs font-semibold text-white">{post.handle}</span>
                        </div>
                        <span className="text-xs text-white/70">{post.views}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-6 mb-12">
          <button
            onClick={() => scroll('left')}
            className="p-2 bg-secondary border border-border text-secondary-foreground hover:bg-accent transition-colors rounded-lg"
            aria-label="Previous slide"
          >
            <ChevronLeft size={20} />
          </button>

          <div className="flex gap-2">
            {posts.map((_, index) => (
              <button
                key={index}
                onClick={() => emblaApi?.scrollTo(index)}
                className={`rounded-full transition-all duration-300 ${
                  index === selectedIndex
                    ? 'w-5 h-1.5 bg-primary'
                    : 'w-1.5 h-1.5 bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={() => scroll('right')}
            className="p-2 bg-secondary border border-border text-secondary-foreground hover:bg-accent transition-colors rounded-lg"
            aria-label="Next slide"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <Link href="https://www.instagram.com/crave_kenya/" target="_blank" rel="noopener noreferrer">
            <Button
              className="rounded-full bg-primary text-primary-foreground px-8 py-6 h-auto text-base font-semibold hover:-translate-y-0.5 transition-all duration-300"
              style={{
                boxShadow: '0 8px 24px hsl(var(--primary)/0.5)',
              }}
            >
              <svg
                className="w-5 h-5 mr-2"
                viewBox="0 0 24 24"
                fill="none"
              >
                <defs>
                  <linearGradient id="igGradient" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#f58529" />
                    <stop offset="50%" stopColor="#dd2a7b" />
                    <stop offset="100%" stopColor="#8134af" />
                  </linearGradient>
                </defs>
                <path
                  d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.057-1.645.069-4.849.069-3.204 0-3.584-.012-4.849-.069-3.259-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"
                  fill="url(#igGradient)"
                />
                <circle cx="12" cy="12" r="3.5" fill="url(#igGradient)" />
                <circle cx="17.8" cy="6.2" r="1.2" fill="url(#igGradient)" />
              </svg>
              Follow me on Instagram
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
