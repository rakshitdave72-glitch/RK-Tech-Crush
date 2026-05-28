import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, CheckCircle, MessageCircle, Clock } from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";
import { SITE } from "../data/site";

export default function ContactSection() {
  const [state, handleSubmit] = useForm("maqkagzg");

  return (
    <section id="contact" className="relative py-24">
      {/* Ambient glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-electric/3 to-transparent pointer-events-none" />

      <div className="section-container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-electric/25 bg-electric/8 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-electric">
            Get In Touch
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
            Start Your <span className="gradient-text">Digital Journey</span>
          </h2>
          <p className="mt-4 text-white/55">
            Fill out the form below and we'll get back to you within 24 hours with a customized
            strategy for your business.
          </p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-5">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-5 lg:col-span-2"
          >
            <h3 className="font-display text-xl font-semibold text-white/90">Contact Information</h3>

            {[
              {
                icon: Phone,
                label: "Phone",
                value: SITE.phone,
                href: `tel:${SITE.phone}`,
                color: "#00a2ff",
              },
              {
                icon: Mail,
                label: "Company Email",
                value: SITE.companyEmail,
                href: `mailto:${SITE.companyEmail}`,
                color: "#00e5ff",
              },
              {
                icon: MessageCircle,
                label: "WhatsApp",
                value: "Chat with us",
                href: `https://wa.me/${SITE.whatsapp}`,
                color: "#25D366",
              },
              {
                icon: MapPin,
                label: "Address",
                value: SITE.address,
                href: "https://maps.google.com/?q=Celebration+City+Center+Bopal+Ahmedabad",
                color: "#f97316",
              },
            ].map(({ icon: Icon, label, value, href, color }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="group flex items-start gap-4 rounded-2xl border border-white/5 bg-white/[0.03] p-4 transition-all duration-200 hover:border-electric/20 hover:bg-electric/5"
              >
                <div
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border transition-all duration-200 group-hover:shadow-neon-blue"
                  style={{ borderColor: `${color}30`, background: `${color}12` }}
                >
                  <Icon className="h-5 w-5" style={{ color }} />
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-wider text-white/35">{label}</p>
                  <p className="mt-0.5 text-sm font-medium text-white/80 transition group-hover:text-white">
                    {value}
                  </p>
                </div>
              </a>
            ))}

            {/* Business hours */}
            <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-5">
              <div className="mb-3 flex items-center gap-2">
                <Clock className="h-4 w-4 text-electric" />
                <p className="text-sm font-semibold text-white/80">Business Hours</p>
              </div>
              <div className="space-y-2 text-sm text-white/50">
                <div className="flex justify-between">
                  <span>Monday – Friday</span>
                  <span className="text-white/70">9:00 AM – 7:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="text-white/70">10:00 AM – 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="text-red-400/70">Closed</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            {state.succeeded ? (
              <div className="flex h-full flex-col items-center justify-center rounded-2xl border border-green-500/20 bg-green-500/5 p-12 text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <CheckCircle className="mb-5 h-16 w-16 text-green-400" />
                </motion.div>
                <h3 className="font-display text-2xl font-bold">Message Sent!</h3>
                <p className="mt-3 max-w-sm text-white/55">
                  Thanks for reaching out. We'll get back to you within 24 hours with a customized
                  strategy for your business.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl border border-white/8 bg-white/[0.03] p-6 sm:p-8 shadow-[0_0_60px_rgba(0,0,0,0.3)]"
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-xs font-medium text-white/45">
                      Full Name <span className="text-electric">*</span>
                    </label>
                    <input
                      required
                      type="text"
                      name="name"
                      className="input-glow w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/25 transition"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-medium text-white/45">
                      Email Address <span className="text-electric">*</span>
                    </label>
                    <input
                      required
                      type="email"
                      name="email"
                      className="input-glow w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/25 transition"
                      placeholder="you@company.com"
                    />
                    <ValidationError field="email" prefix="Email" errors={state.errors} className="mt-1 text-xs text-red-400" />
                  </div>
                </div>

                <div className="mt-4">
                  <label className="mb-1.5 block text-xs font-medium text-white/45">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    className="input-glow w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/25 transition"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>

                <div className="mt-4">
                  <label className="mb-1.5 block text-xs font-medium text-white/45">
                    Service Needed
                  </label>
                  <select
                    name="service"
                    className="input-glow w-full rounded-xl border border-white/10 bg-navy-900 px-4 py-3 text-sm text-white/80 transition"
                  >
                    <option value="">Select a service...</option>
                    <option value="seo">SEO Services</option>
                    <option value="web">Web Design & Development</option>
                    <option value="whatsapp">WhatsApp Marketing</option>
                    <option value="linkedin">LinkedIn Marketing</option>
                    <option value="social">Social Media Marketing</option>
                    <option value="email">Email Marketing</option>
                  </select>
                </div>

                <div className="mt-4">
                  <label className="mb-1.5 block text-xs font-medium text-white/45">
                    Message <span className="text-electric">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    name="message"
                    className="input-glow w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/25 transition"
                    placeholder="Tell us about your project and goals..."
                  />
                  <ValidationError field="message" prefix="Message" errors={state.errors} className="mt-1 text-xs text-red-400" />
                </div>

                <button
                  type="submit"
                  disabled={state.submitting}
                  className="btn-primary mt-6 w-full gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {state.submitting ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-navy-950/30 border-t-navy-950" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="h-4 w-4" />
                    </>
                  )}
                </button>

                <p className="mt-4 text-center text-xs text-white/30">
                  We respond within 24 hours · No spam, ever
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
