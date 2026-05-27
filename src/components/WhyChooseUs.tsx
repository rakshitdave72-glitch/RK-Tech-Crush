import { motion } from "framer-motion";
import { BarChart3, Globe, HeartHandshake, Rocket } from "lucide-react";

const points = [
  {
    icon: BarChart3,
    title: "Data-Driven Strategies",
    desc: "Every decision backed by analytics, keyword data, and performance metrics for maximum ROI.",
  },
  {
    icon: Rocket,
    title: "High-Converting Websites",
    desc: "Websites engineered for speed, SEO, and conversion — not just aesthetics.",
  },
  {
    icon: Globe,
    title: "Real Business Growth",
    desc: "Proven track record of ranking clients on Google and generating qualified leads.",
  },
  {
    icon: HeartHandshake,
    title: "Client-Focused Solutions",
    desc: "Dedicated account management with transparent communication and monthly reporting.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-electric">Why Choose Us</span>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
            The <span className="gradient-text">R.K Tech Crush</span> Advantage
          </h2>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {points.map((point, i) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl border border-white/5 bg-white/[0.03] p-6 text-center transition hover:border-electric/20 hover:shadow-neon"
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-electric/10">
                <point.icon className="h-7 w-7 text-electric" />
              </div>
              <h3 className="font-display text-lg font-semibold">{point.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/50">{point.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
