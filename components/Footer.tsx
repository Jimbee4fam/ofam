import Link from "next/link";

const SERVICES = [
  "Facility Maintenance",
  "Commercial Cleaning",
  "Preventive Maintenance",
  "School Facility Services",
  "Emergency Response",
  "Work Order Management",
];

const COMPANY = [
  { href: "/about",   label: "About OFAM"       },
  { href: "/services",label: "Our Services"      },
  { href: "/portal",  label: "Client Portal"     },
  { href: "/contact", label: "Request a Quote"   },
  { href: "/contact", label: "Contact Us"        },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-grid">
        {/* Brand column */}
        <div>
          <Link href="/" className="nav-logo" style={{ display: "inline-flex" }} aria-label="OFAM homepage">
            <div className="nav-logo-mark" aria-hidden="true">OF</div>
            <div className="nav-logo-text">
              OFAM
              <span className="nav-logo-sub">Oregon Facilities &amp; Maintenance LLC</span>
            </div>
          </Link>
          <p className="footer-about">
            Professional facility maintenance and commercial cleaning services for
            Oregon&rsquo;s schools, commercial properties, and large institutions.
            Oregon-based. Scalable. Reliable.
          </p>
          <div className="footer-certs" aria-label="Certifications and credentials">
            {["Oregon LLC", "Insured & Bonded", "OSHA Compliant", "Background Checked"].map((c) => (
              <span key={c} className="cert-badge">{c}</span>
            ))}
          </div>
        </div>

        {/* Services column */}
        <div>
          <p className="footer-col-title">Services</p>
          <ul className="footer-links" role="list">
            {SERVICES.map((s) => (
              <li key={s}>
                <Link href="/services">{s}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company column */}
        <div>
          <p className="footer-col-title">Company</p>
          <ul className="footer-links" role="list">
            {COMPANY.map(({ href, label }) => (
              <li key={label}>
                <Link href={href}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact column */}
        <div>
          <p className="footer-col-title">Contact</p>
          <ul className="footer-links" role="list">
            {/* Replace placeholder values with real info before launch */}
            <li><span style={{ color: "var(--fog)", fontSize: 13 }}>[Your Phone Number]</span></li>
            <li><span style={{ color: "var(--fog)", fontSize: 13 }}>[Your Email Address]</span></li>
            <li><span style={{ color: "var(--fog)", fontSize: 13 }}>Portland, Oregon</span></li>
            <li style={{ marginTop: 12 }}>
              <span style={{ fontSize: 10, color: "var(--muted)", letterSpacing: 1, fontFamily: "var(--font-mono)", textTransform: "uppercase" }}>
                Emergency 24/7
              </span>
            </li>
            <li><span style={{ color: "var(--orange)", fontWeight: 700, fontSize: 13 }}>[Emergency Line]</span></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {year} Oregon Facilities and Maintenance LLC. All rights reserved.</span>
        <div className="footer-bottom-links">
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
