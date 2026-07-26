"use client";

import { Bell } from "lucide-react";

export function NotificationButton() {
  return (
    <button className="relative flex h-10 w-10 items-center justify-center rounded-xl border bg-background hover:bg-muted">

      <Bell className="h-4 w-4" />

      <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500 ring-2 ring-background"/>

    </button>
  );
}