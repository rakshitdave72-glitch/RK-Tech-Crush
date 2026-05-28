import { Link } from "react-router-dom";
import { Instagram, Facebook, Linkedin, Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { SITE, SERVICES } from "../data/site";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-navy-950">
      {/* Top glow */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-electric/25 to-transparent" />

      <div className="section-container py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-3">
              <img src="/images/logo.png" alt="R.K Tech Crush" className="h-10 w-auto object-contain" />
              <div>
                <span className="font-display text-base font-bold text-white">
                  R.K <span className="text-electric">TECH</span> CRUSH
                </span>
                <p className="text-[10px] tracking-[0.15em] text-white/35">{SITE.tagline}</p>
              </div>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-white/45">
              Premium digital agency specializing in SEO, web development, and digital marketing
              strategies.
            </p>
            <div className="mt-5">
              <p className="mb-3 text-xs uppercase tracking-wider text-white/30">Follow Company</p>
              <div className="flex gap-2">
                {[
                  { name: "Instagram", url: SITE.companySocial[0].url, icon: Instagram },
                  { name: "Facebook", url: SITE.companySocial[1].url, icon: Facebook },
                  { name: "LinkedIn", url: SITE.companySocial[2].url, icon: Linkedin },
                  { name: "WhatsApp", url: `https://wa.me/${SITE.whatsapp}`, icon: MessageCircle },
                ].map(({ name, url, icon: Icon }) => (
                  <a
                    key={name}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={name}
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/8 bg-white/[0.04] text-white/45 transition-all duration-200 hover:border-electric/35 hover:bg-electric/10 hover:text-electric"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-5 font-display text-sm font-semibold uppercase tracking-wider text-white/70">
              Services
            </h4>
            <ul className="space-y-2.5">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link
                    to={`/services/${s.slug}`}
                    className="text-sm text-white/45 transition hover:text-electric"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-5 font-display text-sm font-semibold uppercase tracking-wider text-white/70">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "Home", href: "/" },
                { label: "About", href: "/#about" },
                { label: "Portfolio", href: "/#portfolio" },
                { label: "Pricing", href: "/pricing" },
                { label: "Testimonials", href: "/#testimonials" },
                { label: "Contact", href: "/#contact" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <Link to={href} className="text-sm text-white/45 transition hover:text-electric">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-5 font-display text-sm font-semibold uppercase tracking-wider text-white/70">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${SITE.phone}`}
                  className="flex items-center gap-2.5 text-sm text-white/45 transition hover:text-electric"
                >
                  <Phone className="h-4 w-4 shrink-0 text-electric" />
                  {SITE.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE.companyEmail}`}
                  className="flex items-center gap-2.5 text-sm text-white/45 transition hover:text-electric"
                >
                  <Mail className="h-4 w-4 shrink-0 text-electric" />
                  {SITE.companyEmail}
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${SITE.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-sm text-white/45 transition hover:text-electric"
                >
                  <MessageCircle className="h-4 w-4 shrink-0 text-electric" />
                  WhatsApp Us
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-white/45">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-electric" />
                {SITE.address}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/5 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-xs text-white/30">
              &copy; {new Date().getFullYear()} R.K Tech Crush. All rights reserved.
            </p>
            <p className="text-xs text-white/30">
              Designed & Built by{" "}
              <span className="text-electric/70">Rakshit Dave</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
