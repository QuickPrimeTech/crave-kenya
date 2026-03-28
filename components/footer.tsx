'use client';

import Link from 'next/link';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-4">CRAVE</h3>
            <p className="text-muted-foreground mb-4">
              Kilimani&apos;s premier fine dining destination for exceptional cuisine and unforgettable moments.
            </p>
            <div className="flex gap-4">
              <Link href="https://instagram.com/crave_kenya" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent transition">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="text-primary hover:text-accent transition">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="text-primary hover:text-accent transition">
                <Twitter size={20} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="#dishes" className="text-muted-foreground hover:text-primary transition">Menu</Link></li>
              <li><Link href="#offers" className="text-muted-foreground hover:text-primary transition">Offers</Link></li>
              <li><Link href="#about" className="text-muted-foreground hover:text-primary transition">About Us</Link></li>
              <li><Link href="#testimonials" className="text-muted-foreground hover:text-primary transition">Reviews</Link></li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Information</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-muted-foreground hover:text-primary transition">Reservations</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary transition">Private Events</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary transition">Catering</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary transition">Gift Cards</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>📍 Kilimani, Nairobi</li>
              <li>📞 +254 XXX XXX XXX</li>
              <li>📧 book@cravekenya.com</li>
              <li>🕐 Mon - Sun: 11 AM - 11 PM</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Crave Kenya Kilimani. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="#" className="text-muted-foreground hover:text-primary text-sm transition">
                Privacy Policy
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary text-sm transition">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
