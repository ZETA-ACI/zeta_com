"use client";

import { useRef, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";

export function HeroSection() {
  const t = useTranslations("home.hero");
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.9;
    }
  }, []);

  return (
    <section className="relative h-[calc(100vh-4rem)] flex items-center overflow-hidden bg-[#0a0a1a]">
      {/* Video Background */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Soft overlay — left side darker for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/25 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 pointer-events-none" />

      {/* Text content — anchored to the left to avoid video center */}
      <Container className="relative z-10 py-20">
        <div className="max-w-xl">
          <FadeIn>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              <span className="text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
                {t("title")}
              </span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.15}>
            <p className="mt-6 text-lg sm:text-xl text-white/85 leading-relaxed max-w-lg drop-shadow-[0_1px_4px_rgba(0,0,0,0.4)]">
              {t("subtitle")}
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="/case-library" size="lg">
                {t("cta1")}
              </Button>
              <Button href="/about/contact" variant="secondary" size="lg">
                {t("cta2")}
              </Button>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
