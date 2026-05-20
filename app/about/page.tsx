import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";
import SectionTag from "@/components/ui/SectionTag";
import ServiceCard from "@/components/ui/ServiceCard";
import Btn from "@/components/ui/Btn";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Oregon Facilities and Maintenance LLC — Oregon-based facility management professionals with hands-on experience running large commercial and institutional building programs.",
};

const PILLARS = [
  { icon: "🏔️", title: "Oregon-Rooted",        description: "Founded in Oregon. Built around Oregon clients, Oregon standards, and Oregon values." },
  { icon: "📐", title: "Systems-Oriented",       description: "We run documented programmes — not one-off service calls. Every engagement is process-driven and measurable." },
  { icon: "📈", title: "Built to Scale",          description: "Our staffing model, vendor network, and management systems are built to grow with your portfolio." },
  { icon: "🔐", title: "Accountable Operations", description: "Single point of contact, full documentation, and performance metrics on every contract." },
  { icon: "🤝", title: "Long-Term Partnerships", description: "We invest in understanding your facility and becoming a trusted operational partner." },
  { icon: "💡", title: "Tech-Enabled",           description: "Digital work orders, client portals, and real-time reporting keep you informed without extra effort." },
] as const;

const TIMELINE = [
  { year: "Founded",   text: "Oregon Facilities and Maintenance LLC established with a focus on commercial janitorial and building maintenance services." },
  { year: "Expanded",  text: "Added full-scope facility maintenance services, growing from janitorial into multi-trade building operations." },
  { year: "Schools",   text: "Launched dedicated school facility services division, serving K–12 districts with specialised custodial and maintenance programmes." },
  { year: "Digital",   text: "Deployed digital work order management system and client portal, enabling real-time tracking and reporting." },
  { year: "Growth",    text: "Expanded service area coverage and added preventive maintenance division, bringing structured PM programming to commercial clients." },
  { year: "Today",     text: "Serving schools, commercial properties, and institutional clients across Oregon with a full-scope facility management offering.", current: true },
] as const;

const CLIENT_TYPES = [
  { icon: "🏫", title: "Schools & Districts",       description: "K–12 campuses, administrative offices, gymnasiums, and multi-building school portfolios." },
  { icon: "🏢", title: "Commercial Office",          description: "Class A and B office buildings, business parks, and professional service environments." },
  { icon: "🏭", title: "Industrial & Warehouse",    description: "Manufacturing, distribution, and light industrial facilities with specific maintenance requirements." },
  { icon: "🏛️", title: "Government & Institutional",description: "Public facilities, government offices, and institutional properties with compliance-focused requirements." },
  { icon: "🏥", title: "Medical & Healthcare",       description: "Medical offices, outpatient clinics, and healthcare facilities requiring strict sanitation standards." },
  { icon: "🏬", title: "Retail & Mixed-Use",        description: "Retail centres, mixed-use developments, and high-traffic commercial properties." },
] as const;

