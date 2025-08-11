"use client";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClick?: () => void;
  variant?: "default" | "gradient" | "glass";
  size?: "xs" | "sm" | "md" | "lg";
  className?: string;
}

const Button = ({
  children,
  onClick,
  variant = "default",
  size = "sm",
  className,
}: Props) => {
  const baseStyles = "items-center justify-center rounded-full font-bold";
  const variants = {
    default:
      "bg-[var(--color-pd-green)] text-[var(--color-pd-black)] hover:bg-[#36b381] transition-colors duration-300",
    gradient:
      "bg-[var(--color-pd-green)] text-[var(--color-pd-black)] bg-gradient-to-r from-[var(--color-pd-green)] to-[#37A169]",
    glass:
      "hover:bg-white/10 bg-white/5 bg-gradient-to-b from-black/5 to-[var(--color-pd-green)]/11 backdrop-blur-sm hover:backdrop-blur-lg border border-white/20",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};
export default Button;
