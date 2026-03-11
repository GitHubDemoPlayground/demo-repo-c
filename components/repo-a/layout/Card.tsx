import React from "react";
import { cn } from "../utils/cn";

export interface CardProps {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
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
