"use client";

import { type LucideIcon } from "lucide-react";
import { formatCurrency, cn } from "@/lib/utils";

interface MetricCardProps {
  title: string;
  value: string | number;
  change?: string;
  changeType?: "positive" | "negative" | "neutral";
  icon: LucideIcon;
  isCurrency?: boolean;
  subtitle?: string;
  glowColor?: string;
}

export default function MetricCard({
  title,
  value,
  change,
  changeType = "neutral",
  icon: Icon,
  isCurrency = false,
  subtitle,
  glowColor,
}: MetricCardProps) {
  const displayValue = isCurrency && typeof value === "number" ? formatCurrency(value) : value;

  return (
    <div className={cn("stat-card", glowColor)}>
      <div className="flex items-start justify-between mb-3">
        <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
          <Icon className="w-5 h-5 text-accent-light" />
        </div>
        {change && (
          <span
            className={cn(
              "text-xs font-semibold px-2 py-0.5 rounded-full",
              changeType === "positive" && "text-success bg-success/10",
              changeType === "negative" && "text-danger bg-danger/10",
              changeType === "neutral" && "text-muted bg-muted/10"
            )}
          >
            {change}
          </span>
        )}
      </div>
      <p className="text-2xl font-bold">{displayValue}</p>
      <p className="text-xs text-muted mt-1">{title}</p>
      {subtitle && <p className="text-xs text-accent-light mt-2">{subtitle}</p>}
    </div>
  );
}
