# OFAM — Oregon Facilities & Maintenance LLC

Production-ready Next.js 14 website built for Vercel.

---

## Stack

- **Framework** — Next.js 14 (App Router)
- **Language**  — TypeScript
- **Styling**   — Global CSS with CSS custom properties (no Tailwind dependency)
- **Fonts**     — Google Fonts via CSS `@import` (Barlow Condensed, Barlow, DM Mono)
- **Deployment**— Vercel (zero-config)

---

## Getting Started

```bash
# 1 — Install dependencies
npm install

# 2 — Run development server
npm run dev
# → http://localhost:3000

# 3 — Build for production
npm run build
npm start
```

---

## Project Structure

```
ofam-nextjs/
├── app/
│   ├── globals.css            ← All design tokens and component styles
│   ├── layout.tsx             ← Root layout, metadata, Nav, Footer
│   ├── page.tsx               ← Home page (server component)
│   ├── services/
│   │   ├── page.tsx           ← Services page shell
│   │   └── ServicesClient.tsx ← Tab-filtered services (client component)
│   ├── about/
│   │   └── page.tsx           ← About page (server component)
│   ├── portal/
│   │   ├── page.tsx           ← Portal page shell
│   │   └── PortalClient.tsx   ← Interactive portal demo (client component)
│   ├── contact/
│   │   ├── page.tsx           ← Contact page shell + contact info
│   │   └── ContactForm.tsx    ← Quote request form (client component)
│   └── api/
│       └── contact/
│           └── route.ts       ← POST /api/contact — wire your email service here
├── components/
│   ├── Nav.tsx                ← Sticky nav with mobile hamburger
│   ├── Footer.tsx
│   ├── AnimatedCounter.tsx    ← Scroll-triggered number counter
│   ├── ScrollReveal.tsx       ← Intersection-observer fade-in-up wrapper
│   └── ui/
│       ├── Btn.tsx            ← Accessible polymorphic button / Link
│       ├── SectionTag.tsx     ← Section label above headings
│       └── ServiceCard.tsx    ← Reusable service / feature card
```

---

## Before Launch — Checklist

### 1. Contact information
Replace all `[Insert …]` placeholders in `components/Footer.tsx` and
`app/contact/page.tsx` with real phone numbers and email addresses.

### 2. Domain
Update `metadataBase` in `app/layout.tsx`:
```ts
metadataBase: new URL("https://your-real-domain.com"),
```

### 3. Wire the contact form
Open `app/api/contact/route.ts` and follow the comments to connect one of:

**Option A — Resend** (recommended):
```bash
npm install resend
```
```ts
// In route.ts
import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);
await resend.emails.send({
  from:    "no-reply@yourdomain.com",
  to:      process.env.CONTACT_TO_EMAIL!,
  subject: `New quote request from ${payload.name}`,
  text:    JSON.stringify(payload, null, 2),
});
```

**Option B — Nodemailer** (SMTP / Gmail):
```bash
npm install nodemailer @types/nodemailer
```

### 4. Environment variables
Create a `.env.local` file (never commit this):
```
RESEND_API_KEY=re_xxxxxxxxxxxx
CONTACT_TO_EMAIL=you@yourdomain.com
```
Add the same variables in Vercel → Project Settings → Environment Variables.

### 5. Logo / images
Replace the placeholder logo mark in `Nav.tsx` and `Footer.tsx` with your
real SVG or `next/image` asset once available.

### 6. Privacy policy & terms pages
`/privacy` and `/terms` are linked in the footer. Create
`app/privacy/page.tsx` and `app/terms/page.tsx` before launch.

---

## Deploy to Vercel

```bash
npm install -g vercel
vercel
```

Or push to GitHub and connect the repo in the Vercel dashboard — it will
detect Next.js automatically and configure everything.

---

## Accessibility

- Skip-to-content link at top of every page
- All interactive elements are `<button>` or `<a>` with descriptive labels
- ARIA roles on tablist/tabpanel in Services and Portal pages
- Form fields have associated `<label>` elements and `aria-describedby` error references
- Focus ring visible on keyboard navigation (`:focus-visible`)
- Mobile menu managed with `aria-expanded` and `aria-controls`

---

## Customisation Notes

- **Colors** — change CSS custom properties in `app/globals.css` `:root`
- **Fonts** — swap `@import` in `globals.css` and update `--font-*` variables
- **Content** — all page content lives in the page/client files; no CMS required
- **Images** — add `next/image` components once real photography is available
