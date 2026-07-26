"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import {
  ChevronDown,
  User,
  Settings,
  LogOut,
  Sparkles,
} from "lucide-react";

import { logoutUser } from "@/actions/logout";
import { UserAvatar } from "./user-avatar";

interface Props {
  user: {
    name?: string | null;
    email?: string | null;
    image?: string | null;
  };
}

export function DesktopProfileMenu({
  user,
}: Props) {
  const [open, setOpen] = useState(false);

  const router = useRouter();

  async function handleLogout() {
    await logoutUser();

    router.push("/login");

    router.refresh();
  }

  return (
    <div className="relative hidden xl:block">

      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-3 rounded-xl border bg-background px-2 py-1.5 transition hover:bg-muted"
      >

        <UserAvatar
          name={user.name}
          image={user.image}
          size={36}
        />

        <div className="text-left">

          {/* <p className="text-sm font-semibold">

            {user.name || "User"}

          </p> */}

          <p className="text-sm font-semibold">
  {user.name
    ?.split(" ")
    .map(
      (word) =>
        word.charAt(0).toUpperCase() +
        word.slice(1).toLowerCase()
    )
    .join(" ") || "User"}
</p>

          <div className="flex items-center gap-1">

            <Sparkles className="h-3 w-3 text-yellow-500" />

            <span className="text-xs text-muted-foreground">

              Free Plan

            </span>

          </div>

        </div>

        <ChevronDown
          className={`h-4 w-4 transition ${
            open ? "rotate-180" : ""
          }`}
        />

      </button>

      {open && (

        <div className="absolute right-0 mt-3 w-64 overflow-hidden rounded-2xl border bg-card shadow-xl">

          <div className="border-b p-4">

            {/* <p className="font-semibold">

              {user.name}

            </p> */}
             <p className="text-sm font-semibold">
  {user.name
    ?.split(" ")
    .map(
      (word) =>
        word.charAt(0).toUpperCase() +
        word.slice(1).toLowerCase()
    )
    .join(" ") || "User"}
</p>
            <p className="text-xs text-muted-foreground">

              {user.email}

            </p>

          </div>

          <button
            className="flex w-full items-center gap-3 px-5 py-3 hover:bg-muted"
          >

            <User className="h-4 w-4" />

            Profile

          </button>

          <button
            className="flex w-full items-center gap-3 px-5 py-3 hover:bg-muted"
          >

            <Settings className="h-4 w-4" />

            Settings

          </button>

          <button
            onClick={handleLogout}
            className="flex w-full items-center gap-3 px-5 py-3 text-red-500 hover:bg-red-50 dark:hover:bg-red-950"
          >

            <LogOut className="h-4 w-4" />

            Logout

          </button>

        </div>

      )}

    </div>
  );
}