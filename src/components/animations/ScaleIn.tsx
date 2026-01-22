"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
import { scaleIn } from "@/lib/animationVariants";

interface ScaleInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function ScaleIn({
  children,
  className = "",
  delay = 0,
}: ScaleInProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      variants={scaleIn}
      transition={delay ? { delay } : undefined}
    >
      {children}
    </motion.div>
  );
}
