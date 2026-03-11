import React from "react";
import { cn } from "../../utils/cn";

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

const icons = { info: "ℹ️", success: "✅", warning: "⚠️", error: "❌" };

export const Alert: React.FC<AlertProps> = ({
  variant = "info",
  title,
  children,
  dismissible,
  onDismiss,
  className,
}) => (
  <div className={cn("flex rounded-md border p-4", variants[variant], className)} role="alert">
    <    <    <    <    <    <    <    <    <    <    <    <    <    <    <    <    <    <    <    <    <    <    <    <    <    <    <    <</p>}
      <div className="text-sm">{children}</div>
    </div>
    {dismissible && (
      <button onClick={onDismiss} className="ml-3 opacity-60 hover:opacity-100" aria-label="Dismiss">✕</button>
    )}
  </div>
);
