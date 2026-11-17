import type { ReactNode } from "react";
import Reveal from "./Reveal";

type SectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
};

export default function Section({ id, eyebrow, title, children }: SectionProps) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <Reveal>
        <p className="font-mono text-sm font-semibold tracking-wide text-accent">
          {eyebrow}
        </p>
        <h2 className="mt-3 font-display text-4xl font-bold leading-tight md:text-5xl">
          {title}
        </h2>
      </Reveal>
      <div className="mt-10">{children}</div>
    </section>
  );
}
