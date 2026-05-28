import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Check, ArrowRight, ExternalLink } from "lucide-react";
import SEOHead from "../components/SEOHead";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CTASection from "../components/CTASection";
import { ALL_PRICING } from "../data/pricing";
const WISE_PAYMENT_URL = import.meta.env.VITE_WISE_PAYMENT_URL as string;

export default function PricingPage() {
  return (
    <>
      <SEOHead
        title="Pricing | R.K Tech Crush — SEO, Web Dev & Marketing Plans"
        description="Transparent pricing for SEO, web development, social media, WhatsApp, and LinkedIn marketing services. Plans from $200/month. Contact R.K Tech Crush today."
        keywords="SEO pricing, web development cost, social media marketing pricing, WhatsApp marketing plans"
        path="/pricing"
      />
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="relative py-20">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-electric/30 to-transparent" />
          <div className="absolute left-1/2 top-0 h-64 w-[600px] -translate-x-1/2 rounded-full bg-electric/6 blur-[100px]" />
          <div className="section-container relative text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <span className="inline-flex items-center gap-2 rounded-full border border-electric/25 bg-electric/8 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-electric">
                Pricing
              </span>
              <h1 className="mt-4 font-display text-4xl font-bold sm:text-5xl">
                Transparent <span className="gradient-text">Pricing Plans</span>
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-white/55">
                Choose the plan that fits your business goals. All plans include dedicated account
                management and monthly reporting where applicable.
              </p>

              {/* Wise payment notice */}
              <div className="mx-auto mt-8 flex max-w-lg items-center gap-3 rounded-2xl border border-electric/15 bg-electric/5 px-5 py-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-electric/15">
                  {/* Wise logo mark */}
                  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-electric" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.5 6.5l-5 9-2-4-3 1 4-7 2 4 4-3z" />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="text-sm font-semibold text-white/90">Secure payments via Wise</p>
                  <p className="text-xs text-white/45">
                    International transfers · USD, EUR, GBP accepted · Regulated & secure
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Pricing sections */}
        {ALL_PRICING.map((service, si) => (
          <section
            key={service.id}
            id={service.id}
            className={`py-12 ${si % 2 === 0 ? "" : "bg-white/[0.015]"}`}
          >
            <div className="section-container">
              <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
                <div>
                  <h2
                    className="font-display text-2xl font-bold sm:text-3xl"
                    style={{ color: service.color }}
                  >
                    {service.title}
                  </h2>
                  {service.note && (
                    <p className="mt-1 text-sm text-white/50">{service.note}</p>
                  )}
                </div>
                <Link
                  to={`/services/${service.slug}`}
                  className="inline-flex items-center gap-1 text-sm text-electric transition hover:underline"
                >
                  View Service Details <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div
                className={`grid gap-6 ${
                  service.plans.length <= 2
                    ? "max-w-3xl sm:grid-cols-2"
                    : "sm:grid-cols-2 lg:grid-cols-4"
                }`}
              >
                {service.plans.map((plan) => (
                  <div
                    key={plan.duration}
                    className={`relative flex flex-col rounded-2xl border p-6 transition-all duration-300 ${
                      plan.popular
                        ? "border-electric/40 bg-electric/5 shadow-neon-blue"
                        : "border-white/6 bg-white/[0.03] hover:border-electric/20 hover:shadow-card-hover"
                    }`}
                  >
                    {plan.popular && (
                      <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-electric to-electric-cyan px-3 py-0.5 text-xs font-semibold text-navy-950">
                        Most Popular
                      </span>
                    )}

                    <p className="font-display text-lg font-semibold text-white">{plan.duration}</p>
                    <p className="mt-2 font-display text-2xl font-bold" style={{ color: service.color }}>
                      {plan.price}
                    </p>

                    <ul className="mt-5 flex-1 space-y-2">
                      {plan.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-xs text-white/60">
                          <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-electric" />
                          {f}
                        </li>
                      ))}
                    </ul>

                    {/* Pay via Wise */}
                    <a
                      href={WISE_PAYMENT_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`mt-6 flex items-center justify-center gap-2 rounded-xl py-2.5 text-sm font-semibold transition-all duration-200 ${
                        plan.popular
                          ? "bg-gradient-to-r from-electric to-electric-cyan text-navy-950 shadow-neon-blue hover:opacity-90 hover:scale-[1.02]"
                          : "border border-electric/25 bg-electric/8 text-electric hover:bg-electric/15 hover:border-electric/40"
                      }`}
                    >
                      Pay via Wise
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* Payment info banner */}
        <section className="py-12">
          <div className="section-container">
            <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-6 sm:p-8">
              <div className="grid gap-6 sm:grid-cols-3">
                {[
                  {
                    icon: "🔒",
                    title: "Secure Payments",
                    desc: "All payments processed through Wise — a regulated financial institution trusted by 16M+ users worldwide.",
                  },
                  {
                    icon: "🌍",
                    title: "International Transfers",
                    desc: "Pay in USD, EUR, GBP and 40+ currencies. Low fees, real exchange rates, no hidden charges.",
                  },
                  {
                    icon: "💬",
                    title: "Questions? Contact Us",
                    desc: "Not sure which plan fits? WhatsApp or email us and we'll recommend the right package for your goals.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <p className="font-semibold text-white/90">{item.title}</p>
                      <p className="mt-1 text-sm text-white/50">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
