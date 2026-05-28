import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    initials: "JM",
    name: "James Mitchell",
    role: "CEO, UK",
    country: "🇬🇧",
    text: "Working with R.K Tech Crush was a game changer. They rebuilt our entire website and launched a targeted LinkedIn campaign that brought in over 200% more qualified leads within 90 days. Sharp, responsive, and genuinely invested in your growth.",
    metric: "+200% Leads",
    metricColor: "#00a2ff",
    color: "#00a2ff",
  },
  {
    initials: "SC",
    name: "Sophie Chambers",
    role: "Founder, UK",
    country: "🇬🇧",
    text: "Our subscription numbers were flat before we brought in R.K Tech Crush. They redesigned our site and ran a full social media strategy. Within two months we saw a massive spike in new subscribers. Absolutely worth every penny.",
    metric: "3x Subscribers",
    metricColor: "#f472b6",
    color: "#f472b6",
  },
  {
    initials: "LB",
    name: "Lucas Bernard",
    role: "Marketing Director, France",
    country: "🇫🇷",
    text: "Rakshit and his team delivered a corporate website that truly reflects our brand. The SEO work they did alongside the build meant we were ranking on page one within weeks of launch. Professional, fast, and results-focused.",
    metric: "Page 1 in 3 Weeks",
    metricColor: "#4ade80",
    color: "#4ade80",
  },
  {
    initials: "EW",
    name: "Emily Watson",
    role: "Head of Digital, UK",
    country: "🇬🇧",
    text: "We needed a complete SEO overhaul and R.K Tech Crush delivered beyond expectations. Organic traffic grew by 280% in four months. Their technical knowledge combined with genuine care for our mission made them the perfect partner.",
    metric: "+280% Traffic",
    metricColor: "#00e5ff",
    color: "#00e5ff",
  },
  {
    initials: "DK",
    name: "Daniel Kowalski",
    role: "Co-Founder, USA",
    country: "🇺🇸",
    text: "The B2B SEO strategy they built for us was exactly what we needed to compete in our space. We went from page three to page one for our core keywords in under six months. Highly recommend for any SaaS company looking to grow organically.",
    metric: "Page 1 Rankings",
    metricColor: "#a855f7",
    color: "#a855f7",
  },
  {
    initials: "NV",
    name: "Nathalie Voss",
    role: "Owner, Canada",
    country: "🇨🇦",
    text: "Our online bookings have nearly doubled since R.K Tech Crush redesigned our platform and ran WhatsApp marketing campaigns for us. The team understood our brand immediately and delivered a site that our clients genuinely love using.",
    metric: "+180% Bookings",
    metricColor: "#f97316",
    color: "#f97316",
  },
  {
    initials: "TH",
    name: "Thomas Hughes",
    role: "Director, UK",
    country: "🇬🇧",
    text: "The SEO results were beyond what we expected. Within three months our local search visibility tripled and we started getting inbound enquiries we never had before. R.K Tech Crush knows exactly what they are doing.",
    metric: "3x Local Visibility",
    metricColor: "#34d399",
    color: "#34d399",
  },
  {
    initials: "AV",
    name: "Anna Vermeer",
    role: "CMO, Netherlands",
    country: "🇳🇱",
    text: "We hired R.K Tech Crush for a full e-commerce rebuild and the results were incredible. The new site loads faster, looks stunning, and our conversion rate jumped from 1.8% to 5.4% in the first month after launch.",
    metric: "+200% Conversions",
    metricColor: "#fb923c",
    color: "#fb923c",
  },
];

// Duplicate for seamless infinite scroll
const row1 = [...testimonials.slice(0, 4), ...testimonials.slice(0, 4)];
const row2 = [...testimonials.slice(4), ...testimonials.slice(4)];

