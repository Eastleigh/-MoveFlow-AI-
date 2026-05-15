"use client";

import { Truck, Users, Clock, MapPin, Calendar, Brain, CheckCircle2, AlertTriangle, Fuel } from "lucide-react";
import { crewMembers, jobs } from "@/lib/mock-data";
import { getStatusColor } from "@/lib/utils";

const aiSuggestions = [
  { text: "Assign Tony Ramirez + Sam Wilson to the Thompson move (Jul 1) — best efficiency match at 92.5% combined.", action: "Accept" },
  { text: "Route optimization: Switch truck assignments for Jul 1 jobs to reduce total drive time by 28 minutes.", action: "Optimize" },
  { text: "Jake Miller is approaching overtime threshold (38 hrs). Consider reassigning the Foster move to Crew B.", action: "Reassign" },
];

export default function DispatchPage() {
  return (
    <div className="space-y-8 slide-up">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-bold">Dispatch Intelligence</h1>
          <p className="text-sm text-muted mt-1">AI-optimized crew assignment, scheduling, and routing</p>
        </div>
        <button className="px-4 py-2 bg-gradient-to-r from-accent to-recovery text-white text-sm font-semibold rounded-xl hover:opacity-90 transition-opacity flex items-center gap-2">
          <Calendar className="w-4 h-4" />
          Schedule Job
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-4">
        <div className="stat-card">
          <Truck className="w-5 h-5 text-accent-light mb-2" />
          <p className="text-2xl font-bold">{jobs.length}</p>
          <p className="text-xs text-muted mt-1">Active Jobs</p>
        </div>
        <div className="stat-card">
          <Users className="w-5 h-5 text-success mb-2" />
          <p className="text-2xl font-bold">{crewMembers.filter(c => c.available).length}/{crewMembers.length}</p>
          <p className="text-xs text-muted mt-1">Crew Available</p>
        </div>
        <div className="stat-card">
          <Clock className="w-5 h-5 text-warning mb-2" />
          <p className="text-2xl font-bold">12h</p>
          <p className="text-xs text-muted mt-1">Avg Overtime/Week</p>
        </div>
        <div className="stat-card">
          <Fuel className="w-5 h-5 text-recovery mb-2" />
          <p className="text-2xl font-bold">91%</p>
          <p className="text-xs text-muted mt-1">Route Efficiency</p>
        </div>
      </div>

      {/* AI Suggestions */}
      <div className="glass-card p-6">
        <div className="flex items-center gap-2 mb-4">
          <Brain className="w-5 h-5 text-accent-light" />
          <h2 className="font-semibold">AI Dispatch Suggestions</h2>
        </div>
        <div className="space-y-3">
          {aiSuggestions.map((suggestion, i) => (
            <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-accent/5 border border-accent/10">
              <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                <Brain className="w-4 h-4 text-accent-light" />
              </div>
              <p className="text-sm flex-1">{suggestion.text}</p>
              <button className="px-3 py-1.5 bg-accent/10 text-accent-light rounded-lg text-xs font-semibold hover:bg-accent/20 transition-colors">
                {suggestion.action}
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Scheduled Jobs */}
        <div className="glass-card p-6">
          <h2 className="font-semibold mb-4">Scheduled Jobs</h2>
          <div className="space-y-3">
            {jobs.map((job) => (
              <div key={job.id} className="p-4 rounded-xl bg-background/50 border border-border">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-sm">{job.leadName}</span>
                      <span className={`text-[10px] px-2 py-0.5 rounded-full border font-medium uppercase ${getStatusColor(job.status)}`}>
                        {job.status}
                      </span>
                    </div>
                    <p className="text-xs text-muted mt-1">
                      <Calendar className="w-3 h-3 inline mr-1" />{job.date} at {job.time} &middot; {job.estimatedHours}h est.
                    </p>
                  </div>
                  <span className="text-xs bg-accent/10 text-accent-light px-2 py-0.5 rounded-full font-medium">{job.truck}</span>
                </div>
                <div className="flex items-center gap-1 text-xs text-muted mt-2">
                  <MapPin className="w-3 h-3" />
                  <span>{job.moveFrom} → {job.moveTo}</span>
                </div>
                <div className="flex items-center gap-1 text-xs text-muted mt-1">
                  <Users className="w-3 h-3" />
                  <span>{job.crew.join(", ")}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Crew Status */}
        <div className="glass-card p-6">
          <h2 className="font-semibold mb-4">Crew Status</h2>
          <div className="space-y-2">
            {crewMembers.map((member) => (
              <div key={member.id} className="flex items-center gap-3 p-3 rounded-xl bg-background/50 border border-border">
                <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${
                  member.available ? "bg-success/10" : "bg-warning/10"
                }`}>
                  <Users className={`w-4 h-4 ${member.available ? "text-success" : "text-warning"}`} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-sm">{member.name}</span>
                    <span className="text-[10px] text-muted">{member.role}</span>
                  </div>
                  <p className="text-xs text-muted">{member.truckAssigned} &middot; {member.efficiency}% efficiency</p>
                </div>
                <div className="text-right">
                  {member.available ? (
                    <span className="text-xs text-success font-medium flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" /> Available
                    </span>
                  ) : (
                    <span className="text-xs text-warning font-medium flex items-center gap-1">
                      <AlertTriangle className="w-3 h-3" /> On Job
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
