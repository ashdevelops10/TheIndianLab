import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

/**
 * Extended twMerge that knows our custom fluid font-size utilities so they are
 * never incorrectly merged / dropped against custom text-color utilities
 * (e.g. text-fluid-h1 and text-fg-cream both start with "text-", which would
 * cause the default twMerge to treat them as the same class group and drop the
 * font-size class).
 */
const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [
        "text-fluid-display",
        "text-fluid-hero",
        "text-fluid-h1",
        "text-fluid-h2",
        "text-fluid-h3",
        "text-fluid-body",
        "text-fluid-marquee",
        "text-fluid-lead",
        "text-label",
      ],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(value: number, currency = "CAD") {
  return new Intl.NumberFormat("en-CA", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(value);
}
