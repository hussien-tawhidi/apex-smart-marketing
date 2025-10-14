"use client";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function AdvancedCursor() {
  const [hover, setHover] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Outer ring lags behind
  const outerX = useSpring(mouseX, { stiffness: 600, damping: 25 });
  const outerY = useSpring(mouseY, { stiffness: 600, damping: 25 });

  // Secondary trailing blob
  const trailX = useSpring(mouseX, { stiffness: 200, damping: 30 });
  const trailY = useSpring(mouseY, { stiffness: 200, damping: 30 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const hoverElements = document.querySelectorAll(
      "a, button, .hover-target, .magnet"
    );
    hoverElements.forEach((el) => {
      el.addEventListener("mouseenter", () => setHover(true));
      el.addEventListener("mouseleave", () => setHover(false));
    });

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      {/* Secondary trailing blob */}
      <motion.div
        style={{ translateX: trailX, translateY: trailY }}
        className='fixed w-10 h-10 rounded-full bg-blue-400 opacity-30 pointer-events-none z-40 transform -translate-x-1/2 -translate-y-1/2'
      />

      {/* Outer ring */}
      <motion.div
        style={{ translateX: outerX, translateY: outerY }}
        className={`fixed w-8 h-8 rounded-full pointer-events-none z-50 border-2 border-white transition-all duration-200 transform -translate-x-1/2 -translate-y-1/2 ${
          hover ? "scale-150 border-blue-400 shadow-lg" : "scale-100"
        }`}
      />

      {/* Inner dot */}
      <motion.div
        style={{ translateX: mouseX, translateY: mouseY }}
        className='fixed w-3 h-3 rounded-full bg-white pointer-events-none z-50 transform -translate-x-1/2 -translate-y-1/2'
      />
    </>
  );
}
