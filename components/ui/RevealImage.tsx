"use client";

import Image, { type ImageProps } from "next/image";
import { motion } from "framer-motion";
import { clipReveal, viewportOnce } from "@/lib/motion";
import { cn } from "@/lib/utils";

type Props = Omit<ImageProps, "alt"> & {
  alt: string;
  ratio?: string; // e.g. "4/5"
  className?: string;
  parallax?: boolean;
};

export function RevealImage({ ratio = "4/5", className, alt, ...img }: Props) {
  return (
    <motion.div
      className={cn("relative overflow-hidden bg-bg-surface", className)}
      style={{ aspectRatio: ratio }}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={clipReveal}
    >
      <motion.div
        className="absolute inset-0"
        variants={{
          hidden: { scale: 1.15 },
          visible: { scale: 1, transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1] } },
        }}
      >
        <Image alt={alt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" {...img} />
      </motion.div>
    </motion.div>
  );
}
