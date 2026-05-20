"use client";

import { useEffect, useRef, type ReactNode } from "react";

interface Props {
  children: ReactNode;
  delay?: 0 | 1 | 2 | 3;   // maps to CSS .reveal-delay-N
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

/**
 * Wraps children in a div that fades + slides up when it enters the viewport.
 * Works by adding the `.visible` class via IntersectionObserver.
 * Server-renders with opacity-0 (no flash) because CSS handles the initial state.
 */
export default function ScrollReveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
}: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.unobserve(el); // fire once
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const delayClass = delay > 0 ? ` reveal-delay-${delay}` : "";

  return (
    // @ts-expect-error — dynamic tag typing is verbose; this is safe
    <Tag ref={ref} className={`reveal${delayClass} ${className}`}>
      {children}
    </Tag>
  );
}
