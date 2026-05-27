import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "E-Commerce SEO Growth",
    category: "SEO",
    result: "+312% Organic Traffic",
    gradient: "from-electric/20 to-electric-cyan/10",
  },
  {
    title: "Corporate Website Redesign",
    category: "Web Development",
    result: "+89% Lead Conversion",
    gradient: "from-purple-500/20 to-pink-500/10",
  },
  {
    title: "B2B LinkedIn Campaign",
    category: "LinkedIn Marketing",
    result: "150+ Qualified Leads",
    gradient: "from-blue-600/20 to-blue-400/10",
  },
  {
    title: "WhatsApp Lead Engine",
    category: "WhatsApp Marketing",
    result: "200+ Leads/Month",
    gradient: "from-green-500/20 to-green-400/10",
  },
  {
    title: "Social Media Brand Launch",
    category: "Social Media",
    result: "10K+ Followers in 3 Months",
    gradient: "from-pink-500/20 to-orange-500/10",
  },
  {
    title: "Local SEO Domination",
    category: "SEO",
    result: "#1 Google Maps Ranking",
    gradient: "from-cyan-500/20 to-teal-500/10",
  },
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-electric">Our Work</span>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
            Projects That <span className="gradient-text">Deliver Results</span>
          </h2>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.03] transition hover:border-electric/20 hover:shadow-neon"
            >
              <div className={`flex h-48 items-center justify-center bg-gradient-to-br ${project.gradient}`}>
                <div className="text-center">
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/60">
                    {project.category}
                  </span>
                  <p className="mt-3 font-display text-lg font-bold text-white/80">{project.result}</p>
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-lg font-semibold">{project.title}</h3>
                  <ExternalLink className="h-4 w-4 text-white/30 transition group-hover:text-electric" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
