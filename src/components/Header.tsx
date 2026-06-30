"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  {
    href: "/ventures",
    label: "Our Ventures",
    children: [
      { href: "/ventures/e-commerce", label: "E-Commerce" },
      { href: "/ventures/it-solutions", label: "IT Solutions" },
      { href: "/ventures/shoes", label: "Shoes Business" },
      { href: "/ventures/ticketing-travel", label: "Ticketing & Travel" },
    ],
  },
  { href: "/contact", label: "Contact" },
];

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
      if (docHeight > 0) {
        setScrollProgress((window.scrollY / docHeight) * 100);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-4"
      >
        {/* Scroll progress bar */}
        <div
          className="absolute top-0 left-0 h-[3px] bg-gradient-to-r from-gold-500 via-gold-300 to-gold-500 transition-all duration-150 ease-linear z-50"
          style={{ width: `${scrollProgress}%` }}
          aria-hidden="true"
        />

        <div className="container-page flex justify-center">
          <motion.nav
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className={`w-full max-w-7xl px-6 py-2.5 rounded-2xl transition-all duration-500 border flex items-center justify-between ${
              isScrolled
                ? "bg-navy-950/80 backdrop-blur-xl border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]"
                : "bg-transparent border-transparent"
            }`}
          >
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 group"
              aria-label="Acemen Ventures Home"
            >
              <div
                className="w-10 h-10 rounded-xl bg-gradient-to-br from-gold-600 to-gold-400 text-navy-950 flex items-center justify-center font-heading font-black text-base shadow-[0_0_15px_rgba(201,168,76,0.3)] group-hover:scale-105 transition-transform duration-300"
              >
                AV
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-black text-sm tracking-[0.2em] text-white leading-none">
                  ACEMEN
                </span>
                <span className="font-heading font-bold text-[10px] tracking-[0.3em] text-gold-400 mt-1 leading-none">
                  VENTURES
                </span>
              </div>
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center gap-1.5 relative">
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
                      className={`relative z-10 px-4 py-2 rounded-xl text-[13px] font-semibold tracking-wider uppercase transition-colors duration-300 flex items-center gap-1.5 ${
                        active ? "text-gold-400" : "text-white/80 hover:text-white"
                      }`}
                    >
                      {link.label}
                      {hasChildren && (
                        <ChevronDown
                          className={`w-3.5 h-3.5 transition-transform duration-300 ${
                            openDropdown === link.label ? "rotate-180" : ""
                          }`}
                        />
                      )}
                    </Link>

                    {/* Animated hover background */}
                    {hoveredPath === link.href && (
                      <motion.div
                        layoutId="navHover"
                        className="absolute inset-0 bg-white/10 rounded-xl -z-0"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      />
                    )}

                    {/* Dropdown Menu */}
                    {hasChildren && (
                      <AnimatePresence>
                        {openDropdown === link.label && (
                          <motion.div
                            initial={{ opacity: 0, y: 15, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                            className="absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50"
                          >
                            <div className="bg-navy-950/95 backdrop-blur-xl border border-white/10 rounded-2xl p-2.5 min-w-[260px] shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1.5 w-3 h-3 rotate-45 bg-navy-950 border-t border-l border-white/10" />
                              {link.children?.map((child) => (
                                <Link
                                  key={child.href}
                                  href={child.href}
                                  className={`block px-4 py-3 rounded-xl text-xs font-semibold tracking-wider uppercase transition-all duration-300 hover:bg-white/10 hover:text-gold-400 ${
                                    pathname === child.href ? "text-gold-400 bg-white/5" : "text-white/70"
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
                className="ml-4 btn-gold text-xs !py-2.5 !px-5 tracking-wider uppercase flex items-center gap-1.5 font-bold shadow-[0_4px_15px_rgba(201,168,76,0.3)] hover:shadow-[0_4px_25px_rgba(201,168,76,0.5)] transition-all duration-300 group"
              >
                Let&apos;s Connect
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="lg:hidden p-2.5 rounded-xl border border-white/10 bg-white/5 text-white hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 relative flex flex-col justify-between">
                <span
                  className={`h-0.5 w-6 bg-white rounded-full transition-all duration-300 ${
                    isMobileOpen ? "rotate-45 translate-y-[9px]" : ""
                  }`}
                />
                <span
                  className={`h-0.5 w-6 bg-white rounded-full transition-all duration-300 ${
                    isMobileOpen ? "opacity-0 scale-0" : ""
                  }`}
                />
                <span
                  className={`h-0.5 w-6 bg-white rounded-full transition-all duration-300 ${
                    isMobileOpen ? "-rotate-45 -translate-y-[9px]" : ""
                  }`}
                />
              </div>
            </button>
          </motion.nav>
        </div>
      </header>

      {/* Mobile nav modal */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-navy-950/95 backdrop-blur-2xl lg:hidden flex flex-col justify-center p-8"
          >
            <div className="flex flex-col gap-6 max-w-md mx-auto w-full">
              {navLinks.map((link, idx) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  key={link.href}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileOpen(false)}
                    className={`block text-2xl font-black tracking-widest uppercase transition-colors ${
                      isActive(link.href) ? "text-gold-400" : "text-white hover:text-gold-400"
                    }`}
                  >
                    {link.label}
                  </Link>

                  {link.children && (
                    <div className="mt-3 ml-4 flex flex-col gap-2.5 border-l border-white/10 pl-4">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setIsMobileOpen(false)}
                          className={`block text-sm font-bold tracking-wider uppercase transition-colors ${
                            pathname === child.href ? "text-gold-400" : "text-white/60 hover:text-white"
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
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
                className="pt-6"
              >
                <Link
                  href="/contact"
                  onClick={() => setIsMobileOpen(false)}
                  className="block text-center btn-gold text-sm !py-4 font-black tracking-widest uppercase shadow-[0_4px_15px_rgba(201,168,76,0.3)]"
                >
                  Get In Touch
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
