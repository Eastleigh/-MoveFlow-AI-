"use client";

import {
  DollarSign,
  TrendingUp,
  Users,
  Clock,
  PhoneMissed,
  Sparkles,
  Target,
  ArrowUpRight,
} from "lucide-react";
import MetricCard from "@/components/dashboard/MetricCard";
import RevenueChart from "@/components/dashboard/RevenueChart";
import RevenueSourceChart from "@/components/dashboard/RevenueSourceChart";
import AIRecommendations from "@/components/dashboard/AIRecommendations";
import { dashboardMetrics } from "@/lib/mock-data";
import { formatCurrency } from "@/lib/utils";

export default function DashboardPage() {
  return (
    <div className="space-y-8 slide-up">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-bold">Revenue Command Center</h1>
          <p className="text-sm text-muted mt-1">
            Real-time overview of your moving business performance
          </p>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-success/10 border border-success/20">
          <span className="w-2 h-2 rounded-full bg-success pulse-dot" />
          <span className="text-xs font-medium text-success">AI Active</span>
        </div>
      </div>

      {/* Revenue Hero Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="stat-card glow-green relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-success/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <p className="text-xs font-semibold text-success uppercase tracking-wider mb-2">Booked Revenue</p>
          <p className="text-4xl font-bold gradient-green">{formatCurrency(dashboardMetrics.bookedRevenue)}</p>
          <p className="text-xs text-muted mt-2">This month &middot; <span className="text-success">+12.4% vs last month</span></p>
        </div>
        <div className="stat-card glow-red relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-danger/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <p className="text-xs font-semibold text-warning uppercase tracking-wider mb-2">Recoverable Revenue</p>
          <p className="text-4xl font-bold gradient-red">{formatCurrency(dashboardMetrics.recoverableRevenue)}</p>
          <p className="text-xs text-muted mt-2">{dashboardMetrics.staleLeads} stale leads &middot; <span className="text-warning">AI recovery available</span></p>
        </div>
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <MetricCard
          title="AI Recovered Revenue"
          value={dashboardMetrics.aiRecoveredRevenue}
          icon={Sparkles}
          isCurrency
          change="+$8.2K"
          changeType="positive"
        />
        <MetricCard
          title="Conversion Rate"
          value={`${dashboardMetrics.conversionRate}%`}
          icon={Target}
          change="+2.1%"
          changeType="positive"
        />
        <MetricCard
          title="Avg Move Value"
          value={dashboardMetrics.avgMoveValue}
          icon={DollarSign}
          isCurrency
          change="+$120"
          changeType="positive"
        />
        <MetricCard
          title="Lead Response Time"
          value={`${dashboardMetrics.leadResponseTime} min`}
          icon={Clock}
          change="+14 min"
          changeType="negative"
          subtitle="Needs attention"
        />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <MetricCard
          title="Stale Leads"
          value={dashboardMetrics.staleLeads}
          icon={Users}
          change="+5"
          changeType="negative"
        />
        <MetricCard
          title="Missed Calls"
          value={dashboardMetrics.missedCalls}
          icon={PhoneMissed}
          change="-3"
          changeType="positive"
        />
        <MetricCard
          title="Weekly Bookings"
          value={42}
          icon={TrendingUp}
          change="+6"
          changeType="positive"
        />
        <MetricCard
          title="Active Follow-Ups"
          value={18}
          icon={ArrowUpRight}
          change="Running"
          changeType="neutral"
        />
      </div>

      {/* Charts */}
      <div className="grid md:grid-cols-2 gap-6">
        <RevenueChart />
        <RevenueSourceChart />
      </div>

      {/* AI Recommendations */}
      <AIRecommendations />
    </div>
  );
}
