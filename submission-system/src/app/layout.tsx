import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "미래산업융합학회 논문투고시스템",
  description: "미래산업융합학회 논문 투고 및 관리 시스템",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
