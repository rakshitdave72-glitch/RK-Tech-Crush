import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, BarChart3, Search, TrendingUp, Users, Zap } from "lucide-react";
import { SITE } from "../data/site";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-20 lg:pt-24">
      <div className="absolute inset-0 bg-tech-grid opacity-40" />
      <div className="absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-electric/10 blur-[120px]" />
      <div className="absolute -right-32 bottom-1/4 h-96 w-96 rounded-full bg-electric-cyan/10 blur-[120px]" />

      <div className="section-container relative grid min-h-[calc(100vh-5rem)] items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-electric/20 bg-electric/5 px-4 py-1.5 text-xs font-medium text-electric">
            <Zap className="h-3.5 w-3.5" />
            {SITE.tagline}
          </div>

          <h1 className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Grow Your Business with{" "}
            <span className="gradient-text">Smart Digital Strategies</span>
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/60">
            Premium SEO, web development, and lead generation services that deliver measurable
            results. Trusted by businesses across India and globally.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/#contact" className="btn-primary gap-2">
              Get Free Consultation
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noopener noreferrer" className="btn-outline">
              Contact Now
            </a>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-4 border-t border-white/5 pt-8">
            {[
              { icon: TrendingUp, label: "6+ Years", sub: "Experience" },
              { icon: Users, label: "100+", sub: "Clients Served" },
              { icon: BarChart3, label: "Real ROI", sub: "Results Driven" },
            ].map(({ icon: Icon, label, sub }) => (
              <div key={label}>
                <Icon className="mb-2 h-5 w-5 text-electric" />
                <p className="font-display text-xl font-bold">{label}</p>
                <p className="text-xs text-white/40">{sub}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative"
        >
          <div className="relative mx-auto max-w-lg">
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-navy-900/90 p-1 shadow-xl backdrop-blur-sm">
              <div className="rounded-xl bg-gradient-to-b from-[#0f2037] to-[#0a1628]">
                {/* Top app bar */}
                <div className="flex items-center gap-3 border-b border-white/5 px-5 py-3">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-300/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
                  </div>
                  <p className="text-xs text-white/60">R.K Tech Crush — Analytics Dashboard</p>
                  <div className="ml-auto flex items-center gap-2 rounded-full border border-electric/20 bg-electric/10 px-3 py-1 text-xs text-white/70">
                    <Search className="h-3.5 w-3.5 text-electric" />
                    <span className="font-semibold text-white/80">#1 on Google</span>
                  </div>
                </div>

                <div className="p-5">
                  {/* KPI row */}
                  <div className="grid gap-3 sm:grid-cols-3">
                    {[
                      { label: "Organic Traffic", value: "+340%", accent: "text-electric-cyan" },
                      { label: "Leads Generated", value: "1,240", accent: "text-electric" },
                      { label: "Conversions", value: "89%", accent: "text-green-400" },
                    ].map((kpi, i) => (
                      <motion.div
                        key={kpi.label}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 + i * 0.06, duration: 0.35 }}
                        className="rounded-xl border border-white/10 bg-white/[0.025] p-4"
                      >
                        <p className="text-[11px] text-white/45">{kpi.label}</p>
                        <p className={`mt-1 font-display text-2xl font-bold ${kpi.accent}`}>{kpi.value}</p>
                      </motion.div>
                    ))}
                  </div>

                  {/* Bar chart block */}
                  <div className="mt-5 rounded-xl border border-white/10 bg-white/[0.02] p-4">
                    <div className="mb-4 flex items-center justify-between">
                      <p className="text-xs font-semibold text-white/70">SEO Rankings Growth</p>
                      <p className="text-xs text-electric-cyan">+127% this month</p>
                    </div>

                    <div className="flex h-28 items-end gap-2">
                      {[24, 38, 28, 46, 42, 58, 52, 66, 60, 78, 70, 88].map((h, idx) => (
                        <div
                          key={idx}
                          className="w-full flex-1 rounded-md bg-gradient-to-t from-[#0b7ccf] to-[#23b4e8]"
                          style={{ height: `${h}%` }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Progress rows */}
                  <div className="mt-5 space-y-3">
                    {[
                      { label: "SEO Optimization", value: 92, color: "from-electric to-electric-cyan" },
                      { label: "Social Media Reach", value: 78, color: "from-pink-500 to-fuchsia-500" },
                      { label: "Lead Generation", value: 85, color: "from-green-400 to-emerald-400" },
                    ].map((row) => (
                      <div key={row.label} className="grid grid-cols-[140px_1fr_40px] items-center gap-3">
                        <p className="text-xs text-white/55">{row.label}</p>
                        <div className="h-2.5 rounded-full bg-white/10">
                          <div
                            className={`h-2.5 rounded-full bg-gradient-to-r ${row.color}`}
                            style={{ width: `${row.value}%` }}
                          />
                        </div>
                        <p className="text-xs font-semibold text-white/70">{row.value}%</p>
                      </div>
                    ))}
                  </div>

                  {/* Badges */}
                  <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
                    <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-2 text-xs text-white/70">
                      <span className="font-semibold text-electric-cyan">500+</span> Leads/Month
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-2 text-xs text-white/70">
                      <span className="font-semibold text-electric">Global Reach</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
