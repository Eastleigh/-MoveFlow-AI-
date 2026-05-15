"use client";

import { Settings, Users, CreditCard, Bell, Key, FileText, Mail } from "lucide-react";
import { useState } from "react";

const tabs = [
  { id: "general", label: "General", icon: Settings },
  { id: "team", label: "Team & Roles", icon: Users },
  { id: "billing", label: "Billing", icon: CreditCard },
  { id: "notifications", label: "Notifications", icon: Bell },
  { id: "integrations", label: "Integrations", icon: Key },
  { id: "audit", label: "Audit Log", icon: FileText },
];

const teamMembers = [
  { name: "Marcus Johnson", email: "marcus@moveflow.com", role: "Admin", status: "active" },
  { name: "Aisha Williams", email: "aisha@moveflow.com", role: "Sales Manager", status: "active" },
  { name: "Tyler Reed", email: "tyler@moveflow.com", role: "Sales Rep", status: "active" },
  { name: "Jessica Park", email: "jessica@moveflow.com", role: "Sales Rep", status: "active" },
  { name: "David Chen", email: "david@moveflow.com", role: "Dispatcher", status: "active" },
];

const auditLogs = [
  { time: "2 min ago", user: "System (AI)", action: "Sent follow-up SMS to Kevin Patel", type: "automation" },
  { time: "15 min ago", user: "Marcus Johnson", action: "Updated lead status for Chris Martinez to 'Contacted'", type: "lead" },
  { time: "32 min ago", user: "System (AI)", action: "AI Receptionist booked estimate for new lead", type: "receptionist" },
  { time: "1 hour ago", user: "Aisha Williams", action: "Created quote for James Chen ($3,100)", type: "quote" },
  { time: "2 hours ago", user: "System (AI)", action: "Revenue Recovery: sent AI voice call to Maria Rodriguez", type: "recovery" },
  { time: "3 hours ago", user: "Tyler Reed", action: "Logged in from 192.168.1.42", type: "auth" },
];

