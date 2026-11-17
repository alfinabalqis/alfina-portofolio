import { certificates, documents, education, thesis } from "@/data/education";
import DocumentCard from "./DocumentCard";
import Reveal from "./Reveal";
import Section from "./Section";

export default function Education() {
  return (
    <Section id="education" eyebrow="04 / Background" title="Education & certificates">
      <div className="grid gap-12 md:grid-cols-2">
        <div className="space-y-8">
          {education.map((item, i) => (
            <Reveal key={item.school} delay={i * 0.08} from="left">
              <p className="font-mono text-sm font-semibold text-accent">{item.period}</p>
              <h3 className="mt-1 font-display text-2xl font-semibold">{item.school}</h3>
              <p className="mt-1 text-muted">{item.detail}</p>
            </Reveal>
          ))}
        </div>
        <Reveal from="right">
          <div className="rounded-2xl border border-line bg-panel p-6">
            <p className="font-mono text-sm font-semibold tracking-wide text-accent">
              Final thesis
            </p>
            <p className="mt-2 text-muted">{thesis}</p>
          </div>
        </Reveal>
      </div>

      <Reveal className="mt-16">
        <h3 className="font-display text-2xl font-semibold">Certificates</h3>
      </Reveal>
      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {certificates.map((cert, i) => (
          <Reveal key={cert.title} delay={i * 0.08}>
            <DocumentCard {...cert} />
          </Reveal>
        ))}
      </div>

      {/* <Reveal className="mt-16">
        <h3 className="font-display text-2xl font-semibold">Diploma & transcripts</h3>
        <p className="mt-2 text-sm text-muted">Previews only. Originals available on request.</p>
      </Reveal>
      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {documents.map((doc, i) => (
          <Reveal key={doc.title} delay={i * 0.08}>
            <DocumentCard {...doc} />
          </Reveal>
        ))}
      </div> */}
    </Section>
  );
}