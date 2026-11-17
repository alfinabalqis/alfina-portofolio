import { certificates, education, thesis } from "@/data/education";
import Reveal from "./Reveal";
import Section from "./Section";

export default function Education() {
  return (
    <Section id="education" eyebrow="04 / Background" title="Education & certificates">
      <div className="grid gap-12 md:grid-cols-2">
        <div className="space-y-8">
          {education.map((item, i) => (
            <Reveal key={item.school} delay={i * 0.08}>
              <p className="font-mono text-sm font-semibold text-accent">
                {item.period}
              </p>
              <h3 className="mt-1 font-display text-2xl font-semibold">
                {item.school}
              </h3>
              <p className="mt-1 text-muted">{item.detail}</p>
            </Reveal>
          ))}
        </div>

        <div className="space-y-6">
          {certificates.map((cert, i) => (
            <Reveal key={cert.title} delay={i * 0.08}>
              <p className="font-semibold">{cert.title}</p>
              <p className="text-muted">{cert.issuer}</p>
            </Reveal>
          ))}
          <Reveal>
            <div className="rounded-2xl border border-line bg-panel p-6">
              <p className="font-mono text-sm font-semibold tracking-wide text-accent">
                Final thesis
              </p>
              <p className="mt-2 text-muted">{thesis}</p>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
