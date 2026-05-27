import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SITE } from "../data/site";

export default function CTASection() {
  return (
    <section className="py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl border border-electric/20 bg-gradient-to-br from-electric/10 via-navy-900 to-electric-cyan/5 p-10 text-center sm:p-16"
        >
          <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-electric/10 blur-[80px]" />
          <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-electric-cyan/10 blur-[80px]" />
          <div className="relative">
            <h2 className="font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
              Let&apos;s Grow Your Business{" "}
              <span className="gradient-text">Together</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/60">
              Ready to dominate search results, build a high-converting website, or generate more leads?
              Get in touch for a free consultation today.
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
                className="btn-outline"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
