import React from "react";
import { cn } from "../utils/cn";

export interface AlertProps {
  variant?: "info" | "success" | "warning" | "error";
  title?: string;
  children: React.ReactNode;
  dismissible?: boolean;
  onDismiss?: () => void;
  className?: string;
}

const variants = {
  info: "bg-blue-50 border-blue-200 text-blue-800",
  success: "bg-green-50 border-green-200 text-green-800",
  warning: "bg-yellow-50 border-yellow-200 text-yellow-800",
  error: "bg-red-50 border-red-200 text-red-800",
};

const icons: Record<string, string> = {
  info: "\u2139\uFE0F",
  success: "\u2705",
  warning: "\u26A0\uFE0F",
  error: "\u274C",
};

export const Alert: React.FC<AlertProps> = ({
  variant = "info",
  title,
  children,
  dismissible,
  onDismiss,
  className,
}) => (
  <div className={cn("flex rounded-md border p-4", variants[variant], className)} role="alert">
    <span className="mr-3 text-lg">{icons[variant]}</span>
    <div className="flex-1">
      {title && <p className="font-semibold">{title}</p>}
      <div className="text-sm">{children}</div>
    </div>
    {dismissible && (
      <button onClick={onDismiss} className="ml-3 opacity-60 hover:opacity-100" aria-label="Dismiss">
        \u2715
      </button>
    )}
  </div>
);
