"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe } from "lucide-react";
import { Button } from "@/components/ui/Button";

const navItems = [
  { key: "home", href: "/" },
  { key: "capabilities", href: "/capabilities" },
  { key: "caseLibrary", href: "/case-library" },
  { key: "resources", href: "/resources" },
  { key: "about", href: "/about" },
] as const;

export function Navbar() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);

  const switchLocale = () => {
    const next = locale === "zh" ? "en" : "zh";
    router.replace(pathname, { locale: next });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-strong">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <img src="/logo.svg" alt="Zeta ACI" className="h-8 w-8 rounded-lg" />
            <span className="font-semibold text-lg text-text-primary">
              {locale === "zh" ? "则知科技" : "Zeta ACI"}
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.key}
                  href={item.href}
                  prefetch={false}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? "text-primary-500 bg-primary-50"
                      : "text-text-secondary hover:text-text-primary hover:bg-white/60"
                  }`}
                >
                  {t(item.key)}
                </Link>
              );
            })}
          </div>

          {/* Right Actions */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={switchLocale}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm text-text-secondary hover:text-text-primary hover:bg-white/60 transition-colors"
            >
              <Globe size={16} />
              {locale === "zh" ? "EN" : "中文"}
            </button>
            <Button href="/case-library" variant="secondary" size="sm">
              {t("tryDemo")}
            </Button>
            <Button href="/about/contact" size="sm">
              {t("contact")}
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 text-text-secondary"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-strong border-t border-white/30 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.key}
                  href={item.href}
                  prefetch={false}
                  onClick={() => setMobileOpen(false)}
                  className="block px-3 py-2.5 rounded-lg text-sm font-medium text-text-secondary hover:text-text-primary hover:bg-white/60 transition-colors"
                >
                  {t(item.key)}
                </Link>
              ))}
              <div className="pt-3 flex flex-col gap-2">
                <button
                  onClick={switchLocale}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm text-text-secondary"
                >
                  <Globe size={16} />
                  {locale === "zh" ? "EN" : "中文"}
                </button>
                <Button href="/case-library" variant="secondary" size="sm">
                  {t("tryDemo")}
                </Button>
                <Button href="/about/contact" size="sm">
                  {t("contact")}
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
