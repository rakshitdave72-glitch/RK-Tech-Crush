import { motion } from "framer-motion";
import { Award, CheckCircle, Instagram, Facebook, Linkedin } from "lucide-react";
import { SITE } from "../data/site";

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-electric/5 to-transparent" />
      <div className="section-container relative">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 rounded-3xl bg-electric/10 blur-3xl" />
            <div className="relative overflow-hidden rounded-2xl border border-electric/20">
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
                <p className="font-display text-2xl font-bold">{SITE.founder.name}</p>
                <p className="text-sm text-electric">{SITE.founder.title}</p>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 rounded-xl border border-electric/30 bg-navy-900 px-4 py-3 shadow-neon">
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-electric" />
                <div>
                  <p className="font-display text-lg font-bold">{SITE.founder.experience}</p>
                  <p className="text-xs text-white/50">Industry Experience</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-semibold uppercase tracking-widest text-electric">About Us</span>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
              Results-Driven Digital Agency in{" "}
              <span className="gradient-text">Ahmedabad</span>
            </h2>
            <p className="mt-4 leading-relaxed text-white/60">{SITE.founder.bio}</p>
            <p className="mt-4 leading-relaxed text-white/60">
              R.K Tech Crush is a full-service digital agency specializing in SEO, web development,
              WhatsApp marketing, LinkedIn marketing, and social media growth. We combine data-driven
              strategies with creative execution to help businesses grow, rank, and succeed online.
            </p>

            <ul className="mt-6 space-y-3">
              {[
                "Data-driven SEO & marketing strategies",
                "High-converting website development",
                "Dedicated account management",
                "Transparent monthly reporting",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-white/70">
                  <CheckCircle className="h-4 w-4 shrink-0 text-electric" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <p className="mb-3 text-xs uppercase tracking-wider text-white/40">Connect with Rakshit</p>
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
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/60 transition hover:border-electric/30 hover:text-electric"
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
