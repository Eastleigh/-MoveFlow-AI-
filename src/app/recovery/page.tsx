"use client";

import { DollarSign, Zap, TrendingUp, ArrowRight, Timer } from "lucide-react";
import { leads } from "@/lib/mock-data";
import { formatCurrency, getStatusColor, getScoreColor } from "@/lib/utils";

const staleLeads = leads.filter((l) => l.status === "stale");
const recoveryStats = {
  totalRecoverable: 18400,
  campaignsActive: 3,
  leadsInPipeline: 32,
  recoveredThisMonth: 52300,
  recoveryRate: 34,
};

const recoveryCampaigns = [
  { id: 1, name: "Stale Lead Re-engagement", type: "SMS + AI Voice", status: "active", leads: 18, recovered: 8200, startDate: "May 10" },
  { id: 2, name: "Quote Follow-Up", type: "SMS + Email", status: "active", leads: 9, recovered: 3400, startDate: "May 12" },
  { id: 3, name: "Lost Lead Win-Back", type: "AI Voice", status: "active", leads: 5, recovered: 1800, startDate: "May 14" },
];

export default function RecoveryPage() {
  return (
    <div className="space-y-8 slide-up">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-bold">Revenue Recovery Engine</h1>
          <p className="text-sm text-muted mt-1">AI automatically recovers lost revenue from stale leads</p>
        </div>
        <button className="px-4 py-2 bg-gradient-to-r from-accent to-recovery text-white text-sm font-semibold rounded-xl hover:opacity-90 transition-opacity flex items-center gap-2">
          <Zap className="w-4 h-4" />
          Launch Recovery Campaign
        </button>
      </div>

      {/* Recovery Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="stat-card glow-green">
          <DollarSign className="w-5 h-5 text-success mb-2" />
          <p className="text-2xl font-bold gradient-green">{formatCurrency(recoveryStats.recoveredThisMonth)}</p>
          <p className="text-xs text-muted mt-1">Recovered This Month</p>
        </div>
        <div className="stat-card glow-red">
          <TrendingUp className="w-5 h-5 text-warning mb-2" />
          <p className="text-2xl font-bold gradient-red">{formatCurrency(recoveryStats.totalRecoverable)}</p>
          <p className="text-xs text-muted mt-1">Recoverable Revenue</p>
        </div>
        <div className="stat-card">
          <Zap className="w-5 h-5 text-accent-light mb-2" />
          <p className="text-2xl font-bold">{recoveryStats.campaignsActive}</p>
          <p className="text-xs text-muted mt-1">Active Campaigns</p>
        </div>
        <div className="stat-card">
          <TrendingUp className="w-5 h-5 text-recovery mb-2" />
          <p className="text-2xl font-bold">{recoveryStats.recoveryRate}%</p>
          <p className="text-xs text-muted mt-1">Recovery Rate</p>
        </div>
      </div>

      {/* Active Campaigns */}
      <div className="glass-card p-6">
        <h2 className="font-semibold mb-4">Active Recovery Campaigns</h2>
        <div className="space-y-3">
          {recoveryCampaigns.map((campaign) => (
            <div key={campaign.id} className="flex items-center gap-4 p-4 rounded-xl bg-background/50 border border-border hover:border-accent/20 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-recovery/10 flex items-center justify-center">
                <Zap className="w-5 h-5 text-recovery" />
              </div>
              <div className="flex-1">
                <p className="font-medium text-sm">{campaign.name}</p>
                <p className="text-xs text-muted mt-0.5">{campaign.type} &middot; Started {campaign.startDate} &middot; {campaign.leads} leads</p>
              </div>
              <div className="text-right">
                <p className="font-semibold text-sm text-success">{formatCurrency(campaign.recovered)}</p>
                <p className="text-xs text-muted">recovered</p>
              </div>
              <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-success/10 border border-success/20">
                <span className="w-1.5 h-1.5 rounded-full bg-success pulse-dot" />
                <span className="text-xs font-medium text-success">Active</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stale Leads for Recovery */}
      <div className="glass-card p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-semibold">Leads Ready for Recovery</h2>
          <span className="text-xs text-muted">{staleLeads.length} stale leads &middot; AI-prioritized by value</span>
        </div>
        <div className="space-y-2">
          {staleLeads.map((lead) => (
            <div key={lead.id} className="flex items-center gap-4 p-4 rounded-xl bg-background/50 border border-border hover:border-warning/20 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-warning/10 flex items-center justify-center">
                <Timer className="w-5 h-5 text-warning" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-sm">{lead.name}</span>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full border font-medium ${getStatusColor(lead.status)}`}>
                    STALE
                  </span>
                </div>
                <p className="text-xs text-muted mt-0.5">
                  {lead.moveSize} &middot; Last contact: {lead.lastContact} &middot; {lead.source}
                </p>
              </div>
              <div className="text-right mr-4">
                <p className="font-semibold text-sm">{formatCurrency(lead.estimatedValue)}</p>
                <p className={`text-xs ${getScoreColor(lead.bookingProbability)}`}>{lead.bookingProbability}% booking chance</p>
              </div>
              <button className="px-3 py-1.5 bg-accent/10 text-accent-light rounded-lg text-xs font-semibold hover:bg-accent/20 transition-colors flex items-center gap-1">
                Recover <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
