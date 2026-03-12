import React from "react";
import { cn } from "../utils/cn";

export interface ContainerProps {
  children: React.ReactNode;
  maxWidth?: "sm" | "md" | "lg" | "xl" | "full";
  className?: string;
}

const maxWidthStyles = {
  sm: "max-w-screen-sm",
  md: "max-w-screen-md",
  lg: "max-w-screen-lg",
  xl: "max-w-screen-xl",
  full: "max-w-full",
};

export const Container: React.FC<ContainerProps> = ({
  children,
  maxWidth = "lg",
  className,
}) => (
  <div className={cn("mx-auto px-4 sm:px-6 lg:px-8 w-full", maxWidthStyles[maxWidth], className)}>
    {children}
  </div>
);
