import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function formatCurrency(value: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}

export function formatNumber(value: number): string {
  return new Intl.NumberFormat("en-US").format(value);
}

export function getStatusColor(status: string): string {
  const colors: Record<string, string> = {
    new: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    contacted: "bg-amber-500/20 text-amber-400 border-amber-500/30",
    quoted: "bg-purple-500/20 text-purple-400 border-purple-500/30",
    booked: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
    lost: "bg-red-500/20 text-red-400 border-red-500/30",
    stale: "bg-orange-500/20 text-orange-400 border-orange-500/30",
    scheduled: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    "in-progress": "bg-amber-500/20 text-amber-400 border-amber-500/30",
    completed: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
    cancelled: "bg-red-500/20 text-red-400 border-red-500/30",
  };
  return colors[status] || "bg-gray-500/20 text-gray-400 border-gray-500/30";
}

export function getPriorityColor(priority: string): string {
  const colors: Record<string, string> = {
    high: "text-red-400 bg-red-500/10 border-red-500/20",
    medium: "text-amber-400 bg-amber-500/10 border-amber-500/20",
    low: "text-blue-400 bg-blue-500/10 border-blue-500/20",
  };
  return colors[priority] || "text-gray-400 bg-gray-500/10 border-gray-500/20";
}

export function getScoreColor(score: number): string {
  if (score >= 80) return "text-emerald-400";
  if (score >= 60) return "text-amber-400";
  if (score >= 40) return "text-orange-400";
  return "text-red-400";
}

export function getScoreBg(score: number): string {
  if (score >= 80) return "bg-emerald-500";
  if (score >= 60) return "bg-amber-500";
  if (score >= 40) return "bg-orange-500";
  return "bg-red-500";
}
