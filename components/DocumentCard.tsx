import Image from "next/image";

type DocumentCardProps = {
  title: string;
  subtitle: string;
  preview?: string;
  href?: string;
};

export default function DocumentCard({ title, subtitle, preview, href }: DocumentCardProps) {
  const body = (
    <>
      <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-line bg-panel2">
        {preview ? (
          <Image
            src={preview}
            alt={`Preview of ${title}`}
            fill
            sizes="(min-width: 768px) 260px, 50vw"
            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-faint">
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-12 w-12"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
              <path d="M14 3v5h5" />
              <path d="M9 13h6M9 17h6" />
            </svg>
          </div>
        )}
      </div>
      <p className="mt-3 font-semibold leading-snug">{title}</p>
      <p className="text-sm text-muted">{subtitle}</p>
      {href ? <p className="mt-2 font-mono text-xs font-semibold text-accent">View ↗</p> : null}
    </>
  );

  const cls =
    "group block rounded-2xl border border-line bg-panel p-4 transition-all duration-300 hover:-translate-y-1 hover:border-accent";

  return href ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
      {body}
    </a>
  ) : (
    <div className={cls}>{body}</div>
  );
}