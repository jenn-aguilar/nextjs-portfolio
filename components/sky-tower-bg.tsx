"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

/**
 * Auckland Sky Tower silhouette painted behind the hero.
 * Slides down and fades as the page scrolls — a light parallax touch.
 */
export function SkyTowerBg() {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 700], [0, 220]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none absolute -right-10 top-0 h-[130%] w-[180px] select-none opacity-40 sm:-right-6 sm:w-[280px] sm:opacity-60 md:right-0 md:w-[400px] md:opacity-80 lg:w-[500px]"
      style={reduce ? undefined : { y, opacity }}
    >
      <SkyTowerSvg />
    </motion.div>
  );
}

function SkyTowerSvg() {
  return (
    <svg
      viewBox="0 0 260 700"
      preserveAspectRatio="xMidYMax meet"
      className="h-full w-full"
    >
      <defs>
        <linearGradient id="tower-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="hsl(var(--accent-soft))" stopOpacity="0.55" />
          <stop offset="100%" stopColor="hsl(var(--accent-soft))" stopOpacity="0.15" />
        </linearGradient>
        <linearGradient id="tower-stroke" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="hsl(var(--accent-soft))" stopOpacity="0.9" />
          <stop offset="100%" stopColor="hsl(var(--accent-soft))" stopOpacity="0.35" />
        </linearGradient>
      </defs>

      <g
        fill="url(#tower-fill)"
        stroke="url(#tower-stroke)"
        strokeWidth={1.5}
        strokeLinejoin="round"
      >
        {/* Antenna mast — a tall narrow triangle */}
        <path d="M128 30 L132 30 L131 175 L129 175 Z" />

        {/* Sky deck / observation pod */}
        <ellipse cx="130" cy="210" rx="30" ry="10" />
        <path d="M100 210 L100 244 Q130 262 160 244 L160 210 Z" />

        {/* Restaurant deck */}
        <path d="M108 244 L110 280 L150 280 L152 244 Z" />

        {/* Concrete shaft — trapezoid widening slightly toward the base */}
        <path d="M120 280 L140 280 L146 560 L114 560 Z" />

        {/* SkyCity base */}
        <path d="M76 560 L184 560 L184 640 L76 640 Z" />

        {/* Podium extension */}
        <path d="M50 640 L210 640 L210 675 L50 675 Z" />
      </g>

      {/* Window highlights on the shaft (light, for texture) */}
      <g fill="hsl(var(--accent-soft))" fillOpacity="0.35">
        <rect x="126" y="310" width="8" height="2" />
        <rect x="126" y="360" width="8" height="2" />
        <rect x="124" y="420" width="12" height="2" />
        <rect x="124" y="480" width="12" height="2" />
        <rect x="122" y="540" width="16" height="2" />
      </g>

      {/* Base windows */}
      <g fill="hsl(var(--accent-soft))" fillOpacity="0.3">
        <rect x="90" y="580" width="12" height="4" />
        <rect x="110" y="580" width="12" height="4" />
        <rect x="130" y="580" width="12" height="4" />
        <rect x="150" y="580" width="12" height="4" />
        <rect x="170" y="580" width="6" height="4" />
        <rect x="90" y="600" width="12" height="4" />
        <rect x="110" y="600" width="12" height="4" />
        <rect x="130" y="600" width="12" height="4" />
        <rect x="150" y="600" width="12" height="4" />
        <rect x="170" y="600" width="6" height="4" />
      </g>
    </svg>
  );
}
