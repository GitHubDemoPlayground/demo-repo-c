import React from "react";
import { cn } from "../../utils/cn";

export interface BadgeProps {
  variant?: "default" | "success" | "warning" | "error" | "info";
  children: React.ReactNode;
  className?: string;
}

const variants = {
  default: "bg-gray-100 text-gray-800",
  success: "bg-green-100 text-green-800",
  warning: "bg-yellow-100 text-yellow-800",
  error: "bg-red-100 text-red-800",
  info: "bg-blue-100 text-blue-800",
};

export const Badge: React.FC<BadgeProps> = ({ variant = "default", children, className }) => (
  <span
    className={cn(
      "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
      variants[variant],      variants[variant],      variants[variant],      variants[variant],      variants[variant],      variants[variant],      variants[variant],      variants[variant],      variants[variant],      variants[variant],      variants[variant],      variants[variant],      variants[variant],      variants[variant],  ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ title, subtitle, children, footer, className }) => (
  <div className={cn("rounded-lg border border-gray-200 bg-white shadow-sm", className)}>
    {(title || subtitle) && (
      <div className="border-b border-gray-200 px-6 py-4">
        {title && <h3 className="text-lg font-semibold text-gray-900">{title}</h3>}
        {subtitle && <p className="mt-1 text-sm text-gray-500">{subtitle}</p>}
      </div>
    )}
    <div className="px-6 py-4">{children}</div>
    {footer && <div className="border-t border-gray-200 bg-gray-50 px-6 py-3">{footer}</div>}
  </div>
);
