"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { useRef } from "react";
import { FadeIn } from "./animations";

export default function AboutHeader() {
  const ref = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section
      ref={ref}
      className="relative py-16 md:py-20 lg:py-28 px-4 md:px-8 lg:px-16 overflow-hidden min-h-[300px] md:min-h-[400px]"
    >
      {/* Parallax Background */}
      {shouldReduceMotion ? (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1728488448101-fb760f074304?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080')",
          }}
        />
      ) : (
        <motion.div
          className="absolute inset-[-20%] bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1728488448101-fb760f074304?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080')",
            y: backgroundY,
            scale,
          }}
        />
      )}

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Content */}
      <div className="relative max-w-4xl mx-auto text-center">
        <FadeIn>
          <h2 className="text-white text-3xl md:text-4xl lg:text-[56px] font-light tracking-[0.04em] leading-[1.2] mb-6">
            About Tuskara
          </h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="text-white text-base md:text-lg font-light leading-[1.6]">
            Tuskara is a contemporary Dutch brand,<br className="hidden md:block" />
            born and inspired by boldness. made for professionals
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
