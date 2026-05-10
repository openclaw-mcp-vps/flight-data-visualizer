import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Flight Data Visualizer – Turn Travel Data Into Interactive Maps",
  description: "Upload your flight and travel data to generate beautiful interactive maps and analytics dashboards. Perfect for frequent travelers, digital nomads, and travel bloggers."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="998ea65b-8d4c-4868-9f8c-3c18aed673e1"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  );
}
