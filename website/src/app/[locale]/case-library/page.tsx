"use client";

import { useLocale, useTranslations } from "next-intl";
import { ExternalLink, QrCode } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { GlassCard } from "@/components/ui/GlassCard";
import { FadeIn } from "@/components/ui/FadeIn";
import { caseStudies } from "@/data/cases";

export default function CaseLibraryPage() {
  const t = useTranslations("caseLibrary");
  const locale = useLocale() as "zh" | "en";

  return (
    <>
      <section className="py-24 gradient-soft">
        <Container>
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center">
              <SectionLabel>{t("hero.label")}</SectionLabel>
              <h1 className="mt-4 text-4xl sm:text-5xl font-bold">
                <span className="gradient-text">{t("hero.title")}</span>
              </h1>
              <p className="mt-6 text-lg text-text-secondary leading-relaxed">
                {t("hero.subtitle")}
              </p>
            </div>
          </FadeIn>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <FadeIn>
            <h2 className="text-3xl font-bold text-text-primary mb-12">
              {t("featured.title")}
            </h2>
          </FadeIn>

          <div className="space-y-8">
            {caseStudies.map((caseStudy, i) => {
              const content = caseStudy.content[locale];
              return (
                <FadeIn key={caseStudy.id} delay={i * 0.1}>
                  <GlassCard hover={false} className="overflow-hidden">
                    <div className="flex flex-col lg:flex-row gap-8">
                      <div className="lg:w-64 flex-shrink-0">
                        <div className="flex flex-wrap gap-2 mb-4">
                          {content.capabilities.map((capability) => (
                            <span
                              key={capability}
                              className="rounded-full bg-primary-50 px-2.5 py-1 text-[11px] font-medium leading-none text-primary-500"
                            >
                              {capability}
                            </span>
                          ))}
                        </div>
                        <h3 className="text-xl font-semibold text-text-primary mb-2">
                          {content.title}
                        </h3>
                        <p className="text-sm text-text-tertiary">{content.industry}</p>
                        <p className="text-sm text-text-tertiary mt-1">{content.scene}</p>
                      </div>
                      <div className="flex-1 space-y-4">
                        <CaseDetail label={t("labels.background")} englishLabel={t("labels.backgroundEnglish")} content={content.background} />
                        <CaseDetail label={t("labels.problem")} englishLabel={t("labels.problemEnglish")} content={content.problem} />
                        <CaseDetail label={t("labels.solution")} englishLabel={t("labels.solutionEnglish")} content={content.solution} />
                        <div className="rounded-xl bg-primary-50/60 p-4">
                          <h4 className="text-xs font-medium text-primary-500 uppercase tracking-wider mb-1">
                            {t("labels.result")}
                            {t("labels.resultEnglish") && (
                              <span className="ml-1.5 text-[10px] tracking-[0.12em] text-primary-400">
                                {t("labels.resultEnglish")}
                              </span>
                            )}
                          </h4>
                          <p className="text-sm text-primary-600 font-medium">{content.result}</p>
                        </div>
                        {caseStudy.href ? (
                          <a
                            href={caseStudy.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-full gradient-primary text-white px-5 py-2.5 text-sm font-medium"
                          >
                            {t("featured.visitProject")} <ExternalLink size={14} />
                          </a>
                        ) : (
                          <div className="flex items-center gap-2 text-sm text-text-tertiary">
                            <QrCode size={20} className="text-primary-400" />
                            {t("featured.miniProgramPending")}
                          </div>
                        )}
                      </div>
                    </div>
                  </GlassCard>
                </FadeIn>
              );
            })}
          </div>
        </Container>
      </section>

    </>
  );
}

function CaseDetail({
  label,
  englishLabel,
  content,
}: {
  label: string;
  englishLabel: string;
  content: string;
}) {
  return (
    <div>
      <h4 className="text-xs font-medium text-text-tertiary uppercase tracking-wider mb-1">
        {label}
        {englishLabel && (
          <span className="ml-1.5 text-[10px] tracking-[0.12em] text-primary-400">
            {englishLabel}
          </span>
        )}
      </h4>
      <p className="text-sm text-text-secondary leading-relaxed">{content}</p>
    </div>
  );
}
