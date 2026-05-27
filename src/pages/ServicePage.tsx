import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  Phone,
  Mail,
  MessageCircle,
  Search,
  Code2,
  Linkedin,
  Share2,
} from "lucide-react";
import SEOHead from "../components/SEOHead";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServiceForm from "../components/ServiceForm";
import PricingSection from "../components/PricingSection";
import { SITE } from "../data/site";
import { getServiceContent } from "../data/services";
import { getPricingBySlug } from "../data/pricing";
import type { ServiceContent } from "../data/services";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Search,
  Code2,
  MessageCircle,
  Linkedin,
  Share2,
  Mail,
};

interface ServicePageProps {
  slug: string;
  iconName?: string;
}

export default function ServicePage({ slug, iconName = "Search" }: ServicePageProps) {
  const service = getServiceContent(slug);
  const pricing = getPricingBySlug(slug);

  if (!service) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p>Service not found</p>
      </div>
    );
  }

  const Icon = iconMap[iconName] || Search;

  return (
    <>
      <SEOHead
        title={service.metaTitle}
        description={service.metaDescription}
        keywords={service.keywords}
        path={`/services/${slug}`}
      />
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="relative overflow-hidden py-20">
          <div className="absolute inset-0 bg-tech-grid opacity-30" />
          <div className="absolute -right-32 top-0 h-96 w-96 rounded-full bg-electric/10 blur-[120px]" />
          <div className="section-container relative">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <Link to="/#services" className="text-sm text-electric hover:underline">
                ← All Services
              </Link>
              <div className="mt-6 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-electric/10">
                  <Icon className="h-7 w-7 text-electric" />
                </div>
                <div>
                  <h1 className="font-display text-4xl font-bold sm:text-5xl">{service.title}</h1>
                  <p className="mt-2 text-lg text-white/60">{service.heroSubtitle}</p>
                </div>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#consultation" className="btn-primary gap-2">
                  Get Free Consultation <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href={`https://wa.me/${SITE.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline gap-2"
                >
                  <MessageCircle className="h-4 w-4" /> WhatsApp
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Content + Form */}
        <section className="py-16">
          <div className="section-container grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <article className="prose prose-invert max-w-none">
                {service.content.split("\n\n").map((para, i) => (
                  <p key={i} className="mb-4 leading-relaxed text-white/70">
                    {para}
                  </p>
                ))}
              </article>

              <div className="mt-12">
                <h2 className="font-display text-2xl font-bold">Key Benefits</h2>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {service.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-white/60">
                      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-electric" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-12">
                <h2 className="font-display text-2xl font-bold">Our Process</h2>
                <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {service.process.map((step) => (
                    <div
                      key={step.step}
                      className="rounded-xl border border-white/5 bg-white/[0.03] p-5"
                    >
                      <span className="font-display text-2xl font-bold text-electric/40">{step.step}</span>
                      <h3 className="mt-2 font-display font-semibold">{step.title}</h3>
                      <p className="mt-1 text-sm text-white/50">{step.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-12">
                <h2 className="font-display text-2xl font-bold">FAQs</h2>
                <div className="mt-4 space-y-4">
                  {service.faqs.map((faq) => (
                    <div key={faq.q} className="rounded-xl border border-white/5 bg-white/[0.03] p-5">
                      <h3 className="font-semibold text-white/90">{faq.q}</h3>
                      <p className="mt-2 text-sm text-white/50">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div id="consultation" className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <ServiceForm serviceName={service.title} />
                <div className="rounded-2xl border border-electric/20 bg-electric/5 p-6">
                  <p className="font-display font-semibold">Contact Directly</p>
                  <div className="mt-4 space-y-3">
                    <a href={`tel:${SITE.phone}`} className="flex items-center gap-2 text-sm text-white/70 hover:text-electric">
                      <Phone className="h-4 w-4" /> {SITE.phone}
                    </a>
                    <a href={`mailto:${SITE.email}`} className="flex items-center gap-2 text-sm text-white/70 hover:text-electric">
                      <Mail className="h-4 w-4" /> {SITE.email}
                    </a>
                    <a
                      href={`https://wa.me/${SITE.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-white/70 hover:text-electric"
                    >
                      <MessageCircle className="h-4 w-4" /> WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {pricing && <PricingSection pricing={pricing} showViewAll />}

        {/* CTA */}
        <section className="py-16">
          <div className="section-container">
            <div className="rounded-3xl border border-electric/20 bg-gradient-to-br from-electric/10 to-transparent p-10 text-center">
              <h2 className="font-display text-3xl font-bold">
                Ready to Start Your {service.title}?
              </h2>
              <p className="mx-auto mt-3 max-w-lg text-white/60">
                Book a free consultation with Rakshit Dave and get a custom strategy for your business.
              </p>
              <a href="#consultation" className="btn-primary mt-6 inline-flex gap-2">
                Contact Now <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

// Re-export type for convenience
export type { ServiceContent };
