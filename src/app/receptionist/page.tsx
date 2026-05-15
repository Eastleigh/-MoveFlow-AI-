"use client";

import { Phone, PhoneIncoming, PhoneMissed, Bot, MessageSquare, Clock, CheckCircle2, Mic, Volume2 } from "lucide-react";
import { callLog } from "@/lib/mock-data";

const receptionistStats = {
  totalCalls: 47,
  answered: 39,
  missed: 8,
  aiHandledPercent: 83,
  avgCallDuration: "3:24",
  estimatesBooked: 12,
  leadsQualified: 28,
  smsConfirmations: 15,
};

const liveTranscript = [
  { speaker: "AI", text: "Thank you for calling MoveFlow Moving Company! I'm your AI assistant. How can I help you today?" },
  { speaker: "Caller", text: "Hi, I need to get an estimate for a move. We're moving from our house in Plano to a new place in McKinney." },
  { speaker: "AI", text: "I'd be happy to help you with a moving estimate! Can you tell me how many bedrooms your current home has?" },
  { speaker: "Caller", text: "It's a 3-bedroom house, and we also have a 2-car garage full of stuff." },
  { speaker: "AI", text: "Got it — a 3-bedroom home with a 2-car garage. That's typically a medium-to-large move. When are you looking to move?" },
  { speaker: "Caller", text: "We need to be out by June 20th." },
  { speaker: "AI", text: "June 20th — I have availability that week. I'd recommend scheduling an in-home estimate so we can give you an accurate quote. I have openings on June 16th at 10 AM or June 17th at 2 PM. Which works better for you?" },
];

export default function ReceptionistPage() {
  return (
    <div className="space-y-8 slide-up">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-bold">AI Receptionist</h1>
          <p className="text-sm text-muted mt-1">AI-powered call answering, lead qualification, and booking</p>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-success/10 border border-success/20">
          <span className="w-2 h-2 rounded-full bg-success pulse-dot" />
          <span className="text-sm font-medium text-success">Live — Answering Calls</span>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-4">
        <div className="stat-card">
          <PhoneIncoming className="w-5 h-5 text-accent-light mb-2" />
          <p className="text-2xl font-bold">{receptionistStats.totalCalls}</p>
          <p className="text-xs text-muted mt-1">Total Calls Today</p>
        </div>
        <div className="stat-card">
          <Bot className="w-5 h-5 text-success mb-2" />
          <p className="text-2xl font-bold">{receptionistStats.aiHandledPercent}%</p>
          <p className="text-xs text-muted mt-1">AI Handled</p>
        </div>
        <div className="stat-card">
          <CheckCircle2 className="w-5 h-5 text-recovery mb-2" />
          <p className="text-2xl font-bold">{receptionistStats.estimatesBooked}</p>
          <p className="text-xs text-muted mt-1">Estimates Booked</p>
        </div>
        <div className="stat-card">
          <PhoneMissed className="w-5 h-5 text-danger mb-2" />
          <p className="text-2xl font-bold">{receptionistStats.missed}</p>
          <p className="text-xs text-muted mt-1">Missed Calls</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Live Transcript */}
        <div className="glass-card p-6 flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-success pulse-dot" />
              <h2 className="font-semibold">Live Call Transcript</h2>
            </div>
            <div className="flex items-center gap-2 text-xs text-muted">
              <Clock className="w-3 h-3" />
              Duration: 2:18
            </div>
          </div>
          <div className="flex-1 space-y-3 overflow-y-auto max-h-96">
            {liveTranscript.map((msg, i) => (
              <div key={i} className={`flex gap-3 ${msg.speaker === "Caller" ? "justify-end" : ""}`}>
                {msg.speaker === "AI" && (
                  <div className="w-7 h-7 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                    <Bot className="w-3.5 h-3.5 text-accent-light" />
                  </div>
                )}
                <div className={`max-w-xs rounded-2xl p-3 text-sm ${
                  msg.speaker === "AI"
                    ? "bg-accent/5 border border-accent/10"
                    : "bg-card border border-border"
                }`}>
                  {msg.text}
                </div>
                {msg.speaker === "Caller" && (
                  <div className="w-7 h-7 rounded-lg bg-recovery/10 flex items-center justify-center shrink-0">
                    <Phone className="w-3.5 h-3.5 text-recovery" />
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-success/10 text-success text-xs font-medium">
                <Mic className="w-3 h-3" /> Listening...
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-accent/10 text-accent-light text-xs font-medium">
                <Volume2 className="w-3 h-3" /> AI Speaking
              </div>
            </div>
            <button className="px-3 py-1.5 rounded-lg bg-danger/10 text-danger text-xs font-medium hover:bg-danger/20 transition-colors">
              Transfer to Human
            </button>
          </div>
        </div>

        {/* Call Log */}
        <div className="glass-card p-6">
          <h2 className="font-semibold mb-4">Recent Calls</h2>
          <div className="space-y-2">
            {callLog.map((call) => (
              <div key={call.id} className="flex items-center gap-3 p-3 rounded-xl bg-background/50 border border-border hover:border-accent/20 transition-colors">
                <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${
                  call.status === "answered" ? "bg-success/10" : "bg-danger/10"
                }`}>
                  {call.status === "answered"
                    ? <PhoneIncoming className="w-4 h-4 text-success" />
                    : <PhoneMissed className="w-4 h-4 text-danger" />}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-sm">{call.caller}</span>
                    {call.aiHandled && (
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-accent/10 text-accent-light font-medium">AI</span>
                    )}
                  </div>
                  <p className="text-xs text-muted">{call.phone} &middot; {call.duration}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs font-medium">{call.outcome}</p>
                  <p className="text-[10px] text-muted">{call.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* AI Capabilities */}
      <div className="glass-card p-6">
        <h2 className="font-semibold mb-4">AI Receptionist Capabilities</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: Phone, label: "Answer Calls", desc: "24/7 AI-powered call answering", active: true },
            { icon: MessageSquare, label: "SMS Confirm", desc: "Auto-send booking confirmations", active: true },
            { icon: CheckCircle2, label: "Qualify Leads", desc: "Score and route inbound leads", active: true },
            { icon: Clock, label: "Book Estimates", desc: "Schedule in-home estimates", active: true },
          ].map((cap) => (
            <div key={cap.label} className="p-4 rounded-xl bg-background/50 border border-border">
              <div className="flex items-center justify-between mb-2">
                <cap.icon className="w-5 h-5 text-accent-light" />
                <span className={`w-2 h-2 rounded-full ${cap.active ? "bg-success pulse-dot" : "bg-muted"}`} />
              </div>
              <p className="font-medium text-sm">{cap.label}</p>
              <p className="text-xs text-muted mt-0.5">{cap.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
