"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { FadeIn, StaggerContainer, ScaleIn } from "./animations";

interface HeroImage {
  src: string;
  alt: string;
}

interface HeroProps {
  title: string;
  description: string;
  images: HeroImage[];
}

export default function Hero({ title, description, images }: HeroProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="bg-[#55483a] py-16 md:py-20 lg:py-28 overflow-hidden">
      {/* Content */}
      <div className="max-w-4xl mx-auto text-center px-4 md:px-8 lg:px-16 mb-12 md:mb-16 lg:mb-20">
        <FadeIn>
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-light tracking-[0.04em] leading-[1.2] mb-6">
            {title}
          </h1>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="text-white text-base md:text-lg font-light leading-[1.6]">
            {description}
          </p>
        </FadeIn>
      </div>

      {/* Image Gallery - Mobile: 2-column grid */}
      <div className="block lg:hidden px-4 md:px-8">
        <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 max-w-3xl mx-auto">
          {images.slice(0, 6).map((image, index) => (
            <ScaleIn key={index}>
              <motion.div
                className={`relative overflow-hidden ${
                  index === 0 || index === 5 ? "aspect-[3/4]" : "aspect-square"
                }`}
                whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              </motion.div>
            </ScaleIn>
          ))}
        </StaggerContainer>
      </div>

      {/* Image Gallery - Desktop: Original masonry layout */}
      <div className="hidden lg:flex justify-center items-center gap-4 px-4">
        <StaggerContainer className="flex justify-center items-center gap-4">
          {/* Image 1 - tall */}
          <ScaleIn>
            <motion.div
              className="relative w-[288px] h-[432px] flex-shrink-0 overflow-hidden"
              whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={images[0]?.src || ""}
                alt={images[0]?.alt || ""}
                fill
                className="object-cover"
              />
            </motion.div>
          </ScaleIn>

          {/* Image Column 2 */}
          <ScaleIn className="flex flex-col gap-4 flex-shrink-0">
            <motion.div
              className="relative w-[260px] h-[260px] overflow-hidden"
              whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={images[1]?.src || ""}
                alt={images[1]?.alt || ""}
                fill
                className="object-cover"
              />
            </motion.div>
            <motion.div
              className="relative w-[260px] h-[346px] overflow-hidden"
              whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={images[2]?.src || ""}
                alt={images[2]?.alt || ""}
                fill
                className="object-cover"
              />
            </motion.div>
          </ScaleIn>

          {/* Image 3 - large center */}
          <ScaleIn>
            <motion.div
              className="relative w-[518px] h-[724px] flex-shrink-0 overflow-hidden"
              whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={images[3]?.src || ""}
                alt={images[3]?.alt || ""}
                fill
                className="object-cover"
              />
            </motion.div>
          </ScaleIn>

          {/* Image Column 4 */}
          <ScaleIn className="flex flex-col gap-4 flex-shrink-0">
            <motion.div
              className="relative w-[260px] h-[346px] overflow-hidden"
              whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={images[4]?.src || ""}
                alt={images[4]?.alt || ""}
                fill
                className="object-cover"
              />
            </motion.div>
            <motion.div
              className="relative w-[260px] h-[260px] overflow-hidden"
              whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={images[5]?.src || ""}
                alt={images[5]?.alt || ""}
                fill
                className="object-cover"
              />
            </motion.div>
          </ScaleIn>

          {/* Image 5 - tall */}
          {images[6] && (
            <ScaleIn>
              <motion.div
                className="relative w-[288px] h-[432px] flex-shrink-0 overflow-hidden"
                whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={images[6].src}
                  alt={images[6].alt}
                  fill
                  className="object-cover"
                />
              </motion.div>
            </ScaleIn>
          )}
        </StaggerContainer>
      </div>
    </section>
  );
}
