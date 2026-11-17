import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Chip from "@/components/Chip";
import Navbar from "@/components/Navbar";
import ScreenshotFrame from "@/components/ScreenshotFrame";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Project not found" };
  return {
    title: `${project.title} — ${profile.shortName}`,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const images = project.images ?? [];

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-5xl px-6 py-16 md:py-24">
        <Link
          href="/#projects"
          className="font-mono text-sm font-semibold text-accent hover:underline"
        >
          ← All projects
        </Link>

        <p className="mt-8 font-mono text-sm font-semibold uppercase tracking-wide text-accent">
          {project.kind === "company"
            ? `Company · ${project.org}`
            : "Personal project"}
        </p>
        <h1 className="mt-3 break-words font-display text-4xl font-bold leading-tight md:text-6xl">
          {project.title}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted">{project.summary}</p>

        <div className="mt-10 grid gap-6">
          <ScreenshotFrame
            src={images[0]}
            alt={`${project.title} screenshot`}
            className="aspect-video w-full"
          />
          {images.slice(1).map((src, i) => (
            <ScreenshotFrame
              key={src}
              src={src}
              alt={`${project.title} screenshot ${i + 2}`}
              className="aspect-video w-full"
            />
          ))}
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-[1fr_2fr]">
          <aside className="space-y-6">
            {project.role ? (
              <div>
                <p className="font-mono text-sm font-semibold text-accent">Role</p>
                <p className="mt-1">{project.role}</p>
              </div>
            ) : null}
            <div>
              <p className="font-mono text-sm font-semibold text-accent">Stack</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <Chip key={item}>{item}</Chip>
                ))}
              </div>
            </div>
            {project.url || project.repo ? (
              <div>
                <p className="font-mono text-sm font-semibold text-accent">Links</p>
                <div className="mt-2 flex flex-col gap-2">
                  {project.url ? (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="break-all underline decoration-line underline-offset-4 hover:text-accent"
                    >
                      Live site ↗
                    </a>
                  ) : null}
                  {project.repo ? (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="break-all underline decoration-line underline-offset-4 hover:text-accent"
                    >
                      Source code ↗
                    </a>
                  ) : null}
                </div>
              </div>
            ) : null}
          </aside>

          <div className="space-y-8">
            {project.built && project.built.length > 0 ? (
              <section>
                <h2 className="font-mono text-sm font-semibold text-accent">
                  What I built
                </h2>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-muted">
                  {project.built.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
            ) : null}
            {project.challenge ? (
              <section>
                <h2 className="font-mono text-sm font-semibold text-accent">
                  Challenge
                </h2>
                <p className="mt-2 text-muted">{project.challenge}</p>
              </section>
            ) : null}
            {project.result ? (
              <section>
                <h2 className="font-mono text-sm font-semibold text-accent">
                  Result
                </h2>
                <p className="mt-2 text-muted">{project.result}</p>
              </section>
            ) : null}
            {project.kind === "company" ? (
              <p className="text-sm text-faint">
                Company product. Internal details are intentionally left out.
              </p>
            ) : null}
          </div>
        </div>
      </main>
    </>
  );
}
