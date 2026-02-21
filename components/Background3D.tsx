"use client";

import InfiniteGallery from "./InfiniteGallery";

const images = [
  { src: "/images/1.jpg", alt: "Misty mountain landscape" },
  { src: "/images/2.jpg", alt: "Ocean waves at sunset" },
  { src: "/images/3.jpg", alt: "Dense forest canopy" },
  { src: "/images/4.jpg", alt: "Desert dunes at golden hour" },
  { src: "/images/5.jpg", alt: "Snow-capped peaks" },
  { src: "/images/6.jpg", alt: "Coastal cliffs" },
  { src: "/images/7.jpg", alt: "Wildflower meadow" },
  { src: "/images/8.jpg", alt: "Northern lights" },
];

export default function Background3D() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none" aria-hidden="true">
      <InfiniteGallery
        images={images}
        speed={0.6}
        zSpacing={3}
        visibleCount={12}
        falloff={{ near: 0.8, far: 14 }}
        className="h-full w-full"
      />
      {/* Overlay for text legibility */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
    </div>
  );
}
