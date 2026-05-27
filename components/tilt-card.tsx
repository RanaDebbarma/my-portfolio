"use client";

import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import type { ReactNode } from "react";

type TiltCardProps = {
  children: ReactNode;
  className?: string;
  contentClassName?: string;
  strength?: number;
};

export function TiltCard({ children, className, contentClassName, strength = 10 }: TiltCardProps) {
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);

  const rotateX = useSpring(useTransform(pointerY, [-0.5, 0.5], [strength, -strength]), {
    stiffness: 220,
    damping: 24,
  });
  const rotateY = useSpring(useTransform(pointerX, [-0.5, 0.5], [-strength, strength]), {
    stiffness: 220,
    damping: 24,
  });

  return (
    <motion.div
      className={`${className}`}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 900,
        transformStyle: "preserve-3d",
        // transform: "perspective(900px)",
        // backfaceVisibility: "hidden",
      }}
      // whileHover={{ scale: 1.015 }}
      whileHover={{ scale: 1 }}
      transition={{ duration: 0.2 }}
      onPointerMove={(event) => {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          return;
        }

        const rect = event.currentTarget.getBoundingClientRect();
        pointerX.set((event.clientX - rect.left) / rect.width - 0.5);
        pointerY.set((event.clientY - rect.top) / rect.height - 0.5);
      }}
      onPointerLeave={() => {
        pointerX.set(0);
        pointerY.set(0);
      }}
    >
      <div
        className={contentClassName}
        style={{ transform: "translateZ(24px)" }}
      >
        {children}
      </div>
    </motion.div>
  );
}
