'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Instagram as InstagramIcon } from 'lucide-react';

export function Instagram() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-semibold mb-4 tracking-widest">FOLLOW OUR JOURNEY</p>
          <h2 className="text-5xl font-serif font-bold text-foreground mb-4">
            Follow Us on Instagram
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Get a daily taste of what&apos;s happening at Crave Kenya Kilimani. Follow us for exclusive content, behind-the-scenes moments, and special promotions.
          </p>
        </div>

        {/* Instagram CTA */}
        <div className="bg-secondary rounded-lg p-12 text-center space-y-6 border border-border">
          <div className="flex justify-center">
            <div className="p-4 bg-background rounded-full">
              <InstagramIcon size={48} className="text-primary" />
            </div>
          </div>

          <div>
            <p className="text-xl font-semibold text-foreground mb-2">@crave_kenya</p>
            <p className="text-muted-foreground mb-6">
              Stay connected with our community of food enthusiasts and experience seekers
            </p>
          </div>

          <Link href="https://www.instagram.com/crave_kenya/" target="_blank" rel="noopener noreferrer">
            <Button 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-6 text-lg h-auto"
            >
              <InstagramIcon className="mr-2" size={20} />
              Follow @crave_kenya
            </Button>
          </Link>

          {/* Social Stats */}
          <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-border">
            <div>
              <p className="text-3xl font-bold text-primary">12K+</p>
              <p className="text-sm text-muted-foreground">Followers</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary">850+</p>
              <p className="text-sm text-muted-foreground">Posts</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary">45K+</p>
              <p className="text-sm text-muted-foreground">Engagements</p>
            </div>
          </div>
        </div>

        {/* Hashtags */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Use these hashtags to share your experience:</p>
          <div className="flex flex-wrap gap-3 justify-center">
            {['#CraveKenya', '#KilimaniFining', '#EatMore', '#NairobiEats', '#FoodieParadise'].map((tag) => (
              <span key={tag} className="bg-secondary px-4 py-2 rounded-full text-primary text-sm font-semibold">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