function TestimonialCard({ t }: { t: (typeof testimonials)[0] }) {
  return (
    <div
      className="group relative w-80 shrink-0 overflow-hidden rounded-2xl border border-white/6 bg-navy-900/80 p-6 transition-all duration-300 hover:border-electric/25 hover:shadow-card-hover hover:-translate-y-1 cursor-default"
    >
      {/* Glow blob top-right */}
      <div
        className="absolute -right-6 -top-6 h-20 w-20 rounded-full blur-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: `${t.color}20` }}
      />

      {/* Top accent line */}
      <div
        className="absolute inset-x-0 top-0 h-[2px] rounded-t-2xl"
        style={{ background: `linear-gradient(to right, transparent, ${t.color}80, transparent)` }}
      />

      <div className="relative">
        {/* Stars + metric */}
        <div className="mb-4 flex items-center justify-between">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <span
            className="rounded-full px-2.5 py-0.5 text-[10px] font-bold"
            style={{
              background: `${t.metricColor}15`,
              border: `1px solid ${t.metricColor}30`,
              color: t.metricColor,
            }}
          >
            {t.metric}
          </span>
        </div>

        {/* Quote text */}
        <p className="text-sm leading-relaxed text-white/65">
          "{t.text}"
        </p>

        {/* Author */}
        <div className="mt-5 flex items-center gap-3">
          <div
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-xs font-bold text-white"
            style={{
              background: `linear-gradient(135deg, ${t.color}35, ${t.color}10)`,
              border: `1px solid ${t.color}25`,
            }}
          >
            {t.initials}
          </div>
          <div>
            <p className="text-sm font-semibold text-white">{t.name}</p>
            <p className="text-[11px] text-white/35">{t.country} {t.role}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-electric/20 to-transparent" />

      {/* Ambient glows */}
      <div className="absolute left-1/3 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-electric/5 blur-[120px] pointer-events-none" />
      <div className="absolute right-1/3 top-1/2 h-60 w-60 -translate-y-1/2 rounded-full bg-electric-cyan/4 blur-[100px] pointer-events-none" />

      {/* Header */}
      <div className="section-container relative mb-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-electric/25 bg-electric/8 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-electric">
            Client Stories
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
            Trusted by Businesses <span className="gradient-text">Worldwide</span>
          </h2>
          <p className="mt-4 text-white/55">
            Real feedback from clients across the UK, USA, Europe, and beyond.
          </p>

          {/* Trust pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {[
              { icon: "⭐", label: "5.0 Rated" },
              { icon: "🌍", label: "8+ Countries" },
              { icon: "🤝", label: "50+ Clients" },
              { icon: "📈", label: "150+ Projects" },
            ].map((p) => (
              <span
                key={p.label}
                className="flex items-center gap-1.5 rounded-full border border-white/8 bg-white/[0.04] px-4 py-1.5 text-xs font-medium text-white/60"
              >
                {p.icon} {p.label}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Row 1 — scrolls left */}
      <div className="relative mb-4">
        {/* Edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-navy-950 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-navy-950 to-transparent" />

        <motion.div
          className="flex gap-4 px-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 40, ease: "linear", repeat: Infinity }}
        >
          {row1.map((t, i) => (
            <TestimonialCard key={`r1-${i}`} t={t} />
          ))}
        </motion.div>
      </div>

      {/* Row 2 — scrolls right */}
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-navy-950 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-navy-950 to-transparent" />

        <motion.div
          className="flex gap-4 px-4"
          animate={{ x: ["-50%", "0%"] }}
          transition={{ duration: 35, ease: "linear", repeat: Infinity }}
        >
          {row2.map((t, i) => (
            <TestimonialCard key={`r2-${i}`} t={t} />
          ))}
        </motion.div>
      </div>

      {/* Bottom CTA */}
      <div className="section-container relative mt-14 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-sm text-white/40"
        >
          Ready to be our next success story?{" "}
          <a href="/#contact" className="font-semibold text-electric transition hover:underline">
            Let's talk →
          </a>
        </motion.p>
      </div>
    </section>
  );
}
