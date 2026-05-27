import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import SEOHead from "../components/SEOHead";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CTASection from "../components/CTASection";
import { ALL_PRICING } from "../data/pricing";

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
        <section className="py-20">
          <div className="section-container text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <span className="text-sm font-semibold uppercase tracking-widest text-electric">Pricing</span>
              <h1 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
                Transparent <span className="gradient-text">Pricing Plans</span>
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-white/60">
                Choose the plan that fits your business goals. All plans include dedicated account management
                and monthly reporting where applicable.
              </p>
            </motion.div>
          </div>
        </section>

        {ALL_PRICING.map((service, si) => (
          <section key={service.id} id={service.id} className={`py-12 ${si % 2 === 0 ? "" : "bg-white/[0.01]"}`}>
            <div className="section-container">
              <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
                <div>
                  <h2 className="font-display text-2xl font-bold sm:text-3xl" style={{ color: service.color }}>
                    {service.title}
                  </h2>
                  {service.note && <p className="mt-1 text-sm text-white/50">{service.note}</p>}
                </div>
                <Link
                  to={`/services/${service.slug}`}
                  className="inline-flex items-center gap-1 text-sm text-electric hover:underline"
                >
                  View Service Details <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div
                className={`grid gap-6 ${
                  service.plans.length <= 2 ? "max-w-3xl sm:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-4"
                }`}
              >
                {service.plans.map((plan) => (
                  <div
                    key={plan.duration}
                    className={`relative flex flex-col rounded-2xl border p-6 transition hover:shadow-neon ${
                      plan.popular
                        ? "border-electric/40 bg-electric/5"
                        : "border-white/5 bg-white/[0.03]"
                    }`}
                  >
                    {plan.popular && (
                      <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-electric px-3 py-0.5 text-xs font-semibold text-navy-950">
                        Popular
                      </span>
                    )}
                    <p className="font-display text-lg font-semibold">{plan.duration}</p>
                    <p className="mt-2 font-display text-2xl font-bold" style={{ color: service.color }}>
                      {plan.price}
                    </p>
                    <ul className="mt-6 flex-1 space-y-2">
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
                          : "border border-white/10 bg-white/5 hover:border-electric/30"
                      }`}
                    >
                      Get Started
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
