'use client';

import Link from 'next/link';
import { Instagram } from 'lucide-react';
import { siteConfig } from '@/lib/config';

export function Footer() {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-4">{siteConfig.name}</h3>
            <p className="text-muted-foreground mb-4">
              {siteConfig.description}
            </p>
            <div className="flex gap-4">
              <Link 
                href={siteConfig.social.instagram.url}
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-primary hover:text-accent transition"
              >
                <Instagram size={20} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {siteConfig.navigation.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-muted-foreground hover:text-primary transition">
                    {item.label}
                  </Link>
                </li>
              ))}
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
              <li>📍 {siteConfig.restaurant.location}</li>
              <li>📞 {siteConfig.restaurant.phone}</li>
              <li>📧 {siteConfig.restaurant.email}</li>
              <li>🕐 {siteConfig.restaurant.hours.weekday}</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} {siteConfig.restaurant.name}. All rights reserved.
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
