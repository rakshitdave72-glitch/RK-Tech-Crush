import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { SITE } from "../data/site";

export default function CTASection() {
  return (
    <section className="py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl border border-electric/20 bg-gradient-to-br from-electric/10 via-navy-900 to-electric-cyan/5 p-10 text-center sm:p-16 shadow-[0_0_80px_rgba(0,162,255,0.1)]"
        >
          {/* Glow orbs */}
          <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-electric/15 blur-[80px] animate-float-slow" />
          <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-electric-cyan/12 blur-[80px] animate-float-medium" />

          {/* Top border glow */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-electric/50 to-transparent" />

          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full border border-electric/25 bg-electric/8 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-electric mb-6">
              Ready to Grow?
            </span>
            <h2 className="font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
              Let's Grow Your Business{" "}
              <span className="gradient-text">Together</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-white/55">
              Ready to take your digital presence to the next level? Get a free consultation and
              discover how we can help you achieve your business goals.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link to="/#contact" className="btn-primary gap-2">
                Contact Now
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={`https://wa.me/${SITE.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline gap-2"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
