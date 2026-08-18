"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "@/data/navigation";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close everything on navigation
  useEffect(() => {
    setIsMobileOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  // Lock body scroll behind the mobile sheet, and allow Escape to dismiss it
  useEffect(() => {
    if (!isMobileOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMobileOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isMobileOpen]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>

      <header className="fixed top-0 left-0 right-0 z-[100] py-3 sm:py-4">
        {/* Reading progress */}
        <div
          className="absolute top-0 left-0 h-[2px] bg-gradient-to-r from-gold-600 via-gold-400 to-gold-600 z-50"
          style={{ width: `${scrollProgress}%` }}
          aria-hidden="true"
        />

        <div className="container-page">
          <motion.nav
            initial={{ y: -16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            aria-label="Primary"
            className={`w-full px-4 sm:px-5 lg:px-6 py-2.5 rounded-2xl border flex items-center justify-between gap-4 transition-[background-color,border-color,box-shadow,backdrop-filter] duration-500 ${
              isScrolled || isMobileOpen
                ? "bg-navy-950/85 backdrop-blur-xl border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
                : "bg-transparent border-transparent"
            }`}
          >
            {/* ── Logo ── */}
            <Link
              href="/"
              className="flex items-center gap-2.5 sm:gap-3 group shrink-0"
              aria-label="Acemen Ventures — home"
            >
              <img
                src="/images/logo.png"
                alt=""
                width={40}
                height={40}
                className="h-9 sm:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-[0_0_8px_rgba(201,168,76,0.3)]"
              />
              <span className="flex flex-col">
                <span className="font-heading font-black text-[13px] sm:text-sm tracking-[0.2em] text-white leading-none">
                  ACEMEN
                </span>
                <span className="font-heading font-bold text-[9px] sm:text-[10px] tracking-[0.3em] text-gold-400 mt-1 leading-none">
                  VENTURES
                </span>
              </span>
            </Link>

            {/* ── Desktop links ── */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const hasChildren = !!link.children;
                const active = isActive(link.href);

                return (
                  <div
                    key={link.href}
                    className="relative py-1.5"
                    onMouseEnter={() => {
                      setHoveredPath(link.href);
                      if (hasChildren) setOpenDropdown(link.label);
                    }}
                    onMouseLeave={() => {
                      setHoveredPath(null);
                      if (hasChildren) setOpenDropdown(null);
                    }}
                  >
                    <Link
                      href={link.href}
                      aria-current={active ? "page" : undefined}
                      aria-expanded={hasChildren ? openDropdown === link.label : undefined}
                      className={`relative z-10 px-3.5 py-2 rounded-xl text-[12px] xl:text-[13px] font-semibold tracking-[0.1em] uppercase transition-colors duration-300 flex items-center gap-1.5 whitespace-nowrap ${
                        active ? "text-gold-400" : "text-white/75 hover:text-white"
                      }`}
                    >
                      {link.label}
                      {hasChildren && (
                        <ChevronDown
                          className={`w-3.5 h-3.5 transition-transform duration-300 ${
                            openDropdown === link.label ? "rotate-180" : ""
                          }`}
                          aria-hidden="true"
                        />
                      )}
                    </Link>

                    {hoveredPath === link.href && (
                      <motion.span
                        layoutId="navHover"
                        className="absolute inset-0 bg-white/[0.08] rounded-xl z-0"
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                        aria-hidden="true"
                      />
                    )}

                    {/* ── Dropdown ── */}
                    {hasChildren && (
                      <AnimatePresence>
                        {openDropdown === link.label && (
                          <motion.div
                            initial={{ opacity: 0, y: 12, scale: 0.97 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 8, scale: 0.97 }}
                            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                            className="absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50"
                          >
                            <div className="relative bg-navy-950/95 backdrop-blur-xl border border-white/10 rounded-2xl p-2 min-w-[268px] shadow-[0_20px_50px_rgba(0,0,0,0.55)]">
                              <span
                                className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rotate-45 bg-navy-950 border-t border-l border-white/10"
                                aria-hidden="true"
                              />
                              {link.children?.map((child) => (
                                <Link
                                  key={child.href}
                                  href={child.href}
                                  className={`relative block px-4 py-3 rounded-xl text-[11px] font-bold tracking-[0.14em] uppercase transition-colors duration-300 hover:bg-white/[0.08] hover:text-gold-400 ${
                                    pathname === child.href
                                      ? "text-gold-400 bg-white/5"
                                      : "text-white/70"
                                  }`}
                                >
                                  {child.label}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}
                  </div>
                );
              })}

              <Link
                href="/contact"
                className="ml-3 btn-gold !text-[11px] !py-2.5 !px-5 tracking-[0.14em] uppercase flex items-center gap-1.5 font-bold group whitespace-nowrap"
              >
                Enquire
                <ArrowRight
                  className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </div>

            {/* ── Mobile toggle ── */}
            <button
              type="button"
              onClick={() => setIsMobileOpen((open) => !open)}
              className="lg:hidden p-2.5 rounded-xl border border-white/10 bg-white/5 text-white hover:bg-white/10 transition-colors shrink-0"
              aria-label={isMobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileOpen}
              aria-controls="mobile-menu"
            >
              <span className="w-5 h-4 relative flex flex-col justify-between" aria-hidden="true">
                <span
                  className={`h-0.5 w-5 bg-white rounded-full transition-all duration-300 ${
                    isMobileOpen ? "rotate-45 translate-y-[7px]" : ""
                  }`}
                />
                <span
                  className={`h-0.5 w-5 bg-white rounded-full transition-all duration-300 ${
                    isMobileOpen ? "opacity-0 scale-0" : ""
                  }`}
                />
                <span
                  className={`h-0.5 w-5 bg-white rounded-full transition-all duration-300 ${
                    isMobileOpen ? "-rotate-45 -translate-y-[7px]" : ""
                  }`}
                />
              </span>
            </button>
          </motion.nav>
        </div>
      </header>

      {/* ── Mobile sheet ── */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[90] bg-navy-950/97 backdrop-blur-2xl lg:hidden overflow-y-auto overscroll-contain"
          >
            <div className="min-h-full flex flex-col justify-center px-6 py-28">
              <nav className="flex flex-col gap-5 max-w-md mx-auto w-full" aria-label="Mobile">
                {navLinks.map((link, idx) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 + idx * 0.07, duration: 0.35 }}
                  >
                    <Link
                      href={link.href}
                      aria-current={isActive(link.href) ? "page" : undefined}
                      className={`block text-2xl sm:text-3xl font-black tracking-[0.12em] uppercase transition-colors ${
                        isActive(link.href)
                          ? "text-gold-400"
                          : "text-white hover:text-gold-400"
                      }`}
                    >
                      {link.label}
                    </Link>

                    {link.children && (
                      <div className="mt-3 ml-1 flex flex-col gap-2.5 border-l border-white/10 pl-4">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={`block text-[13px] font-bold tracking-[0.12em] uppercase transition-colors ${
                              pathname === child.href
                                ? "text-gold-400"
                                : "text-white/55 hover:text-white"
                            }`}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 + navLinks.length * 0.07, duration: 0.35 }}
                  className="pt-5"
                >
                  <Link
                    href="/contact"
                    className="w-full btn-gold text-[13px] !py-4 font-black tracking-[0.16em] uppercase"
                  >
                    Initiate an Alliance
                  </Link>
                </motion.div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
