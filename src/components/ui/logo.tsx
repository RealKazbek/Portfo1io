"use client";

import { motion, type Variants, useAnimationControls } from "motion/react";
import { cn } from "@/lib/utils";
import { useMemo, useRef, useState, useCallback, useEffect } from "react";
import Link from "next/link";

interface SVGPathData {
  d: string;
  fill?: string;
  stroke?: string;
  strokeWidth?: number;
}

type AnimationProps = {
  className?: string;
  animationTime?: number;
  hover?: boolean;
  onAnimationEnd?: () => void;
  loop?: boolean | number;
  paths: SVGPathData[];
  initialAnimation?: boolean;
  viewBox?: string;
};

export function Animation({
  className = "w-16",
  animationTime = 4,
  hover = false,
  onAnimationEnd,
  loop = false,
  paths,
  initialAnimation = true,
  viewBox = "0 0 600 180",
}: AnimationProps) {
  hover = loop ? false : hover;
  const controls = useAnimationControls();
  const [isAnimating, setIsAnimating] = useState(false);
  const currentLoopRef = useRef(0);
  const total = paths?.length ?? 0;
  const perPath = total > 0 ? Math.max(0, animationTime) / total : 0;

  const totalLoops = useMemo(() => {
    if (loop === true) return 1;
    if (typeof loop === "number") return Math.max(1, Math.floor(loop));
    return 1;
  }, [loop]);

  const pathVariants: Variants = useMemo(
    () => ({
      hidden: {
        pathLength: 0,
        fillOpacity: 0,
        strokeOpacity: 0,
      },
      visible: (i: number) => ({
        pathLength: 1,
        fillOpacity: 1,
        strokeOpacity: 1,
        transition: {
          delay: perPath * i,
          duration: perPath || 0.001,
          ease: "easeInOut",
        },
      }),
    }),
    [perPath],
  );

  const startAnimation = useCallback(async () => {
    if (isAnimating) return;

    setIsAnimating(true);
    currentLoopRef.current = 0;

    const runCycle = async () => {
      await controls.start("visible");
      currentLoopRef.current++;

      if (currentLoopRef.current < totalLoops) {
        await controls.start("hidden");
        await runCycle();
      } else {
        setIsAnimating(false);
        onAnimationEnd?.();
      }
    };

    await controls.start("hidden");
    await runCycle();
  }, [controls, isAnimating, totalLoops, onAnimationEnd]);

  useEffect(() => {
    if (initialAnimation) startAnimation();
    else controls.set("visible");
    // The reveal belongs to the mount lifecycle; state changes must not restart it.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className={cn(className)}
      onMouseEnter={() => hover && !isAnimating && startAnimation()}
    >
      <motion.svg
        width="100%"
        height="100%"
        viewBox={viewBox}
        fill="none"
        aria-label="Kazbek"
      >
        {paths.map((pathData, i) => (
          <motion.path
            key={i}
            d={pathData.d}
            fill={pathData.fill || "none"}
            stroke={pathData.stroke || "currentColor"}
            strokeWidth={pathData.strokeWidth ?? 5}
            strokeLinecap="round"
            strokeLinejoin="round"
            initial="hidden"
            animate={controls}
            variants={pathVariants}
            custom={i}
          />
        ))}
      </motion.svg>
    </div>
  );
}

export function Logo({ href, ...props }: Partial<AnimationProps & { href?: string }>) {
  const paths: SVGPathData[] = [
    // K — a tall entry stroke with a sweeping upper and lower arm.
    { d: "M30 145 C24 112 26 72 38 28 M37 91 C65 70 83 48 104 24 M42 89 C67 96 82 122 108 148" },
    // a — an open handwritten loop and exit stroke.
    { d: "M121 113 C129 91 154 82 169 96 C183 109 169 131 148 132 C128 133 119 118 130 105 C144 88 174 91 186 111 C194 123 201 132 213 126" },
    // z — quick diagonal, like a signature flourish.
    { d: "M220 96 C243 91 267 91 283 94 C266 108 247 124 226 139 C247 137 271 135 291 140" },
    // b — ascender, rounded bowl, and a long descender.
    { d: "M302 145 C304 108 310 61 323 23 C329 8 337 17 333 38 C327 63 314 91 307 108 C318 91 344 87 352 103 C359 119 343 134 326 134 C315 134 308 129 307 119 C309 139 305 158 296 169" },
    // e — compact loop with a lifted exit.
    { d: "M366 112 C378 94 401 91 410 102 C417 112 398 120 374 120 C378 135 399 138 421 126 C430 121 436 116 441 110" },
    // k — final rising stroke and confident underline.
    { d: "M451 145 C452 111 460 66 477 25 M458 104 C476 91 494 74 508 58 M464 104 C483 108 496 125 515 140 M430 153 C467 160 521 158 564 143" },
  ];

  return href ? (
    <Link href={href}>
      <Animation {...props} paths={paths} />
    </Link>
  ) : (
    <Animation {...props} paths={paths} />
  );
}
