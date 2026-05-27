import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, CheckCircle } from "lucide-react";
import { SITE } from "../data/site";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-electric">Contact Us</span>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
            Get In <span className="gradient-text">Touch</span>
          </h2>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 lg:col-span-2"
          >
            {[
              { icon: Phone, label: "Phone / WhatsApp", value: SITE.phone, href: `tel:${SITE.phone}` },
              { icon: Mail, label: "Email", value: SITE.email, href: `mailto:${SITE.email}` },
              { icon: Mail, label: "Company Email", value: SITE.companyEmail, href: `mailto:${SITE.companyEmail}` },
              { icon: MapPin, label: "Address", value: SITE.address, href: undefined },
            ].map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-electric/10">
                  <Icon className="h-5 w-5 text-electric" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-white/40">{label}</p>
                  {href ? (
                    <a href={href} className="text-sm text-white/80 transition hover:text-electric">
                      {value}
                    </a>
                  ) : (
                    <p className="text-sm text-white/80">{value}</p>
                  )}
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center rounded-2xl border border-green-500/20 bg-green-500/5 p-10 text-center">
                <CheckCircle className="mb-4 h-12 w-12 text-green-400" />
                <h3 className="font-display text-xl font-bold">Message Sent!</h3>
                <p className="mt-2 text-white/60">We&apos;ll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="rounded-2xl border border-white/5 bg-white/[0.03] p-6 sm:p-8">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-xs text-white/40">Full Name</label>
                    <input
                      required
                      type="text"
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-electric/50"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs text-white/40">Phone</label>
                    <input
                      required
                      type="tel"
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-electric/50"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <label className="mb-1.5 block text-xs text-white/40">Email</label>
                  <input
                    required
                    type="email"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-electric/50"
                    placeholder="you@company.com"
                  />
                </div>
                <div className="mt-4">
                  <label className="mb-1.5 block text-xs text-white/40">Service Interested In</label>
                  <select className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-electric/50">
                    <option value="seo">SEO Services</option>
                    <option value="web">Web Design & Development</option>
                    <option value="whatsapp">WhatsApp Marketing</option>
                    <option value="linkedin">LinkedIn Marketing</option>
                    <option value="social">Social Media Marketing</option>
                    <option value="email">Email Marketing</option>
                  </select>
                </div>
                <div className="mt-4">
                  <label className="mb-1.5 block text-xs text-white/40">Message</label>
                  <textarea
                    required
                    rows={4}
                    className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-electric/50"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <button type="submit" className="btn-primary mt-6 w-full gap-2">
                  Send Message <Send className="h-4 w-4" />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
