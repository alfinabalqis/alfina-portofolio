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
    stack: ["React.js", "Figma"],
    url: "https://ai-strategi.kemenhub.go.id/",
    images: ["/projects/ai.png"],
  },
  // {
  //   slug: "dashboard-ga",
  //   title: "Dashboard GA",
  //   kind: "company",
  //   org: "PLN Icon Plus",
  //   summary: "A dashboard application built with Next.js at PLN Icon Plus.",
  //   role: "Frontend Developer",
  //   stack: ["Next.js"],
  //   url: "https://dev-pln-ga.air.id/v4",
  //   images: ["/projects/ga.png"],
  // },
  {
    slug: "ems",
    title: "Energy Management System",
    kind: "company",
    org: "PLN Icon Plus",
    summary:
      "With our Energy Management System, we help you achieve energy efficiency and reduce carbon emissions",
    role: "Frontend Developer",
    stack: ["Vue.js", "Bootstrap CSS", "Swagger", "Figma"],
    url: "https://ems.air.id/portal/",
    images: ["/projects/ems.png"],
  },
  {
    slug: "idcloudhost",
    title: "Company Profile Website : IDCloudHost",
    kind: "company",
    org: "PT. Cloud Hosting Indonesia",
    summary:
      "Website company for IDCloudhost using Personalizing wordpress",
    role: "Frontend Developer",
    stack: ["PHP", "Wordpress", "Javascript", "Bootstrap", "Figma"],
    url: "https://idcloudhost.com/",
    images: ["/projects/idch.png"],
  },
  {
    slug: "futurespace",
    title: "FutureSpace",
    kind: "personal",
    summary: "Coworking-space management interface with a typed React codebase.",
    role: "Frontend Developer",
    stack: ["React.js", "TypeScript", "Tailwind CSS", "Vercel"],
    url: "https://futurspace.vercel.app/",
    images: ["/projects/future.png"],
  },
];

export const otherWork: { name: string; note: string }[] = [
  { name: "PRIME InKind", note: "PLN Icon Plus" },
  { name: "One Billing", note: "PLN Icon Plus" },
  { name: "Digital Signature Aggregator", note: "PLN Icon Plus" },
  { name: "Lights Catalog Product", note: "PLN Icon Plus" },
  { name: "Rating Scoring", note: "PLN Icon Plus" },
  { name: "idcloudhost.co.id", note: "Company Website Domain" },
  { name: "kasiran.vercel.app", note: "Bangun Digital" },
];
