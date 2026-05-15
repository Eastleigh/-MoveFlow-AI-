"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { dashboardMetrics } from "@/lib/mock-data";
import { formatCurrency } from "@/lib/utils";

const COLORS = ["#6366f1", "#8b5cf6", "#a78bfa", "#c4b5fd", "#ddd6fe"];

export default function RevenueSourceChart() {
  return (
    <div className="glass-card p-6">
      <div className="mb-6">
        <h3 className="font-semibold">Revenue by Source</h3>
        <p className="text-xs text-muted mt-1">Top lead sources by booked revenue</p>
      </div>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={dashboardMetrics.revenueBySource} layout="vertical">
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(99,102,241,0.06)" horizontal={false} />
            <XAxis
              type="number"
              stroke="#6b6b8d"
              fontSize={11}
              tickLine={false}
              axisLine={false}
              tickFormatter={(v: number) => formatCurrency(v)}
            />
            <YAxis
              dataKey="name"
              type="category"
              stroke="#6b6b8d"
              fontSize={11}
              tickLine={false}
              axisLine={false}
              width={90}
            />
            <Tooltip
              contentStyle={{
                background: "rgba(10,10,30,0.95)",
                border: "1px solid rgba(99,102,241,0.2)",
                borderRadius: "12px",
                fontSize: "12px",
              }}
              formatter={(value) => [formatCurrency(Number(value)), "Revenue"]}
            />
            <Bar dataKey="value" radius={[0, 6, 6, 0]} barSize={24}>
              {dashboardMetrics.revenueBySource.map((_, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
