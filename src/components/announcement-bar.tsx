"use client";

import { MapPin, Phone, Clock } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

const LOCATION = {
  label: "Ring Rd Kilimani, Zafara Tower",
  href: "https://maps.google.com/?q=Zafara+Tower+Kilimani",
};

const PHONE = {
  label: "+254 756 600 600",
  href: "tel:+254756600600",
};

function getIsOpen(): boolean {
  const now = new Date();
  const eatOffset = 3 * 60;
  const utcMinutes = now.getUTCHours() * 60 + now.getUTCMinutes();
  const eatMinutes = (utcMinutes + eatOffset) % (24 * 60);
  const openFrom = 6 * 60;
  const openUntil = 1 * 60;
  return eatMinutes >= openFrom || eatMinutes < openUntil;
}

interface BarItemProps {
  href?: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

function BarItem({ href, icon, children, className }: BarItemProps) {
  const baseClass = cn(
    "flex items-center gap-2 px-4 py-2 group transition-colors duration-200 hover:text-primary",
    className,
  );

  const iconWrapper = (
    <span className="text-muted-foreground group-hover:text-primary transition-colors duration-200 shrink-0">
      {icon}
    </span>
  );

  if (href) {
    return (
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel="noopener noreferrer"
        className={baseClass}
      >
        {iconWrapper}
        {children}
      </a>
    );
  }

  return (
    <div className={baseClass}>
      {iconWrapper}
      {children}
    </div>
  );
}

export function AnnouncementBar() {
  const isOpen = getIsOpen();

  return (
    <div
      className="w-full bg-background border-b border-border relative overflow-hidden"
      role="banner"
      aria-label="Restaurant info"
    >
      {/* Subtle brand shimmer using primary color */}
      <div className="absolute inset-0 bg-linear-to-r from-transparent via-primary/20 to-transparent pointer-events-none" />

      {/* ── DESKTOP layout ── */}
      <div className="hidden md:flex items-center justify-center h-11 px-6 max-w-7xl mx-auto gap-0 relative">
        <BarItem
          href={LOCATION.href}
          icon={<MapPin size={14} strokeWidth={2} />}
        >
          <span className="text-[11px] tracking-widest uppercase text-muted-foreground font-medium mr-1">
            Find us
          </span>
          <span className="text-[13px] text-foreground tracking-tight">
            Ring Rd Kilimani,{" "}
            <span className="text-primary font-semibold">Zafara Tower</span>
          </span>
        </BarItem>

        <Separator orientation="vertical" className="h-4 bg-border mx-1" />

        <BarItem href={PHONE.href} icon={<Phone size={14} strokeWidth={2} />}>
          <span className="text-[11px] tracking-widest uppercase text-muted-foreground font-medium mr-1">
            Call us
          </span>
          <span className="text-[13px] text-primary font-semibold tracking-tight">
            {PHONE.label}
          </span>
        </BarItem>

        <Separator orientation="vertical" className="h-4 bg-border mx-1" />

        <BarItem icon={<Clock size={14} strokeWidth={2} />}>
          <span className="text-[11px] tracking-widest uppercase text-muted-foreground font-medium mr-1">
            Hours
          </span>
          <span className="text-[13px] text-foreground tracking-tight">
            Daily{" "}
            <span className="text-primary font-semibold">6 AM – 1 AM</span>
          </span>
          <OpenBadge isOpen={isOpen} />
        </BarItem>
      </div>

      {/* ── MOBILE layout ── */}
      <div className="flex flex-col items-center md:hidden py-2 divide-y divide-border relative">
        <BarItem
          href={LOCATION.href}
          icon={<MapPin size={14} />}
          className="w-full justify-center"
        >
          <span className="text-[13px] text-foreground">
            Kilimani,{" "}
            <span className="text-primary font-semibold">Zafara Tower</span>
          </span>
        </BarItem>

        <BarItem
          href={PHONE.href}
          icon={<Phone size={14} />}
          className="w-full justify-center"
        >
          <span className="text-[13px] text-primary font-semibold">
            {PHONE.label}
          </span>
        </BarItem>

        <BarItem icon={<Clock size={14} />} className="w-full justify-center">
          <span className="text-[13px] text-foreground">Daily 6 AM – 1 AM</span>
          <OpenBadge isOpen={isOpen} />
        </BarItem>
      </div>
    </div>
  );
}

function OpenBadge({ isOpen }: { isOpen: boolean }) {
  return (
    <span
      className={cn(
        "ml-3 inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[10px] font-bold tracking-tighter uppercase border transition-colors",
        isOpen
          ? "bg-primary/10 text-primary border-primary/20"
          : "bg-destructive/10 text-destructive border-destructive/20",
      )}
    >
      <span
        className={cn(
          "inline-block w-1.5 h-1.5 rounded-full",
          isOpen ? "bg-primary animate-pulse" : "bg-destructive",
        )}
      />
      {isOpen ? "Open" : "Closed"}
    </span>
  );
}
