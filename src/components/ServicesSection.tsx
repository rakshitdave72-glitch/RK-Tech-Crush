import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Search,
  Code2,
  MessageCircle,
  Linkedin,
  Share2,
  Mail,
  ArrowUpRight,
} from "lucide-react";
import { SERVICES } from "../data/site";

const iconMap: Record<
  string,
  React.ComponentType<{ className?: string; style?: React.CSSProperties }>
> = {
  Search,
  Code2,
  MessageCircle,
  Linkedin,
  Share2,
  Mail,
};

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-24">
      {/* Subtle top glow */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-electric/30 to-transparent" />

      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-electric/25 bg-electric/8 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-electric">
            What We Offer
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
            Services That Drive <span className="gradient-text">Real Results</span>
          </h2>
          <p className="mt-4 text-white/55">
            From search visibility to social media dominance — we offer a full suite of digital
            marketing services tailored to your business goals.
          </p>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => {
            const Icon = iconMap[service.icon] || Search;
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <Link
                  to={`/services/${service.slug}`}
                  className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/6 bg-white/[0.03] p-6 transition-all duration-300 hover:border-electric/25 hover:bg-electric/[0.04] hover:shadow-card-hover"
                >
                  {/* Hover glow */}
                  <div
                    className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-2xl"
                    style={{
                      background: `radial-gradient(ellipse 60% 50% at 50% 0%, ${service.color}08, transparent)`,
                    }}
                  />

                  <div className="relative">
                    <div
                      className="mb-5 flex h-13 w-13 items-center justify-center rounded-xl border transition-all duration-300 group-hover:shadow-neon-blue"
                      style={{
                        borderColor: `${service.color}25`,
                        background: `${service.color}10`,
                        height: "52px",
                        width: "52px",
                      }}
                    >
                      <Icon
                        className="h-6 w-6"
                        style={{ color: service.color } as React.CSSProperties}
                      />
                    </div>
                    <h3 className="font-display text-lg font-semibold text-white">{service.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-white/50">{service.short}</p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-electric opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-1">
                      Learn More <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
