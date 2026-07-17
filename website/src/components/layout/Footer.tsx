"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/ui/Container";

export function Footer() {
  const t = useTranslations("footer");

  const columns = [
    {
      title: t("columns.capabilities"),
      links: [
        { label: t("links.sixLayers"), href: "/capabilities" },
        { label: t("links.orchestration"), href: "/capabilities" },
        { label: t("links.governance"), href: "/capabilities" },
      ],
    },
    {
      title: t("columns.cases"),
      links: [
        { label: t("links.featuredCases"), href: "/case-library" },
      ],
    },
    {
      title: t("columns.resources"),
      links: [
        { label: t("links.articles"), href: "/resources" },
        { label: t("links.news"), href: "/resources/news" },
        { label: t("links.faq"), href: "/resources/faq" },
      ],
    },
    {
      title: t("columns.about"),
      links: [
        { label: t("links.company"), href: "/about" },
        { label: t("links.approach"), href: "/about" },
        { label: t("links.contact"), href: "/about/contact" },
        { label: t("links.careers"), href: "/about/careers" },
      ],
    },
  ];

  return (
    <footer className="border-t border-white/20 bg-gradient-to-b from-white to-primary-50/30 mt-24">
      <Container className="py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img src="/logo.svg" alt="Zeta ACI" className="h-8 w-8 rounded-lg" />
              <span className="font-semibold text-lg text-text-primary">
                Zeta ACI
              </span>
            </div>
            <p className="text-sm text-text-tertiary leading-relaxed">
              {t("description")}
            </p>
          </div>

          {/* Link Columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="font-medium text-text-primary mb-4 text-sm">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-text-tertiary hover:text-primary-500 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-black/5 text-center text-sm text-text-tertiary">
          <p>{t("copyright")}</p>
          <a
            href="https://beian.miit.gov.cn/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block hover:text-primary-500 transition-colors"
          >
            {t("icp")}
          </a>
        </div>
      </Container>
    </footer>
  );
}
