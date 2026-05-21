import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import SectionTag from "@/components/ui/SectionTag";
import ServiceCard from "@/components/ui/ServiceCard";
import Btn from "@/components/ui/Btn";

export const metadata: Metadata = {
  title: "Professional Facility Maintenance & Commercial Cleaning — Oregon",
  description:
    "OFAM delivers institutional-grade facility maintenance and janitorial services for schools, commercial properties, and large facilities across Oregon.",
};

// ─── Static data (no fake numbers or invented claims) ────────────────────────
const SERVICES = [
  {
    icon: "🏢", title: "Facility Maintenance",
    desc: "Full-scope building maintenance covering mechanical, electrical, plumbing, HVAC, and interior systems for commercial and institutional properties.",
    tags: ["HVAC", "Electrical", "Plumbing", "Interior"],
  },
  {
    icon: "🧹", title: "Commercial Cleaning",
    desc: "Systematic janitorial programs designed for high-traffic commercial facilities, schools, and office environments with documented quality controls.",
    tags: ["Janitorial", "Floor Care", "Disinfection"],
  },
  {
    icon: "📋", title: "Preventive Maintenance",
    desc: "Scheduled PM programs that reduce emergency repairs, extend equipment life, and keep your facility operating at peak performance year-round.",
    tags: ["PM Programs", "Inspections", "Reporting"],
  },
  {
    icon: "🏫", title: "School Facility Services",
    desc: "Specialized maintenance and cleaning programs built around school calendars, safety requirements, and high-occupancy custodial standards.",
    tags: ["K–12", "Custodial", "Safety Compliance"],
  },
  {
    icon: "⚡", title: "Emergency Response",
    desc: "24/7 rapid-response capability for critical facility failures, water intrusion, mechanical breakdowns, and urgent safety issues.",
    tags: ["24/7 Response", "Critical Repairs", "Rapid Deploy"],
  },
  {
    icon: "🔧", title: "Work Order Management",
    desc: "Digital work order tracking with real-time status updates, photo documentation, technician dispatch, and completion reporting.",
    tags: ["Digital Tracking", "Dispatch", "Reporting"],
  },
  {
    icon: "🌿", title: "Grounds & Exterior",
    desc: "Complete exterior property management including grounds maintenance, parking lot care, seasonal services, and curb appeal programs.",
    tags: ["Grounds", "Exterior", "Seasonal"],
  },
  {
    icon: "🤝", title: "Vendor Coordination",
    desc: "Streamlined vendor management and subcontractor coordination for specialty trades, reducing administrative burden and oversight requirements.",
    tags: ["Vendors", "Subcontractors", "Coordination"],
  },
] as const;

const WHY_ITEMS = [
  {
    n: "01", label: "Oregon-Based Operations",
    desc: "Local presence means faster response times, better accountability, and genuine long-term relationships with our clients.",
  },
  {
    n: "02", label: "Scalable Service Model",
    desc: "From a single commercial suite to multi-campus school districts — our systems and staffing scale to match your facility's scope.",
  },
  {
    n: "03", label: "Technology-Driven Workflow",
    desc: "Digital work orders, real-time tracking, photo documentation, and reporting dashboards keep you informed at every step.",
  },
  {
    n: "04", label: "Compliance & Documentation",
    desc: "Full maintenance logs, inspection records, and service histories available on demand for audits, insurance, and regulatory compliance.",
  },
  {
    n: "05", label: "Single-Source Accountability",
    desc: "One contract, one point of contact, complete accountability. No finger-pointing between contractors — OFAM owns the outcome.",
  },
] as const;

const PROCESS_FEATURES = [
  { icon: "📱", label: "Digital Work Orders",   desc: "Every request logged, tracked, and reported online." },
  { icon: "📸", label: "Photo Documentation",    desc: "Before & after photos attached to every completed job." },
  { icon: "📊", label: "Regular Reporting",      desc: "Monthly performance summaries delivered to your inbox." },
  { icon: "🔔", label: "Real-Time Notifications",desc: "Status alerts so you're never left guessing." },
  { icon: "📋", label: "Preventive Scheduling",  desc: "PM calendars built around your facility's specific needs." },
] as const;

