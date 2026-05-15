"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  DollarSign,
  Brain,
  Trophy,
  Zap,
  Phone,
  Truck,
  Settings,
  MessageSquare,
  TrendingUp,
  Bot,
} from "lucide-react";

const navItems = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/leads", label: "Lead Intelligence", icon: Users },
  { href: "/recovery", label: "Revenue Recovery", icon: DollarSign },
  { href: "/insights", label: "AI Insights", icon: Brain },
  { href: "/leaderboard", label: "Sales Leaderboard", icon: Trophy },
  { href: "/automation", label: "Follow-Up AI", icon: Zap },
  { href: "/receptionist", label: "AI Receptionist", icon: Phone },
  { href: "/dispatch", label: "Dispatch Intelligence", icon: Truck },
  { href: "/admin", label: "Admin & Settings", icon: Settings },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 bottom-0 w-64 glass border-r border-border flex flex-col z-50">
      <div className="p-5 border-b border-border">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-accent to-recovery flex items-center justify-center">
            <TrendingUp className="w-5 h-5 text-white" />
          </div>
          <div>
            <span className="font-bold text-lg tracking-tight">MoveFlow</span>
            <span className="gradient-text font-bold text-lg ml-0.5">AI</span>
          </div>
        </Link>
      </div>

      <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`sidebar-link ${isActive ? "active" : ""}`}
            >
              <item.icon className="w-[18px] h-[18px]" />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-border">
        <div className="glass-card p-3">
          <div className="flex items-center gap-2 mb-2">
            <Bot className="w-4 h-4 text-accent-light" />
            <span className="text-xs font-semibold text-accent-light">AI STATUS</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-success pulse-dot" />
            <span className="text-xs text-muted">Receptionist Active</span>
          </div>
          <div className="flex items-center gap-2 mt-1">
            <span className="w-2 h-2 rounded-full bg-success pulse-dot" />
            <span className="text-xs text-muted">Recovery Engine Running</span>
          </div>
        </div>
      </div>

      <div className="p-4 border-t border-border">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent to-accent-light flex items-center justify-center text-white text-xs font-bold">
            MF
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium truncate">MoveFlow Demo</p>
            <p className="text-xs text-muted truncate">Pro Plan</p>
          </div>
          <MessageSquare className="w-4 h-4 text-muted" />
        </div>
      </div>
    </aside>
  );
}
