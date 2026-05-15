"use client";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { dashboardMetrics } from "@/lib/mock-data";

const data = dashboardMetrics.dailyBookings.map((d) => ({
  ...d,
  total: d.booked + d.recovered,
}));

export default function RevenueChart() {
  return (
    <div className="glass-card p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="font-semibold">Booking Performance</h3>
          <p className="text-xs text-muted mt-1">This week&apos;s booked vs lost vs recovered</p>
        </div>
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 text-xs">
            <span className="w-2.5 h-2.5 rounded-full bg-accent" />
            Booked
          </span>
          <span className="flex items-center gap-1.5 text-xs">
            <span className="w-2.5 h-2.5 rounded-full bg-recovery" />
            Recovered
          </span>
          <span className="flex items-center gap-1.5 text-xs">
            <span className="w-2.5 h-2.5 rounded-full bg-danger" />
            Lost
          </span>
        </div>
      </div>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="booked" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="recovered" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="lost" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#ef4444" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#ef4444" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(99,102,241,0.06)" />
            <XAxis dataKey="date" stroke="#6b6b8d" fontSize={12} tickLine={false} axisLine={false} />
            <YAxis stroke="#6b6b8d" fontSize={12} tickLine={false} axisLine={false} />
            <Tooltip
              contentStyle={{
                background: "rgba(10,10,30,0.95)",
                border: "1px solid rgba(99,102,241,0.2)",
                borderRadius: "12px",
                fontSize: "12px",
              }}
            />
            <Area type="monotone" dataKey="booked" stroke="#6366f1" fill="url(#booked)" strokeWidth={2} />
            <Area type="monotone" dataKey="recovered" stroke="#8b5cf6" fill="url(#recovered)" strokeWidth={2} />
            <Area type="monotone" dataKey="lost" stroke="#ef4444" fill="url(#lost)" strokeWidth={2} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
