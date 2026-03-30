"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";

const CARDS = [
  {
    id: 1,
    views: "2.4M",
    likes: "318K",
    caption: "POV: you found the demo 👀",
    from: "from-violet-500",
    via: "via-fuchsia-500",
    to: "to-pink-500",
    emoji: "🎬",
  },
  {
    id: 2,
    views: "1.1M",
    likes: "98K",
    caption: "This page doesn't exist but the vibes do ✨",
    from: "from-cyan-400",
    via: "via-sky-500",
    to: "to-blue-600",
    emoji: "💫",
  },
  {
    id: 3,
    views: "4.7M",
    likes: "612K",
    caption: "404 but make it fashion 🔥",
    from: "from-rose-500",
    via: "via-red-500",
    to: "to-orange-400",
    emoji: "🚀",
  },
  {
    id: 4,
    views: "890K",
    likes: "74K",
    caption: "Demo only — follow for more 🎵",
    from: "from-emerald-400",
    via: "via-teal-500",
    to: "to-cyan-500",
    emoji: "🎵",
  },
  {
    id: 5,
    views: "3.2M",
    likes: "441K",
    caption: "You weren't supposed to find this 🤫",
    from: "from-amber-400",
    via: "via-orange-500",
    to: "to-rose-500",
    emoji: "🤫",
  },
];

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.75a8.23 8.23 0 004.81 1.55V6.86a4.85 4.85 0 01-1.04-.17z" />
    </svg>
  );
}

function getCardStyle(offset: number): {
  transform: string;
  filter: string;
  opacity: number;
  zIndex: number;
} {
  if (offset === 0)
    return {
      transform: "translateX(0px) rotate(0deg) scale(1)",
      filter: "blur(0px)",
      opacity: 1,
      zIndex: 10,
    };
  if (offset === -1)
    return {
      transform: "translateX(-145px) rotate(-42deg) scale(0.78)",
      filter: "blur(2px)",
      opacity: 0.7,
      zIndex: 7,
    };
  if (offset === 1)
    return {
      transform: "translateX(145px) rotate(42deg) scale(0.78)",
      filter: "blur(2px)",
      opacity: 0.7,
      zIndex: 7,
    };
  if (offset === -2)
    return {
      transform: "translateX(-240px) rotate(-48deg) scale(0.6)",
      filter: "blur(4px)",
      opacity: 0.4,
      zIndex: 4,
    };
  if (offset === 2)
    return {
      transform: "translateX(240px) rotate(48deg) scale(0.6)",
      filter: "blur(4px)",
      opacity: 0.4,
      zIndex: 4,
    };
  return {
    transform: `translateX(${offset * 120}px) rotate(${offset < 0 ? -52 : 52}deg) scale(0.4)`,
    filter: "blur(6px)",
    opacity: 0,
    zIndex: 1,
  };
}

