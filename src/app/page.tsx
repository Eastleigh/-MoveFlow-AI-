import Link from "next/link";
import {
  TrendingUp,
  Phone,
  DollarSign,
  Brain,
  Zap,
  ArrowRight,
  Check,
  BarChart3,
  Bot,
  Truck,
} from "lucide-react";

const features = [
  {
    icon: Phone,
    title: "AI Receptionist",
    desc: "AI answers every call, qualifies leads, books estimates, and sends confirmations — 24/7.",
  },
  {
    icon: DollarSign,
    title: "Revenue Recovery Engine",
    desc: "Automatically detects stale leads and follows up with SMS, email, and AI voice to recover lost revenue.",
  },
  {
    icon: Brain,
    title: "AI Insights Engine",
    desc: "Ask questions in plain English. Get data-driven answers about your business performance instantly.",
  },
  {
    icon: Zap,
    title: "Follow-Up Automation",
    desc: "AI texts unresponsive leads, calls stale opportunities, and sends quote reminders automatically.",
  },
  {
    icon: Truck,
    title: "Dispatch Intelligence",
    desc: "AI assigns the best crews, optimizes routes, reduces overtime, and improves scheduling.",
  },
  {
    icon: BarChart3,
    title: "Revenue Dashboard",
    desc: "See booked revenue, recoverable revenue, stale leads, and AI-recovered money in real-time.",
  },
];

