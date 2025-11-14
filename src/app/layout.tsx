import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'GSAP Pinned Image Mask Reveal',
  description: 'Interactive image mask reveal animation with GSAP and Lenis smooth scroll',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
