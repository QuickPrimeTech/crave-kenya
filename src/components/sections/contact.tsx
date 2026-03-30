"use client";
import { Card } from "@/components/ui/card";
import { Phone, Mail, Clock } from "lucide-react";
import { siteConfig } from "@/lib/config";
import { MapCard } from "../map-card";

export function ContactUs() {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-medium mb-3 tracking-widest uppercase">
            Get in Touch
          </p>
          <h2 className="text-4xl font-serif font-bold text-foreground mb-4">
            Contact Us
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We'd love to hear from you. Reach out for reservations, inquiries,
            or just to say hello.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info Cards */}
          <div className="space-y-4">
            <Card className="p-6 border-border bg-card hover:border-primary/20 transition-colors group">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    Call us for reservations and inquiries
                  </p>
                  <a
                    href={`tel:${siteConfig.restaurant.phone}`}
                    className="text-primary font-medium tabular-nums hover:underline"
                  >
                    {siteConfig.restaurant.phone}
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-border bg-card hover:border-primary/20 transition-colors group">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Email</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    Send us an email anytime
                  </p>
                  <a
                    href={`mailto:${siteConfig.restaurant.email}`}
                    className="text-primary font-medium hover:underline"
                  >
                    {siteConfig.restaurant.email}
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-border bg-card hover:border-primary/20 transition-colors group">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    Opening Hours
                  </h3>
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Mon - Sun</span>
                      <span className="font-medium tabular-nums">
                        {siteConfig.restaurant.hours.weekday}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">
                        Kitchen closes
                      </span>
                      <span className="font-medium tabular-nums">22:00</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
          <MapCard />
        </div>
      </div>
    </section>
  );
}
