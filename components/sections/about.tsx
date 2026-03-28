'use client';

export function About() {
  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <p className="text-primary text-sm font-semibold mb-4 tracking-widest">ABOUT CRAVE</p>
            <h2 className="text-5xl font-serif font-bold text-foreground mb-6">
              A Journey of Taste
            </h2>
            
            <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
              Crave Kenya Kilimani is Nairobi&apos;s premier fine dining destination. We believe that exceptional food is an art form, crafted with passion, precision, and the finest ingredients.
            </p>

            <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
              Our chef-led team brings international expertise combined with a celebration of East African flavors. Every dish tells a story, every meal creates a memory.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 py-8 border-t border-b border-border">
              <div>
                <p className="text-3xl font-bold text-primary mb-2">10+</p>
                <p className="text-sm text-muted-foreground">Years Excellence</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary mb-2">5k+</p>
                <p className="text-sm text-muted-foreground">Happy Guests</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary mb-2">40+</p>
                <p className="text-sm text-muted-foreground">Signature Dishes</p>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-6">
            <div className="p-8 bg-background rounded-lg border border-border hover:border-primary transition">
              <h3 className="text-xl font-bold text-primary mb-3">🍽️ Premium Ingredients</h3>
              <p className="text-muted-foreground">
                We source only the finest, freshest ingredients from trusted suppliers across Kenya and the world.
              </p>
            </div>

            <div className="p-8 bg-background rounded-lg border border-border hover:border-primary transition">
              <h3 className="text-xl font-bold text-primary mb-3">👨‍🍳 Expert Chefs</h3>
              <p className="text-muted-foreground">
                Our culinary team brings decades of combined experience and international training to every plate.
              </p>
            </div>

            <div className="p-8 bg-background rounded-lg border border-border hover:border-primary transition">
              <h3 className="text-xl font-bold text-primary mb-3">✨ Unforgettable Experience</h3>
              <p className="text-muted-foreground">
                From ambiance to service, every detail is designed to create a memorable dining experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
