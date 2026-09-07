"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  /** Extra delay in seconds, useful for staggering siblings. */
  delay?: number;
  className?: string;
  /** Distance in pixels the element travels while fading in. */
  y?: number;
  /** How much of the element must be visible before it animates. */
  amount?: number;
};

export function Reveal({
  children,
  delay = 0,
  className,
  y = 12,
  amount = 0.15,
}: Props) {
  const reduce = useReducedMotion();
  if (reduce) {
    return <div className={className}>{children}</div>;
  }
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