// ─── Portal sample data ───────────────────────────────────────────────────────
const SAMPLE_ORDERS = [
  { id: "WO-2841", building: "Lincoln High School",   cat: "HVAC",      pri: "High",     status: "In Progress", tech: "M. Torres" },
  { id: "WO-2840", building: "Commerce Center B2",    cat: "Plumbing",   pri: "Critical", status: "Open",        tech: "Dispatch"  },
  { id: "WO-2838", building: "District Office",       cat: "Janitorial", pri: "Normal",   status: "Scheduled",   tech: "K. Evans"  },
  { id: "WO-2835", building: "Riverside Plaza",       cat: "Electrical", pri: "Normal",   status: "Complete",    tech: "R. Singh"  },
  { id: "WO-2831", building: "Franklin Elementary",   cat: "Grounds",    pri: "Normal",   status: "Review",      tech: "J. Park"   },
] as const;

function statusClass(s: string) {
  if (s === "Open")        return "status-open";
  if (s === "Complete")    return "status-complete";
  if (s === "Scheduled")   return "status-scheduled";
  return "status-review";
}

const MARQUEE_ITEMS = [
  "Commercial Facilities", "School Districts", "Preventive Maintenance",
  "Work Order Management", "Emergency Response", "Property Management",
  "Janitorial Services", "Oregon-Based",
];

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function HomePage() {
  return (
    <>
      {/* ── HERO ───────────────────────────────────────────────────────── */}
      <section className="hero" aria-labelledby="hero-heading">
        <div className="hero-grid"   aria-hidden="true" />
        <div className="hero-glow"   aria-hidden="true" />
        <div className="hero-glow-2" aria-hidden="true" />

        <div>
          <p className="hero-badge" aria-label="Oregon-based commercial facility services">
            <span className="hero-badge-dot" aria-hidden="true" />
            Oregon-Based · Commercial Grade · Scalable Operations
          </p>

          <h1 id="hero-heading" className="hero-headline">
            Professional<br />
            Facility <em>Maintenance</em><br />
            &amp; Commercial Cleaning
          </h1>

          <p className="hero-sub">
            OFAM delivers institutional-grade facility maintenance and janitorial
            services for schools, commercial properties, and large facilities across
            Oregon — keeping your buildings operational, clean, and professionally
            maintained.
          </p>

          <div className="hero-actions">
            <Btn href="/contact" variant="primary">Request a Quote</Btn>
            <Btn href="/services" variant="secondary">Our Services</Btn>
          </div>
        </div>
      </section>

      {/* ── MARQUEE ─────────────────────────────────────────────────────── */}
      <div className="marquee-bar" aria-hidden="true">
        <div className="marquee-track">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((t, i) => (
            <span key={i} className="marquee-item">
              <span className="marquee-dot" />
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* ── SERVICES OVERVIEW ───────────────────────────────────────────── */}
      <section className="section section-mid" aria-labelledby="services-heading">
        <ScrollReveal>
          <SectionTag>Core Services</SectionTag>
          <div className="section-title-row">
            <div>
              <h2 id="services-heading" className="section-headline">
                Everything Your<br />Facility Needs
              </h2>
              <p className="section-sub">
                Comprehensive maintenance and operations services designed for
                institutional and commercial-scale facilities.
              </p>
            </div>
            <Btn href="/services" variant="secondary" size="sm">View All Services →</Btn>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={1}>
          <div className="services-grid">
            {SERVICES.map((s) => (
              <ServiceCard
                key={s.title}
                icon={s.icon}
                title={s.title}
                description={s.desc}
                tags={[...s.tags]}
              />
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* ── WHY OFAM ────────────────────────────────────────────────────── */}
      <section className="section section-dark" aria-labelledby="why-heading">
        <ScrollReveal>
          <SectionTag>Why OFAM</SectionTag>
          <h2 id="why-heading" className="section-headline" style={{ marginBottom: 8 }}>
            Built for Large<br />Facility Operations
          </h2>
          <p className="section-sub">
            We&rsquo;re not a small handyman crew. OFAM is structured, staffed, and
            equipped to manage entire buildings professionally.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={1}>
          <div className="why-grid">
            {/* Differentiators */}
            <div className="why-features">
              {WHY_ITEMS.map((r) => (
                <div key={r.n} className="why-item">
                  <div className="why-num" aria-hidden="true">{r.n}</div>
                  <div>
                    <p className="why-label">{r.label}</p>
                    <p className="why-desc">{r.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Process feature box (no fabricated metrics) */}
            <div className="feature-box" aria-label="How OFAM operates">
              <p
                style={{
                  fontFamily: "var(--font-mono)", fontSize: 13,
                  letterSpacing: 3, color: "var(--muted)",
                  textTransform: "uppercase", marginBottom: 24,
                }}
              >
                How We Operate
              </p>
              {PROCESS_FEATURES.map(({ icon, label, desc }) => (
                <div key={label} className="feature-row">
                  <span className="feature-row-icon" aria-hidden="true">{icon}</span>
                  <div>
                    <strong style={{ display: "block", color: "var(--white)", fontSize: 14, marginBottom: 2 }}>
                      {label}
                    </strong>
                    <span style={{ fontSize: 13, color: "var(--muted)" }}>{desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ── PORTAL PREVIEW ──────────────────────────────────────────────── */}
      <section className="section section-light" aria-labelledby="portal-heading">
        <ScrollReveal>
          <SectionTag>Client Portal</SectionTag>
          <div className="section-title-row">
            <div>
              <h2 id="portal-heading" className="section-headline">
                Facility Management<br />at Your Fingertips
              </h2>
              <p className="section-sub">
                OFAM&rsquo;s client portal provides real-time visibility into work
                orders, maintenance logs, and facility performance — 24/7.
              </p>
            </div>
            <Btn href="/portal" variant="secondary" size="sm">Explore Portal →</Btn>
          </div>
        </ScrollReveal>

        {/* Portal UI mockup */}
        <ScrollReveal delay={1}>
          <div className="portal-wrap" role="img" aria-label="Screenshot of the OFAM client portal showing a sample work order dashboard">
            {/* Window bar */}
            <div className="portal-bar">
              <div className="portal-dot" style={{ background: "#f97316" }} aria-hidden="true" />
              <div className="portal-dot" style={{ background: "#facc15" }} aria-hidden="true" />
              <div className="portal-dot" style={{ background: "#22c55e" }} aria-hidden="true" />
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--muted)", marginLeft: 8 }}>
                portal.ofam.io — Facility Dashboard
              </span>
              <div className="portal-tabs" aria-hidden="true">
                {["Overview", "Work Orders", "PM Schedule", "Reports"].map((t, i) => (
                  <div key={t} className={`portal-tab ${i === 0 ? "active" : ""}`}>{t}</div>
                ))}
              </div>
            </div>

            {/* KPIs */}
            <div className="portal-body">
              <div className="portal-kpis">
                {(
                  [
                    ["—", "Open Work Orders",     "var(--orange)"],
                    ["—", "In Progress",          "var(--blue)"],
                    ["—", "Completed This Month", "var(--green)"],
                    ["—", "Inspections Due",      "var(--muted)"],
                  ] as [string, string, string][]
                ).map(([v, l, color]) => (
                  <div key={l} className="portal-kpi" style={{ borderTopColor: color }}>
                    <div className="portal-kpi-val" style={{ color }}>{v}</div>
                    <div className="portal-kpi-label">{l}</div>
                  </div>
                ))}
              </div>

              {/* Sample work order table */}
              <div style={{ overflowX: "auto" }}>
                <table className="portal-table">
                  <thead>
                    <tr>
                      <th scope="col">Work Order</th>
                      <th scope="col">Building</th>
                      <th scope="col">Category</th>
                      <th scope="col">Priority</th>
                      <th scope="col">Status</th>
                      <th scope="col">Assigned To</th>
                    </tr>
                  </thead>
                  <tbody>
                    {SAMPLE_ORDERS.map((o) => (
                      <tr key={o.id}>
                        <td style={{ fontFamily: "var(--font-mono)", color: "var(--orange)", fontSize: 12 }}>
                          {o.id}
                        </td>
                        <td>{o.building}</td>
                        <td>{o.cat}</td>
                        <td
                          style={{
                            color: o.pri === "Critical" ? "#f87171"
                                 : o.pri === "High"     ? "var(--orange)"
                                 : "var(--fog)",
                          }}
                        >
                          {o.pri}
                        </td>
                        <td>
                          <span className={`status-badge ${statusClass(o.status)}`}>
                            {o.status}
                          </span>
                        </td>
                        <td style={{ fontSize: 12, color: "var(--muted)" }}>{o.tech}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ── CTA BAND ────────────────────────────────────────────────────── */}
      <section className="cta-band" aria-labelledby="cta-heading">
        <div className="cta-band-grid" aria-hidden="true" />
        <div className="cta-band-content">
          <p className="cta-band-tag">Ready to Get Started?</p>
          <h2 id="cta-heading" className="cta-band-h">
            Request a Facilities Quote Today
          </h2>
          <p className="cta-band-sub">
            Tell us about your facility and we&rsquo;ll build a customised scope of
            services. We respond within one business day.
          </p>
          <Btn href="/contact" variant="dark">Get My Free Quote →</Btn>
        </div>
      </section>
    </>
  );
}
