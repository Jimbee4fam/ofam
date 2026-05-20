"use client";

import { useState, type FormEvent } from "react";
import Btn from "@/components/ui/Btn";

interface Fields {
  name:    string;
  company: string;
  email:   string;
  phone:   string;
  service: string;
  size:    string;
  message: string;
}

type Errors = Partial<Record<keyof Fields, string>>;

const INITIAL: Fields = {
  name: "", company: "", email: "", phone: "",
  service: "", size: "", message: "",
};

function validate(f: Fields): Errors {
  const e: Errors = {};
  if (!f.name.trim())    e.name    = "Name is required.";
  if (!f.email.trim())   e.email   = "Email address is required.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email))
                         e.email   = "Please enter a valid email address.";
  if (!f.message.trim()) e.message = "Please tell us a bit about your facility.";
  return e;
}

export default function ContactForm() {
  const [fields,    setFields]    = useState<Fields>(INITIAL);
  const [errors,    setErrors]    = useState<Errors>({});
  const [submitting,setSubmitting]= useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [apiError,  setApiError]  = useState<string | null>(null);

  function change(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
    // Clear field error on change
    if (errors[name as keyof Fields]) {
      setErrors((prev) => { const next = { ...prev }; delete next[name as keyof Fields]; return next; });
    }
  }

  async function submit(e: FormEvent) {
    e.preventDefault();
    setApiError(null);

    const errs = validate(fields);
    if (Object.keys(errs).length) {
      setErrors(errs);
      // Move focus to first error
      const first = Object.keys(errs)[0];
      document.getElementById(first)?.focus();
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify(fields),
      });

      if (!res.ok) {
        const { error } = await res.json().catch(() => ({ error: "Unexpected error. Please try again." }));
        setApiError(error ?? "Unexpected error. Please try again.");
      } else {
        setSubmitted(true);
      }
    } catch {
      setApiError("Unable to reach the server. Please check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="form-success" role="alert" aria-live="polite">
        <div className="form-success-icon" aria-hidden="true">✅</div>
        <h2 className="form-success-title">Quote Request Received</h2>
        <p className="form-success-msg">
          Thank you, {fields.name}. Our team will review your facility needs and
          respond within one business day.
        </p>
      </div>
    );
  }

  return (
    <div className="form-card">
      <h2 className="form-title">Facility Quote Request</h2>

      {apiError && (
        <div
          role="alert"
          aria-live="assertive"
          style={{
            background: "rgba(248,113,113,0.1)",
            border: "1px solid rgba(248,113,113,0.3)",
            padding: "12px 16px",
            fontSize: 14,
            color: "#f87171",
            marginBottom: 20,
          }}
        >
          {apiError}
        </div>
      )}

      <form onSubmit={submit} noValidate aria-label="Request a facility maintenance quote">
        {/* Row 1 */}
        <div className="form-row">
          <div className="form-group" style={{ marginBottom: 0 }}>
            <label className="form-label" htmlFor="name">
              Full Name <span aria-hidden="true">*</span>
            </label>
            <input
              id="name" name="name" type="text"
              className={`form-input${errors.name ? " error" : ""}`}
              placeholder="Jane Smith"
              value={fields.name} onChange={change}
              autoComplete="name"
              aria-required="true"
              aria-describedby={errors.name ? "name-error" : undefined}
            />
            {errors.name && <p id="name-error" className="form-error" role="alert">{errors.name}</p>}
          </div>

          <div className="form-group" style={{ marginBottom: 0 }}>
            <label className="form-label" htmlFor="company">Company / Organisation</label>
            <input
              id="company" name="company" type="text"
              className="form-input"
              placeholder="Acme Properties LLC"
              value={fields.company} onChange={change}
              autoComplete="organization"
            />
          </div>
        </div>

        {/* Row 2 */}
        <div className="form-row">
          <div className="form-group" style={{ marginBottom: 0 }}>
            <label className="form-label" htmlFor="email">
              Email Address <span aria-hidden="true">*</span>
            </label>
            <input
              id="email" name="email" type="email"
              className={`form-input${errors.email ? " error" : ""}`}
              placeholder="jane@company.com"
              value={fields.email} onChange={change}
              autoComplete="email"
              aria-required="true"
              aria-describedby={errors.email ? "email-error" : undefined}
            />
            {errors.email && <p id="email-error" className="form-error" role="alert">{errors.email}</p>}
          </div>

          <div className="form-group" style={{ marginBottom: 0 }}>
            <label className="form-label" htmlFor="phone">Phone Number</label>
            <input
              id="phone" name="phone" type="tel"
              className="form-input"
              placeholder="(503) 555-0100"
              value={fields.phone} onChange={change}
              autoComplete="tel"
            />
          </div>
        </div>

        {/* Row 3 */}
        <div className="form-row">
          <div className="form-group" style={{ marginBottom: 0 }}>
            <label className="form-label" htmlFor="service">Service Needed</label>
            <select id="service" name="service" className="form-select" value={fields.service} onChange={change}>
              <option value="">Select a service…</option>
              <option>Facility Maintenance Program</option>
              <option>Commercial Janitorial</option>
              <option>Preventive Maintenance</option>
              <option>School Facility Services</option>
              <option>Emergency Service</option>
              <option>Grounds &amp; Exterior</option>
              <option>Full-Service Facilities Management</option>
              <option>Custom / Other</option>
            </select>
          </div>

          <div className="form-group" style={{ marginBottom: 0 }}>
            <label className="form-label" htmlFor="size">Facility Size</label>
            <select id="size" name="size" className="form-select" value={fields.size} onChange={change}>
              <option value="">Select size…</option>
              <option>Under 10,000 sq ft</option>
              <option>10,000 – 50,000 sq ft</option>
              <option>50,000 – 150,000 sq ft</option>
              <option>150,000+ sq ft</option>
              <option>Multi-Building Portfolio</option>
            </select>
          </div>
        </div>

        {/* Message */}
        <div className="form-group">
          <label className="form-label" htmlFor="message">
            Tell Us About Your Facility <span aria-hidden="true">*</span>
          </label>
          <textarea
            id="message" name="message"
            className={`form-textarea${errors.message ? " error" : ""}`}
            placeholder="Describe your facility, current challenges, and what you're looking for in a maintenance or janitorial partner…"
            value={fields.message} onChange={change}
            aria-required="true"
            aria-describedby={errors.message ? "message-error" : undefined}
          />
          {errors.message && <p id="message-error" className="form-error" role="alert">{errors.message}</p>}
        </div>

        <Btn
          type="submit"
          variant="primary"
          full
          disabled={submitting}
          aria-busy={submitting}
        >
          {submitting ? "Sending…" : "Submit Quote Request →"}
        </Btn>

        <p className="form-hint">
          We respond within one business day. No commitment required.
        </p>
      </form>
    </div>
  );
}
