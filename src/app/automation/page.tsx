"use client";

import { Zap, MessageSquare, Phone, Clock, Play, Pause, Plus, ArrowRight, CheckCircle2 } from "lucide-react";

const campaigns = [
  {
    id: 1,
    name: "New Lead Welcome Sequence",
    type: "SMS + Email",
    status: "active" as const,
    triggers: "On new lead creation",
    steps: 4,
    sentThisWeek: 28,
    responseRate: 42,
    description: "Automated welcome message, followed by estimate offer, social proof, and urgency nudge.",
  },
  {
    id: 2,
    name: "Stale Lead Re-Engagement",
    type: "SMS + AI Voice",
    status: "active" as const,
    triggers: "Lead inactive for 7+ days",
    steps: 3,
    sentThisWeek: 18,
    responseRate: 28,
    description: "AI voice call attempt, followed by SMS with special offer, then final follow-up.",
  },
  {
    id: 3,
    name: "Quote Reminder",
    type: "SMS",
    status: "active" as const,
    triggers: "Quote sent, no response in 48 hours",
    steps: 2,
    sentThisWeek: 12,
    responseRate: 35,
    description: "Friendly reminder about pending quote, followed by limited-time discount offer.",
  },
  {
    id: 4,
    name: "Post-Move Review Request",
    type: "SMS + Email",
    status: "paused" as const,
    triggers: "Job completed",
    steps: 2,
    sentThisWeek: 0,
    responseRate: 0,
    description: "Thank you message with review request link, followed by referral bonus offer.",
  },
  {
    id: 5,
    name: "Lost Lead Win-Back",
    type: "AI Voice + SMS",
    status: "active" as const,
    triggers: "Lead marked as lost, 14+ days ago",
    steps: 3,
    sentThisWeek: 5,
    responseRate: 18,
    description: "AI voice call with special pricing, followed by competitive comparison SMS and final offer.",
  },
];

const automationTimeline = [
  { time: "2 min ago", action: "SMS sent to Sarah Mitchell", campaign: "New Lead Welcome", status: "delivered" },
  { time: "15 min ago", action: "AI Voice call to Kevin Patel", campaign: "Stale Re-Engagement", status: "answered" },
  { time: "32 min ago", action: "Quote reminder to James Chen", campaign: "Quote Reminder", status: "delivered" },
  { time: "1 hour ago", action: "SMS sent to Lisa Park", campaign: "Stale Re-Engagement", status: "delivered" },
  { time: "2 hours ago", action: "AI Voice call to Maria Rodriguez", campaign: "Stale Re-Engagement", status: "no-answer" },
];

export default function AutomationPage() {
  return (
    <div className="space-y-8 slide-up">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-bold">AI Follow-Up Automation</h1>
          <p className="text-sm text-muted mt-1">Automated SMS, email, and AI voice campaigns</p>
        </div>
        <button className="px-4 py-2 bg-gradient-to-r from-accent to-recovery text-white text-sm font-semibold rounded-xl hover:opacity-90 transition-opacity flex items-center gap-2">
          <Plus className="w-4 h-4" />
          Create Campaign
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-4">
        {[
          { label: "Active Campaigns", value: "4", icon: Zap, color: "text-accent-light" },
          { label: "Sent This Week", value: "63", icon: MessageSquare, color: "text-success" },
          { label: "Avg Response Rate", value: "31%", icon: ArrowRight, color: "text-warning" },
          { label: "Revenue Influenced", value: "$28.4K", icon: CheckCircle2, color: "text-recovery" },
        ].map((stat) => (
          <div key={stat.label} className="stat-card">
            <stat.icon className={`w-5 h-5 ${stat.color} mb-2`} />
            <p className="text-2xl font-bold">{stat.value}</p>
            <p className="text-xs text-muted mt-1">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Campaigns */}
      <div className="glass-card p-6">
        <h2 className="font-semibold mb-4">Follow-Up Campaigns</h2>
        <div className="space-y-3">
          {campaigns.map((campaign) => (
            <div key={campaign.id} className="p-4 rounded-xl bg-background/50 border border-border hover:border-accent/20 transition-colors">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${campaign.status === "active" ? "bg-accent/10" : "bg-muted/10"}`}>
                    <Zap className={`w-5 h-5 ${campaign.status === "active" ? "text-accent-light" : "text-muted"}`} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-sm">{campaign.name}</h3>
                      <span className={`text-[10px] px-2 py-0.5 rounded-full border font-medium uppercase ${
                        campaign.status === "active"
                          ? "text-success bg-success/10 border-success/20"
                          : "text-muted bg-muted/10 border-muted/20"
                      }`}>
                        {campaign.status}
                      </span>
                    </div>
                    <p className="text-xs text-muted mt-1">{campaign.description}</p>
                    <div className="flex items-center gap-4 mt-2">
                      <span className="text-xs text-muted flex items-center gap-1">
                        <Clock className="w-3 h-3" /> Trigger: {campaign.triggers}
                      </span>
                      <span className="text-xs text-muted">{campaign.type}</span>
                      <span className="text-xs text-muted">{campaign.steps} steps</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-right">
                    <p className="text-sm font-semibold">{campaign.sentThisWeek}</p>
                    <p className="text-[10px] text-muted">sent/week</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold">{campaign.responseRate}%</p>
                    <p className="text-[10px] text-muted">response</p>
                  </div>
                  <button className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                    campaign.status === "active" ? "bg-success/10 text-success" : "bg-accent/10 text-accent-light"
                  }`}>
                    {campaign.status === "active" ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="glass-card p-6">
        <h2 className="font-semibold mb-4">Recent Automation Activity</h2>
        <div className="space-y-3">
          {automationTimeline.map((event, i) => (
            <div key={i} className="flex items-center gap-4 p-3 rounded-xl bg-background/50 border border-border">
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                event.status === "answered" ? "bg-success/10" : event.status === "delivered" ? "bg-accent/10" : "bg-warning/10"
              }`}>
                {event.status === "answered" ? <Phone className="w-4 h-4 text-success" /> :
                 event.status === "delivered" ? <MessageSquare className="w-4 h-4 text-accent-light" /> :
                 <Phone className="w-4 h-4 text-warning" />}
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium">{event.action}</p>
                <p className="text-xs text-muted">{event.campaign}</p>
              </div>
              <span className={`text-xs px-2 py-0.5 rounded-full ${
                event.status === "answered" ? "text-success bg-success/10" :
                event.status === "delivered" ? "text-accent-light bg-accent/10" :
                "text-warning bg-warning/10"
              }`}>
                {event.status}
              </span>
              <span className="text-xs text-muted">{event.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
