import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS, SERVICES, SITE } from "../data/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    if (href.startsWith("/#")) return location.pathname === "/";
    return location.pathname === href;
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-navy-950/80 backdrop-blur-xl">
      <div className="section-container flex h-16 items-center justify-between lg:h-20">
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/images/logo.png"
            alt="R.K Tech Crush Logo"
            className="h-10 w-auto object-contain lg:h-12"
          />
          <div className="hidden sm:block">
            <span className="font-display text-lg font-bold tracking-wide text-white lg:text-xl">
              R.K <span className="text-electric">TECH</span> CRUSH
            </span>
            <p className="text-[10px] tracking-[0.2em] text-white/50">{SITE.tagline}</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) =>
            link.hasDropdown ? (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <div
                  className={`flex items-center rounded-lg px-1 py-1 text-sm font-medium transition hover:text-electric ${
                    location.pathname.startsWith("/services") ? "text-electric" : "text-white/70"
                  }`}
                >
                  <Link to={link.href} className="rounded-md px-2 py-1">
                    {link.label}
                  </Link>
                  <button
                    className="rounded-md p-1 hover:bg-white/5"
                    aria-label="Toggle services menu"
                    onClick={() => setServicesOpen((prev) => !prev)}
                    type="button"
                  >
                    <ChevronDown className="h-4 w-4" />
                  </button>
                </div>
                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      className="absolute left-0 top-full w-64 rounded-xl border border-white/10 bg-navy-900/95 p-2 shadow-neon backdrop-blur-xl"
                    >
                      {SERVICES.map((s) => (
                        <Link
                          key={s.slug}
                          to={`/services/${s.slug}`}
                          className="block rounded-lg px-3 py-2.5 text-sm text-white/70 transition hover:bg-electric/10 hover:text-electric"
                          onClick={() => setServicesOpen(false)}
                        >
                          {s.title}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={link.label}
                to={link.href}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition hover:text-electric ${
                  isActive(link.href) ? "text-electric" : "text-white/70"
                }`}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href={`tel:${SITE.phone}`} className="flex items-center gap-2 text-sm text-white/70 hover:text-electric">
            <Phone className="h-4 w-4" />
            {SITE.phone}
          </a>
          <Link to="/#contact" className="btn-primary text-xs">
            Free Consultation
          </Link>
        </div>

        <button
          className="rounded-lg p-2 text-white lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-white/5 bg-navy-950/95 lg:hidden"
          >
            <div className="section-container space-y-1 py-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="block rounded-lg px-3 py-2.5 text-sm font-medium text-white/80 hover:bg-white/5"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="border-t border-white/5 pt-2">
                <p className="px-3 py-1 text-xs uppercase tracking-wider text-white/40">Services</p>
                {SERVICES.map((s) => (
                  <Link
                    key={s.slug}
                    to={`/services/${s.slug}`}
                    className="block rounded-lg px-3 py-2 text-sm text-white/70 hover:text-electric"
                    onClick={() => setOpen(false)}
                  >
                    {s.title}
                  </Link>
                ))}
              </div>
              <Link to="/#contact" className="btn-primary mt-3 w-full text-center" onClick={() => setOpen(false)}>
                Free Consultation
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
