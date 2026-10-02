/** Placeholder shown while a section's code chunk downloads. Matches section padding so the page doesn't jump. */
export function SectionSkeleton() {
  return (
    <div role="status" aria-label="Loading section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="motion-safe:animate-pulse space-y-4">
        <div className="h-3 w-32 rounded bg-[color:var(--bg-2B211A)]" />
        <div className="h-8 w-2/3 max-w-md rounded bg-[color:var(--bg-2B211A)]" />
        <div className="h-4 w-full max-w-2xl rounded bg-[color:var(--bg-241B15)]" />
        <div className="h-4 w-5/6 max-w-xl rounded bg-[color:var(--bg-241B15)]" />
        <div className="mt-8 h-64 rounded border border-[color:var(--bd-2B211A)] bg-[color:var(--bg-1A1511)]" />
      </div>
    </div>
  );
}
