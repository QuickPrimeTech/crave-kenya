"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useTheme } from "next-themes";
import { Menu, Sun, Moon } from "lucide-react";
import { siteConfig } from "@/lib/config";
import { useEffect, useState } from "react";

export function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="sticky top-0 w-full border-b-2 z-50 bg-background/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <h1 className="text-3xl font-bold text-primary">
              {siteConfig.name}
            </h1>
            <span className="text-xs text-muted-foreground">
              {siteConfig.subtitle}
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {siteConfig.navigation.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm text-foreground hover:text-primary transition"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {mounted && (
              <Button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                variant={"outline"}
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <Sun size={18} className="text-foreground" />
                ) : (
                  <Moon size={18} className="text-foreground" />
                )}
              </Button>
            )}

            <Button
              className="hidden sm:flex bg-primary hover:bg-primary/90 text-primary-foreground"
              size="sm"
            >
              {siteConfig.cta.primary}
            </Button>

            <Sheet>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="text-foreground" size={20} />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-72 bg-card border-border p-6"
              >
                <div className="flex flex-col gap-6">
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-4">
                      {siteConfig.name}
                    </h3>
                    <nav className="flex flex-col gap-4">
                      {siteConfig.navigation.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          className="text-sm text-foreground hover:text-primary transition py-2 border-b border-border/30"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </nav>
                  </div>

                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground w-full">
                    {siteConfig.cta.primary}
                  </Button>

                  <div className="pt-4 border-t border-border">
                    <p className="text-xs text-muted-foreground mb-3">
                      Location
                    </p>
                    <p className="text-sm text-foreground font-medium">
                      {siteConfig.restaurant.location}
                    </p>
                    <p className="text-xs text-muted-foreground mt-3 mb-2">
                      Hours
                    </p>
                    <p className="text-sm text-foreground">
                      {siteConfig.restaurant.hours.weekday}
                    </p>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
