import { experience } from "@/data/experience";
import { profile } from "@/data/profile";
import Reveal from "./Reveal";
import Section from "./Section";

export default function Experience() {
  return (
    <Section id="experience" eyebrow="02 / Experience" title="Where I’ve worked">
      <ol className="divide-y divide-line border-y border-line">
        {experience.map((job, i) => (
          <li key={`${job.company}-${i}`}>
            <Reveal
              delay={i * 0.08}
              className="grid gap-1 py-6 md:grid-cols-[220px_1fr_1fr] md:gap-8"
            >
              <p className="font-mono text-sm font-semibold text-accent">
                {job.period}
              </p>
              <p className="text-lg font-semibold">{job.company}</p>
              <p className="text-muted">{job.role}</p>
            </Reveal>
          </li>
        ))}
      </ol>

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {profile.stats.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 0.08}>
            <div className="h-full rounded-2xl border border-line bg-panel p-6">
              <p className="font-display text-5xl font-bold text-accent">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-muted">{stat.label}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
