import { motion } from "framer-motion";
import { Award, CheckCircle, Instagram, Facebook, Linkedin } from "lucide-react";
import { SITE } from "../data/site";

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-electric/4 to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-electric/20 to-transparent" />

      <div className="section-container relative">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-6 rounded-3xl bg-electric/8 blur-3xl" />
            <div className="relative overflow-hidden rounded-2xl border border-electric/20 shadow-[0_0_60px_rgba(0,162,255,0.1)]">
              <img
                src={SITE.founder.image}
                alt={SITE.founder.name}
                className="aspect-[4/5] w-full object-cover object-top"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=750&fit=crop&crop=face";
                }}
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-950 via-navy-950/80 to-transparent p-6">
                <p className="font-display text-2xl font-bold text-white">{SITE.founder.name}</p>
                <p className="text-sm text-electric">{SITE.founder.title}</p>
                <p className="text-xs text-white/40">R.K Tech Crush</p>
              </div>
            </div>

            {/* Badge */}
            <div className="absolute -bottom-4 -right-4 rounded-xl border border-electric/30 bg-navy-900/95 px-4 py-3 shadow-neon-blue backdrop-blur-md">
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-electric" />
                <div>
                  <p className="font-display text-lg font-bold text-white">{SITE.founder.experience}</p>
                  <p className="text-xs text-white/50">Industry Experience</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-electric/25 bg-electric/8 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-electric">
              About Us
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
              We're Not Just an Agency —{" "}
              <span className="gradient-text">We're Your Growth Partner</span>
            </h2>
            <p className="mt-5 leading-relaxed text-white/60">
              R.K Tech Crush is a results-driven digital agency specializing in SEO, web development,
              and comprehensive digital marketing. We combine technical expertise with creative strategy
              to help businesses of all sizes achieve sustainable online growth.
            </p>
            <p className="mt-4 leading-relaxed text-white/60">
              Our team of certified specialists has helped 50+ businesses transform their digital
              presence, generate quality leads, and build lasting brand authority in competitive markets.
            </p>

            <ul className="mt-6 space-y-3">
              {[
                "6+ years of digital marketing expertise",
                "Proven track record with 150+ successful projects",
                "Data-driven strategies with measurable ROI",
                "Dedicated team of certified digital specialists",
                "Transparent reporting and real-time analytics",
                "End-to-end digital transformation support",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-white/65">
                  <CheckCircle className="h-4 w-4 shrink-0 text-electric" />
                  {item}
                </li>
              ))}
            </ul>

            {/* Stats */}
            <div className="mt-8 flex gap-6">
              {[
                { value: "6+", label: "Years Experience" },
                { value: "150+", label: "Projects Done" },
                { value: "50+", label: "Happy Clients" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-display text-2xl font-bold text-electric">{stat.value}</p>
                  <p className="text-xs text-white/40">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <p className="mb-3 text-xs uppercase tracking-wider text-white/35">Connect with Rakshit</p>
              <div className="flex gap-3">
                {[
                  { icon: Instagram, url: SITE.personalSocial[0].url },
                  { icon: Facebook, url: SITE.personalSocial[1].url },
                  { icon: Linkedin, url: SITE.personalSocial[3].url },
                ].map(({ icon: Icon, url }, i) => (
                  <a
                    key={i}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/50 transition-all duration-200 hover:border-electric/40 hover:bg-electric/10 hover:text-electric hover:shadow-neon-blue"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
