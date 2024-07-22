import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ch3b",
  description: "Portfolio for ch3b",
  icons:
  {
    icon: './favicon.ico'
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
