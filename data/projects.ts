export type Project = {
  slug: string;
  title: string;
  kind: "company" | "personal";
  org?: string;
  summary: string;
  role?: string;
  stack: string[];
  url?: string;
  repo?: string;
  // Opsional. Isi supaya muncul di halaman detail proyek.
  built?: string[]; // 2-3 fitur yang kamu kerjakan
  challenge?: string; // satu masalah teknis dan cara menyelesaikannya
  result?: string; // hasil, sebaiknya pakai angka
  // Opsional. Taruh gambar di public/projects/ lalu tulis path-nya,
  // mis. "/projects/fiqost-1.png". Pakai data dummy untuk karya perusahaan.
  images?: string[];
};

export const projects: Project[] = [
  {
    slug: "ai-strategi",
    title: "ai-strategi.kemenhub.go.id",
    kind: "company",
    org: "PLN Icon Plus",
    summary: "A government web platform built with React.js at PLN Icon Plus.",
    role: "Frontend Developer",
    stack: ["React.js"],
    url: "https://ai-strategi.kemenhub.go.id/",
    // built: ["Fitur 1", "Fitur 2"],
    // challenge: "Masalah teknis dan solusimu.",
    // result: "Angka hasil: modul, pengguna, waktu muat, jumlah tes.",
  },
  {
    slug: "dashboard-ga",
    title: "Dashboard GA",
    kind: "company",
    org: "PLN Icon Plus",
    summary: "A dashboard application built with Next.js at PLN Icon Plus.",
    role: "Frontend Developer",
    stack: ["Next.js"],
  },
  {
    slug: "fiqost",
    title: "Fiqost",
    kind: "personal",
    summary:
      "Boarding-house management interface covering electricity, water and Wi-Fi usage.",
    role: "Frontend Developer",
    stack: ["React.js", "Tailwind CSS", "Figma", "Vercel"],
    url: "https://fiqost.vercel.app/",
  },
  {
    slug: "futurespace",
    title: "FutureSpace",
    kind: "personal",
    summary: "Coworking-space management interface with a typed React codebase.",
    role: "Frontend Developer",
    stack: ["React.js", "TypeScript", "Tailwind CSS", "Vercel"],
    url: "https://futurspace.vercel.app/",
  },
];

export const otherWork: { name: string; note: string }[] = [
  { name: "PLN EG", note: "PLN Icon Plus · React.js" },
  { name: "ems.air.id", note: "PLN Icon Plus" },
  { name: "onebilling.air.id", note: "PLN Icon Plus" },
  { name: "digital-sign.air.id", note: "PLN Icon Plus" },
  { name: "idcloudhost.com", note: "IDCloudHost · Website redesign" },
  { name: "kasiran.vercel.app", note: "Bangun Digital" },
];
