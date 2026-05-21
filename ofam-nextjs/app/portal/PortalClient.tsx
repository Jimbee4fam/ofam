"use client";

import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import SectionTag from "@/components/ui/SectionTag";
import ServiceCard from "@/components/ui/ServiceCard";
import Btn from "@/components/ui/Btn";

type Tab = "Overview" | "Work Orders" | "PM Schedule" | "Inspection Reports" | "Service History";

const TABS: Tab[] = [
  "Overview", "Work Orders", "PM Schedule", "Inspection Reports", "Service History",
];

// Demo data — labelled as sample/demo content
const WORK_ORDERS = [
  { id: "WO-2841", building: "Sample School A",     loc: "Gym HVAC Unit 3",     cat: "HVAC",      pri: "High",     status: "In Progress", tech: "M. Torres", due: "Today 4 PM"   },
  { id: "WO-2840", building: "Sample Office Bldg",  loc: "Restroom 1st Floor",  cat: "Plumbing",  pri: "Critical", status: "Open",        tech: "Dispatch",  due: "Today 11 AM"  },
  { id: "WO-2838", building: "Sample District HQ",  loc: "Conference Rooms",    cat: "Janitorial",pri: "Normal",   status: "Scheduled",   tech: "K. Evans",  due: "Tomorrow 6 AM"},
  { id: "WO-2835", building: "Sample Plaza",        loc: "Suite 220 Lighting",  cat: "Electrical",pri: "Normal",   status: "Complete",    tech: "R. Singh",  due: "Completed"    },
  { id: "WO-2831", building: "Sample Elementary",   loc: "Front Lawn",          cat: "Grounds",   pri: "Normal",   status: "Review",      tech: "J. Park",   due: "Mon"          },
] as const;

const PM_ITEMS = [
  { task: "HVAC Filter Replacement — All Buildings", freq: "Monthly",    next: "Next Month",      assigned: "HVAC Team",           status: "Scheduled" },
  { task: "Fire Extinguisher Inspection",            freq: "Annual",     next: "Jul 15",          assigned: "Life Safety Vendor",  status: "Scheduled" },
  { task: "Roof Drainage Inspection",                freq: "Quarterly",  next: "Next Quarter",    assigned: "Facilities Team",     status: "Scheduled" },
  { task: "Parking Lot Sweeping & Inspection",       freq: "Monthly",    next: "Next Month",      assigned: "Grounds Team",        status: "Scheduled" },
  { task: "Elevator Annual Certification",           freq: "Annual",     next: "Aug 30",          assigned: "Certified Vendor",    status: "Scheduled" },
  { task: "Restroom Fixture Inspection",             freq: "Bi-Weekly",  next: "This Week",       assigned: "Maintenance Team",    status: "Due Soon"  },
] as const;

function statusClass(s: string) {
  if (s === "Open")      return "status-open";
  if (s === "Complete")  return "status-complete";
  if (s === "Scheduled") return "status-scheduled";
  return "status-review";
}

const PORTAL_FEATURES = [
  { icon: "📱", title: "Mobile Access",         description: "Full portal access on any device, anywhere, anytime." },
  { icon: "🔔", title: "Real-Time Alerts",      description: "Notifications for work order updates and urgent issues." },
  { icon: "📸", title: "Photo Documentation",   description: "Before and after photos attached to every work order." },
  { icon: "📄", title: "Export Reports",         description: "Download service history, PM logs, and inspection records." },
  { icon: "🔒", title: "Secure Access",          description: "Role-based login for facility managers, directors, and staff." },
  { icon: "📞", title: "Direct Communication",  description: "In-portal messaging and direct technician communication." },
] as const;

