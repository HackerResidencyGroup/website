"use client";

import Script from "next/script";

declare global {
  let Tally: { loadEmbeds(): void };
}

export default function ApplyPage() {
  return (
    <div className="min-h-screen px-4 py-16">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl tracking-tight">
            Apply to Hacker Residency
          </h1>
          <p className="text-lg opacity-60 max-w-2xl mx-auto">
            Join us for a month of building in Da Nang, Vietnam:{" "}
            <span className="inline-block">November 1-30, 2025</span>
          </p>
        </div>

        {/* Tally Form Embed */}
        <div className="w-full">
          <div className="overflow-hidden">
            <iframe
              data-tally-src="https://tally.so/embed/nGEE0L?alignLeft=1&hideTitle=1&dynamicHeight=1"
              loading="lazy"
              width="100%"
              height="600"
              className="w-full min-h-[600px]"
              title="Apply to Hacker Residency"
            />
          </div>
          <Script
            src="https://tally.so/widgets/embed.js"
            onLoad={() => Tally.loadEmbeds()}
          />
        </div>
      </div>
    </div>
  );
}
