import type { Metadata } from "next";
import ContactForm from "./ContactForm";
import SectionTag from "@/components/ui/SectionTag";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Contact & Quote Request",
  description:
    "Request a free facility maintenance or commercial cleaning quote from OFAM. We serve schools, commercial buildings, and large facilities across Oregon.",
};

const CONTACT_ITEMS = [
  { icon: "📍", label: "Service Area",  val: "Portland Metro, Willamette Valley, Oregon Coast, Central Oregon" },
  { icon: "📞", label: "Phone",         val: "[Insert Phone Number]" },
  { icon: "✉️", label: "Email",         val: "[Insert Email Address]" },
  { icon: "⏰", label: "Office Hours",  val: "Mon–Fri 7 AM–6 PM · Emergency: 24/7" },
] as const;

const SERVICE_AREAS = [
  "Portland Metro", "Salem / Silverton", "Eugene / Springfield",
  "Central Oregon", "Oregon Coast", "Willamette Valley",
];

export default function ContactPage() {
  return (
    <>
      {/* Page header */}
      <div className="page-header">
        <SectionTag>Get in Touch</SectionTag>
        <h1 className="section-headline">
          Request a Free<br />Facilities Quote
        </h1>
        <p className="section-sub" style={{ marginBottom: 0 }}>
          Tell us about your facility — we&rsquo;ll build a customised scope of
          services and respond within one business day.
        </p>
      </div>

      <section className="section section-dark" aria-labelledby="contact-section-heading">
        <h2 id="contact-section-heading" className="sr-only">Contact information and quote request form</h2>

        <div className="contact-grid">
          {/* ── Form (client component) ──────────────────────────────── */}
          <ScrollReveal>
            <ContactForm />
          </ScrollReveal>

          {/* ── Contact details + map ─────────────────────────────────── */}
          <ScrollReveal delay={1}>
            <div>
              <div className="contact-info" style={{ marginBottom: 32 }}>
                {CONTACT_ITEMS.map(({ icon, label, val }) => (
                  <div key={label} className="contact-item">
                    <span className="contact-icon" aria-hidden="true">{icon}</span>
                    <div>
                      <p className="contact-label">{label}</p>
                      <p className="contact-val">{val}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Service area visual */}
              <div style={{ background: "var(--charcoal-2)", padding: "32px" }}>
                <p
                  style={{
                    fontFamily: "var(--font-mono)", fontSize: 11,
                    letterSpacing: 2, color: "var(--muted)",
                    textTransform: "uppercase", marginBottom: 16,
                  }}
                >
                  Oregon Service Areas
                </p>
                <div className="area-map" aria-label="Oregon service area map placeholder">
                  <div className="area-map-grid" aria-hidden="true" />
                  <p className="area-map-label">Oregon Service Map</p>
                </div>
                <div
                  style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 16 }}
                  aria-label="Service locations"
                >
                  {SERVICE_AREAS.map((a) => (
                    <span
                      key={a}
                      style={{
                        fontSize: 11, padding: "4px 12px",
                        background: "var(--charcoal-3)",
                        color: "var(--fog)",
                        border: "1px solid rgba(255,255,255,0.06)",
                        fontFamily: "var(--font-mono)",
                        letterSpacing: 0.5,
                      }}
                    >
                      {a}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
