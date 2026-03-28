'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-3xl font-bold text-primary">CRAVE</h1>
            <span className="text-xs text-muted-foreground ml-2">KILIMANI</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#dishes" className="text-sm text-foreground hover:text-primary transition">
              Dishes
            </Link>
            <Link href="#offers" className="text-sm text-foreground hover:text-primary transition">
              Offers
            </Link>
            <Link href="#about" className="text-sm text-foreground hover:text-primary transition">
              About
            </Link>
            <Link href="#testimonials" className="text-sm text-foreground hover:text-primary transition">
              Reviews
            </Link>
          </nav>

          <Button 
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
            size="sm"
          >
            Reserve Table
          </Button>
        </div>
      </div>
    </header>
  );
}
