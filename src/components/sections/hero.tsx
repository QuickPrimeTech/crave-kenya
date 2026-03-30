"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { siteConfig } from "@/lib/config";
import { useEffect, useState } from "react";

const slides = [
  {
    image_url:
      "https://res.cloudinary.com/quick-prime-tech/image/upload/v1774882029/imgi_2_488954049_1157959866345009_8879220912734988193_n_qkyscp.jpg",
    lqip: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAA0JCgsKCA0LCgsODg0PEyAVExISEyccHhcgLikxMC4pLSwzOko+MzZGNywtQFdBRkxOUlNSMj5aYVpQYEpRUk//2wBDAQ4ODhMREyYVFSZPNS01T09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0//wAARCAAYACoDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAQFAv/EAC0QAAIBAwMDAQYHAAAAAAAAAAECAwAEERIhMQVBUSITMmGBscEUJDNCcZGh/8QAGAEBAQADAAAAAAAAAAAAAAAABAMBAgX/xAAdEQEAAgIDAQEAAAAAAAAAAAABAAIDERIhMUFx/9oADAMBAAIRAxEAPwCYtytmiyIfzDDSoGRjB535rNjbQMk93eMnsJfT7PBXW/bVge7xkgn7UkmmW8YyphY48RZOOMCq9jLNfqWtoC0QXQTcBdKkD09hntzseN6lnUr1KYjdvNyiBa9PtobaCMJaFzhpRqDZOchTudx/lL9VW3e30W1k00jJp1rlCN/2jkg58Vsxy2vTJjOpRoZNMcaEEEHfIOSPPB24FLK9zHerMZNCZJ1ggbDkZI+GM8UDXe32MyLx4lf3UkwyTywiGRGEq4JC8N2z/VD2ml2VIwFBwB+II2/inhHLHfyXEjRvLMgOwCjk/MbDGfjzShmsixMlykbn3kJc6T4rpUVqLA5ALIRaSVVtxBGf1fU7EYIHYff51a6Ldp0+3ke5jeVJNONGPRgn6k+aKKzepY0zUUeo811NeTRzxymOFXKRR4yx2PbydyBvjHfNT7m4FvMHcLcOCEKbAKBnYBRjJBHjfJooodal3T5L4ctuNrfZPub2dIyw9JnZtk3BHcg/A/WorW1y7FkhdlJyDnkUUU0kJ//Z",
    eyebrow: "FRESH FROM MOMBASA",
    heading: "Seafood Like\nNowhere Else",
    body: "Sourced daily from the Kenyan coast and cooked to order — our seafood brings the ocean straight to your table in the heart of Kilimani.",
  },
  {
    image_url:
      "https://res.cloudinary.com/quick-prime-tech/image/upload/v1774707187/caption_vfvilg.jpg",
    lqip: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAA0JCgsKCA0LCgsODg0PEyAVExISEyccHhcgLikxMC4pLSwzOko+MzZGNywtQFdBRkxOUlNSMj5aYVpQYEpRUk//2wBDAQ4ODhMREyYVFSZPNS01T09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0//wAARCAAcACUDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAMCBAUB/8QAKBAAAgIBAwMEAgMBAAAAAAAAAQIDEQQAEiEFMUETIlFxYZEUQ6Hh/8QAGAEBAQADAAAAAAAAAAAAAAAAAgMAAQT/xAAdEQACAwACAwAAAAAAAAAAAAAAAQIRIQMSIzFR/9oADAMBAAIRAxEAPwCUkk3TsYzT1KjkMQSN17ex/A+OO351RhWOTMRpGkqV9yA2QR37/FX35rWsnTHGAElmUybz/XdD4sg6ckOLj9QimN7vUCKQDW30/j7GuVcE21eBc4mfBl5gy3TI3wCtjUoIUfQHNV8ef1HOy3yunbjKDucKWK1zYN34I7H61v5yQZkEW9mWP1QQdp5NHgcazOspEjY8K3EkUm9wt8MWHIPngn/NVfHOF7aDFp1hTkzsuMKsJyDEB7fRagKNVzz2A76NPHTpsnLyJFf0zYB9oYtx3P70al5fgqivbJSdQZ2McLsjxuDY+LFc4oUA9tE32vS8WJHc2D2PnUMrCgknVmU3dd/GqNtFlTLUebEUkyM7qAYFwQLLbRXIFH5886RkCGTBWMZAnmJJ3K7cqAT7u/wDzQvT8PaCuOq0dwAugdcgwMZJHUR3uCgm6J4/Gt21hnVPS70OLElim/kSTZMnqWdiytsHgcfWjVOOBIJJFjFDdo008A6s//9k=",
    eyebrow: "WHERE NAIROBI DINES",
    heading: "A View Worth\nSavouring",
    body: "Nestled opposite Yaya Centre in the Zarafa building, Crave's relaxed terrace ambience makes every meal feel like a special occasion.",
  },
  {
    image_url:
      "https://res.cloudinary.com/quick-prime-tech/image/upload/v1774882793/imgi_128_1765305002916-ndzxc_lsejqk.jpg",
    lqip: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAA0JCgsKCA0LCgsODg0PEyAVExISEyccHhcgLikxMC4pLSwzOko+MzZGNywtQFdBRkxOUlNSMj5aYVpQYEpRUk//2wBDAQ4ODhMREyYVFSZPNS01T09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0//wAARCAAcACYDASIAAhEBAxEB/8QAGgAAAwEBAQEAAAAAAAAAAAAAAAMEBQYBAv/EAC0QAAIBAgUCBAUFAAAAAAAAAAECAwQRAAUSITEiURNBYYEGFDKRoUJxseHw/8QAFwEBAQEBAAAAAAAAAAAAAAAAAwQBAv/EAB4RAAICAgIDAAAAAAAAAAAAAAECABEDEiEiEzFh/9oADAMBAAIRAxEAPwDbqpsxGZzEyTLSrbQAqhTsL3JF+cIzKWGvpYIZ4tJkUsJD9KncAEnyNvtiU/NxCSpWZpOvTpmNuNr+e23P4GKc4nFTT00arG4c6zbcbD0v3xGpB2uVeHWvs9ysQ0tRJqqYTI2q6x7Rne/uw/3OM34lSoM6szbIuwZejjcgfvj4zNzBRuNaFSpt1qAdJBuDe368t9vtVRVIky0V9W7SoQI/DJuot258jvvjB2SvQiuuj2DZjsllmehEcrPI0ZsXc3J9PbjBhtLKTTxARvEx1XshA2PG4H8f2YoU8SVxTRGZVT+KhTL4pgByTbq7kYmijkCTLWM0jygSKiIOhhwQOPbGhy2+M+tjWfN4IH1BJIzq0sRe19vxgsnQWImO2NGEmRLWsZpK0Sx6V1Ap2v8AkXIwo5siQxRpSqlGh6SrDUQPPTbnFeRyNUQCR7DxvELKosBtHwPc45+JwktRSeGrJT2CFib7sRvv6Y5Z2CAxMaK2Qhp19NUQzU0csLMQ41dXO/ftgxi0dRLHVfJ31IiMQzfUbNYemDDBrEApzxP/2Q==",
    eyebrow: "RATED 5 STARS",
    heading: "Every Craving,\nSatisfied",
    body: "From spicy calamari and grilled steaks to chocolate fondant and specialty coffee — Crave's menu is a journey your taste buds won't forget.",
  },
];

