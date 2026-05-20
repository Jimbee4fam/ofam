import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

type Variant = "primary" | "secondary" | "dark";
type Size    = "default" | "sm";

interface BaseProps {
  variant?: Variant;
  size?:    Size;
  full?:    boolean;
  children: React.ReactNode;
}

// Overloads: render as <Link> when `href` provided, otherwise <button>
type BtnProps =
  | (BaseProps & { href: string; } & Omit<ComponentPropsWithoutRef<typeof Link>, keyof BaseProps>)
  | (BaseProps & { href?: undefined } & Omit<ComponentPropsWithoutRef<"button">, keyof BaseProps>);

/**
 * Accessible button / link component.
 * Renders a Next.js <Link> when `href` is provided, otherwise a <button>.
 * Applies the shared `btn` class plus variant and size modifiers.
 */
export default function Btn({
  variant = "primary",
  size    = "default",
  full    = false,
  children,
  href,
  className = "",
  ...rest
}: BtnProps & { className?: string }) {
  const classes = [
    "btn",
    `btn-${variant}`,
    size === "sm" ? "btn-sm" : "",
    full ? "btn-full" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (href) {
    return (
      <Link href={href} className={classes} {...(rest as object)}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(rest as ComponentPropsWithoutRef<"button">)}>
      {children}
    </button>
  );
}
