import { motion, AnimatePresence } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    initials: "AM",
    name: "Arjun Mehta",
    role: "CEO, TechVentures India",
    text: "R.K Tech Crush transformed our online presence completely. Our organic traffic increased by 280% in just 4 months. Their SEO strategies are genuinely data-driven and the results speak for themselves.",
    color: "#00a2ff",
  },
  {
    initials: "PS",
    name: "Priya Sharma",
    role: "Founder, StyleHub",
    text: "The website they built for us is absolutely stunning and converts like crazy. We went from 2% to 8% conversion rate after the redesign. Best investment we've made for our business.",
    color: "#00e5ff",
  },
  {
    initials: "RG",
    name: "Rahul Gupta",
    role: "Director, PropMax Realty",
    text: "Their WhatsApp marketing campaign generated over 500 qualified leads in the first month. The ROI was incredible — we closed 15 deals directly from their campaigns.",
    color: "#4ade80",
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

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
            Client Stories
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
            What Our <span className="gradient-text">Clients Say About Us</span>
          </h2>
          <p className="mt-4 text-white/55">
            Real results, real clients. Here's what businesses say after working with R.K Tech Crush.
          </p>
        </motion.div>

        <div className="relative mx-auto max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.35 }}
              className="relative overflow-hidden rounded-2xl border border-white/8 bg-white/[0.03] p-8 sm:p-10 shadow-[0_0_60px_rgba(0,0,0,0.3)]"
            >
              {/* Glow accent */}
              <div
                className="absolute -top-10 left-1/2 h-32 w-64 -translate-x-1/2 rounded-full blur-3xl"
                style={{ background: `${testimonials[current].color}12` }}
              />

              <div className="relative">
                {/* Stars */}
                <div className="mb-4 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <Quote className="mb-4 h-8 w-8 text-electric/30" />
                <p className="text-lg leading-relaxed text-white/75">
                  "{testimonials[current].text}"
                </p>

                <div className="mt-8 flex items-center gap-4 border-t border-white/5 pt-6">
                  <div
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white"
                    style={{ background: `${testimonials[current].color}25`, border: `1px solid ${testimonials[current].color}30` }}
                  >
                    {testimonials[current].initials}
                  </div>
                  <div>
                    <p className="font-display text-base font-semibold text-white">
                      {testimonials[current].name}
                    </p>
                    <p className="text-sm text-white/40">{testimonials[current].role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/60 transition hover:border-electric/30 hover:text-electric"
              aria-label="Previous testimonial"
            >
              ‹
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current
                      ? "w-8 bg-electric shadow-[0_0_8px_rgba(0,162,255,0.6)]"
                      : "w-2 bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/60 transition hover:border-electric/30 hover:text-electric"
              aria-label="Next testimonial"
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
