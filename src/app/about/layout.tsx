import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About me",
  description: "About me",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <section>{children}</section>
}