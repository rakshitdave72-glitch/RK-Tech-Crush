import { Link } from "react-router-dom";
import { Instagram, Facebook, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { SITE, SERVICES } from "../data/site";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-navy-950">
      <div className="section-container py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" className="flex items-center gap-3">
              <img src="/images/logo.png" alt="R.K Tech Crush" className="h-10 w-auto object-contain" />
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-white/50">
              Premium digital agency helping businesses grow, rank, and succeed online.
            </p>
            <p className="mt-2 font-display text-sm font-semibold text-electric">{SITE.tagline}</p>
          </div>

          <div>
            <h4 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider">Services</h4>
            <ul className="space-y-2">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link to={`/services/${s.slug}`} className="text-sm text-white/50 transition hover:text-electric">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm text-white/50 transition hover:text-electric">Home</Link></li>
              <li><Link to="/#about" className="text-sm text-white/50 transition hover:text-electric">About</Link></li>
              <li><Link to="/pricing" className="text-sm text-white/50 transition hover:text-electric">Pricing</Link></li>
              <li><Link to="/#contact" className="text-sm text-white/50 transition hover:text-electric">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-white/50">
                <Phone className="h-4 w-4 text-electric" /> {SITE.phone}
              </li>
              <li className="flex items-center gap-2 text-sm text-white/50">
                <Mail className="h-4 w-4 text-electric" /> {SITE.email}
              </li>
              <li className="flex items-start gap-2 text-sm text-white/50">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-electric" /> {SITE.address}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/5 pt-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="mb-2 text-xs uppercase tracking-wider text-white/30">Follow R.K Tech Crush</p>
              <div className="flex gap-3">
                {SITE.companySocial.map((s) => (
                  <a
                    key={s.url}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/50 transition hover:border-electric/30 hover:text-electric"
                    aria-label={s.name}
                  >
                    {s.name === "Instagram" && <Instagram className="h-4 w-4" />}
                    {s.name === "Facebook" && <Facebook className="h-4 w-4" />}
                    {s.name === "LinkedIn" && <Linkedin className="h-4 w-4" />}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <p className="mb-2 text-xs uppercase tracking-wider text-white/30">Follow Rakshit Dave</p>
              <div className="flex gap-3">
                {SITE.personalSocial.map((s) => (
                  <a
                    key={s.url}
                    href={s.url.startsWith("http") ? s.url : `https://${s.url}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/50 transition hover:border-electric/30 hover:text-electric"
                    aria-label={s.name}
                  >
                    {s.name === "Instagram" && <Instagram className="h-4 w-4" />}
                    {s.name === "Facebook" && <Facebook className="h-4 w-4" />}
                    {s.name === "LinkedIn" && <Linkedin className="h-4 w-4" />}
                    {s.name === "X" && <span className="text-xs font-bold">X</span>}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <p className="mt-8 text-center text-xs text-white/30">
            &copy; {new Date().getFullYear()} R.K Tech Crush. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
