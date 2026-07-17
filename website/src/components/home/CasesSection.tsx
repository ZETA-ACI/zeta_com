"use client";

import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { ExternalLink } from "lucide-react";
import { caseStudies } from "@/data/cases";
import { useLocale } from "next-intl";

export function CasesSection() {
  const t = useTranslations("home.cases");
  const locale = useLocale() as "zh" | "en";

  return (
    <section className="py-24">
      <Container>
        <FadeIn>
          <div className="text-center mb-14">
            <SectionLabel>{t("label")}</SectionLabel>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-text-primary">
              {t("title")}
            </h2>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6">
          {caseStudies.map((caseStudy, i) => {
            const content = caseStudy.content[locale];
            return (
            <FadeIn key={caseStudy.id} delay={i * 0.1}>
              <GlassCard className="h-full flex flex-col">
                <div className="flex flex-wrap gap-2 self-start mb-4">
                  {content.capabilities.map((capability) => (
                    <span
                      key={capability}
                      className="rounded-full bg-primary-50 px-2.5 py-1 text-[11px] font-medium leading-none text-primary-500"
                    >
                      {capability}
                    </span>
                  ))}
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">
                  {content.title}
                </h3>
                <p className="text-sm text-text-tertiary mb-3">
                  {content.scene}
                </p>
                <p className="text-sm text-text-secondary flex-1 leading-relaxed">
                  {content.summary}
                </p>
                <div className="mt-4 pt-4 border-t border-black/5">
                  {caseStudy.href ? (
                    <a
                      href={caseStudy.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-primary-500 hover:text-primary-600 transition-colors"
                    >
                      {t("viewDetail")} <ExternalLink size={14} />
                    </a>
                  ) : (
                    <span className="text-sm text-text-tertiary">
                      {t("miniProgramPending")}
                    </span>
                  )}
                </div>
              </GlassCard>
            </FadeIn>
            );
          })}
        </div>

        <FadeIn delay={0.3}>
          <div className="text-center mt-10">
            <Button href="/case-library" variant="secondary">
              {t("viewMore")}
            </Button>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
