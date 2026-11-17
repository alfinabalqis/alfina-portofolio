export const education: {
  period: string;
  school: string;
  detail: string;
}[] = [
  {
    period: "Oct 2024 – Nov 2026 (graduating)",
    school: "Binus University",
    detail: "Bachelor of Computer Science · GPA 3.97",
  },
  {
    period: "Sep 2021 – Sep 2024",
    school: "Telkom University",
    detail: "Associate Diploma, Application Software Engineering · GPA 3.99",
  },
  {
    period: "Jul 2019 – Jun 2021",
    school: "SMK Telkom Purwokerto",
    detail: "Software Engineering",
  },
];

export type DocItem = {
  title: string;
  subtitle: string;
  preview?: string; // gambar di public/docs/, mis. "/docs/cert-angga.jpg"
  href?: string; // tautan kredensial resmi (opsional)
};

export const certificates: DocItem[] = [
  { title: "Full-Stack JavaScript Developer: Website Travel", subtitle: "BuildWithAngga" },
  { title: "Web Development Path (Node.js)", subtitle: "Progate" },
  { title: "Belajar Pemrograman Web Dasar", subtitle: "Dicoding" },
];

export const documents: DocItem[] = [
  {
    title: "Ijazah, Telkom University",
    subtitle: "Associate Diploma, Application Software Engineering",
  },
  { title: "Transkrip Nilai, Telkom University", subtitle: "GPA 3.99" },
];

export const thesis =
  "Vendor recommendation system for electronic certification providers (PSrE) using the C4.5 algorithm.";