export default function NotFound() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    containScroll: false,
  });

  const [selectedIndex, setSelectedIndex] = useState(2);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <div className="isolate relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-background px-4 py-26">
      {/* Background glows — use primary color so they shift between modes */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden
      >
        <div className="absolute left-[10%] top-[10%] h-96 w-96 rounded-full bg-primary/8 blur-[80px]" />
        <div className="absolute bottom-[10%] right-[8%] h-80 w-80 rounded-full bg-accent/20 blur-[80px]" />
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[100px]" />
      </div>

      <div className="relative z-10 flex w-full max-w-2xl flex-col items-center">
        {/* Badge */}
        <div className="mb-6 flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Demo Only
          </span>
        </div>

        {/* Headline */}
        <h1 className="mb-4 text-center text-5xl font-black leading-none tracking-tight text-foreground sm:text-6xl">
          Oops, this was
          <br />
          {/* Keep the gradient vivid — it's intentionally eye-catching */}
          <span className="bg-gradient-to-r from-rose-400 via-pink-500 to-orange-400 bg-clip-text text-transparent">
            just a demo.
          </span>
        </h1>

        <p className="mb-14 max-w-sm text-center text-base leading-relaxed text-muted-foreground">
          Only the homepage was made as content for TikTok &amp; Instagram. The
          real product doesn&apos;t exist — but the creator does&nbsp;👀
        </p>

        {/* ── FAN DECK CAROUSEL ── */}
        <div className="relative w-full">
          {/* Embla: invisible, only handles swipe/drag */}
          <div
            ref={emblaRef}
            className="absolute inset-0 z-20 cursor-grab overflow-hidden opacity-0 active:cursor-grabbing"
          >
            <div className="flex h-full items-center">
              {CARDS.map((c) => (
                <div key={c.id} className="min-w-0 flex-[0_0_220px]" />
              ))}
            </div>
          </div>

          {/* Fan deck */}
          <div className="relative flex h-[420px] items-center justify-center">
            {CARDS.map((card, i) => {
              const raw = i - selectedIndex;
              const len = CARDS.length;
              const offset =
                ((raw + len + Math.floor(len / 2)) % len) - Math.floor(len / 2);
              const s = getCardStyle(offset);

              return (
                <div
                  key={card.id}
                  className="absolute h-[360px] w-[210px]"
                  style={{
                    transform: s.transform,
                    filter: s.filter,
                    opacity: s.opacity,
                    zIndex: s.zIndex,
                    transition:
                      "transform 0.5s cubic-bezier(0.34,1.56,0.64,1), filter 0.4s ease, opacity 0.4s ease",
                  }}
                >
                  {/*
                    Card face: the thumbnail gradient is intentionally kept vivid
                    (from/via/to Tailwind colors). The card chrome (overlays,
                    captions) uses black/white with opacity since it sits on top
                    of the gradient image — same as real TikTok UI.
                  */}
                  <div
                    className={`relative h-full w-full overflow-hidden rounded-2xl bg-gradient-to-br ${card.from} ${card.via} ${card.to} ${
                      offset === 0
                        ? "shadow-[0_32px_80px_hsl(var(--background)/0.85),0_0_0_1px_hsl(var(--border)/0.5)]"
                        : "shadow-[0_8px_32px_hsl(var(--background)/0.6)]"
                    }`}
                  >
                    {/* Top bar */}
                    <div className="absolute left-3 right-3 top-3 flex items-center justify-between">
                      <div className="flex items-center gap-1 rounded-full bg-black/40 px-2.5 py-1 backdrop-blur-sm">
                        <span className="text-[10px] font-bold text-white">
                          ▶ {card.views}
                        </span>
                      </div>
                      <div className="rounded-full bg-black/40 p-1.5 backdrop-blur-sm">
                        <TikTokIcon className="h-3 w-3 text-white" />
                      </div>
                    </div>

                    {/* Center emoji */}
                    <div className="absolute inset-0 flex items-center justify-center text-6xl drop-shadow-xl">
                      {card.emoji}
                    </div>

                    {/* Bottom caption */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent px-3 pb-4 pt-10">
                      <p className="mb-2 text-[11px] font-semibold leading-snug text-white">
                        {card.caption}
                      </p>
                      <div className="flex items-center gap-2">
                        <div className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-rose-500 to-pink-600 text-[10px]">
                          🎭
                        </div>
                        <span className="text-[10px] text-white/70">
                          @yourhandle
                        </span>
                        <span className="ml-auto text-[10px] text-white/50">
                          ❤️ {card.likes}
                        </span>
                      </div>
                    </div>

                    {/* Shine on active card */}
                    {offset === 0 && (
                      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-transparent" />
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Prev / dots / Next */}
          <div className="relative z-30 mt-4 flex items-center justify-center gap-4">
            <button
              onClick={scrollPrev}
              aria-label="Previous"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-secondary text-sm text-secondary-foreground backdrop-blur-sm transition hover:bg-accent hover:text-accent-foreground"
            >
              ←
            </button>

            <div className="flex items-center gap-1.5">
              {scrollSnaps.map((_, i) => (
                <button
                  key={i}
                  onClick={() => emblaApi?.scrollTo(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-1.5 rounded-full border-0 p-0 transition-all duration-300 ${
                    i === selectedIndex
                      ? "w-5 bg-primary shadow-[0_0_8px_hsl(var(--primary)/0.6)]"
                      : "w-1.5 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={scrollNext}
              aria-label="Next"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-secondary text-sm text-secondary-foreground backdrop-blur-sm transition hover:bg-accent hover:text-accent-foreground"
            >
              →
            </button>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
          {/* Primary CTA — uses shadcn primary token */}
          <a
            href="https://www.tiktok.com/@yourhandle"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 rounded-full bg-primary px-7 py-3.5 text-sm font-bold text-primary-foreground shadow-[0_8px_32px_hsl(var(--primary)/0.35)] transition hover:-translate-y-0.5 hover:opacity-90 hover:shadow-[0_14px_40px_hsl(var(--primary)/0.5)] active:translate-y-0"
          >
            <TikTokIcon className="h-4 w-4" />
            Follow me on TikTok
          </a>

          {/* Secondary CTA — uses shadcn secondary token */}
          <a
            href="/"
            className="flex items-center gap-2 rounded-full border border-border bg-secondary px-7 py-3.5 text-sm font-semibold text-secondary-foreground transition hover:-translate-y-0.5 hover:bg-accent hover:text-accent-foreground active:translate-y-0"
          >
            ← Back to Homepage
          </a>
        </div>

        <p className="mt-12 text-center text-xs tracking-wide text-muted-foreground/40">
          Built as social media demo content · Not a real product
        </p>
      </div>
    </div>
  );
}
