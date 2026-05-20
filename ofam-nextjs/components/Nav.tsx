"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/",        label: "Home"     },
  { href: "/services",label: "Services" },
  { href: "/about",   label: "About"    },
  { href: "/portal",  label: "Portal"   },
];

export default function Nav() {
  const [scrolled,    setScrolled]    = useState(false);
  const [menuOpen,    setMenuOpen]    = useState(false);
  const pathname = usePathname();

  // Add/remove scrolled class
  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handle, { passive: true });
    return () => window.removeEventListener("scroll", handle);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <header>
        <nav
          className={`nav ${scrolled ? "scrolled" : ""}`}
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Link href="/" className="nav-logo" aria-label="OFAM — Oregon Facilities & Maintenance, go to homepage">
            <div className="nav-logo-mark" aria-hidden="true">OF</div>
            <div className="nav-logo-text">
              OFAM
              <span className="nav-logo-sub">Oregon Facilities &amp; Maintenance</span>
            </div>
          </Link>

          {/* Desktop links */}
          <ul className="nav-links" role="list">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  aria-current={isActive(href) ? "page" : undefined}
                >
                  {label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/contact" className="nav-cta" aria-label="Request a quote from OFAM">
                Get a Quote
              </Link>
            </li>
          </ul>

          {/* Mobile hamburger */}
          <button
            className="nav-mobile-btn"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            {/* Three-bar icon → X when open */}
            {menuOpen ? (
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
                <line x1="3" y1="3" x2="19" y2="19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <line x1="19" y1="3" x2="3" y2="19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            ) : (
              <svg width="22" height="16" viewBox="0 0 22 16" fill="none" aria-hidden="true">
                <line x1="0" y1="1"  x2="22" y2="1"  stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <line x1="0" y1="8"  x2="22" y2="8"  stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <line x1="0" y1="15" x2="22" y2="15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            )}
          </button>
        </nav>
      </header>

      {/* Mobile slide-down menu */}
      <div
        id="mobile-menu"
        className={`mobile-menu ${menuOpen ? "open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <nav aria-label="Mobile navigation">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              aria-current={isActive(href) ? "page" : undefined}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mob-cta"
            onClick={() => setMenuOpen(false)}
          >
            Get a Quote
          </Link>
        </nav>
      </div>
    </>
  );
}
