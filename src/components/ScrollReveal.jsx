import React from "react";
import { motion, useReducedMotion } from "motion/react";

/**
 * ScrollReveal - wraps children in a motion.div that fades + slides in
 * when entering the viewport. Respects prefers-reduced-motion.
 *
 * Props:
 *   delay    - seconds (default 0)
 *   y        - initial translateY in px (default 24)
 *   duration - seconds (default 0.6)
 *   once     - animate only once (default true)
 *   className, style - passthrough
 */
export default function ScrollReveal({
  children,
  delay = 0,
  y = 24,
  duration = 0.6,
  once = true,
  className,
  style,
}) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.15 }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}
