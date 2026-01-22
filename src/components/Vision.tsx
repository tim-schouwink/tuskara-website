"use client";

import Image from "next/image";
import { SlideIn, FadeIn } from "./animations";
import { ParallaxImage } from "./animations";

export default function Vision() {
  return (
    <section className="bg-[#1a1a1a] py-16 md:py-20 lg:py-28 px-4 md:px-8 lg:px-16">
      <div className="max-w-[1312px] mx-auto">
        {/* Content Row */}
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-20 mb-12 md:mb-16 lg:mb-20">
          {/* Left Column - Heading */}
          <SlideIn direction="left" className="flex-1">
            <p className="text-white text-sm md:text-base font-medium leading-[1.5] mb-3 md:mb-4">
              Tuskara&apos;s vision
            </p>
            <h2 className="text-white text-2xl md:text-3xl lg:text-[48px] font-light tracking-[0.01em] leading-[1.2]">
              Rooted in Heritage. Built for the Future.
            </h2>
          </SlideIn>

          {/* Right Column - Body Text */}
          <SlideIn direction="right" className="flex-1">
            <p className="text-[#cccccc] text-base md:text-lg font-light leading-[1.6]">
              Tuskara is more than a brand; it is a universe where art, identity, and imagination converge.
              <br /><br />
              We create exclusive wallcoverings and rugs that do not merely fill a space, but transform it into another world, a world where dark tones, abstract energy, and cosmic inspiration merge with the rich, earthy power of our African roots. At Tuskara, we believe that walls and floors are not a backdrop, but the foundation of a story.
              <br /><br />
              Our designs are not decoration; they are dimensions.
              Every pattern is a statement: bold, fearless, and unapologetically unique. Whether it&apos;s raw, powerful textures with character, elegant lines that create tension, or abstract forms that play with light and shadow—Tuskara creates spaces you feel before you see them.
            </p>
          </SlideIn>
        </div>

        {/* Image */}
        <FadeIn>
          <ParallaxImage
            src="https://images.unsplash.com/photo-1680956987803-c0942e7b65c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
            alt="Tuskara interior design showcase"
            className="w-full h-[300px] md:h-[500px] lg:h-[738px]"
          />
        </FadeIn>
      </div>
    </section>
  );
}
