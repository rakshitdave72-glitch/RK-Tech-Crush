import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, BarChart3, TrendingUp, Users, Zap, Search, Globe, Star } from "lucide-react";
import { SITE } from "../data/site";

// Animated floating metric card
function MetricCard({
  value,
  label,
  color,
  delay,
  className,
}: {
  value: string;
  label: string;
  color: string;
  delay: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.5, ease: "easeOut" }}
      className={`absolute rounded-2xl border border-white/10 bg-navy-900/90 px-4 py-3 shadow-neon backdrop-blur-md ${className}`}
    >
      <p className="font-display text-xl font-bold" style={{ color }}>
        {value}
      </p>
      <p className="text-[11px] text-white/50">{label}</p>
    </motion.div>
  );
}

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-20 lg:pt-24">
      {/* Background grid */}
      <div className="absolute inset-0 bg-tech-grid opacity-50" />

      {/* Ambient glow orbs */}
      <div className="absolute -left-40 top-1/3 h-[500px] w-[500px] rounded-full bg-electric/8 blur-[140px] animate-float-slow" />
      <div className="absolute -right-40 bottom-1/4 h-[400px] w-[400px] rounded-full bg-electric-cyan/8 blur-[120px] animate-float-medium" />
      <div className="absolute left-1/2 top-0 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-electric/5 blur-[100px]" />

      <div className="section-container relative grid min-h-[calc(100vh-5rem)] items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
        {/* LEFT — copy */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-electric/25 bg-electric/8 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-electric"
          >
            <Zap className="h-3.5 w-3.5" />
            {SITE.tagline}
          </motion.div>

          <h1 className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Grow Your Business with{" "}
            <span className="gradient-text text-glow">Smart Digital Strategies</span>
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/55">
            We combine cutting-edge SEO, high-converting web design, and targeted digital marketing
            to drive real business growth. From lead generation to brand authority — we deliver results.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/#contact" className="btn-primary gap-2">
              Get Free Consultation
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/#services" className="btn-outline">
              Explore Services
            </Link>
          </div>

          {/* Stats row */}
          <div className="mt-10 grid grid-cols-2 gap-4 border-t border-white/5 pt-8 sm:grid-cols-4">
            {[
              { icon: BarChart3, label: "150+", sub: "Projects Delivered" },
              { icon: TrendingUp, label: "98%", sub: "Client Satisfaction" },
              { icon: Users, label: "6+", sub: "Years Experience" },
              { icon: Zap, label: "50+", sub: "Happy Clients" },
            ].map(({ icon: Icon, label, sub }) => (
              <div key={label} className="group">
                <Icon className="mb-2 h-5 w-5 text-electric transition group-hover:drop-shadow-[0_0_8px_rgba(0,162,255,0.8)]" />
                <p className="font-display text-xl font-bold text-white">{label}</p>
                <p className="text-xs text-white/40">{sub}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT — advanced 3D-style dashboard animation */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative flex items-center justify-center"
        >
          <div className="relative mx-auto w-full max-w-[480px]">
            {/* Outer glow ring */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-electric/20 via-transparent to-electric-cyan/10 blur-2xl" />

            {/* Main dashboard card */}
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-navy-900/95 shadow-[0_0_80px_rgba(0,162,255,0.12)] backdrop-blur-xl">
              {/* Top bar */}
              <div className="flex items-center justify-between border-b border-white/5 bg-white/[0.02] px-5 py-3.5">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-300/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
                </div>
                <p className="text-xs font-medium text-white/50">R.K Tech Crush — Growth Dashboard</p>
                <motion.div
                  animate={{ opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="flex items-center gap-1.5 rounded-full border border-green-400/30 bg-green-400/10 px-2.5 py-1 text-[10px] font-semibold text-green-400"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
                  Live
                </motion.div>
              </div>

              <div className="p-5 space-y-4">
                {/* KPI row */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: "Organic Traffic", value: "+340%", color: "text-electric-cyan", bg: "from-electric-cyan/10 to-transparent" },
                    { label: "Leads/Month", value: "500+", color: "text-electric", bg: "from-electric/10 to-transparent" },
                    { label: "Conversions", value: "89%", color: "text-green-400", bg: "from-green-400/10 to-transparent" },
                  ].map((kpi, i) => (
                    <motion.div
                      key={kpi.label}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + i * 0.1, duration: 0.4 }}
                      className={`rounded-xl border border-white/8 bg-gradient-to-b ${kpi.bg} p-3.5`}
                    >
                      <p className="text-[10px] text-white/40 mb-1">{kpi.label}</p>
                      <p className={`font-display text-xl font-bold ${kpi.color}`}>{kpi.value}</p>
                    </motion.div>
                  ))}
                </div>

                {/* Bar chart */}
                <div className="rounded-xl border border-white/8 bg-white/[0.02] p-4">
                  <div className="mb-3 flex items-center justify-between">
                    <p className="text-xs font-semibold text-white/70">SEO Rankings Growth</p>
                    <span className="rounded-full bg-electric/10 px-2 py-0.5 text-[10px] font-semibold text-electric">
                      +127% this month
                    </span>
                  </div>
                  <div className="flex h-24 items-end gap-1.5">
                    {[22, 35, 28, 44, 38, 55, 48, 62, 56, 74, 68, 86].map((h, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{ delay: 0.6 + idx * 0.04, duration: 0.5, ease: "easeOut" }}
                        className="flex-1 rounded-sm"
                        style={{
                          background: `linear-gradient(to top, #0b7ccf, #23b4e8)`,
                          opacity: 0.7 + (idx / 12) * 0.3,
                        }}
                      />
                    ))}
                  </div>
                  <div className="mt-2 flex justify-between text-[9px] text-white/25">
                    {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].map((m) => (
                      <span key={m}>{m}</span>
                    ))}
                  </div>
                </div>

                {/* Progress rows */}
                <div className="space-y-2.5">
                  {[
                    { label: "SEO Optimization", value: 92, color: "#00a2ff", glow: "rgba(0,162,255,0.4)" },
                    { label: "Social Media Reach", value: 78, color: "#e879f9", glow: "rgba(232,121,249,0.4)" },
                    { label: "Lead Generation", value: 85, color: "#4ade80", glow: "rgba(74,222,128,0.4)" },
                  ].map((row, i) => (
                    <div key={row.label} className="flex items-center gap-3">
                      <p className="w-36 shrink-0 text-[11px] text-white/50">{row.label}</p>
                      <div className="flex-1 h-2 rounded-full bg-white/8 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${row.value}%` }}
                          transition={{ delay: 0.8 + i * 0.1, duration: 0.7, ease: "easeOut" }}
                          className="h-full rounded-full"
                          style={{
                            background: `linear-gradient(to right, ${row.color}, ${row.color}cc)`,
                            boxShadow: `0 0 8px ${row.glow}`,
                          }}
                        />
                      </div>
                      <p className="w-8 text-right text-[11px] font-semibold text-white/60">{row.value}%</p>
                    </div>
                  ))}
                </div>

                {/* Bottom badges */}
                <div className="flex items-center gap-3 pt-1">
                  <div className="flex items-center gap-2 rounded-xl border border-electric/20 bg-electric/5 px-3 py-2 text-xs">
                    <Search className="h-3.5 w-3.5 text-electric" />
                    <span className="font-semibold text-white/80">#1 on Google</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2 text-xs">
                    <Globe className="h-3.5 w-3.5 text-electric-cyan" />
                    <span className="font-semibold text-white/80">Global Reach</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-xl border border-yellow-400/20 bg-yellow-400/5 px-3 py-2 text-xs">
                    <Star className="h-3.5 w-3.5 text-yellow-400" />
                    <span className="font-semibold text-white/80">5.0 Rating</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating metric cards */}
            <MetricCard
              value="+280%"
              label="Traffic Growth"
              color="#00e5ff"
              delay={1.0}
              className="-left-10 top-16 animate-float-slow"
            />
            <MetricCard
              value="50+"
              label="Happy Clients"
              color="#4ade80"
              delay={1.1}
              className="-right-8 bottom-20 animate-float-medium"
            />

            {/* Decorative ring */}
            <div className="pointer-events-none absolute -inset-6 rounded-[2.5rem] border border-electric/5" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
