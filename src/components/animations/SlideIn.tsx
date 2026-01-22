"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
import { slideInLeft, slideInRight } from "@/lib/animationVariants";

interface SlideInProps {
  children: ReactNode;
  className?: string;
  direction?: "left" | "right";
  delay?: number;
}

export default function SlideIn({
  children,
  className = "",
  direction = "left",
  delay = 0,
}: SlideInProps) {
  const shouldReduceMotion = useReducedMotion();
  const variants = direction === "left" ? slideInLeft : slideInRight;

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
      transition={delay ? { delay } : undefined}
    >
      {children}
    </motion.div>
  );
}
