"use client";

import { SlideIn, ParallaxImage } from "./animations";

interface CreatorProps {
  name: string;
  title: string;
  bio: string;
  image: string;
}

export default function Creator({ name, title, bio, image }: CreatorProps) {
  // Split bio into paragraphs
  const paragraphs = bio.split("\n\n");

  return (
    <section className="bg-black py-16 md:py-20 lg:py-28 px-4 md:px-8 lg:px-16">
      <div className="max-w-[1312px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-20 lg:min-h-[640px]">
          {/* Left Column - Content */}
          <SlideIn direction="left" className="flex-1 flex flex-col">
            <p className="text-white text-sm md:text-base font-medium leading-[1.5] mb-3 md:mb-4">
              {name}
            </p>
            <h2 className="text-white text-2xl md:text-3xl lg:text-[48px] font-light tracking-[0.01em] leading-[1.2] mb-4 md:mb-6">
              {title}
            </h2>
            <div className="text-[#cccccc] text-base md:text-lg font-light leading-[1.6] space-y-4">
              {paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </SlideIn>

          {/* Right Column - Image */}
          <SlideIn direction="right" className="flex-1">
            <ParallaxImage
              src={image}
              alt={`${name} - Creator of Tuskara`}
              className="w-full h-[400px] md:h-[500px] lg:h-full lg:min-h-[640px]"
            />
          </SlideIn>
        </div>
      </div>
    </section>
  );
}
