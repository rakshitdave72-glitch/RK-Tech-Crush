import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { PORTFOLIO_PROJECTS } from "../data/portfolio";

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="inline-block rounded-full border border-electric/20 bg-electric/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-electric">
            Our Work
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
            Results That{" "}
            <span className="gradient-text">Speak for Themselves</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/55">
            A selection of our recent projects and the measurable impact we&apos;ve delivered for our
            clients.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PORTFOLIO_PROJECTS.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.45 }}
              className="group relative cursor-pointer overflow-hidden rounded-xl border border-white/[0.06] bg-[#0a1628] card-glow"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-[#0a1628]/40 to-transparent" />

                {/* Category badge */}
                <span
                  className="absolute left-3 top-3 rounded-full px-2 py-1 text-xs font-medium"
                  style={{
                    background: project.badgeBg,
                    border: `1px solid ${project.badgeBorder}`,
                    color: project.badgeColor,
                  }}
                >
                  {project.category}
                </span>

                {/* External link on hover */}
                <div className="absolute right-3 top-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div
                    className="flex h-8 w-8 items-center justify-center rounded-full border"
                    style={{
                      background: "rgba(0, 180, 255, 0.2)",
                      borderColor: "rgba(0, 180, 255, 0.4)",
                    }}
                  >
                    <ExternalLink className="h-4 w-4 text-[#00b4ff]" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <p className="mb-1 text-sm font-bold" style={{ color: project.metricColor }}>
                  {project.metric}
                </p>
                <h3 className="mb-2 font-semibold text-white">{project.title}</h3>
                <p className="text-sm leading-relaxed text-white/50">{project.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
