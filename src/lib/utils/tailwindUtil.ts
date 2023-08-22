import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Yooldo Tailwind Breakpoints utils
 * Can be edited with each project definition
 */
export const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1240,
  xl: 1470,
  "2xl": 1740,
};

/**
 * Yooldo Container utils\
 * Can be edited with project design units definition
 */

export const maxMainWidth = 1440; // unit: px
export const containerWidth = 1240; // unit: px

export const layout = {
  ".container": {
    width: "100%",
    maxWidth: `${containerWidth}px`,
    margin: "0 auto",
  },
  ".max-w-main": {
    maxWidth: `${maxMainWidth}px`,
  },
  ".w-menu-open-area": {
    width: "320px",
  },
  ".w-menu-close-area": {
    width: "160px",
  },
  ".w-menu-open": {
    width: "217px",
  },
  ".w-menu-close": {
    width: "66px",
  },
  ".w-menu-area": {
    width: `320px`,
  },
  ".pl-menu-area": {
    paddingLeft: `320px`,
  },
  ".pl-menu-open-area": {
    paddingLeft: `320px`,
  },
  ".pl-menu-close-area": {
    paddingLeft: `160px`,
  },
};
