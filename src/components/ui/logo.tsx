"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import Link from "next/link";

type LogoProps = {
  className?: string;
  hover?: boolean;
  href?: string;
  animationTime?: number;
  onAnimationEnd?: () => void;
  loop?: boolean | number;
  initialAnimation?: boolean;
  viewBox?: string;
};

/** Text-based wordmark so the brand name stays editable and theme-aware. */
export function Logo({ href, className, hover = false }: LogoProps) {
  const wordmark = (
    <motion.span
      aria-label="Kazbek"
      className={cn(
        "inline-block whitespace-nowrap font-serif text-2xl font-semibold italic tracking-[-0.08em] text-current",
        className,
      )}
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={hover ? { y: -2, scale: 1.04 } : undefined}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      Kazbek
    </motion.span>
  );

  return href ? <Link href={href}>{wordmark}</Link> : wordmark;
}
