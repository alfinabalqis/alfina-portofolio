import { otherWork } from "@/data/projects";
import Reveal from "./Reveal";

export default function OtherWork() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-20 md:pb-28">
      <Reveal>
        <h3 className="font-display text-3xl font-bold">More products I’ve worked on</h3>
      </Reveal>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {otherWork.map((item, i) => (
          <Reveal key={item.name} delay={(i % 3) * 0.08}>
            <div className="h-full rounded-2xl border border-line bg-panel p-5">
              <p className="break-words font-mono text-lg font-semibold">{item.name}</p>
              <p className="mt-1 text-sm text-muted">{item.note}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <p className="mt-6 text-sm text-muted">
        Company products are listed by name only; internal details are left out.
      </p>
    </section>
  );
}
