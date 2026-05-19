// === app/layout.tsx ===
import React from "react";
import '../styles/globals.css';

export const metadata = {
  title: 'Netflix Clone - Streaming Platform',
  description: 'Premium streaming platform UI inspired by Netflix - Dark cinematic theme with glassmorphism styling',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}