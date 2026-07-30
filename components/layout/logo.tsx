import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-violet-600 text-lg font-bold text-white shadow-md">
        K
      </div>

      <div className="flex flex-col">
        <span className="text-lg font-bold tracking-tight">
          Kratik
        </span>

        <span className="text-xs text-muted-foreground">
          AI Productivity Suite
        </span>
      </div>
    </Link>
  );
}