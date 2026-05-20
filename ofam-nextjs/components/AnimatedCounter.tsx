"use client";

import { useState, useEffect, useRef } from "react";

interface Props {
  end: number;
  suffix?: string;
  duration?: number;
}

/**
 * Counts from 0 to `end` once the element enters the viewport.
 * Uses an easeOutCubic curve for a natural deceleration.
 */
export default function AnimatedCounter({ end, suffix = "", duration = 2000 }: Props) {
  const [count, setCount] = useState(0);
  const ref     = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const startTime = Date.now();

          const tick = () => {
            const progress = Math.min((Date.now() - startTime) / duration, 1);
            const eased    = 1 - Math.pow(1 - progress, 3); // easeOutCubic
            setCount(Math.floor(eased * end));
            if (progress < 1) requestAnimationFrame(tick);
          };

          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 }
    );

    const el = ref.current;
    if (el) observer.observe(el);
    return () => { if (el) observer.unobserve(el); };
  }, [end, duration]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}