export default function PortalClient() {
  const [activeTab, setActiveTab] = useState<Tab>("Overview");

  return (
    <>
      {/* Page header */}
      <div className="page-header">
        <SectionTag>Client Portal</SectionTag>
        <h1 className="section-headline">
          Facility Management<br />at Your Fingertips
        </h1>
        <p className="section-sub" style={{ marginBottom: 0 }}>
          Real-time visibility into every aspect of your facility operations — work
          orders, preventive maintenance, inspections, and service history.
        </p>
      </div>

      <section className="section section-dark" aria-labelledby="portal-demo-heading">
        <ScrollReveal>
          <p
            style={{
              fontFamily: "var(--font-mono)", fontSize: 11,
              letterSpacing: 2, color: "var(--muted)",
              textTransform: "uppercase", marginBottom: 24,
              border: "1px solid rgba(255,255,255,0.08)",
              display: "inline-block", padding: "4px 12px",
            }}
          >
            ⓘ&nbsp; Interactive demo — sample data only
          </p>
        </ScrollReveal>

        {/* Portal shell */}
        <ScrollReveal delay={1}>
          <div
            className="portal-wrap"
            role="region"
            aria-labelledby="portal-demo-heading"
          >
            <h2 id="portal-demo-heading" className="sr-only">Portal demo</h2>

            {/* Window bar */}
            <div className="portal-bar">
              <div className="portal-dot" style={{ background: "#f97316" }} aria-hidden="true" />
              <div className="portal-dot" style={{ background: "#facc15" }} aria-hidden="true" />
              <div className="portal-dot" style={{ background: "#22c55e" }} aria-hidden="true" />
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--muted)", marginLeft: 8 }}>
                portal.ofam.io
              </span>

              {/* Tab buttons */}
              <div className="portal-tabs" role="tablist" aria-label="Portal sections">
                {TABS.map((t) => (
                  <button
                    key={t}
                    role="tab"
                    aria-selected={activeTab === t}
                    aria-controls={`panel-${t.replace(/\s/g, "-")}`}
                    className={`portal-tab ${activeTab === t ? "active" : ""}`}
                    onClick={() => setActiveTab(t)}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Panel content */}
            <div
              className="portal-body"
              role="tabpanel"
              id={`panel-${activeTab.replace(/\s/g, "-")}`}
              aria-label={activeTab}
            >
              {/* ─ Overview ─ */}
              {activeTab === "Overview" && (
                <>
                  <div style={{ marginBottom: 20, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
                    <p style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 700 }}>Facility Dashboard</p>
                    <p style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--muted)" }}>Sample data — for illustration only</p>
                  </div>

                  {/* KPIs (labelled as example) */}
                  <div className="portal-kpis" style={{ marginBottom: 24 }}>
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

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 3 }}>
                    <div>
                      <p style={{ fontSize: 11, letterSpacing: 2, textTransform: "uppercase", color: "var(--muted)", fontFamily: "var(--font-mono)", marginBottom: 8 }}>
                        How it works
                      </p>
                      {[
                        "Work orders created and dispatched digitally",
                        "Technician updates status in real-time via mobile",
                        "Photos captured before and after each job",
                        "Client notified on completion",
                        "Monthly summary report generated automatically",
                      ].map((item, i) => (
                        <div key={i} style={{ padding: "12px 16px", background: i % 2 === 0 ? "var(--charcoal-3)" : "var(--charcoal-2)", fontSize: 13, color: "var(--fog)", display: "flex", gap: 10 }}>
                          <span style={{ color: "var(--orange)" }}>›</span>{item}
                        </div>
                      ))}
                    </div>
                    <div>
                      <p style={{ fontSize: 11, letterSpacing: 2, textTransform: "uppercase", color: "var(--muted)", fontFamily: "var(--font-mono)", marginBottom: 8 }}>
                        Portal features
                      </p>
                      {[
                        ["Work Order Submission",    "Online, 24/7"],
                        ["Real-Time Tech Tracking",  "Mobile-enabled"],
                        ["PM Schedule Visibility",   "Full calendar view"],
                        ["Inspection Reports",       "Downloadable PDFs"],
                        ["Service History",          "Full audit trail"],
                      ].map(([l, v], i) => (
                        <div key={i} style={{ padding: "14px 16px", background: i % 2 === 0 ? "var(--charcoal-3)" : "var(--charcoal-2)", display: "flex", justifyContent: "space-between", fontSize: 13, color: "var(--fog)", marginBottom: 3 }}>
                          <span>{l}</span>
                          <span style={{ color: "var(--orange)", fontFamily: "var(--font-mono)", fontSize: 11 }}>{v}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}

              {/* ─ Work Orders ─ */}
              {activeTab === "Work Orders" && (
                <>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20, flexWrap: "wrap", gap: 12 }}>
                    <p style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 700 }}>Work Orders</p>
                    <p style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--muted)" }}>Sample data</p>
                  </div>
                  <div style={{ overflowX: "auto" }}>
                    <table className="portal-table">
                      <thead>
                        <tr>
                          <th scope="col">ID</th>
                          <th scope="col">Building</th>
                          <th scope="col">Location</th>
                          <th scope="col">Category</th>
                          <th scope="col">Priority</th>
                          <th scope="col">Status</th>
                          <th scope="col">Technician</th>
                          <th scope="col">Due</th>
                        </tr>
                      </thead>
                      <tbody>
                        {WORK_ORDERS.map((w) => (
                          <tr key={w.id}>
                            <td style={{ fontFamily: "var(--font-mono)", color: "var(--orange)", fontSize: 11 }}>{w.id}</td>
                            <td>{w.building}</td>
                            <td style={{ color: "var(--muted)", fontSize: 12 }}>{w.loc}</td>
                            <td>{w.cat}</td>
                            <td style={{ color: w.pri === "Critical" ? "#f87171" : w.pri === "High" ? "var(--orange)" : "var(--fog)" }}>{w.pri}</td>
                            <td><span className={`status-badge ${statusClass(w.status)}`}>{w.status}</span></td>
                            <td style={{ fontSize: 12, color: "var(--muted)" }}>{w.tech}</td>
                            <td style={{ fontSize: 11, color: "var(--fog)", fontFamily: "var(--font-mono)" }}>{w.due}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </>
              )}

              {/* ─ PM Schedule ─ */}
              {activeTab === "PM Schedule" && (
                <>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20, flexWrap: "wrap", gap: 12 }}>
                    <p style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 700 }}>Preventive Maintenance Schedule</p>
                    <p style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--muted)" }}>Sample data</p>
                  </div>
                  <div style={{ overflowX: "auto" }}>
                    <table className="portal-table">
                      <thead>
                        <tr>
                          <th scope="col">Task</th>
                          <th scope="col">Frequency</th>
                          <th scope="col">Next Due</th>
                          <th scope="col">Assigned</th>
                          <th scope="col">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {PM_ITEMS.map((p, i) => (
                          <tr key={i}>
                            <td>{p.task}</td>
                            <td style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--muted)" }}>{p.freq}</td>
                            <td style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--fog)" }}>{p.next}</td>
                            <td style={{ fontSize: 12, color: "var(--muted)" }}>{p.assigned}</td>
                            <td><span className={`status-badge ${p.status === "Due Soon" ? "status-open" : "status-scheduled"}`}>{p.status}</span></td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </>
              )}

              {/* ─ Locked tabs ─ */}
              {(activeTab === "Inspection Reports" || activeTab === "Service History") && (
                <div style={{ padding: "48px", textAlign: "center" }}>
                  <div style={{ fontSize: 48, marginBottom: 16 }} aria-hidden="true">📊</div>
                  <p style={{ fontFamily: "var(--font-display)", fontSize: 28, fontWeight: 800, marginBottom: 12 }}>
                    {activeTab}
                  </p>
                  <p style={{ color: "var(--muted)", fontSize: 14, marginBottom: 32, maxWidth: 360, margin: "0 auto 32px" }}>
                    Full {activeTab.toLowerCase()} are available to active OFAM clients through the live portal. Request access when you begin your service agreement.
                  </p>
                  <Btn href="/contact" variant="primary">Request Portal Access</Btn>
                </div>
              )}
            </div>
          </div>
        </ScrollReveal>

        {/* Feature cards */}
        <ScrollReveal delay={2}>
          <div
            style={{ marginTop: 64, display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 3 }}
            aria-label="Portal feature highlights"
          >
            {PORTAL_FEATURES.map((f) => (
              <ServiceCard
                key={f.title}
                icon={f.icon}
                title={f.title}
                description={f.description}
              />
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* CTA */}
      <section className="cta-band" aria-labelledby="portal-cta-heading">
        <div className="cta-band-grid" aria-hidden="true" />
        <div className="cta-band-content">
          <p className="cta-band-tag">Get Portal Access</p>
          <h2 id="portal-cta-heading" className="cta-band-h">
            Ready for Full<br />Facility Visibility?
          </h2>
          <p className="cta-band-sub">
            Portal access is included with every OFAM service agreement.
            Contact us to get started.
          </p>
          <Btn href="/contact" variant="dark">Request a Quote</Btn>
        </div>
      </section>
    </>
  );
}
