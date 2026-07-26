"use client";

import { Search } from "lucide-react";

interface Props {
  open: boolean;
  toggle: () => void;
}

export function SearchButton({
  open,
  toggle,
}: Props) {
  return (
    <button
      onClick={toggle}
      className="flex h-10 w-10 items-center justify-center rounded-xl border bg-background hover:bg-muted xl:hidden"
    >
      {open ? "✕" : <Search className="h-4 w-4" />}
    </button>
  );
}