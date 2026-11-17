import { profile } from "@/data/profile";
import { skillGroups } from "@/data/skills";
import Chip from "./Chip";
import Reveal from "./Reveal";
import Section from "./Section";

export default function About() {
  return (
    <Section id="about" eyebrow="01 / About" title={`Hi, I’m ${profile.shortName}.`}>
      <div className="grid gap-12 md:grid-cols-2">
        <Reveal>
          <p className="text-lg leading-relaxed text-muted">{profile.about}</p>
        </Reveal>
        <div className="space-y-6">
          {skillGroups.map((group, i) => (
            <Reveal key={group.label} delay={i * 0.08}>
              <p className="font-mono text-sm font-semibold tracking-wide text-accent">
                {group.label}
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Chip key={item}>{item}</Chip>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
