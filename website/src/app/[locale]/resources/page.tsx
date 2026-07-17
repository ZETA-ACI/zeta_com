"use client";

import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { ArrowRight, Calendar } from "lucide-react";

export default function ResourcesPage() {
  const t = useTranslations("resources");
  const latestNews = (t.raw("news.items") as Array<{
    date: string;
    title: string;
    summary: string;
  }>)
    .toSorted((a, b) => b.date.localeCompare(a.date))
    .slice(0, 3);

  return (
    <>
      {/* Hero */}
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

      {/* Articles */}
      <section className="py-24">
        <Container>
          <FadeIn>
            <h2 className="text-3xl font-bold text-text-primary mb-12">
              {t("articles.title")}
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6">
            {[0, 1, 2].map((i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <GlassCard className="h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="inline-block text-xs font-medium text-primary-500 bg-primary-50 rounded-full px-3 py-1">
                      {t(`articles.items.${i}.tag`)}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-text-tertiary">
                      <Calendar size={12} />
                      {t(`articles.items.${i}.date`)}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-text-primary mb-3 leading-snug">
                    {t(`articles.items.${i}.title`)}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed flex-1">
                    {t(`articles.items.${i}.summary`)}
                  </p>
                  <div className="mt-4 pt-4 border-t border-black/5">
                    <button className="inline-flex items-center gap-1.5 text-sm font-medium text-primary-500 hover:text-primary-600 transition-colors">
                      阅读全文 <ArrowRight size={14} />
                    </button>
                  </div>
                </GlassCard>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* News */}
      <section className="py-24 gradient-soft">
        <Container>
          <FadeIn>
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-3xl font-bold text-text-primary">
                {t("news.title")}
              </h2>
              <Button href="/resources/news" variant="ghost" size="sm">
                查看全部 <ArrowRight size={14} className="ml-1" />
              </Button>
            </div>
          </FadeIn>

          <div className="space-y-4">
            {latestNews.map((item, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <GlassCard hover={false} className="flex flex-col sm:flex-row sm:items-center gap-4">
                  <span className="text-sm text-text-tertiary font-mono whitespace-nowrap">
                    {item.date}
                  </span>
                  <div className="flex-1">
                    <h3 className="font-semibold text-text-primary mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-text-secondary">
                      {item.summary}
                    </p>
                  </div>
                </GlassCard>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ Preview */}
      <section className="py-24">
        <Container>
          <FadeIn>
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-3xl font-bold text-text-primary">
                {t("faq.title")}
              </h2>
              <Button href="/resources/faq" variant="ghost" size="sm">
                查看全部 <ArrowRight size={14} className="ml-1" />
              </Button>
            </div>
          </FadeIn>

          <div className="max-w-3xl space-y-4">
            {[0, 1, 2].map((i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <GlassCard hover={false}>
                  <h3 className="font-semibold text-text-primary mb-2">
                    {t(`faq.items.${i}.q`)}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {t(`faq.items.${i}.a`)}
                  </p>
                </GlassCard>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
