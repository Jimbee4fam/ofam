import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://ofam.io"), // ← update to your real domain
  title: {
    default: "OFAM | Oregon Facilities & Maintenance LLC",
    template: "%s | OFAM",
  },
  description:
    "Oregon Facilities and Maintenance LLC delivers professional facility maintenance, commercial cleaning, and preventive maintenance programs for schools, commercial properties, and large institutions across Oregon.",
  keywords: [
    "facility maintenance Oregon",
    "commercial cleaning Portland",
    "janitorial services Oregon",
    "school facility maintenance",
    "preventive maintenance program",
    "building maintenance Portland",
    "OFAM",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ofam.io",
    siteName: "Oregon Facilities & Maintenance LLC",
    title: "OFAM | Oregon Facilities & Maintenance LLC",
    description:
      "Professional facility maintenance and commercial cleaning for Oregon schools, commercial properties, and institutions.",
  },
  twitter: {
    card: "summary_large_image",
    title: "OFAM | Oregon Facilities & Maintenance LLC",
    description:
      "Professional facility maintenance and commercial cleaning for Oregon schools, commercial properties, and institutions.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <a href="#main-content" className="sr-only" style={{ position: "fixed", top: 8, left: 8, zIndex: 9999, background: "var(--orange)", color: "var(--charcoal)", padding: "8px 16px", fontWeight: 700 }}>
          Skip to main content
        </a>
        <Nav />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
