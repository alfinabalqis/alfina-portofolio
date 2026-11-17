"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { profile } from "@/data/profile";
import Chip from "./Chip";

const mainStack = ["React.js", "Next.js", "Vue.js", "Nuxt.js", "Laravel"];

export default function Hero() {
  const reduce = useReducedMotion();

  const rise = (i: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 32 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay: i * 0.12, ease: "easeOut" as const },
        };

  return (
    <section
      id="top"
      className="mx-auto grid max-w-6xl items-center gap-12 px-6 pb-16 pt-16 md:grid-cols-[1.4fr_1fr] md:pb-24 md:pt-24"
    >
      <div>
        <motion.p
          {...rise(0)}
          className="font-mono text-sm font-semibold tracking-wide text-accent"
        >
          {"// "}
          {profile.role} · {profile.roleAlt}
        </motion.p>
        <motion.h1
          {...rise(1)}
          className="mt-4 font-display text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl md:text-7xl"
        >
          {profile.name.split(" ").slice(0, 2).join(" ")}
          <span className="text-accent">.</span>
        </motion.h1>
        <motion.p {...rise(2)} className="mt-6 max-w-xl text-lg text-muted">
          {profile.summary}
        </motion.p>
        <motion.div {...rise(3)} className="mt-6 flex flex-wrap gap-2">
          {mainStack.map((item) => (
            <Chip key={item}>{item}</Chip>
          ))}
        </motion.div>
        <motion.div {...rise(4)} className="mt-10 flex flex-wrap gap-4">
          <a
            href={profile.cv}
            download
            className="rounded-full bg-accent px-6 py-3 font-mono text-sm font-semibold text-bg transition-opacity hover:opacity-90"
          >
            Download CV
          </a>
          <a
            href="#projects"
            className="rounded-full border border-line px-6 py-3 font-mono text-sm font-semibold transition-colors hover:border-accent hover:text-accent"
          >
            View projects
          </a>
        </motion.div>
      </div>

      <motion.div {...rise(2)} className="relative mx-auto w-64 md:w-full md:max-w-sm">
        <div
          aria-hidden="true"
          className="absolute inset-0 -translate-y-4 translate-x-4 rounded-3xl border-2 border-accent"
        />
        <div className="relative z-10 aspect-[4/5] overflow-hidden rounded-3xl border border-line bg-panel">
          <Image
            src={profile.photo}
            alt={`Photo of ${profile.name}`}
            fill
            priority
            sizes="(min-width: 768px) 384px, 256px"
            className="object-cover"
          />
        </div>
      </motion.div>
    </section>
  );
}
