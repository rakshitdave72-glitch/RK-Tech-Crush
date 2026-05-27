import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import type { ServicePricing } from "../data/pricing";

interface PricingSectionProps {
  pricing: ServicePricing;
  showViewAll?: boolean;
}

export default function PricingSection({ pricing, showViewAll = false }: PricingSectionProps) {
  return (
    <section className="py-16">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-electric">Pricing</span>
          <h2 className="mt-3 font-display text-3xl font-bold">
            {pricing.title} <span className="gradient-text">Plans</span>
          </h2>
          {pricing.note && <p className="mx-auto mt-3 max-w-xl text-sm text-white/50">{pricing.note}</p>}
        </motion.div>

        <div
          className={`grid gap-6 ${
            pricing.plans.length <= 2 ? "mx-auto max-w-3xl sm:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-4"
          }`}
        >
          {pricing.plans.map((plan, i) => (
            <motion.div
              key={plan.duration}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`relative flex flex-col rounded-2xl border p-6 transition hover:shadow-neon ${
                plan.popular
                  ? "border-electric/40 bg-electric/5 shadow-neon"
                  : "border-white/5 bg-white/[0.03]"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-electric px-3 py-0.5 text-xs font-semibold text-navy-950">
                  Popular
                </span>
              )}
              <p className="font-display text-lg font-semibold">{plan.duration}</p>
              <p className="mt-2 font-display text-2xl font-bold" style={{ color: pricing.color }}>
                {plan.price}
              </p>
              <ul className="mt-6 flex-1 space-y-2.5">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-xs text-white/60">
                    <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-electric" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                to="/#contact"
                className={`mt-6 block rounded-xl py-2.5 text-center text-sm font-semibold transition ${
                  plan.popular
                    ? "bg-gradient-to-r from-electric to-electric-cyan text-navy-950"
                    : "border border-white/10 bg-white/5 text-white hover:border-electric/30"
                }`}
              >
                Get Started
              </Link>
            </motion.div>
          ))}
        </div>

        {showViewAll && (
          <p className="mt-8 text-center text-sm text-white/50">
            <Link to="/pricing" className="text-electric hover:underline">
              View all service pricing →
            </Link>
          </p>
        )}
      </div>
    </section>
  );
}
