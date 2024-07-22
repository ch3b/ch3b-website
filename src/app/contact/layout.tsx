import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Me",
  description: "Contact me",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
