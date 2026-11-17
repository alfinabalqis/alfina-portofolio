import Image from "next/image";

type ScreenshotFrameProps = {
  src?: string;
  alt: string;
  className?: string;
};

export default function ScreenshotFrame({
  src,
  alt,
  className = "aspect-video",
}: ScreenshotFrameProps) {
  return (
    <div
      className={`flex flex-col overflow-hidden rounded-2xl border border-line bg-panel ${className}`}
    >
      <div className="flex h-9 shrink-0 items-center gap-2 bg-[#1B2430] px-4">
        <span className="h-2.5 w-2.5 rounded-full bg-[#4A586B]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#4A586B]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#4A586B]" />
      </div>
      <div className="relative min-h-0 flex-1">
        {src ? (
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(min-width: 768px) 560px, 100vw"
            className="object-cover object-top"
          />
        ) : (
          <div className="flex h-full items-center justify-center p-6 text-center font-mono text-sm text-muted">
            Screenshot coming soon
          </div>
        )}
      </div>
    </div>
  );
}
