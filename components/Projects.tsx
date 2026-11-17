import Link from "next/link";
import { projects } from "@/data/projects";
import Chip from "./Chip";
import Reveal from "./Reveal";
import ScreenshotFrame from "./ScreenshotFrame";
import Section from "./Section";

export default function Projects() {
  return (
    <Section id="projects" eyebrow="03 / Selected work" title="Projects">
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.slug} delay={(i % 2) * 0.1}>
            <Link
              href={`/projects/${project.slug}`}
              className="group flex h-full flex-col gap-5 rounded-3xl border border-line bg-panel p-5 transition-colors hover:border-accent"
            >
              <ScreenshotFrame
                src={project.images?.[0]}
                alt={`${project.title} screenshot`}
              />
              <div className="flex flex-1 flex-col gap-3 px-1">
                <p className="font-mono text-xs font-semibold uppercase tracking-wide text-accent">
                  {project.kind === "company"
                    ? `Company · ${project.org}`
                    : "Personal project"}
                </p>
                <h3 className="break-words font-display text-2xl font-semibold">
                  {project.title}
                </h3>
                <p className="text-muted">{project.summary}</p>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <Chip key={item}>{item}</Chip>
                  ))}
                </div>
                <p className="mt-auto pt-2 font-mono text-sm font-semibold text-accent">
                  View details{" "}
                  <span
                    aria-hidden="true"
                    className="inline-block transition-transform group-hover:translate-x-1"
                  >
                    →
                  </span>
                </p>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
