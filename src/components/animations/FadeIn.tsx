"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
import { fadeInUp, fadeIn } from "@/lib/animationVariants";

interface FadeInProps {
  children: ReactNode;
  className?: string;
  direction?: "up" | "none";
  delay?: number;
  duration?: number;
}

export default function FadeIn({
  children,
  className = "",
  direction = "up",
  delay = 0,
  duration,
}: FadeInProps) {
  const shouldReduceMotion = useReducedMotion();
  const variants = direction === "up" ? fadeInUp : fadeIn;

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={variants}
      transition={
        delay || duration
          ? { delay, duration: duration ?? 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
          : undefined
      }
    >
      {children}
    </motion.div>
  );
}
