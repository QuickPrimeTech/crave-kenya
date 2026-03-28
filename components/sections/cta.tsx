'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function CTA() {
  return (
    <section className="py-20 bg-secondary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          <div>
            <p className="text-primary text-sm font-semibold mb-4 tracking-widest">READY TO JOIN US?</p>
            <h2 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-6">
              Reserve Your Table Today
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Don&apos;t miss out on an exceptional dining experience. Book your reservation now and let us create magic on your palate.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-6 text-lg h-auto"
            >
              Book Now <ArrowRight className="ml-2" size={20} />
            </Button>
            
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-1">Call Us</p>
              <p className="text-lg font-semibold text-primary">+254 XXX XXX XXX</p>
            </div>
          </div>

          {/* Hours & Info */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12 pt-12 border-t border-border">
            <div>
              <p className="text-sm text-muted-foreground mb-2">Opening Hours</p>
              <p className="font-semibold text-foreground">Mon - Sun</p>
              <p className="text-primary">11 AM - 11 PM</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-2">Location</p>
              <p className="font-semibold text-foreground">Kilimani</p>
              <p className="text-primary">Nairobi, Kenya</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-2">Email</p>
              <p className="font-semibold text-foreground">For Reservations</p>
              <p className="text-primary">book@cravekenya.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
