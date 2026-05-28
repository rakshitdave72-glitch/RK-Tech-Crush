import { motion } from "framer-motion";
import { Check, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import type { ServicePricing } from "../data/pricing";

const WISE_PAYMENT_URL = import.meta.env.VITE_WISE_PAYMENT_URL as string;

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
          <span className="inline-flex items-center gap-2 rounded-full border border-electric/25 bg-electric/8 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-electric">
            Pricing
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold">
            {pricing.title} <span className="gradient-text">Plans</span>
          </h2>
          {pricing.note && (
            <p className="mx-auto mt-3 max-w-xl text-sm text-white/50">{pricing.note}</p>
          )}
        </motion.div>

        <div
          className={`grid gap-6 ${
            pricing.plans.length <= 2
              ? "mx-auto max-w-3xl sm:grid-cols-2"
              : "sm:grid-cols-2 lg:grid-cols-4"
          }`}
        >
          {pricing.plans.map((plan, i) => (
            <motion.div
              key={plan.duration}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
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
              <p className="mt-2 font-display text-2xl font-bold" style={{ color: pricing.color }}>
                {plan.price}
              </p>

              <ul className="mt-5 flex-1 space-y-2.5">
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
            </motion.div>
          ))}
        </div>

        {showViewAll && (
          <p className="mt-8 text-center text-sm text-white/50">
            <Link to="/pricing" className="text-electric transition hover:underline">
              View all service pricing →
            </Link>
          </p>
        )}
      </div>
    </section>
  );
}
