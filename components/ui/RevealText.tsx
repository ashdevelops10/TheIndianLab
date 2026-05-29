"use client";

import { motion } from "framer-motion";
import { easeOutExpo, viewportOnce } from "@/lib/motion";
import { cn } from "@/lib/utils";

/**
 * RevealText — line-by-line, word-by-word reveal with overflow clipping.
 *
 * Markup: a word wrapped in *asterisks* renders as italic gold (italic-display).
 * The italic word also receives a 100ms delay bonus so it lands last.
 */
export function RevealText({
  text,
  className,
  as: As = "h2",
  delay = 0,
}: {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  delay?: number;
}) {
  const lines = text.split("\n");
  const Comp = motion[As as "h2"];
  return (
    <Comp className={cn(className)} initial="hidden" whileInView="visible" viewport={viewportOnce}>
      {lines.map((line, li) => {
        const words = line.split(" ");
        return (
          <span key={li} className="block overflow-hidden pb-[0.24em] -mb-[0.24em]">
            <span className="inline-flex flex-wrap">
              {words.map((raw, wi) => {
                const isItalic = /^\*.+\*$/.test(raw);
                const word = isItalic ? raw.slice(1, -1) : raw;
                const trailing = wi < words.length - 1 ? "\u00A0" : "";
                return (
                  <span key={wi} className="overflow-hidden pb-[0.24em] -mb-[0.24em]">
                    <motion.span
                      className={cn(
                        "inline-block will-change-transform",
                        isItalic && "italic-display",
                      )}
                      variants={{
                        hidden: { y: "110%" },
                        visible: { y: "0%" },
                      }}
                      transition={{
                        duration: 0.95,
                        ease: easeOutExpo,
                        delay: delay + (li * 0.09 + wi * 0.04) + (isItalic ? 0.12 : 0),
                      }}
                    >
                      {word}
                      {trailing}
                    </motion.span>
                  </span>
                );
              })}
            </span>
          </span>
        );
      })}
    </Comp>
  );
}
