"use client";

import { Search, Brain, MapPin, Calendar, DollarSign, Phone, Mail } from "lucide-react";
import { leads } from "@/lib/mock-data";
import { formatCurrency, getStatusColor, getScoreColor, getScoreBg } from "@/lib/utils";
import { useState } from "react";

export default function LeadsPage() {
  const [selectedLead, setSelectedLead] = useState(leads[0]);
  const [filterStatus, setFilterStatus] = useState("all");

  const filtered = filterStatus === "all" ? leads : leads.filter((l) => l.status === filterStatus);

  return (
    <div className="slide-up">
      <div className="flex items-start justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold">Lead Intelligence</h1>
          <p className="text-sm text-muted mt-1">AI-powered lead scoring and recommendations</p>
        </div>
        <div className="flex gap-2">
          <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-card border border-border">
            <Search className="w-4 h-4 text-muted" />
            <input
              type="text"
              placeholder="Search leads..."
              className="bg-transparent text-sm outline-none w-40 placeholder:text-muted"
            />
          </div>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-3 py-2 rounded-xl bg-card border border-border text-sm outline-none"
          >
            <option value="all">All Status</option>
            <option value="new">New</option>
            <option value="contacted">Contacted</option>
            <option value="quoted">Quoted</option>
            <option value="booked">Booked</option>
            <option value="stale">Stale</option>
            <option value="lost">Lost</option>
          </select>
        </div>
      </div>

      <div className="flex gap-6">
        {/* Lead List */}
        <div className="flex-1 space-y-2">
          {filtered.map((lead) => (
            <button
              key={lead.id}
              onClick={() => setSelectedLead(lead)}
              className={`w-full text-left p-4 rounded-xl border transition-all ${
                selectedLead.id === lead.id
                  ? "bg-accent/5 border-accent/20"
                  : "bg-card/50 border-border hover:border-border-bright"
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <span className="font-semibold text-sm">{lead.name}</span>
                    <span className={`text-[10px] px-2 py-0.5 rounded-full border font-medium uppercase ${getStatusColor(lead.status)}`}>
                      {lead.status}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 mt-2 text-xs text-muted">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {lead.moveFrom.split(",")[1]?.trim()} → {lead.moveTo.split(",")[1]?.trim()}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {lead.moveDate}
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-sm">{formatCurrency(lead.estimatedValue)}</p>
                  <div className="flex items-center gap-1 mt-1 justify-end">
                    <span className={`text-xs font-semibold ${getScoreColor(lead.bookingProbability)}`}>
                      {lead.bookingProbability}%
                    </span>
                    <span className="text-[10px] text-muted">booking</span>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Lead Detail */}
        <div className="w-96 space-y-4">
          <div className="glass-card p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-semibold text-lg">{selectedLead.name}</h2>
              <span className={`text-xs px-2.5 py-1 rounded-full border font-medium uppercase ${getStatusColor(selectedLead.status)}`}>
                {selectedLead.status}
              </span>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm">
                <Phone className="w-4 h-4 text-muted" />
                <span>{selectedLead.phone}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Mail className="w-4 h-4 text-muted" />
                <span>{selectedLead.email}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="w-4 h-4 text-muted" />
                <span className="text-xs">{selectedLead.moveFrom}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted">
                <span className="ml-6">→ {selectedLead.moveTo}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Calendar className="w-4 h-4 text-muted" />
                <span>Move: {selectedLead.moveDate}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <DollarSign className="w-4 h-4 text-muted" />
                <span>Est. Value: <strong>{formatCurrency(selectedLead.estimatedValue)}</strong></span>
              </div>
            </div>

            <div className="mt-4 p-3 rounded-lg bg-background/50 border border-border">
              <p className="text-xs text-muted mb-1">Move Size</p>
              <p className="text-sm font-medium">{selectedLead.moveSize}</p>
            </div>

            <div className="mt-3 p-3 rounded-lg bg-background/50 border border-border">
              <p className="text-xs text-muted mb-1">Notes</p>
              <p className="text-sm">{selectedLead.notes}</p>
            </div>
          </div>

          {/* AI Scores */}
          <div className="glass-card p-6">
            <div className="flex items-center gap-2 mb-4">
              <Brain className="w-4 h-4 text-accent-light" />
              <h3 className="font-semibold text-sm">AI Intelligence</h3>
            </div>

            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-xs mb-1.5">
                  <span className="text-muted">Booking Probability</span>
                  <span className={`font-semibold ${getScoreColor(selectedLead.bookingProbability)}`}>
                    {selectedLead.bookingProbability}%
                  </span>
                </div>
                <div className="h-2 bg-background rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full ${getScoreBg(selectedLead.bookingProbability)}`}
                    style={{ width: `${selectedLead.bookingProbability}%` }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs mb-1.5">
                  <span className="text-muted">Urgency Score</span>
                  <span className={`font-semibold ${getScoreColor(selectedLead.urgencyScore * 10)}`}>
                    {selectedLead.urgencyScore}/10
                  </span>
                </div>
                <div className="h-2 bg-background rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full ${getScoreBg(selectedLead.urgencyScore * 10)}`}
                    style={{ width: `${selectedLead.urgencyScore * 10}%` }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs mb-1.5">
                  <span className="text-muted">Estimated Value</span>
                  <span className="font-semibold text-accent-light">{formatCurrency(selectedLead.estimatedValue)}</span>
                </div>
              </div>
            </div>

            <div className="mt-4 p-3 rounded-lg bg-accent/5 border border-accent/10">
              <p className="text-xs font-semibold text-accent-light mb-1">AI Recommendation</p>
              <p className="text-xs text-muted">
                {selectedLead.status === "stale"
                  ? "High-value stale lead. Send AI-powered SMS follow-up immediately. Consider offering 5% discount to re-engage."
                  : selectedLead.bookingProbability >= 70
                  ? "High booking probability. Prioritize follow-up and send personalized quote within 2 hours."
                  : "Moderate interest. Schedule a discovery call to understand move requirements better."}
              </p>
            </div>
          </div>

          {/* Actions */}
          <div className="glass-card p-4">
            <div className="grid grid-cols-2 gap-2">
              <button className="py-2 px-3 bg-accent/10 text-accent-light rounded-lg text-xs font-semibold hover:bg-accent/20 transition-colors">
                AI Follow-Up
              </button>
              <button className="py-2 px-3 bg-success/10 text-success rounded-lg text-xs font-semibold hover:bg-success/20 transition-colors">
                Call Lead
              </button>
              <button className="py-2 px-3 bg-recovery/10 text-recovery rounded-lg text-xs font-semibold hover:bg-recovery/20 transition-colors">
                Send Quote
              </button>
              <button className="py-2 px-3 bg-warning/10 text-warning rounded-lg text-xs font-semibold hover:bg-warning/20 transition-colors">
                Schedule Move
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
