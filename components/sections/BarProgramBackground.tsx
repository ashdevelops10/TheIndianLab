"use client";

import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

export function BarProgramBackground() {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 95, damping: 26, mass: 0.34 });
  const opacity = useTransform(progress, [0, 0.45, 1], shouldReduceMotion ? [0.4, 0.4, 0.4] : [0.22, 0.72, 0.28]);
  const scale = useTransform(progress, [0, 1], shouldReduceMotion ? [1, 1] : [1.06, 0.98]);
  const y = useTransform(progress, [0, 1], shouldReduceMotion ? ["0%", "0%"] : ["8%", "-6%"]);
  const filter = useTransform(progress, [0, 0.5, 1], ["blur(18px)", "blur(0px)", "blur(12px)"]);

  return (
    <motion.div
      ref={ref}
      aria-hidden
      style={{ opacity, scale, y, filter }}
      className="pointer-events-none absolute inset-0 z-0"
    >
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,9,7,0)_0%,rgba(35,12,15,0.14)_10%,rgba(88,23,34,0.34)_28%,rgba(120,31,44,0.52)_42%,rgba(74,19,29,0.34)_58%,rgba(13,9,7,0.94)_82%,rgba(13,9,7,1)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_30%,rgba(192,69,90,0.34),transparent_0%,transparent_58%),radial-gradient(circle_at_58%_20%,rgba(255,231,196,0.06),transparent_0%,transparent_26%)]" />
    </motion.div>
  );
}
