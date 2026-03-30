"use client";

import Link from "next/link";
import {
  Instagram,
  Facebook,
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowUpRight,
} from "lucide-react";
import { FaTiktok } from "react-icons/fa";
import { siteConfig } from "@/lib/config";
import { cn } from "@/lib/utils";
import { Logo } from "./logo";

interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
  hoverClass: string;
  hoverIconClass?: string;
}

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks: SocialLink[] = [
    {
      name: siteConfig.social.instagram.url,
      url: siteConfig.social.instagram?.url || "#",
      icon: <Instagram size={18} />,
      hoverClass: "hover:bg-pink-500 hover:shadow-pink-500/20",
      hoverIconClass: "group-hover:text-white",
    },
    {
      name: "Facebook",
      url: siteConfig.social.facebook.url,
      icon: <Facebook size={18} />,
      hoverClass: "hover:bg-[#1877F2] hover:shadow-blue-500/20",
      hoverIconClass: "group-hover:text-white",
    },
    {
      name: "TikTok",
      url: "#",
      icon: <FaTiktok size={16} />,
      hoverClass:
        "hover:bg-black hover:shadow-black/20 dark:hover:border-white dark:hover:shadow-white/20",
      hoverIconClass: "group-hover:text-white",
    },
  ];

  const quickLinks = siteConfig.navigation;

  const services = [
    "Reservations",
    "Private Events",
    "Catering",
    "Gift Cards",
    "Careers",
  ];

  const legalLinks = ["Privacy Policy", "Terms of Service", "Cookie Settings"];

  return (
    <footer className="bg-muted/30 border-t border-border relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-background/50 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <Logo size={32} />
              <h3 className="text-3xl font-serif font-bold text-primary tracking-tight">
                {siteConfig.name}
              </h3>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-8 max-w-xs">
              {siteConfig.description}
            </p>

            {/* Social Links - Mapped */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "group w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center text-muted-foreground transition-all duration-300",
                    social.hoverClass,
                  )}
                  aria-label={social.name}
                >
                  <span
                    className={cn(
                      "transition-colors duration-300",
                      social.hoverIconClass,
                    )}
                  >
                    {social.icon}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-6 text-sm tracking-wider uppercase">
              Quick Links
            </h4>
            <ul className="space-y-4">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="group flex items-center text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-foreground mb-6 text-sm tracking-wider uppercase">
              Services
            </h4>
            <ul className="space-y-4">
              {services.map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="group flex items-center text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                  >
                    <span>{item}</span>
                    <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-foreground mb-6 text-sm tracking-wider uppercase">
              Contact
            </h4>
            <ul className="space-y-5">
              <li>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(siteConfig.restaurant.location)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-3 text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-primary/60 group-hover:text-primary transition-colors" />
                  <span className="text-sm leading-relaxed">
                    {siteConfig.restaurant.location}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.restaurant.phone}`}
                  className="group flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  <Phone className="w-4 h-4 shrink-0 text-primary/60 group-hover:text-primary transition-colors" />
                  <span className="text-sm tabular-nums">
                    {siteConfig.restaurant.phone}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.restaurant.email}`}
                  className="group flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  <Mail className="w-4 h-4 shrink-0 text-primary/60 group-hover:text-primary transition-colors" />
                  <span className="text-sm">{siteConfig.restaurant.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <Clock className="w-4 h-4 mt-0.5 shrink-0 text-primary/60" />
                <div className="text-sm">
                  <p className="font-medium text-foreground mb-0.5">
                    Open Daily
                  </p>
                  <p className="tabular-nums">
                    {siteConfig.restaurant.hours.weekday}
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-xs">
            © {currentYear} {siteConfig.restaurant.name}. All rights reserved.
          </p>
          <div className="flex gap-8">
            {legalLinks.map((link) => (
              <Link
                key={link}
                href="#"
                className="text-muted-foreground hover:text-primary text-xs transition-colors duration-200"
              >
                {link}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
