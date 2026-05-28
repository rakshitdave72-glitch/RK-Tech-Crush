import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Globe, ChevronDown, TrendingUp } from "lucide-react";
import { PORTFOLIO_PROJECTS, PORTFOLIO_CATEGORIES } from "../data/portfolio";

// Microlink — free, no API key, real browser screenshots
function getMicrolinkThumb(url: string) {
  return `https://api.microlink.io/?url=${encodeURIComponent(url)}&screenshot=true&meta=false&embed=screenshot.url`;
}

const PAGE_SIZE = 10;

// Rich unique fallback card when screenshot fails
function FallbackPreview({ project }: { project: (typeof PORTFOLIO_PROJECTS)[0] }) {
  const domain = project.url.replace(/^https?:\/\//, "").replace(/\/$/, "");
  return (
    <div
      className="h-full w-full relative overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${project.accentColor}18 0%, #0a1628 60%, ${project.accentColor2}12 100%)`,
      }}
    >
      {/* Decorative grid */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(${project.accentColor}15 1px, transparent 1px), linear-gradient(90deg, ${project.accentColor}15 1px, transparent 1px)`,
          backgroundSize: "20px 20px",
        }}
      />

      {/* Glow orb */}
      <div
        className="absolute -top-6 -right-6 h-24 w-24 rounded-full blur-2xl opacity-30"
        style={{ background: project.accentColor }}
      />
      <div
        className="absolute -bottom-4 -left-4 h-16 w-16 rounded-full blur-xl opacity-20"
        style={{ background: project.accentColor2 }}
      />

      {/* Content */}
      <div className="relative flex h-full flex-col items-center justify-center gap-3 px-4">
        {/* Big initial badge */}
        <div
          className="flex h-14 w-14 items-center justify-center rounded-2xl text-lg font-bold text-white shadow-lg"
          style={{
            background: `linear-gradient(135deg, ${project.accentColor}, ${project.accentColor2})`,
            boxShadow: `0 8px 24px ${project.accentColor}40`,
          }}
        >
          {project.initial}
        </div>

        {/* Site name */}
        <div className="text-center">
          <p className="text-sm font-bold text-white/90">{project.title}</p>
          <p className="text-[10px] text-white/35 mt-0.5">{domain}</p>
        </div>

        {/* Mock stat pill */}
        <div
          className="flex items-center gap-1.5 rounded-full px-3 py-1 text-[10px] font-semibold"
          style={{
            background: `${project.accentColor}20`,
            border: `1px solid ${project.accentColor}35`,
            color: project.accentColor,
          }}
        >
          <TrendingUp className="h-3 w-3" />
          {project.metric}
        </div>
      </div>
    </div>
  );
}

function PortfolioCard({
  project,
  index,
}: {
  project: (typeof PORTFOLIO_PROJECTS)[0];
  index: number;
}) {
  const [imgFailed, setImgFailed] = useState(false);
  const thumbSrc = getMicrolinkThumb(project.url);

  return (
    <motion.a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: (index % PAGE_SIZE) * 0.04, duration: 0.35 }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/6 bg-navy-900/80 transition-all duration-300 hover:border-electric/25 hover:shadow-card-hover hover:-translate-y-1"
    >
      {/* Browser chrome */}
      <div className="flex shrink-0 items-center gap-2 border-b border-white/5 bg-white/[0.025] px-3 py-2">
        <div className="flex gap-1.5">
          <span className="h-2 w-2 rounded-full bg-red-400/50" />
          <span className="h-2 w-2 rounded-full bg-yellow-300/50" />
          <span className="h-2 w-2 rounded-full bg-green-400/50" />
        </div>
        <div className="flex flex-1 items-center gap-1.5 overflow-hidden rounded-md bg-white/5 px-2 py-1">
          <Globe className="h-2.5 w-2.5 shrink-0 text-white/25" />
          <span className="truncate text-[10px] text-white/30">
            {project.url.replace(/^https?:\/\//, "").replace(/\/$/, "")}
          </span>
        </div>
        <ExternalLink className="h-3 w-3 shrink-0 text-white/20 transition-colors duration-200 group-hover:text-electric" />
      </div>

      {/* Preview area */}
      <div className="relative h-40 w-full shrink-0 overflow-hidden">
        {!imgFailed ? (
          <>
            <img
              src={thumbSrc}
              alt={`${project.title} preview`}
              className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
              onError={() => setImgFailed(true)}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 via-transparent to-transparent" />
          </>
        ) : (
          <FallbackPreview project={project} />
        )}

        {/* Category badge */}
        <span
          className="absolute left-2.5 top-2.5 rounded-full px-2.5 py-1 text-[10px] font-semibold backdrop-blur-sm"
          style={{
            background: project.categoryBg,
            border: `1px solid ${project.categoryBorder}`,
            color: project.categoryColor,
          }}
        >
          {project.category}
        </span>

        {/* Country flag */}
        <span className="absolute right-2.5 top-2.5 rounded-full border border-white/10 bg-navy-900/80 px-2 py-0.5 text-xs backdrop-blur-sm">
          {project.flag}
        </span>
      </div>

      {/* Card content */}
      <div className="flex flex-1 flex-col p-4">
        <p className="mb-1 text-xs font-bold" style={{ color: project.metricColor }}>
          {project.metric}
        </p>
        <h3 className="font-display text-sm font-semibold text-white transition-colors duration-200 group-hover:text-electric">
          {project.title}
        </h3>
        <p className="mt-1.5 flex-1 text-xs leading-relaxed text-white/45">
          {project.description}
        </p>

        <div className="mt-3 flex items-center justify-between border-t border-white/5 pt-3">
          <span className="text-[10px] text-white/30">{project.country}</span>
          <span className="flex items-center gap-1 text-[10px] font-semibold text-electric opacity-0 transition-opacity duration-200 group-hover:opacity-100">
            Visit Site <ExternalLink className="h-3 w-3" />
          </span>
        </div>
      </div>
    </motion.a>
  );
}

export default function PortfolioSection() {
  const [activeTag, setActiveTag] = useState<string>("all");
  const [showAll, setShowAll] = useState(false);

  const handleTabChange = (tag: string) => {
    setActiveTag(tag);
    setShowAll(false);
  };

  const allFiltered =
    activeTag === "all"
      ? PORTFOLIO_PROJECTS
      : PORTFOLIO_PROJECTS.filter((p) => p.tag === activeTag);

  const displayed = showAll ? allFiltered : allFiltered.slice(0, PAGE_SIZE);
  const hasMore = allFiltered.length > PAGE_SIZE;

  const counts: Record<string, number> = {
    all: PORTFOLIO_PROJECTS.length,
    web: PORTFOLIO_PROJECTS.filter((p) => p.tag === "web").length,
    seo: PORTFOLIO_PROJECTS.filter((p) => p.tag === "seo").length,
    marketing: PORTFOLIO_PROJECTS.filter((p) => p.tag === "marketing").length,
  };

  return (
    <section id="portfolio" className="relative py-24">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-electric/20 to-transparent" />

      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-10 max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-electric/25 bg-electric/8 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-electric">
            Our Work
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
            Real Projects. <span className="gradient-text">Real Results.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/55">
            A curated selection of websites, SEO campaigns, and digital marketing projects
            delivered for clients across the UK, USA, Europe, and beyond.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 flex flex-wrap justify-center gap-6"
        >
          {[
            { value: "25+", label: "Live Projects" },
            { value: "8+", label: "Countries" },
            { value: "150+", label: "Total Delivered" },
          ].map((s) => (
            <div key={s.label} className="flex items-center gap-2">
              <span className="font-display text-lg font-bold text-electric">{s.value}</span>
              <span className="text-sm text-white/40">{s.label}</span>
            </div>
          ))}
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mb-10 flex flex-wrap justify-center gap-2"
        >
          {PORTFOLIO_CATEGORIES.map((cat) => (
            <button
              key={cat.tag}
              onClick={() => handleTabChange(cat.tag)}
              className={`flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold transition-all duration-200 ${
                activeTag === cat.tag
                  ? "bg-gradient-to-r from-electric to-electric-cyan text-navy-950 shadow-neon-blue"
                  : "border border-white/10 bg-white/[0.04] text-white/60 hover:border-electric/30 hover:text-electric"
              }`}
            >
              {cat.label}
              <span
                className={`rounded-full px-1.5 py-0.5 text-[10px] font-bold ${
                  activeTag === cat.tag
                    ? "bg-navy-950/25 text-navy-950"
                    : "bg-white/10 text-white/40"
                }`}
              >
                {counts[cat.tag]}
              </span>
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTag}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5"
          >
            {displayed.map((project, i) => (
              <PortfolioCard
                key={`${project.url}-${project.tag}`}
                project={project}
                index={i}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Show more / less */}
        {hasMore && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-10 flex justify-center"
          >
            <button
              onClick={() => setShowAll((v) => !v)}
              className="flex items-center gap-2 rounded-full border border-electric/25 bg-electric/8 px-6 py-2.5 text-sm font-semibold text-electric transition-all duration-200 hover:bg-electric/15 hover:border-electric/40"
            >
              {showAll ? (
                "Show Less"
              ) : (
                <>
                  Show All {allFiltered.length} Projects
                  <ChevronDown className="h-4 w-4" />
                </>
              )}
            </button>
          </motion.div>
        )}

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 text-center"
        >
          <p className="text-sm text-white/40">
            Want results like these?{" "}
            <a href="/#contact" className="font-semibold text-electric transition hover:underline">
              Let's talk →
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
