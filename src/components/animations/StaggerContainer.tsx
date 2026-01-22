"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
import { staggerContainer, staggerContainerFast } from "@/lib/animationVariants";

interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  fast?: boolean;
}

export default function StaggerContainer({
  children,
  className = "",
  fast = false,
}: StaggerContainerProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={fast ? staggerContainerFast : staggerContainer}
    >
      {children}
    </motion.div>
  );
}
