import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

type Variant = "primary" | "secondary" | "dark";
type Size    = "default" | "sm";

interface SharedProps {
  variant?:  Variant;
  size?:     Size;
  full?:     boolean;
  className?: string;
  children:  React.ReactNode;
}

// Two clearly-separated prop shapes — no union narrowing needed
type LinkBtnProps   = SharedProps & { href: string }  & Omit<ComponentPropsWithoutRef<typeof Link>,   keyof SharedProps | "href">;
type ButtonBtnProps = SharedProps & { href?: never }  & Omit<ComponentPropsWithoutRef<"button">,      keyof SharedProps>;

type BtnProps = LinkBtnProps | ButtonBtnProps;

function classes(variant: Variant, size: Size, full: boolean, extra: string) {
  return [
    "btn",
    `btn-${variant}`,
    size === "sm" ? "btn-sm" : "",
    full ? "btn-full" : "",
    extra,
  ]
    .filter(Boolean)
    .join(" ");
}

/**
 * Polymorphic button / link.
 * Pass `href` → renders a Next.js <Link>.
 * Omit `href`  → renders a <button>.
 */
export default function Btn(props: BtnProps) {
  const {
    variant  = "primary",
    size     = "default",
    full     = false,
    className = "",
    children,
    href,
    ...rest
  } = props;

  const cls = classes(variant, size, full, className);

  if (href !== undefined) {
    // LinkBtnProps branch
    return (
      <Link href={href} className={cls} {...(rest as Omit<ComponentPropsWithoutRef<typeof Link>, "href" | "className">)}>
        {children}
      </Link>
    );
  }

  // ButtonBtnProps branch
  return (
    <button className={cls} {...(rest as ComponentPropsWithoutRef<"button">)}>
      {children}
    </button>
  );
}
