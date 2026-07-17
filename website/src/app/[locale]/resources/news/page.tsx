"use client";

import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { GlassCard } from "@/components/ui/GlassCard";
import { FadeIn } from "@/components/ui/FadeIn";

export default function NewsPage() {
  const t = useTranslations("resources");
  const newsItems = (t.raw("news.items") as Array<{
    date: string;
    title: string;
    summary: string;
  }>).toSorted((a, b) => b.date.localeCompare(a.date));

  return (
    <>
      <section className="py-24 gradient-soft">
        <Container>
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center">
              <SectionLabel>{t("hero.label")}</SectionLabel>
              <h1 className="mt-4 text-4xl sm:text-5xl font-bold">
                <span className="gradient-text">{t("news.title")}</span>
              </h1>
            </div>
          </FadeIn>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <div className="max-w-3xl mx-auto space-y-6">
            {newsItems.map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <GlassCard hover={false}>
                  <span className="text-sm text-text-tertiary font-mono">
                    {item.date}
                  </span>
                  <h2 className="text-xl font-semibold text-text-primary mt-2 mb-3">
                    {item.title}
                  </h2>
                  <p className="text-text-secondary leading-relaxed">
                    {item.summary}
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
