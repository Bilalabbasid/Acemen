import { ArrowUpRight, Check, Lock } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import VentureIcon from "./VentureIcon";
import { projects, projectDisciplines } from "@/data/projects";
import type { Project } from "@/data/projects";

interface ProjectShowcaseProps {
  label?: string;
  title?: string;
  subtitle?: string;
}

/**
 * Visual half of a case-study card. Uses the screenshot when one exists,
 * otherwise renders a designed brand panel — honest for confidential work,
 * and better than dressing a stock photo up as a product shot.
 */
function ProjectVisual({ project }: { project: Project }) {
  if (project.image) {
    return (
      <>
        <img
          src={project.image}
          alt={`${project.name} — ${project.tagline}`}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
        />
        <div
          className="absolute inset-0 pointer-events-none mix-blend-multiply opacity-55 transition-opacity duration-500 group-hover:opacity-30"
          style={{
            background: `linear-gradient(135deg, ${project.accentColor}55 0%, rgba(10,22,40,0.35) 100%)`,
          }}
          aria-hidden="true"
        />
      </>
    );
  }

  return (
    <div
      className="absolute inset-0 flex items-center justify-center overflow-hidden"
      style={{
        background: `linear-gradient(135deg, #0a1628 0%, #152240 55%, ${project.accentColor}33 100%)`,
      }}
      aria-hidden="true"
    >
      <div className="absolute inset-0 dot-pattern opacity-40" />

      {/* Concentric rings — a vault/perimeter motif */}
      <div className="absolute inset-0 flex items-center justify-center">
        {[0, 1, 2].map((ring) => (
          <div
            key={ring}
            className="absolute rounded-full border transition-transform duration-[1200ms] ease-out group-hover:scale-105"
            style={{
              width: `${180 + ring * 110}px`,
              height: `${180 + ring * 110}px`,
              borderColor: `${project.accentColor}${["4d", "33", "1f"][ring]}`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center">
        <div
          className="w-24 h-24 rounded-3xl flex items-center justify-center border backdrop-blur-sm mb-5 transition-transform duration-500 group-hover:scale-105"
          style={{
            backgroundColor: `${project.accentColor}1f`,
            borderColor: `${project.accentColor}4d`,
            color: project.accentColor,
            boxShadow: `0 0 40px ${project.accentColor}26`,
          }}
        >
          <span className="font-display text-5xl font-semibold leading-none">
            {project.monogram ?? project.name.charAt(0)}
          </span>
        </div>
        <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/45">
          {project.name}
        </span>
      </div>
    </div>
  );
}

export default function ProjectShowcase({
  label = "Selected Work",
  title = "Engagements We Have Shipped",
  subtitle = "A selection of production platforms architected, built, and launched by our engineering cohort — from national delivery infrastructure to privileged access security.",
}: ProjectShowcaseProps) {
  return (
    <section className="py-20 sm:py-28 bg-white relative overflow-hidden">
      <div className="container-page relative z-10">
        <ScrollReveal>
          <div className="text-center mb-14 sm:mb-16">
            <span className="section-label">{label}</span>
            <h2 className="section-heading mb-4">{title}</h2>
            <p className="section-subheading mx-auto">{subtitle}</p>
          </div>
        </ScrollReveal>

        <div className="flex flex-col gap-6 sm:gap-8 lg:gap-10">
          {projects.map((project, i) => {
            const flipped = i % 2 === 1;

            return (
              <ScrollReveal key={project.slug} delay={Math.min(i, 3) * 70}>
                <article className="card-premium group grid grid-cols-1 lg:grid-cols-2 items-stretch overflow-hidden">
                  {/* ── Visual ── */}
                  <div
                    className={`relative min-h-[240px] sm:min-h-[320px] lg:min-h-[420px] overflow-hidden bg-navy-800 ${
                      flipped ? "lg:order-2" : ""
                    }`}
                  >
                    <ProjectVisual project={project} />

                    {/* Sector chip */}
                    <div className="absolute top-4 left-4 sm:top-5 sm:left-5 z-10 max-w-[calc(100%-2rem)]">
                      <span className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-full glass-dark text-[9px] sm:text-[10px] font-bold tracking-[0.16em] uppercase text-white/90">
                        <VentureIcon name={project.icon} className="w-3.5 h-3.5 shrink-0" />
                        <span className="truncate">{project.sector}</span>
                      </span>
                    </div>
                  </div>

                  {/* ── Detail ── */}
                  <div
                    className={`flex flex-col justify-center p-7 sm:p-10 lg:p-12 ${
                      flipped ? "lg:order-1" : ""
                    }`}
                  >
                    <p
                      className="text-[10px] sm:text-[11px] font-bold tracking-[0.24em] uppercase mb-3"
                      style={{ color: project.accentColor }}
                    >
                      {project.tagline}
                    </p>

                    <h3 className="font-display text-[1.75rem] sm:text-4xl font-semibold text-navy-800 mb-4 leading-[1.1]">
                      {project.name}
                    </h3>

                    <p className="text-gray-500 leading-relaxed mb-7 text-[15px] sm:text-base">
                      {project.summary}
                    </p>

                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5 mb-7">
                      {project.capabilities.map((capability) => (
                        <li
                          key={capability}
                          className="flex items-start gap-2.5 text-sm text-gray-600"
                        >
                          <Check
                            className="w-3.5 h-3.5 mt-1 shrink-0"
                            style={{ color: project.accentColor }}
                            aria-hidden="true"
                          />
                          <span>{capability}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap items-center gap-2 mb-7">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 rounded-lg text-[11px] font-semibold tracking-wide bg-navy-50 text-navy-600 border border-navy-100"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {project.href ? (
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-black tracking-[0.18em] uppercase self-start transition-opacity duration-300 hover:opacity-70"
                        style={{ color: project.accentColor }}
                      >
                        Visit {project.hrefLabel}
                        <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-black tracking-[0.18em] uppercase self-start text-gray-400">
                        <Lock className="w-3.5 h-3.5" aria-hidden="true" />
                        {project.status ?? "Private Engagement"}
                      </span>
                    )}
                  </div>
                </article>
              </ScrollReveal>
            );
          })}
        </div>

        {/* ── Disciplines strip ── */}
        <ScrollReveal delay={100}>
          <div className="mt-14 sm:mt-16 pt-10 border-t border-gray-100">
            <p className="text-center text-[10px] sm:text-[11px] font-bold tracking-[0.26em] uppercase text-gray-400 mb-6">
              Disciplines Across These Engagements
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
              {projectDisciplines.map((discipline) => (
                <span
                  key={discipline}
                  className="px-3.5 sm:px-4 py-2 rounded-full text-[11px] sm:text-xs font-semibold text-navy-600 bg-navy-50 border border-navy-100"
                >
                  {discipline}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
