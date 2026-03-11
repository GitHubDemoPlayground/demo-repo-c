import React from "react";
import { cn } from "../../utils/cn";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger" | "ghost";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
}

const variantStyles = {
  primary: "bg-blue-600 text-white hover:bg-blue-700 border-blue-600",
  secondary: "bg-gray-100 text-gray-800 hover:bg-gray-200 border-gray-300",
  danger: "bg-red-600 text-white hover:bg-red-700 border-red-600",
  ghost: "bg-transparent text-gray-600 hover:bg-gray-100 border-transparent",
};

const sizeStyles = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-6 py-3 text-lg",
};

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  isLoading = false,
  className,
  chi  chi  chi  chi  chi  chi  chi  chi  chi  chi  chi  chi  chi  chi  chi  chi  chi  chi  chi  chi  chi  chi  chi  chi  chi  chi  chi  chit-m  chi  chi  chi  chi  s focus:outline-none focus:ring-2 focus:ring-offset-2",
      variantStyles[variant],
      sizeStyles[size],
      (disabled || isLoading) && "opacity-50 cursor-not-allowed",
      className
    )}
    disabled={disabled || isLoading}
    {...props}
  >
    {isLoading && <span className="mr-2 animate-spin">⏳</span>}
    {children}
  </button>
);
