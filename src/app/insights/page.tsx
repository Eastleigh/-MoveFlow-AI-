"use client";

import { useState } from "react";
import { Brain, Send, Bot, User, Sparkles, TrendingUp, DollarSign, Users } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const suggestedQuestions = [
  "Why are bookings down this week?",
  "Which sales rep performs best?",
  "Which lead source makes the most money?",
  "How much revenue is recoverable right now?",
  "What's our average move value trend?",
  "Which day gets the most bookings?",
];

const mockResponses: Record<string, string> = {
  "Why are bookings down this week?":
    "Bookings are down 8% this week compared to last week. Key factors:\n\n• **Lead response time increased by 14 minutes** — this is the #1 factor. Leads contacted within 5 minutes convert 3x more.\n• **Google Ads** lead volume dropped 12% — your ad spend was paused on Tuesday.\n• **3 high-value leads ($14,200 total)** went stale without follow-up.\n\n**Recommendation:** Resume Google Ads immediately and launch an AI recovery campaign for the 3 stale leads.",
  "Which sales rep performs best?":
    "**Marcus Johnson** is your top performer:\n\n• **$142,800** booked revenue (highest)\n• **45.8%** conversion rate\n• **4.2 min** avg response time (fastest)\n\nComparison with team:\n• Aisha Williams: $118,500 / 42.9% conversion\n• Tyler Reed: $95,200 / 36.8% conversion\n• Jessica Park: $67,400 / 33.3% conversion\n\n**Key insight:** Marcus's fast response time (4.2 min vs team avg 7.5 min) directly correlates with his higher conversion rate.",
  "Which lead source makes the most money?":
    "**Google Ads** generates the most revenue at **$168,400** (39.7% of total).\n\nFull breakdown:\n1. Google Ads: $168,400 (112 leads, $1,504 avg)\n2. Referrals: $112,300 (68 leads, $1,651 avg)\n3. Website: $78,200 (54 leads, $1,448 avg)\n4. Yelp: $42,100 (38 leads, $1,108 avg)\n5. HomeAdvisor: $22,900 (22 leads, $1,041 avg)\n\n**Key insight:** While Google Ads has the highest total, **Referrals have the highest average value** ($1,651). Consider a referral bonus program to increase this channel.",
  "How much revenue is recoverable right now?":
    "Currently **$18,400** is recoverable from **32 stale leads**.\n\nBreakdown by priority:\n• **High priority (10 leads):** $8,200 — These leads showed strong interest but went silent in the last 7-14 days.\n• **Medium priority (14 leads):** $6,800 — Quoted but no response.\n• **Low priority (8 leads):** $3,400 — Initial inquiry only.\n\nWith your current 34% recovery rate, **AI can potentially recover ~$6,256** from these leads.\n\n**Recommendation:** Launch an immediate AI voice + SMS campaign targeting the 10 high-priority leads first.",
};

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export default function InsightsPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "I'm your AI Insights Engine. Ask me anything about your business — revenue, bookings, rep performance, lead sources, or trends. I'll give you data-driven answers.",
    },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = input.trim();
    setMessages((prev) => [...prev, { role: "user", content: userMsg }]);
    setInput("");

    setTimeout(() => {
      const response =
        mockResponses[userMsg] ||
        `Based on your current data:\n\nI analyzed your business metrics and here's what I found regarding "${escapeHtml(userMsg)}":\n\n• Your overall booking rate is **41.2%** with an average move value of **$3,840**.\n• This month's booked revenue stands at **$423,900**, up 12.4% from last month.\n• **32 stale leads** worth **$18,400** are awaiting follow-up.\n\nWould you like me to dive deeper into any specific area?`;
      setMessages((prev) => [...prev, { role: "assistant", content: response }]);
    }, 800);
  };

  return (
    <div className="slide-up h-[calc(100vh-4rem)] flex flex-col">
      <div className="flex items-start justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold">AI Insights Engine</h1>
          <p className="text-sm text-muted mt-1">Ask questions about your business in plain English</p>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20">
          <Brain className="w-3.5 h-3.5 text-accent-light" />
          <span className="text-xs font-medium text-accent-light">Powered by AI</span>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-4 gap-3 mb-6">
        {[
          { icon: DollarSign, label: "Booked Revenue", value: "$423.9K", color: "text-success" },
          { icon: TrendingUp, label: "Recovery Rate", value: "34%", color: "text-recovery" },
          { icon: Users, label: "Active Leads", value: "158", color: "text-accent-light" },
          { icon: Sparkles, label: "AI Recovered", value: "$52.3K", color: "text-warning" },
        ].map((stat) => (
          <div key={stat.label} className="glass-card p-3 flex items-center gap-3">
            <stat.icon className={`w-5 h-5 ${stat.color}`} />
            <div>
              <p className={`font-bold text-sm ${stat.color}`}>{stat.value}</p>
              <p className="text-[10px] text-muted">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Chat Area */}
      <div className="flex-1 glass-card flex flex-col overflow-hidden">
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {messages.map((msg, i) => (
            <div key={i} className={`flex gap-3 ${msg.role === "user" ? "justify-end" : ""}`}>
              {msg.role === "assistant" && (
                <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                  <Bot className="w-4 h-4 text-accent-light" />
                </div>
              )}
              <div
                className={`max-w-2xl rounded-2xl p-4 text-sm leading-relaxed ${
                  msg.role === "user"
                    ? "bg-accent/10 border border-accent/20"
                    : "bg-background/50 border border-border"
                }`}
              >
                <div className="whitespace-pre-wrap" dangerouslySetInnerHTML={{
                  __html: escapeHtml(msg.content)
                    .replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground">$1</strong>')
                    .replace(/\n/g, '<br/>')
                }} />
              </div>
              {msg.role === "user" && (
                <div className="w-8 h-8 rounded-lg bg-recovery/10 flex items-center justify-center shrink-0">
                  <User className="w-4 h-4 text-recovery" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Suggested Questions */}
        {messages.length <= 2 && (
          <div className="px-6 pb-3">
            <p className="text-xs text-muted mb-2">Try asking:</p>
            <div className="flex flex-wrap gap-2">
              {suggestedQuestions.map((q) => (
                <button
                  key={q}
                  onClick={() => {
                    setInput("");
                    setMessages((prev) => [...prev, { role: "user", content: q }]);
                    setTimeout(() => {
                      const response = mockResponses[q] || "Analyzing your data...";
                      setMessages((prev) => [...prev, { role: "assistant", content: response }]);
                    }, 800);
                  }}
                  className="px-3 py-1.5 text-xs rounded-full bg-accent/5 border border-accent/10 text-accent-light hover:bg-accent/10 transition-colors"
                >
                  {q}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Input */}
        <div className="border-t border-border p-4">
          <div className="flex items-center gap-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Ask anything about your business..."
              className="flex-1 bg-background/50 border border-border rounded-xl px-4 py-3 text-sm outline-none focus:border-accent/30 transition-colors placeholder:text-muted"
            />
            <button
              onClick={handleSend}
              className="w-10 h-10 rounded-xl bg-gradient-to-r from-accent to-recovery flex items-center justify-center hover:opacity-90 transition-opacity"
            >
              <Send className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
