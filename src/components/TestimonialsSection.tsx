import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "CEO, TechStart Solutions",
    text: "R.K Tech Crush transformed our online presence. Within 4 months, we ranked on page 1 for our main keywords and saw a 200% increase in organic leads. Rakshit's team is professional and results-driven.",
  },
  {
    name: "Rajesh Patel",
    role: "Owner, Patel Industries",
    text: "The website they built for us is stunning and converts visitors into customers. Combined with their SEO services, our business has grown significantly. Highly recommended for any business in Ahmedabad.",
  },
  {
    name: "Anita Desai",
    role: "Marketing Head, Global Exports",
    text: "Their LinkedIn marketing generated over 100 qualified B2B leads in just 3 months. The content quality and follow-up strategy is exceptional. Best digital agency we've worked with.",
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-electric">Testimonials</span>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
        </motion.div>

        <div className="relative mx-auto max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="rounded-2xl border border-white/5 bg-white/[0.03] p-8 sm:p-10"
            >
              <Quote className="mb-4 h-8 w-8 text-electric/40" />
              <p className="text-lg leading-relaxed text-white/70">{testimonials[current].text}</p>
              <div className="mt-6 border-t border-white/5 pt-6">
                <p className="font-display text-lg font-semibold">{testimonials[current].name}</p>
                <p className="text-sm text-white/40">{testimonials[current].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition hover:border-electric/30"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition ${
                    i === current ? "w-8 bg-electric" : "w-2 bg-white/20"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition hover:border-electric/30"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