export default function AboutPage() {
  return (
    <>
      {/* Page header */}
      <div className="page-header">
        <SectionTag>Our Story</SectionTag>
        <h1 className="section-headline">
          Oregon-Based Facility<br />Professionals You Can Trust
        </h1>
        <p className="section-sub" style={{ marginBottom: 0 }}>
          OFAM was built by people who understand facility operations from the
          ground up — not from a corporate spreadsheet.
        </p>
      </div>

      {/* ── Company story ─────────────────────────────────────────────── */}
      <section className="section section-dark" aria-labelledby="story-heading">
        <div className="about-grid">
          {/* Visual block */}
          <ScrollReveal>
            <div style={{ position: "relative" }}>
              <div className="about-img-block">
                <span className="about-img-icon" aria-hidden="true">🏛️</span>
                <div className="about-img-overlay">
                  <p
                    style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 700, marginBottom: 4 }}
                  >
                    Established in Oregon
                  </p>
                  <p style={{ fontSize: 13, color: "var(--muted)" }}>
                    Serving commercial and institutional clients statewide
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Text */}
          <ScrollReveal delay={1}>
            <SectionTag>Who We Are</SectionTag>
            <h2
              id="story-heading"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(28px, 3.5vw, 46px)",
                fontWeight: 800,
                lineHeight: 1.05,
                marginBottom: 20,
              }}
            >
              Real Experience in Facility Operations
            </h2>
            <p style={{ fontSize: 15, color: "var(--fog)", lineHeight: 1.8, marginBottom: 16, fontWeight: 300 }}>
              Oregon Facilities and Maintenance LLC (OFAM) was founded by facility
              management professionals with hands-on experience running large
              commercial and institutional building programmes — not outside investors
              or franchise operators.
            </p>
            <p style={{ fontSize: 15, color: "var(--fog)", lineHeight: 1.8, marginBottom: 16, fontWeight: 300 }}>
              We understand what facility directors, property managers, and school
              administrators need: reliable service delivery, clean documentation,
              fast communication, and a contractor that actually shows up on schedule.
            </p>
            <p style={{ fontSize: 15, color: "var(--fog)", lineHeight: 1.8, marginBottom: 32, fontWeight: 300 }}>
              Our team brings deep expertise in commercial janitorial, multi-trade
              maintenance, preventive maintenance programming, and subcontractor
              coordination — everything needed to run a professional facility at scale.
            </p>
            <Btn href="/contact" variant="primary">Work With OFAM</Btn>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Core values ───────────────────────────────────────────────── */}
      <section className="section section-mid" aria-labelledby="values-heading">
        <ScrollReveal>
          <SectionTag>Core Values</SectionTag>
          <h2 id="values-heading" className="section-headline" style={{ marginBottom: 48 }}>
            What Drives<br />Everything We Do
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={1}>
          <div className="services-grid" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))" }}>
            {PILLARS.map((p) => (
              <ServiceCard key={p.title} icon={p.icon} title={p.title} description={p.description} />
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* ── Timeline ──────────────────────────────────────────────────── */}
      <section className="section section-dark" aria-labelledby="timeline-heading">
        <ScrollReveal>
          <SectionTag>Company Journey</SectionTag>
          <h2 id="timeline-heading" className="section-headline" style={{ marginBottom: 56 }}>
            Growth Rooted in<br />Oregon Facility Experience
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={1}>
          <div className="timeline">
            {TIMELINE.map(({ year, text, current }) => (
              <div key={year} className="timeline-item">
                <div className={`timeline-dot${current ? " current" : ""}`} aria-hidden="true" />
                <p className="timeline-year">{year}</p>
                <p className="timeline-text">{text}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* ── Who we serve ──────────────────────────────────────────────── */}
      <section className="section section-light" aria-labelledby="clients-heading">
        <ScrollReveal>
          <SectionTag>Who We Serve</SectionTag>
          <h2 id="clients-heading" className="section-headline" style={{ marginBottom: 48 }}>
            Built for Demanding<br />Facility Environments
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={1}>
          <div className="services-grid" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))" }}>
            {CLIENT_TYPES.map((c) => (
              <ServiceCard key={c.title} icon={c.icon} title={c.title} description={c.description} />
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────── */}
      <section className="cta-band" aria-labelledby="about-cta-heading">
        <div className="cta-band-grid" aria-hidden="true" />
        <div className="cta-band-content">
          <p className="cta-band-tag">Partner with OFAM</p>
          <h2 id="about-cta-heading" className="cta-band-h">
            Let&rsquo;s Talk About<br />Your Facility
          </h2>
          <p className="cta-band-sub">
            Tell us about your building, your challenges, and what you need in a
            long-term facility partner.
          </p>
          <Btn href="/contact" variant="dark">Request a Consultation</Btn>
        </div>
      </section>
    </>
  );
}
