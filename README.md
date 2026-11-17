# Portfolio — Alfina Balqis Nurzaharani

Next.js (App Router) + TypeScript + Tailwind CSS + Framer Motion.

## Menjalankan

```bash
npm install
npm run dev
```

Buka http://localhost:3000.

Cek build produksi sebelum deploy:

```bash
npm run build
npm run start
```

## Yang perlu kamu isi

Semua konten ada di folder `data/`, jadi kamu tidak perlu menyentuh komponen.

| Yang diisi | File |
| --- | --- |
| Foto | Taruh `photo.jpg` di `public/`, lalu ubah `photo` di `data/profile.ts` menjadi `"/photo.jpg"` |
| URL LinkedIn | `linkedin` di `data/profile.ts` (kosong = tombol disembunyikan) |
| File CV untuk diunduh | Ganti file di `public/cv/`, lalu samakan nama file di `cv` pada `data/profile.ts` |
| Tanggal kerja | `data/experience.ts` (cek IDCloudHost dan Bangun Digital) |
| Screenshot proyek | Taruh gambar di `public/projects/`, lalu isi `images: ["/projects/nama.png"]` di `data/projects.ts` |
| Detail studi kasus | Isi `built`, `challenge`, dan `result` pada proyek di `data/projects.ts` |
| Menambah proyek | Tambah satu objek di `projects` pada `data/projects.ts`; halaman detailnya dibuat otomatis |

Tips untuk karya perusahaan: minta izin dulu, dan pakai screenshot dengan data dummy, bukan data asli.

## Deploy ke Vercel

1. Push folder ini ke repo GitHub.
2. Buka vercel.com, login dengan GitHub, klik **Add New → Project**, lalu pilih repo ini.
3. Biarkan pengaturan bawaan (Next.js terdeteksi otomatis) dan klik **Deploy**.
4. Setiap push ke branch `main` akan otomatis memperbarui situs.
5. Domain sendiri: **Settings → Domains** di proyek Vercel.

## Struktur

```
app/            halaman (beranda dan /projects/[slug])
components/     komponen tampilan
data/           semua konten (profil, skill, pengalaman, proyek, pendidikan)
public/         foto, CV, dan gambar proyek
```
