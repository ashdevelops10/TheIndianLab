"use client";

import { motion, useMotionValueEvent, useReducedMotion, useScroll, useSpring } from "framer-motion";
import type { CSSProperties } from "react";
import { useRef, useState } from "react";

const clamp = (value: number, min: number, max: number) => Math.max(min, Math.min(max, value));
const ease = (value: number) =>
  value < 0.5 ? 4 * value * value * value : 1 - Math.pow(-2 * value + 2, 3) / 2;

function tiltFor(progress: number) {
  const rest = 4;
  const pour = 56;

  if (progress < 0.14) return rest;
  if (progress < 0.26) return rest + (pour - rest) * ease(clamp((progress - 0.14) / 0.12, 0, 1));
  if (progress < 0.82) return pour;
  if (progress < 0.94) return pour + (rest - pour) * ease(clamp((progress - 0.82) / 0.12, 0, 1));

  return rest;
}

export function BarProgramReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const [progress, setProgress] = useState(shouldReduceMotion ? 0.82 : 0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 84%", "end 26%"] });
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.28 });

  useMotionValueEvent(smoothProgress, "change", (value) => {
    setProgress(shouldReduceMotion ? 0.82 : clamp(value, 0, 1));
  });

  const fill = ease(clamp((progress - 0.24) / 0.62, 0, 1));
  const bottom = 320;
  const top = 178;
  const surfaceY = bottom - fill * (bottom - top);
  const fillHeight = bottom - surfaceY + 6;
  const fillRatio = (bottom - surfaceY) / (bottom - top);
  const surfaceRadius = 8 + 66 * fillRatio;
  const showSurface = fill > 0.02;
  const enter = ease(clamp(progress / 0.14, 0, 1));
  const exit = ease(clamp((progress - 0.9) / 0.1, 0, 1));
  const mouthX = 242;
  const mouthY = 118;
  const bottleX = mouthX + (1 - enter) * 78 + exit * 36;
  const bottleY = mouthY + (1 - enter) * -186 - exit * 150;
  const tilt = tiltFor(progress);
  const pouring = enter > 0.98 && tilt > 30 && fill < 0.985 && exit < 0.05;
  const streamOpacity = pouring ? clamp((tilt - 30) / 22, 0, 1) : 0;
  const wobble = Math.sin(progress * 70) * 1.3;
  const dropOneOpacity = pouring ? 0.45 + 0.45 * Math.abs(Math.sin(progress * 40)) : 0;
  const dropTwoOpacity = pouring ? 0.35 + 0.35 * Math.abs(Math.cos(progress * 46)) : 0;

  return (
    <div
      ref={ref}
      className="relative min-h-[280px] w-full overflow-hidden bg-bg-velvet sm:min-h-[340px] md:min-h-[420px]"
      style={{
        "--wine": "#8e2433",
        "--wine-dark": "#5e1622",
        "--wine-lite": "#c0455a",
      } as CSSProperties}
    >
      <svg
        viewBox="0 0 360 520"
        role="img"
        aria-label="A glass of wine being poured"
        className="absolute inset-0 m-auto h-full max-h-[98%] w-full max-w-[520px] overflow-visible px-2 py-3 sm:px-3 sm:py-4"
      >
        <defs>
          <clipPath id="bar-bowl-clip">
            <path d="M111,176 C111,275 142,321 180,321 C218,321 249,275 249,176 Z" />
          </clipPath>
          <linearGradient id="bar-wine-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="var(--wine-lite)" />
            <stop offset="0.14" stopColor="var(--wine)" />
            <stop offset="0.62" stopColor="var(--wine-dark)" />
            <stop offset="1" stopColor="#2a070e" />
          </linearGradient>
          <radialGradient id="bar-wine-vol" cx="0.36" cy="0.32" r="0.85">
            <stop offset="0" stopColor="rgba(255,255,255,0.22)" />
            <stop offset="0.4" stopColor="rgba(255,255,255,0)" />
          </radialGradient>
          <radialGradient id="bar-surface-hi" cx="0.4" cy="0.4" r="0.6">
            <stop offset="0" stopColor="rgba(255,225,225,0.85)" />
            <stop offset="1" stopColor="rgba(255,225,225,0)" />
          </radialGradient>
          <linearGradient id="bar-glass-body" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="rgba(255,255,255,0.10)" />
            <stop offset="0.22" stopColor="rgba(255,255,255,0.015)" />
            <stop offset="0.8" stopColor="rgba(255,255,255,0)" />
            <stop offset="1" stopColor="rgba(255,255,255,0.06)" />
          </linearGradient>
          <linearGradient id="bar-bottle-glass" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#3a2418" />
            <stop offset="0.18" stopColor="#241412" />
            <stop offset="0.5" stopColor="#160c0c" />
            <stop offset="0.82" stopColor="#0e0708" />
            <stop offset="1" stopColor="#241414" />
          </linearGradient>
          <linearGradient id="bar-label-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#e8ddc8" />
            <stop offset="1" stopColor="#cdbfa3" />
          </linearGradient>
          <radialGradient id="bar-pool-grad" cx="0.5" cy="0.4" r="0.6">
            <stop offset="0" stopColor="var(--wine-lite)" />
            <stop offset="1" stopColor="var(--wine)" />
          </radialGradient>
          <filter id="bar-soft" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="2.4" />
          </filter>
          <filter id="bar-softer" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="5" />
          </filter>
        </defs>

        <ellipse cx="182" cy="470" rx="96" ry="20" fill="rgba(0,0,0,0.45)" filter="url(#bar-softer)" />

        <motion.g
          opacity={enter * (1 - 0.85 * exit)}
          transform={`translate(${bottleX.toFixed(1)},${bottleY.toFixed(1)}) rotate(${tilt.toFixed(2)})`}
        >
          <path
            d="M -7.5,-3 L -7.5,-58 C -7.5,-76 -23,-82 -23,-101 L -23,-196 C -23,-209 -12,-214 0,-214 C 12,-214 23,-209 23,-196 L 23,-101 C 23,-82 7.5,-76 7.5,-58 L 7.5,-3 Z"
            fill="url(#bar-bottle-glass)"
            stroke="rgba(0,0,0,0.5)"
            strokeWidth="1"
          />
          <rect x="-19" y="-208" width="7" height="150" rx="3.5" fill="rgba(255,255,255,0.14)" filter="url(#bar-soft)" />
          <rect x="15" y="-204" width="5" height="150" rx="2.5" fill="rgba(0,0,0,0.35)" filter="url(#bar-soft)" />
          <ellipse cx="0" cy="-205" rx="22" ry="6" fill="rgba(0,0,0,0.4)" />
          <rect x="-19" y="-182" width="38" height="66" rx="3" fill="url(#bar-label-grad)" opacity="0.94" />
          <rect x="-12" y="-150" width="24" height="1.6" fill="var(--wine)" opacity="0.8" />
          <rect x="-9" y="-172" width="18" height="1.4" fill="rgba(80,55,30,0.5)" />
          <rect x="-9" y="-128" width="18" height="1.2" fill="rgba(80,55,30,0.4)" />
          <rect x="-8" y="-58" width="16" height="14" fill="rgba(0,0,0,0.3)" />
          <ellipse cx="0" cy="-2" rx="8" ry="2.6" fill="#0c0606" stroke="rgba(255,255,255,0.12)" strokeWidth="0.8" />
        </motion.g>

        <path
          d="M0,0 C-6,34 -28,46 -44,62"
          fill="none"
          stroke="var(--wine-dark)"
          strokeWidth="5.5"
          strokeLinecap="round"
          opacity={streamOpacity * 0.95}
          transform={`translate(${(mouthX + wobble).toFixed(2)},${mouthY})`}
        />
        <path
          d="M0,0 C-6,34 -28,46 -44,62"
          fill="none"
          stroke="var(--wine-lite)"
          strokeWidth="1.8"
          strokeLinecap="round"
          opacity={streamOpacity * 0.9}
          transform={`translate(${(mouthX + wobble * 0.6).toFixed(2)},${mouthY})`}
        />
        <circle cx="196" cy="186" r="3.4" fill="url(#bar-pool-grad)" opacity={dropOneOpacity} />
        <circle cx="203" cy="192" r="2.2" fill="url(#bar-pool-grad)" opacity={dropTwoOpacity} />

        <motion.g
          className="origin-[180px_470px]"
          animate={shouldReduceMotion ? undefined : { y: [0, -7, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        >
          <g clipPath="url(#bar-bowl-clip)">
            <rect x="104" y={surfaceY} width="152" height={fillHeight} fill="url(#bar-wine-grad)" />
            <rect x="104" y={surfaceY} width="152" height={fillHeight} fill="url(#bar-wine-vol)" />
            <ellipse cx="180" cy={surfaceY + 2} rx={surfaceRadius} ry="5" fill="rgba(20,3,8,0.55)" opacity={showSurface ? 1 : 0} />
            <ellipse cx="180" cy={surfaceY} rx={surfaceRadius} ry="4.2" fill="var(--wine-lite)" opacity={showSurface ? 0.9 : 0} />
            <ellipse cx={180 - 0.4 * surfaceRadius} cy={surfaceY - 1} rx="3.4" ry="1.5" fill="url(#bar-surface-hi)" opacity={showSurface ? 1 : 0} />
          </g>

          <path d="M102,170 C102,280 138,330 180,330 C222,330 258,280 258,170 Z" fill="url(#bar-glass-body)" stroke="rgba(244,235,230,0.42)" strokeWidth="1.4" />
          <path d="M112,178 C112,262 138,308 168,320" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="2.4" strokeLinecap="round" opacity="0.7" filter="url(#bar-soft)" />
          <path d="M118,184 C118,250 136,292 158,308" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1" strokeLinecap="round" opacity="0.55" />
          <path d="M248,176 C248,262 232,300 214,318" fill="none" stroke="rgba(0,0,0,0.3)" strokeWidth="3" strokeLinecap="round" opacity="0.5" filter="url(#bar-soft)" />
          <ellipse cx="180" cy="170" rx="78" ry="12.5" fill="rgba(255,255,255,0.02)" stroke="rgba(244,235,230,0.3)" strokeWidth="1" />
          <path d="M104,172 C118,182 150,184 180,184 C210,184 242,182 256,172" fill="none" stroke="rgba(255,255,255,0.75)" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M177,330 C176,360 175.5,372 175.5,392 C175.5,412 176,424 177,432 L183,432 C184,424 184.5,412 184.5,392 C184.5,372 184,360 183,330 Z" fill="rgba(255,255,255,0.05)" stroke="rgba(244,235,230,0.4)" strokeWidth="1.2" />
          <ellipse cx="180" cy="372" rx="6.5" ry="9" fill="rgba(255,255,255,0.06)" stroke="rgba(244,235,230,0.3)" strokeWidth="0.8" />
          <path d="M124,452 C124,444 150,440 180,440 C210,440 236,444 236,452 C236,460 210,464 180,464 C150,464 124,460 124,452 Z" fill="rgba(255,255,255,0.03)" stroke="rgba(244,235,230,0.4)" strokeWidth="1.2" />
          <path d="M132,449 C150,453 210,453 228,449" fill="none" stroke="rgba(255,255,255,0.45)" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
        </motion.g>
      </svg>

      <div className="grain-overlay" />
    </div>
  );
}
