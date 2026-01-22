"use client";

import { SlideIn, ParallaxImage } from "./animations";

export default function Creator() {
  return (
    <section className="bg-black py-16 md:py-20 lg:py-28 px-4 md:px-8 lg:px-16">
      <div className="max-w-[1312px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-20 lg:min-h-[640px]">
          {/* Left Column - Content */}
          <SlideIn direction="left" className="flex-1 flex flex-col">
            <p className="text-white text-sm md:text-base font-medium leading-[1.5] mb-3 md:mb-4">
              Dennis van Zanden
            </p>
            <h2 className="text-white text-2xl md:text-3xl lg:text-[48px] font-light tracking-[0.01em] leading-[1.2] mb-4 md:mb-6">
              About the creator
            </h2>
            <div className="text-[#cccccc] text-base md:text-lg font-light leading-[1.6] space-y-4">
              <p>
                Dennis van Zanden has been in the wallpaper industry for over twenty years, blending his South African roots with Dutch heritage into a unique style. He&apos;s a big-picture thinker with a love for exploring uncharted territory, always finding fresh ways to push the limits of mixed media design.
              </p>
              <p>
                Dennis&apos;s passion? Turning plain surfaces into striking pieces that catch the eye, using techniques that are both innovative and out of the ordinary. Known for his rebellious side, he&apos;s more than just a designer, he&apos;s a dreamer, pouring his love of nature, space and the universe in every piece he creates.
              </p>
              <p>
                For him, real skill isn&apos;t just about mastering design but also about finding peace and joy in the process. His work is a true reflection of that belief, combining creative freedom with a deep, heartfelt connection to the world around him.
              </p>
            </div>
          </SlideIn>

          {/* Right Column - Image */}
          <SlideIn direction="right" className="flex-1">
            <ParallaxImage
              src="https://images.unsplash.com/photo-1694458309314-b2abd0dab03c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
              alt="Dennis van Zanden - Creator of Tuskara"
              className="w-full h-[400px] md:h-[500px] lg:h-full lg:min-h-[640px]"
            />
          </SlideIn>
        </div>
      </div>
    </section>
  );
}
