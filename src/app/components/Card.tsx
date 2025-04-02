// src/components/Card.tsx
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
}

export default function Card({ children }: CardProps) {
  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 md:p-8 shadow-lg border border-white/10 w-full">
      {children}
    </div>
  );
}