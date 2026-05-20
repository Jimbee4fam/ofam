import type { Metadata } from "next";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Comprehensive facility maintenance, commercial cleaning, preventive maintenance, school facility services, grounds care, and more — across Oregon.",
};

export default function ServicesPage() {
  return <ServicesClient />;
}