const integrations = [
  { name: "Twilio", desc: "SMS & Voice calls", status: "connected", icon: "📱" },
  { name: "Stripe", desc: "Billing & payments", status: "connected", icon: "💳" },
  { name: "Google Calendar", desc: "Scheduling & availability", status: "connected", icon: "📅" },
  { name: "OpenAI", desc: "AI insights & analysis", status: "connected", icon: "🤖" },
  { name: "Retell AI", desc: "Voice AI receptionist", status: "connected", icon: "🎙️" },
  { name: "Supabase", desc: "Database & authentication", status: "connected", icon: "🗄️" },
  { name: "Google Ads", desc: "Lead source tracking", status: "pending", icon: "📊" },
  { name: "QuickBooks", desc: "Accounting sync", status: "not_connected", icon: "📒" },
];

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState("general");

  return (
    <div className="space-y-8 slide-up">
      <div>
        <h1 className="text-2xl font-bold">Admin & Settings</h1>
        <p className="text-sm text-muted mt-1">Manage your account, team, billing, and integrations</p>
      </div>

      <div className="flex gap-6">
        {/* Tabs */}
        <div className="w-56 space-y-1 shrink-0">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm transition-all ${
                activeTab === tab.id
                  ? "bg-accent/10 text-accent-light border border-accent/20 font-medium"
                  : "text-muted hover:text-foreground hover:bg-card"
              }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="flex-1">
          {activeTab === "general" && (
            <div className="glass-card p-6 space-y-6">
              <h2 className="font-semibold">General Settings</h2>
              <div className="grid gap-4">
                <div>
                  <label className="text-xs text-muted block mb-1.5">Company Name</label>
                  <input type="text" defaultValue="MoveFlow Moving Co." className="w-full px-3 py-2 bg-background border border-border rounded-lg text-sm outline-none focus:border-accent/30" />
                </div>
                <div>
                  <label className="text-xs text-muted block mb-1.5">Business Phone</label>
                  <input type="text" defaultValue="(555) 100-2000" className="w-full px-3 py-2 bg-background border border-border rounded-lg text-sm outline-none focus:border-accent/30" />
                </div>
                <div>
                  <label className="text-xs text-muted block mb-1.5">Business Email</label>
                  <input type="text" defaultValue="hello@moveflow.com" className="w-full px-3 py-2 bg-background border border-border rounded-lg text-sm outline-none focus:border-accent/30" />
                </div>
                <div>
                  <label className="text-xs text-muted block mb-1.5">Timezone</label>
                  <select className="w-full px-3 py-2 bg-background border border-border rounded-lg text-sm outline-none focus:border-accent/30">
                    <option>Central Time (CT)</option>
                    <option>Eastern Time (ET)</option>
                    <option>Pacific Time (PT)</option>
                  </select>
                </div>
              </div>
              <button className="px-4 py-2 bg-gradient-to-r from-accent to-recovery text-white text-sm font-semibold rounded-xl hover:opacity-90 transition-opacity">
                Save Changes
              </button>
            </div>
          )}

          {activeTab === "team" && (
            <div className="glass-card p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-semibold">Team Members</h2>
                <button className="px-3 py-1.5 bg-accent/10 text-accent-light rounded-lg text-xs font-semibold hover:bg-accent/20 transition-colors">
                  + Invite Member
                </button>
              </div>
              <div className="space-y-2">
                {teamMembers.map((member) => (
                  <div key={member.email} className="flex items-center gap-3 p-3 rounded-xl bg-background/50 border border-border">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-accent to-recovery flex items-center justify-center text-white text-xs font-bold">
                      {member.name.split(" ").map(n => n[0]).join("")}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">{member.name}</p>
                      <p className="text-xs text-muted">{member.email}</p>
                    </div>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-accent/10 text-accent-light border border-accent/20">
                      {member.role}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-success" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "billing" && (
            <div className="space-y-6">
              <div className="glass-card p-6">
                <h2 className="font-semibold mb-4">Current Plan</h2>
                <div className="flex items-center justify-between p-4 rounded-xl bg-accent/5 border border-accent/10">
                  <div>
                    <p className="font-semibold text-lg">Professional Plan</p>
                    <p className="text-sm text-muted">$499/month &middot; Billed monthly</p>
                  </div>
                  <button className="px-3 py-1.5 bg-accent/10 text-accent-light rounded-lg text-xs font-semibold hover:bg-accent/20 transition-colors">
                    Manage Plan
                  </button>
                </div>
              </div>
              <div className="glass-card p-6">
                <h2 className="font-semibold mb-4">Usage This Month</h2>
                <div className="grid grid-cols-3 gap-4">
                  <div className="p-3 rounded-lg bg-background/50 border border-border">
                    <p className="text-sm font-semibold">158 / Unlimited</p>
                    <p className="text-xs text-muted mt-0.5">Leads</p>
                  </div>
                  <div className="p-3 rounded-lg bg-background/50 border border-border">
                    <p className="text-sm font-semibold">342 / 500</p>
                    <p className="text-xs text-muted mt-0.5">AI Voice Minutes</p>
                  </div>
                  <div className="p-3 rounded-lg bg-background/50 border border-border">
                    <p className="text-sm font-semibold">1,247 / 2,000</p>
                    <p className="text-xs text-muted mt-0.5">SMS Messages</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "notifications" && (
            <div className="glass-card p-6">
              <h2 className="font-semibold mb-4">Notification Preferences</h2>
              <div className="space-y-4">
                {[
                  { label: "New lead notifications", desc: "Get notified when a new lead comes in" },
                  { label: "Missed call alerts", desc: "Alert when AI can't handle a call" },
                  { label: "Revenue recovery updates", desc: "Updates on AI recovery campaign results" },
                  { label: "Daily summary email", desc: "End-of-day performance report" },
                  { label: "Weekly analytics digest", desc: "Weekly performance trends and insights" },
                  { label: "AI recommendation alerts", desc: "Notifications for new AI suggestions" },
                ].map((notif) => (
                  <div key={notif.label} className="flex items-center justify-between p-3 rounded-xl bg-background/50 border border-border">
                    <div>
                      <p className="text-sm font-medium">{notif.label}</p>
                      <p className="text-xs text-muted mt-0.5">{notif.desc}</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" defaultChecked className="sr-only peer" />
                      <div className="w-9 h-5 bg-muted/30 rounded-full peer peer-checked:bg-accent after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-4" />
                    </label>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "integrations" && (
            <div className="glass-card p-6">
              <h2 className="font-semibold mb-4">Integrations</h2>
              <div className="grid grid-cols-2 gap-3">
                {integrations.map((integration) => (
                  <div key={integration.name} className="flex items-center gap-3 p-4 rounded-xl bg-background/50 border border-border">
                    <span className="text-2xl">{integration.icon}</span>
                    <div className="flex-1">
                      <p className="text-sm font-medium">{integration.name}</p>
                      <p className="text-xs text-muted">{integration.desc}</p>
                    </div>
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                      integration.status === "connected" ? "text-success bg-success/10" :
                      integration.status === "pending" ? "text-warning bg-warning/10" :
                      "text-muted bg-muted/10"
                    }`}>
                      {integration.status === "connected" ? "Connected" :
                       integration.status === "pending" ? "Pending" : "Connect"}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "audit" && (
            <div className="glass-card p-6">
              <h2 className="font-semibold mb-4">Audit Log</h2>
              <div className="space-y-2">
                {auditLogs.map((log, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-background/50 border border-border">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                      log.type === "automation" || log.type === "receptionist" || log.type === "recovery"
                        ? "bg-accent/10" : "bg-muted/10"
                    }`}>
                      {log.type === "automation" ? <Mail className="w-4 h-4 text-accent-light" /> :
                       log.type === "receptionist" ? <Bell className="w-4 h-4 text-accent-light" /> :
                       log.type === "recovery" ? <Bell className="w-4 h-4 text-recovery" /> :
                       <FileText className="w-4 h-4 text-muted" />}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm">{log.action}</p>
                      <p className="text-xs text-muted">{log.user}</p>
                    </div>
                    <span className="text-xs text-muted">{log.time}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
