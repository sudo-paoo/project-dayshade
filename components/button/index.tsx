"use client";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClick?: () => void;
  variant?: "default" | "gradient" | "glass";
  size?: "sm" | "md" | "lg";
  className?: string;
}

const Button = ({
  children,
  onClick,
  variant = "default",
  size = "sm",
  className,
}: Props) => {
  const baseStyles =
    "inline-flex items-center justify-center rounded-full font-bold";
  const variants = {
    default: "bg-[var(--color-pd-green)] text-[var(--color-pd-black)]",
    gradient: "bg-[var(--color-pd-green)]",
    glass: "bg-gradient-to-b from-white/30 to-black/10 border border-white/20",
  };

  const sizes = {
    sm: "h-2 py-3 px-6 text-xs",
    md: "h-10 px-4 py-2",
    lg: "h-11 px-8",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </button>
  );
};
export default Button;
