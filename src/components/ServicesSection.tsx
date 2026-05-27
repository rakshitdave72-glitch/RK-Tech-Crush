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
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-electric">Our Services</span>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
            Services That <span className="gradient-text">Grow Your Business</span>
          </h2>
          <p className="mt-4 text-white/60">
            End-to-end digital solutions designed to increase visibility, generate leads, and drive revenue.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => {
            const Icon = iconMap[service.icon] || Search;
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <Link
                  to={`/services/${service.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-white/5 bg-white/[0.03] p-6 transition hover:border-electric/30 hover:bg-electric/5 hover:shadow-neon"
                >
                  <div
                    className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border bg-white/5 transition group-hover:shadow-neon"
                    style={{ borderColor: `${service.color}30` }}
                  >
                    <Icon
                      className="h-6 w-6"
                      style={{ color: service.color } as React.CSSProperties}
                    />
                  </div>
                  <h3 className="font-display text-xl font-semibold">{service.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-white/50">{service.short}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-electric opacity-0 transition group-hover:opacity-100">
                    Learn More <ArrowUpRight className="h-4 w-4" />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
