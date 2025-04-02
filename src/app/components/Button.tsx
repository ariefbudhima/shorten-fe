// src/components/Button.tsx
import { ReactNode } from "react";

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  isLoading?: boolean;
  onClick?: () => void;
  children: ReactNode;
  className?: string;
}

export default function Button({
  type = "button",
  disabled = false,
  isLoading = false,
  onClick,
  children,
  className = "",
}: ButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled || isLoading}
      onClick={onClick}
      className={`px-6 py-4 text-white font-medium rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 transition duration-300 shadow-lg shadow-violet-500/20 relative overflow-hidden disabled:opacity-70 disabled:cursor-not-allowed whitespace-nowrap ${className}`}
    >
      {isLoading ? (
        <div className="flex items-center justify-center">
          <div className="w-5 h-5 border-t-2 border-b-2 border-white border-solid rounded-full animate-spin mr-2"></div>
          <span>Working...</span>
        </div>
      ) : (
        <>
          <span className="relative z-10">{children}</span>
          <div className="absolute inset-0 bg-gradient-to-r from-violet-400 to-fuchsia-400 opacity-0 hover:opacity-20 transition-opacity"></div>
        </>
      )}
    </button>
  );
}