import { profile } from "@/data/profile";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <>
      <section id="contact" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <Reveal>
          <p className="font-mono text-sm font-semibold tracking-wide text-accent">
            05 / Contact
          </p>
          <h2 className="mt-3 font-display text-5xl font-bold leading-[1.02] tracking-tight md:text-7xl">
            Let’s work together<span className="text-accent">.</span>
          </h2>
          <p className="mt-6 max-w-xl text-lg text-muted">
            Open to Frontend and Full-Stack roles. The easiest way to reach me is
            by email.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="rounded-full bg-accent px-6 py-3 font-mono text-sm font-semibold text-bg transition-opacity hover:opacity-90"
            >
              {profile.email}
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-line px-6 py-3 font-mono text-sm font-semibold transition-colors hover:border-accent hover:text-accent"
            >
              GitHub
            </a>
            {profile.linkedin ? (
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-line px-6 py-3 font-mono text-sm font-semibold transition-colors hover:border-accent hover:text-accent"
              >
                LinkedIn
              </a>
            ) : null}
            <a
              href={profile.cv}
              download
              className="rounded-full border border-line px-6 py-3 font-mono text-sm font-semibold transition-colors hover:border-accent hover:text-accent"
            >
              Download CV
            </a>
          </div>
        </Reveal>
      </section>
      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-6 py-8 font-mono text-sm text-faint">
          <p>
            {profile.name} · {profile.location}
          </p>
          <p>© {new Date().getFullYear()}</p>
        </div>
      </footer>
    </>
  );
}