const stats = [
  { value: "$52K+", label: "Revenue Recovered by AI" },
  { value: "14 min", label: "Avg Lead Response Time" },
  { value: "41%", label: "Lead Conversion Rate" },
  { value: "24/7", label: "AI Receptionist Uptime" },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-border">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent to-recovery flex items-center justify-center">
              <TrendingUp className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-lg">MoveFlow</span>
            <span className="gradient-text font-bold text-lg">AI</span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm text-muted hover:text-foreground transition-colors">Features</a>
            <a href="#how-it-works" className="text-sm text-muted hover:text-foreground transition-colors">How It Works</a>
            <a href="#pricing" className="text-sm text-muted hover:text-foreground transition-colors">Pricing</a>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/dashboard" className="text-sm text-muted hover:text-foreground transition-colors">
              Login
            </Link>
            <Link
              href="/onboarding"
              className="px-4 py-2 bg-gradient-to-r from-accent to-recovery text-white text-sm font-semibold rounded-lg hover:opacity-90 transition-opacity"
            >
              Get Started Free
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.08),transparent_70%)]" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-6">
            <Bot className="w-3.5 h-3.5 text-accent-light" />
            <span className="text-xs font-medium text-accent-light">AI-Powered Revenue Operations</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
            Stop Losing Booked
            <br />
            <span className="gradient-text">Moving Jobs</span>
          </h1>
          <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-10 leading-relaxed">
            MoveFlow AI is the AI revenue operator for moving companies. Recover lost revenue,
            automate operations, and book more jobs — on autopilot.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              href="/onboarding"
              className="px-8 py-3.5 bg-gradient-to-r from-accent to-recovery text-white font-semibold rounded-xl hover:opacity-90 transition-all glow flex items-center justify-center gap-2"
            >
              Start Recovering Revenue
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/dashboard"
              className="px-8 py-3.5 border border-border-bright text-foreground font-semibold rounded-xl hover:bg-card transition-all flex items-center justify-center gap-2"
            >
              View Live Demo
            </Link>
          </div>

          {/* Stats strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {stats.map((stat) => (
              <div key={stat.label} className="stat-card text-center">
                <p className="text-2xl md:text-3xl font-bold gradient-text">{stat.value}</p>
                <p className="text-xs text-muted mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Recommendation Preview */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-8 glow">
            <div className="flex items-center gap-2 mb-6">
              <Brain className="w-5 h-5 text-accent-light" />
              <span className="text-sm font-semibold text-accent-light">AI PROACTIVE INSIGHTS</span>
            </div>
            <div className="space-y-4">
              {[
                { msg: "32 stale leads can potentially recover $18,400.", color: "text-success", icon: DollarSign },
                { msg: "Lead response time increased 14 minutes this week.", color: "text-warning", icon: Zap },
                { msg: "AI predicts revenue slowdown next Tuesday.", color: "text-danger", icon: BarChart3 },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-background/50 border border-border">
                  <div className={`w-10 h-10 rounded-xl bg-${item.color.replace("text-", "")}/10 flex items-center justify-center`}>
                    <item.icon className={`w-5 h-5 ${item.color}`} />
                  </div>
                  <p className="text-sm font-medium flex-1">{item.msg}</p>
                  <button className="text-xs text-accent-light hover:text-accent font-medium">Take Action →</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Your AI <span className="gradient-text">Revenue Operator</span>
            </h2>
            <p className="text-muted max-w-xl mx-auto">
              Not a CRM. A financial command center and AI operations assistant that
              helps you stop losing money.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div key={feature.title} className="glass-card p-6">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-accent-light" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-6 bg-gradient-to-b from-transparent via-accent/[0.02] to-transparent">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Launch in <span className="gradient-text">5 Minutes</span>
            </h2>
            <p className="text-muted">Simple onboarding. Immediate revenue recovery.</p>
          </div>
          <div className="space-y-6">
            {[
              { step: "1", title: "Connect Your Phone Number", desc: "Link your business line for AI call answering and SMS." },
              { step: "2", title: "Connect Google Calendar", desc: "Sync your schedule for automatic estimate booking." },
              { step: "3", title: "Connect Email & SMS", desc: "Enable AI-powered follow-up campaigns." },
              { step: "4", title: "Launch AI Receptionist", desc: "Your AI starts answering calls and qualifying leads instantly." },
              { step: "5", title: "Start Recovering Revenue", desc: "AI identifies stale leads and begins recovery automatically." },
            ].map((item) => (
              <div key={item.step} className="flex gap-5 items-start glass-card p-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent to-recovery flex items-center justify-center text-white font-bold shrink-0">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-muted">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Simple, <span className="gradient-text">Transparent Pricing</span>
            </h2>
            <p className="text-muted">Start free. Scale as you grow.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Starter",
                price: "$199",
                desc: "For small moving companies",
                features: ["AI Receptionist", "Up to 100 leads/mo", "Basic Dashboard", "SMS Follow-ups", "Email Support"],
                cta: "Start Free Trial",
                highlight: false,
              },
              {
                name: "Professional",
                price: "$499",
                desc: "For growing operations",
                features: ["Everything in Starter", "Unlimited leads", "Revenue Recovery Engine", "AI Insights Engine", "Sales Leaderboard", "Dispatch Intelligence", "Priority Support"],
                cta: "Start Free Trial",
                highlight: true,
              },
              {
                name: "Enterprise",
                price: "Custom",
                desc: "For multi-location companies",
                features: ["Everything in Pro", "Multi-location support", "Custom integrations", "Dedicated success manager", "Custom AI training", "SLA guarantee"],
                cta: "Contact Sales",
                highlight: false,
              },
            ].map((plan) => (
              <div
                key={plan.name}
                className={`glass-card p-8 flex flex-col ${plan.highlight ? "border-accent/30 glow" : ""}`}
              >
                <h3 className="text-lg font-semibold">{plan.name}</h3>
                <p className="text-sm text-muted mt-1">{plan.desc}</p>
                <div className="mt-6 mb-8">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.price !== "Custom" && <span className="text-muted">/mo</span>}
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-success shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/onboarding"
                  className={`w-full py-3 rounded-xl text-sm font-semibold text-center transition-all ${
                    plan.highlight
                      ? "bg-gradient-to-r from-accent to-recovery text-white hover:opacity-90"
                      : "border border-border-bright hover:bg-card text-foreground"
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center glass-card p-12 glow">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Stop Losing <span className="gradient-text">Revenue?</span>
          </h2>
          <p className="text-muted mb-8 max-w-xl mx-auto">
            Join moving companies using AI to recover thousands in lost bookings every month.
          </p>
          <Link
            href="/onboarding"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-accent to-recovery text-white font-semibold rounded-xl hover:opacity-90 transition-all"
          >
            Get Started Free
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-gradient-to-br from-accent to-recovery flex items-center justify-center">
              <TrendingUp className="w-3 h-3 text-white" />
            </div>
            <span className="font-semibold text-sm">MoveFlow AI</span>
          </div>
          <div className="flex gap-6">
            <Link href="#" className="text-xs text-muted hover:text-foreground">Privacy</Link>
            <Link href="#" className="text-xs text-muted hover:text-foreground">Terms</Link>
            <Link href="#" className="text-xs text-muted hover:text-foreground">Support</Link>
          </div>
          <p className="text-xs text-muted">&copy; 2026 MoveFlow AI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
