import type { Metadata } from "next";
import PortalClient from "./PortalClient";

export const metadata: Metadata = {
  title: "Client Portal",
  description:
    "OFAM's client portal provides real-time visibility into work orders, preventive maintenance schedules, inspection reports, and facility service history.",
};

export default function PortalPage() {
  return <PortalClient />;
}
