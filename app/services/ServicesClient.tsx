"use client";

import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import SectionTag from "@/components/ui/SectionTag";
import ServiceCard from "@/components/ui/ServiceCard";
import Btn from "@/components/ui/Btn";

type Tab = "All" | "Maintenance" | "Cleaning" | "Technology" | "Specialty";

const TABS: Tab[] = ["All", "Maintenance", "Cleaning", "Technology", "Specialty"];

const ALL_SERVICES = [
  {
    cat: "Maintenance" as Tab, icon: "🏢", title: "Facility Maintenance",
    desc: "Comprehensive building maintenance programs covering all major systems including HVAC, electrical, plumbing, and interior finishes. Structured for multi-building portfolios.",
    bullets: [
      "HVAC filter changes and tune-ups",
      "Light fixture and electrical repairs",
      "Plumbing repairs and drain maintenance",
      "Door hardware and building envelope",
      "Interior finishes and touch-up repairs",
      "Ceiling tile and flooring repairs",
    ],
  },
  {
    cat: "Maintenance" as Tab, icon: "📋", title: "Preventive Maintenance",
    desc: "Proactive PM programs that reduce emergency repairs, extend equipment life, and maintain facility value over the long term.",
    bullets: [
      "Monthly and quarterly PM checklists",
      "Equipment service records and logs",
      "Warranty tracking and documentation",
      "Seasonal system preparation",
      "Life-cycle planning and budgeting",
      "Regulatory compliance tracking",
    ],
  },
  {
    cat: "Maintenance" as Tab, icon: "🔨", title: "Building Repairs",
    desc: "Skilled tradespeople handling interior and exterior repair work across commercial facilities — from minor fixes to larger renovation scopes.",
    bullets: [
      "Drywall and paint repairs",
      "Door and window repairs",
      "Roofing repairs and inspection support",
      "Concrete and masonry patching",
      "ADA compliance corrections",
      "After-hours emergency repairs",
    ],
  },
  {
    cat: "Specialty" as Tab, icon: "🏫", title: "School Facility Services",
    desc: "Purpose-built maintenance and custodial programs for K–12 districts — designed around school calendars, safety standards, and high-occupancy custodial requirements.",
    bullets: [
      "Custodial staffing and management",
      "Summer deep-cleaning programs",
      "Gymnasium and cafeteria care",
      "Health and safety compliance",
      "Classroom and restroom sanitation",
      "Event setup and breakdown support",
    ],
  },
  {
    cat: "Cleaning" as Tab, icon: "🧹", title: "Commercial Cleaning",
    desc: "Systematic janitorial programs for office buildings, retail centres, medical offices, and commercial spaces with documented quality controls.",
    bullets: [
      "Daily, weekly, and monthly service plans",
      "Hard floor care (strip, wax, buff)",
      "Carpet cleaning and extraction",
      "Restroom sanitation and disinfection",
      "Window and glass cleaning",
      "Day porter and recurring services",
    ],
  },
  {
    cat: "Maintenance" as Tab, icon: "⚡", title: "Emergency Service Calls",
    desc: "24/7 emergency response for critical building failures. Rapid dispatch, clear communication, and full documentation for every emergency event.",
    bullets: [
      "Water intrusion and flood response",
      "HVAC failure emergency service",
      "Electrical and lighting emergencies",
      "Lock-out and security repairs",
      "Storm damage response",
      "Sewage and drain emergencies",
    ],
  },
  {
    cat: "Maintenance" as Tab, icon: "🌿", title: "Grounds & Exterior",
    desc: "Property exterior management covering landscaping, parking areas, walkways, and seasonal services to maintain professional curb appeal year-round.",
    bullets: [
      "Grounds maintenance and mowing",
      "Parking lot sweeping and striping",
      "Exterior pressure washing",
      "Snow removal and de-icing",
      "Seasonal colour and plantings",
      "Exterior lighting and signage",
    ],
  },
  {
    cat: "Technology" as Tab, icon: "📱", title: "Work Order Management",
    desc: "Digital work order system with online request submission, real-time technician tracking, photo documentation, and completion reporting.",
    bullets: [
      "Online work order submission portal",
      "Mobile tech dispatch and tracking",
      "Photo before/after documentation",
      "Priority tiering and SLA tracking",
      "Client approval workflows",
      "Monthly performance reports",
    ],
  },
  {
    cat: "Technology" as Tab, icon: "🤝", title: "Vendor Coordination",
    desc: "Full subcontractor and specialty trade management — OFAM coordinates all vendors, reducing your administrative burden and accountability gaps.",
    bullets: [
      "Specialty trade subcontractor network",
      "Vendor insurance certificate management",
      "Bid solicitation and comparison",
      "Invoice consolidation and review",
      "Single point of contact for all trades",
      "Performance tracking and accountability",
    ],
  },
] as const;

export default function ServicesClient() {
  const [activeTab, setActiveTab] = useState<Tab>("All");

  const filtered =
    activeTab === "All" ? ALL_SERVICES : ALL_SERVICES.filter((s) => s.cat === activeTab);

  return (
    <>
      {/* Page header */}
      <div className="page-header">
        <SectionTag>What We Do</SectionTag>
        <h1 className="section-headline">
          Comprehensive Facility<br />Services for Oregon Properties
        </h1>
        <p className="section-sub" style={{ marginBottom: 0 }}>
          From day-to-day janitorial to complex multi-trade maintenance
          programmes — OFAM delivers the full scope of professional facility
          services.
        </p>
      </div>

      <section className="section section-dark" aria-labelledby="services-list-heading">
        <h2 id="services-list-heading" className="sr-only">Services list</h2>

        {/* Tab filter */}
        <ScrollReveal>
          <div className="tab-row" role="tablist" aria-label="Filter services by category">
            {TABS.map((t) => (
              <button
                key={t}
                role="tab"
                aria-selected={activeTab === t}
                className={`tab-btn ${activeTab === t ? "active" : ""}`}
                onClick={() => setActiveTab(t)}
              >
                {t}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Cards */}
        <ScrollReveal delay={1}>
          <div
            className="services-grid"
            style={{ gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))" }}
            role="tabpanel"
            aria-label={`${activeTab} services`}
          >
            {filtered.map((s) => (
              <ServiceCard
                key={s.title}
                icon={s.icon}
                title={s.title}
                description={s.desc}
                bullets={[...s.bullets]}
                category={s.cat !== "All" ? s.cat : undefined}
              />
            ))}
          </div>
        </ScrollReveal>

        {/* Custom scope callout */}
        <ScrollReveal delay={2}>
          <div
            style={{
              marginTop: 80,
              background: "var(--charcoal-2)",
              padding: "56px 48px",
              borderLeft: "4px solid var(--orange)",
            }}
          >
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }}>
              <div>
                <SectionTag>Custom Programmes</SectionTag>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(28px, 3vw, 42px)",
                    fontWeight: 800,
                    marginBottom: 16,
                    lineHeight: 1.05,
                  }}
                >
                  Don&rsquo;t See What You Need?
                </h3>
                <p style={{ fontSize: 15, color: "var(--fog)", lineHeight: 1.7, fontWeight: 300 }}>
                  OFAM builds custom facility management programmes for complex
                  portfolios and unique operational requirements. Contact us to
                  discuss your scope.
                </p>
              </div>
              <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                <Btn href="/contact" variant="primary">Request a Scope Review</Btn>
                <Btn href="/about"   variant="secondary">About Our Team</Btn>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
