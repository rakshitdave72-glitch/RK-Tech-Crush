import { motion } from "framer-motion";
import { BarChart3, Globe, HeartHandshake, Rocket } from "lucide-react";

const points = [
  {
    icon: BarChart3,
    title: "Data-Driven Strategies",
    desc: "Every decision backed by analytics and market research for maximum impact.",
    color: "#00a2ff",
  },
  {
    icon: Rocket,
    title: "High-Converting Websites",
    desc: "We build websites that don't just look great — they turn visitors into customers.",
    color: "#00e5ff",
  },
  {
    icon: Globe,
    title: "Real Business Growth",
    desc: "Our clients see measurable growth in traffic, leads, and revenue.",
    color: "#4ade80",
  },
  {
    icon: HeartHandshake,
    title: "Client-Focused Solutions",
    desc: "Customized strategies tailored to your unique business goals and audience.",
    color: "#f97316",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative py-24">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-electric/20 to-transparent" />

      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-electric/25 bg-electric/8 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-electric">
            Why Choose Us
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
            The <span className="gradient-text">R.K Tech Crush</span> Advantage
          </h2>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {points.map((point, i) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-white/6 bg-white/[0.03] p-6 text-center transition-all duration-300 hover:border-electric/20 hover:shadow-card-hover"
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-2xl"
                style={{
                  background: `radial-gradient(ellipse 80% 60% at 50% 0%, ${point.color}08, transparent)`,
                }}
              />
              <div className="relative">
                <div
                  className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border transition-all duration-300 group-hover:scale-110"
                  style={{ borderColor: `${point.color}25`, background: `${point.color}10` }}
                >
                  <point.icon className="h-7 w-7" style={{ color: point.color }} />
                </div>
                <h3 className="font-display text-base font-semibold text-white">{point.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/50">{point.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
