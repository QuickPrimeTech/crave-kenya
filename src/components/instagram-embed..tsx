"use client";
import Script from "next/script";
import { useEffect } from "react";

interface InstagramEmbedProps {
  url: string;
}

// Add this to handle the global Instagram object in TS
declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process: () => void;
      };
    };
  }
}

export default function InstagramEmbed({ url }: InstagramEmbedProps) {
  // Clean the URL to ensure it's the base reel link
  const baseUrl = url.split("?")[0];

  useEffect(() => {
    // Re-run Instagram's parser whenever the URL changes or component mounts
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    }
  }, [baseUrl]);

  return (
    <div className="w-full flex justify-center">
      <blockquote
        className="instagram-media"
        data-instgrm-captioned
        data-instgrm-permalink={`${baseUrl}/?utm_source=ig_embed&amp;utm_campaign=loading`}
        data-instgrm-version="14"
        style={{
          background: "#FFF",
          border: 0,
          borderRadius: "12px",
          boxShadow: "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
          margin: "1px",
          width: "100%", // Changed from 99.375% to fill container
          padding: 0,
        }}
      >
        {/* The inner placeholder content stays the same for SEO/Loading */}
        <div style={{ padding: "16px" }}>
          <a
            href={`${baseUrl}/?utm_source=ig_embed&amp;utm_campaign=loading`}
            className="flex flex-col items-center justify-center no-underline w-full"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* ... (Keep your existing SVG and Placeholder DIVs here) ... */}
            <div className="text-[#3897f0] font-sans font-semibold text-sm">
              View this post on Instagram
            </div>
          </a>
        </div>
      </blockquote>
      <Script
        src="https://www.instagram.com/embed.js"
        strategy="afterInteractive"
        onLoad={() => window.instgrm?.Embeds.process()}
      />
    </div>
  );
}