export function Hero() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
        setAnimating(false);
      }, 600); // half of transition for crossfade
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[current];

  return (
    <section className="relative min-h-screen pt-20 pb-8 flex items-center overflow-hidden">
      {/* Crossfading background images */}
      {slides.map((s, i) => (
        <div
          key={i}
          className="absolute inset-0 z-0 transition-opacity duration-1000"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          <Image
            src={s.image_url}
            alt={`Crave Kenya slide ${i + 1}`}
            fill
            sizes="100vw"
            className="object-cover"
            priority={i === 0}
            placeholder="blur"
            blurDataURL={s.lqip}
          />
        </div>
      ))}

      {/* Lighter gradient — only enough to make text legible */}
      <div className="absolute inset-0 z-10 bg-linear-to-r from-black/60 via-black/30 to-transparent" />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-xl">
          {/* Eyebrow */}
          <p
            className="text-white/80 text-xs sm:text-sm font-semibold mb-3 tracking-widest transition-opacity duration-500"
            style={{ opacity: animating ? 0 : 1 }}
          >
            {slide.eyebrow}
          </p>

          {/* Heading */}
          <h1
            className="text-5xl sm:text-6xl md:text-7xl font-serif font-bold text-white mb-5 leading-tight whitespace-pre-line transition-opacity duration-500"
            style={{ opacity: animating ? 0 : 1 }}
          >
            {slide.heading}
          </h1>

          {/* Body */}
          <p
            className="text-base sm:text-lg text-white/80 mb-8 max-w-md leading-relaxed transition-opacity duration-500"
            style={{ opacity: animating ? 0 : 1 }}
          >
            {slide.body}
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-3">
            <Button size={"xl"} className={"flex-1"}>
              Make a Reservation
            </Button>
            <Button size={"xl"} variant="outline" className={"flex-1"}>
              View Menu
            </Button>
          </div>

          {/* Slide indicators */}
          <div className="flex gap-2 mt-10">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-1 rounded-full transition-all duration-300 ${
                  i === current ? "w-8 bg-primary" : "w-4 bg-white/40"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          <p className="mt-8 text-xs sm:text-sm text-white/60">
            <span>{siteConfig.restaurant.location}</span>
            {" | "}
            <span>{siteConfig.restaurant.phone}</span>
          </p>
        </div>
      </div>
    </section>
  );
}
