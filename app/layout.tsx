import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ChurnRadar — Predict Customer Churn from Email Engagement",
  description: "Analyze customer email open rates, click patterns, and response times to predict churn risk with automated intervention suggestions for SaaS teams."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="abddab11-9656-4c23-8b41-6ed39fd66a1c"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
