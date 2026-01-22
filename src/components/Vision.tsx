"use client";

import { SlideIn, FadeIn, ParallaxImage } from "./animations";

interface VisionProps {
  label: string;
  title: string;
  description: string;
  image: string;
}

export default function Vision({ label, title, description, image }: VisionProps) {
  return (
    <section className="bg-[#1a1a1a] py-16 md:py-20 lg:py-28 px-4 md:px-8 lg:px-16">
      <div className="max-w-[1312px] mx-auto">
        {/* Content Row */}
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-20 mb-12 md:mb-16 lg:mb-20">
          {/* Left Column - Heading */}
          <SlideIn direction="left" className="flex-1">
            <p className="text-white text-sm md:text-base font-medium leading-[1.5] mb-3 md:mb-4">
              {label}
            </p>
            <h2 className="text-white text-2xl md:text-3xl lg:text-[48px] font-light tracking-[0.01em] leading-[1.2]">
              {title}
            </h2>
          </SlideIn>

          {/* Right Column - Body Text */}
          <SlideIn direction="right" className="flex-1">
            <p className="text-[#cccccc] text-base md:text-lg font-light leading-[1.6] whitespace-pre-line">
              {description}
            </p>
          </SlideIn>
        </div>

        {/* Image */}
        <FadeIn>
          <ParallaxImage
            src={image}
            alt="Tuskara interior design showcase"
            className="w-full h-[300px] md:h-[500px] lg:h-[738px]"
          />
        </FadeIn>
      </div>
    </section>
  );
}
