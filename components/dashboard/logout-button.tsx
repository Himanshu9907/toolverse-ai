"use client";

import { useRouter } from "next/navigation";
import { logoutUser } from "@/actions/logout";

export function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    await logoutUser();

    router.push("/login");
    router.refresh();
  };

  return (
    <button
      onClick={handleLogout}
      className="rounded-xl bg-red-500 px-5 py-2 font-semibold text-white hover:bg-red-600"
    >
      Logout
    </button>
  );
}