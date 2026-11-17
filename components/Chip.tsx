type ChipProps = {
  children: string;
};

export default function Chip({ children }: ChipProps) {
  return (
    <span className="inline-block rounded-full border border-line bg-panel2 px-3 py-1 font-mono text-xs text-ink md:text-sm">
      {children}
    </span>
  );
}
