"use client";

import { DollarSign, AlertTriangle, TrendingDown, Lightbulb, Zap } from "lucide-react";
import { aiRecommendations } from "@/lib/mock-data";
import { getPriorityColor } from "@/lib/utils";

const iconMap = {
  recovery: DollarSign,
  alert: AlertTriangle,
  prediction: TrendingDown,
  insight: Lightbulb,
};

export default function AIRecommendations() {
  return (
    <div className="glass-card p-6">
      <div className="flex items-center gap-2 mb-6">
        <Zap className="w-5 h-5 text-accent-light" />
        <h3 className="font-semibold">AI Recommendations</h3>
        <span className="ml-auto text-xs text-muted">Updated just now</span>
      </div>
      <div className="space-y-3">
        {aiRecommendations.map((rec) => {
          const Icon = iconMap[rec.type];
          return (
            <div
              key={rec.id}
              className="flex items-start gap-3 p-3 rounded-xl bg-background/50 border border-border hover:border-accent/20 transition-colors"
            >
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${getPriorityColor(rec.priority)}`}>
                <Icon className="w-4 h-4" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium">{rec.message}</p>
                <button className="text-xs text-accent-light hover:text-accent font-medium mt-1.5">
                  {rec.action} →
                </button>
              </div>
              <span className={`text-[10px] font-semibold uppercase px-2 py-0.5 rounded-full border shrink-0 ${getPriorityColor(rec.priority)}`}>
                {rec.priority}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
