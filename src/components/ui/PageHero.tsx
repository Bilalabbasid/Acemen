import { ArrowRight } from "lucide-react";
import Button from "./Button";
import Container from "./Container";
import MotionSection from "./MotionSection";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}

export default function PageHero({
  eyebrow,
  title,
  description,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden gradient-hero pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="absolute inset-0 dot-pattern opacity-30" aria-hidden="true" />
      <div className="absolute left-1/2 top-0 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-gold-300/50 to-transparent" aria-hidden="true" />
      <Container className="relative z-10">
        <MotionSection className="mx-auto max-w-4xl text-center">
          <span className="section-label justify-center">{eyebrow}</span>
          <h1 className="display-heading mt-4 text-5xl text-white sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            {description}
          </p>
          {(primaryHref || secondaryHref) && (
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              {primaryHref && primaryLabel && (
                <Button href={primaryHref} variant="gold">
                  {primaryLabel}
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Button>
              )}
              {secondaryHref && secondaryLabel && (
                <Button href={secondaryHref} variant="outline">
                  {secondaryLabel}
                </Button>
              )}
            </div>
          )}
        </MotionSection>
      </Container>
    </section>
  );
}
