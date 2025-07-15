"use client";

import Image from "next/image";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function LocationPage() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const villaImages = [
    {
      src: "/images/villa/villa-1.jpg",
      alt: "Villa living room with ocean view",
    },
    {
      src: "/images/villa/villa-2.jpg",
      alt: "Aerial view of villa and beachfront",
    },
    { src: "/images/villa/villa-3.jpg", alt: "Villa exterior with pool" },
    {
      src: "/images/villa/villa-4.jpg",
      alt: "Villa workspace and dining area",
    },
  ];
  return (
    <div className="min-h-screen px-4 py-16">
      <div className="max-w-4xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl tracking-tight">
            Da Nang, Vietnam
          </h1>
          <p className="text-lg opacity-60">
            A perfect blend of beach, city, and mountain.
          </p>
        </div>

        {/* Villa Images */}
        <div className="space-y-4">
          <div className="text-center">
            <h2 className="text-2xl mb-2">Your Villa</h2>
            <p className="text-sm opacity-60">
              Actual photos of the villa where you'll be staying
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {villaImages.map((image, index) => (
              <div
                key={index}
                className="relative aspect-[4/3] overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => {
                  setIndex(index);
                  setOpen(true);
                }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Location Details */}
        <div className="border-t pt-12">
          <h2 className="text-2xl mb-8 text-center">Why Da Nang?</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg mb-3">The City</h3>
              <p className="opacity-60 leading-relaxed">
                Da Nang is Vietnam's most livable city. Beautiful beaches,
                modern infrastructure, incredible food, and a thriving expat
                community make it perfect for digital nomads.
              </p>
            </div>
            <div>
              <h3 className="text-lg mb-3">The Villa</h3>
              <p className="opacity-60 leading-relaxed">
                A stunning 10-bedroom villa with pool, workspace, and ocean
                views. Located 5 minutes from the beach and 15 minutes from the
                city center. Fully equipped for focused work.
              </p>
            </div>
            <div>
              <h3 className="text-lg mb-3">The Weather</h3>
              <p className="opacity-60 leading-relaxed">
                November is ideal - dry season with temperatures around 25°C
                (77°F). Perfect for both work and beach activities.
              </p>
            </div>
            <div>
              <h3 className="text-lg mb-3">Getting There</h3>
              <p className="opacity-60 leading-relaxed">
                Da Nang International Airport has direct flights from major
                cities. Vietnam offers visa on arrival for most nationalities.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Yet Another React Lightbox */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={villaImages}
        styles={{ container: { backgroundColor: "rgba(0, 0, 0, 0.9)" } }}
      />
    </div>
  );
}
