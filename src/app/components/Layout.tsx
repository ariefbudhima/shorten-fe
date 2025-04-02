// src/components/Layout.tsx
"use client";

import { ReactNode } from "react";
import ParticlesBackground from "./ParticlesBackground";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col items-center justify-between min-h-screen p-6 md:p-10 font-[family-name:var(--font-geist-sans)] bg-black relative overflow-hidden">
      <ParticlesBackground />
      
      {/* Abstract gradient shapes in background */}
      <div className="absolute -top-24 -left-24 w-64 h-64 bg-gradient-to-r from-violet-600/20 to-fuchsia-600/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-gradient-to-l from-indigo-600/20 to-purple-600/20 rounded-full blur-3xl"></div>
      
      <Header />
      
      <main className="w-full max-w-2xl z-10 flex-grow flex items-center justify-center">
        {children}
      </main>
      
      <Footer />
    </div>
  );
}