"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Phone,
  Calendar,
  Mail,
  Bot,
  Zap,
  Check,
  ArrowRight,
  ArrowLeft,
  TrendingUp,
  Sparkles,
} from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Connect Your Phone",
    description: "Link your business phone number so AI can answer calls and send SMS.",
    icon: Phone,
    fields: [
      { label: "Business Phone Number", placeholder: "(555) 000-0000", type: "tel" },
      { label: "Forward missed calls to AI?", placeholder: "", type: "toggle" },
    ],
  },
  {
    id: 2,
    title: "Connect Google Calendar",
    description: "Sync your schedule so AI can book estimates during available slots.",
    icon: Calendar,
    fields: [
      { label: "Google Account Email", placeholder: "you@gmail.com", type: "email" },
    ],
  },
  {
    id: 3,
    title: "Connect Email & SMS",
    description: "Enable AI-powered follow-ups via email and SMS.",
    icon: Mail,
    fields: [
      { label: "Business Email", placeholder: "hello@yourcompany.com", type: "email" },
      { label: "Enable SMS follow-ups?", placeholder: "", type: "toggle" },
      { label: "Enable email follow-ups?", placeholder: "", type: "toggle" },
    ],
  },
  {
    id: 4,
    title: "Launch AI Receptionist",
    description: "Your AI receptionist will start answering calls and qualifying leads.",
    icon: Bot,
    fields: [],
  },
  {
    id: 5,
    title: "Start Recovering Revenue",
    description: "AI will identify stale leads and start recovering lost revenue immediately.",
    icon: Zap,
    fields: [],
  },
];

export default function OnboardingPage() {
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <div className="min-h-screen flex items-center justify-center p-6 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.06),transparent_70%)]" />

      <div className="w-full max-w-2xl relative z-10">
        {/* Logo */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent to-recovery flex items-center justify-center">
            <TrendingUp className="w-4 h-4 text-white" />
          </div>
          <span className="font-bold text-lg">MoveFlow</span>
          <span className="gradient-text font-bold text-lg">AI</span>
        </div>

        {/* Progress */}
        <div className="flex items-center justify-center gap-2 mb-8">
          {steps.map((step, i) => (
            <div key={step.id} className="flex items-center gap-2">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                i < currentStep
                  ? "bg-success text-white"
                  : i === currentStep
                  ? "bg-gradient-to-r from-accent to-recovery text-white"
                  : "bg-card border border-border text-muted"
              }`}>
                {i < currentStep ? <Check className="w-4 h-4" /> : step.id}
              </div>
              {i < steps.length - 1 && (
                <div className={`w-12 h-0.5 ${i < currentStep ? "bg-success" : "bg-border"}`} />
              )}
            </div>
          ))}
        </div>

        {/* Step Content */}
        <div className="glass-card p-8 glow">
          <div className="text-center mb-8">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-recovery flex items-center justify-center mx-auto mb-4">
              {(() => {
                const StepIcon = steps[currentStep].icon;
                return <StepIcon className="w-8 h-8 text-white" />;
              })()}
            </div>
            <h2 className="text-xl font-bold">{steps[currentStep].title}</h2>
            <p className="text-sm text-muted mt-2">{steps[currentStep].description}</p>
          </div>

          {/* Fields */}
          {steps[currentStep].fields.length > 0 && (
            <div className="space-y-4 mb-8">
              {steps[currentStep].fields.map((field) => (
                <div key={field.label}>
                  <label className="text-xs text-muted block mb-1.5">{field.label}</label>
                  {field.type === "toggle" ? (
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" defaultChecked className="sr-only peer" />
                      <div className="w-11 h-6 bg-muted/30 rounded-full peer peer-checked:bg-accent after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-5" />
                    </label>
                  ) : (
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      className="w-full px-4 py-3 bg-background border border-border rounded-xl text-sm outline-none focus:border-accent/30 transition-colors placeholder:text-muted"
                    />
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Launch screens */}
          {currentStep === 3 && (
            <div className="mb-8 p-6 rounded-xl bg-success/5 border border-success/20 text-center">
              <div className="w-12 h-12 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-3">
                <Bot className="w-6 h-6 text-success" />
              </div>
              <p className="font-semibold text-success">AI Receptionist Ready!</p>
              <p className="text-xs text-muted mt-2">Your AI will answer incoming calls, qualify leads, book estimates, and send SMS confirmations automatically.</p>
            </div>
          )}

          {currentStep === 4 && (
            <div className="mb-8 p-6 rounded-xl bg-recovery/5 border border-recovery/20 text-center">
              <div className="w-12 h-12 rounded-full bg-recovery/10 flex items-center justify-center mx-auto mb-3">
                <Sparkles className="w-6 h-6 text-recovery" />
              </div>
              <p className="font-semibold text-recovery">Revenue Recovery Active!</p>
              <p className="text-xs text-muted mt-2">AI will immediately scan for stale leads and start SMS + voice recovery campaigns. Monitor results in your dashboard.</p>
            </div>
          )}

          {/* Navigation */}
          <div className="flex items-center justify-between">
            <button
              onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                currentStep === 0
                  ? "opacity-0 pointer-events-none"
                  : "text-muted hover:text-foreground border border-border hover:bg-card"
              }`}
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </button>

            {currentStep < steps.length - 1 ? (
              <button
                onClick={() => setCurrentStep(currentStep + 1)}
                className="flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-accent to-recovery text-white font-semibold rounded-xl hover:opacity-90 transition-opacity text-sm"
              >
                Continue
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <Link
                href="/dashboard"
                className="flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-accent to-recovery text-white font-semibold rounded-xl hover:opacity-90 transition-opacity text-sm"
              >
                Go to Dashboard
                <ArrowRight className="w-4 h-4" />
              </Link>
            )}
          </div>
        </div>

        <p className="text-center text-xs text-muted mt-6">
          Need help? <a href="#" className="text-accent-light hover:text-accent">Contact support</a>
        </p>
      </div>
    </div>
  );
}
