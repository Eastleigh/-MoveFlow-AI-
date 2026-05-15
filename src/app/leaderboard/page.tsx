"use client";

import { Medal, TrendingUp, Target, Crown, Flame, Star } from "lucide-react";
import { reps } from "@/lib/mock-data";
import { formatCurrency } from "@/lib/utils";

export default function LeaderboardPage() {
  const sorted = [...reps].sort((a, b) => b.bookedRevenue - a.bookedRevenue);

  return (
    <div className="space-y-8 slide-up">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-bold">Sales Leaderboard</h1>
          <p className="text-sm text-muted mt-1">Track top performers and gamify sales performance</p>
        </div>
        <select className="px-3 py-2 rounded-xl bg-card border border-border text-sm outline-none">
          <option>This Month</option>
          <option>This Quarter</option>
          <option>This Year</option>
        </select>
      </div>

      {/* Top 3 Podium */}
      <div className="grid md:grid-cols-3 gap-6">
        {sorted.slice(0, 3).map((rep, i) => {
          const colors = [
            { bg: "from-amber-500/20 to-amber-600/5", border: "border-amber-500/30", icon: Crown, badge: "bg-amber-500", text: "text-amber-400" },
            { bg: "from-slate-400/20 to-slate-500/5", border: "border-slate-400/30", icon: Medal, badge: "bg-slate-400", text: "text-slate-300" },
            { bg: "from-orange-600/20 to-orange-700/5", border: "border-orange-600/30", icon: Medal, badge: "bg-orange-600", text: "text-orange-400" },
          ];
          const c = colors[i];
          return (
            <div key={rep.id} className={`glass-card p-6 bg-gradient-to-b ${c.bg} ${c.border} ${i === 0 ? "glow" : ""}`}>
              <div className="flex items-center justify-between mb-4">
                <div className={`w-8 h-8 rounded-lg ${c.badge} flex items-center justify-center`}>
                  <c.icon className="w-4 h-4 text-white" />
                </div>
                <span className={`text-xs font-bold ${c.text}`}>#{i + 1}</span>
              </div>
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br from-accent to-recovery flex items-center justify-center text-white font-bold`}>
                  {rep.avatar}
                </div>
                <div>
                  <p className="font-semibold">{rep.name}</p>
                  <p className="text-xs text-muted">{rep.role}</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="p-2 rounded-lg bg-background/30">
                  <p className="text-lg font-bold">{formatCurrency(rep.bookedRevenue)}</p>
                  <p className="text-[10px] text-muted">Revenue</p>
                </div>
                <div className="p-2 rounded-lg bg-background/30">
                  <p className="text-lg font-bold">{rep.conversionRate}%</p>
                  <p className="text-[10px] text-muted">Conversion</p>
                </div>
                <div className="p-2 rounded-lg bg-background/30">
                  <p className="text-lg font-bold">{rep.closedDeals}</p>
                  <p className="text-[10px] text-muted">Deals Closed</p>
                </div>
                <div className="p-2 rounded-lg bg-background/30">
                  <p className="text-lg font-bold">{rep.avgResponseTime}m</p>
                  <p className="text-[10px] text-muted">Avg Response</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Full Leaderboard */}
      <div className="glass-card p-6">
        <h2 className="font-semibold mb-4">Full Rankings</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left text-xs text-muted font-medium py-3 px-4">Rank</th>
                <th className="text-left text-xs text-muted font-medium py-3 px-4">Rep</th>
                <th className="text-right text-xs text-muted font-medium py-3 px-4">Revenue</th>
                <th className="text-right text-xs text-muted font-medium py-3 px-4">Deals</th>
                <th className="text-right text-xs text-muted font-medium py-3 px-4">Leads</th>
                <th className="text-right text-xs text-muted font-medium py-3 px-4">Conversion</th>
                <th className="text-right text-xs text-muted font-medium py-3 px-4">Avg Response</th>
                <th className="text-right text-xs text-muted font-medium py-3 px-4">Performance</th>
              </tr>
            </thead>
            <tbody>
              {sorted.map((rep, i) => (
                <tr key={rep.id} className="border-b border-border/50 hover:bg-accent/5 transition-colors">
                  <td className="py-3 px-4">
                    <span className="flex items-center gap-1">
                      {i === 0 && <Flame className="w-4 h-4 text-amber-400" />}
                      {i === 1 && <Star className="w-4 h-4 text-slate-300" />}
                      {i === 2 && <Star className="w-4 h-4 text-orange-400" />}
                      {i > 2 && <span className="text-sm text-muted ml-1">{i + 1}</span>}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent to-recovery flex items-center justify-center text-white text-xs font-bold">
                        {rep.avatar}
                      </div>
                      <div>
                        <p className="text-sm font-medium">{rep.name}</p>
                        <p className="text-xs text-muted">{rep.role}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-right font-semibold text-sm">{formatCurrency(rep.bookedRevenue)}</td>
                  <td className="py-3 px-4 text-right text-sm">{rep.closedDeals}</td>
                  <td className="py-3 px-4 text-right text-sm">{rep.totalLeads}</td>
                  <td className="py-3 px-4 text-right">
                    <span className={`text-sm font-semibold ${rep.conversionRate >= 40 ? "text-success" : rep.conversionRate >= 35 ? "text-warning" : "text-danger"}`}>
                      {rep.conversionRate}%
                    </span>
                  </td>
                  <td className="py-3 px-4 text-right">
                    <span className={`text-sm ${rep.avgResponseTime <= 5 ? "text-success" : rep.avgResponseTime <= 8 ? "text-warning" : "text-danger"}`}>
                      {rep.avgResponseTime} min
                    </span>
                  </td>
                  <td className="py-3 px-4 text-right">
                    <div className="w-20 h-2 bg-background rounded-full overflow-hidden ml-auto">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-accent to-recovery"
                        style={{ width: `${(rep.bookedRevenue / sorted[0].bookedRevenue) * 100}%` }}
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Achievements */}
      <div className="glass-card p-6">
        <h2 className="font-semibold mb-4">Achievements This Month</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: Crown, label: "Revenue King", holder: "Marcus Johnson", value: "$142.8K", color: "text-amber-400 bg-amber-500/10" },
            { icon: Flame, label: "Fastest Closer", holder: "Marcus Johnson", value: "4.2 min avg", color: "text-red-400 bg-red-500/10" },
            { icon: Target, label: "Best Converter", holder: "Marcus Johnson", value: "45.8%", color: "text-emerald-400 bg-emerald-500/10" },
            { icon: TrendingUp, label: "Most Improved", holder: "Jessica Park", value: "+18% conv.", color: "text-blue-400 bg-blue-500/10" },
          ].map((achievement) => (
            <div key={achievement.label} className="p-4 rounded-xl bg-background/50 border border-border">
              <div className={`w-10 h-10 rounded-xl ${achievement.color} flex items-center justify-center mb-3`}>
                <achievement.icon className="w-5 h-5" />
              </div>
              <p className="font-semibold text-sm">{achievement.label}</p>
              <p className="text-xs text-muted mt-0.5">{achievement.holder}</p>
              <p className="text-xs text-accent-light font-medium mt-1">{achievement.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
