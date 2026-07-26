"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  User,
  Settings,
  LogOut,
  X,
  Sparkles,
} from "lucide-react";

import { useRouter } from "next/navigation";
import { logoutUser } from "@/actions/logout";

import { UserAvatar } from "./user-avatar";

interface MobileProfileSheetProps {
  open: boolean;
  onClose: () => void;

  user: {
    name?: string | null;
    email?: string | null;
    image?: string | null;
  };
}

export function MobileProfileSheet({
  open,
  onClose,
  user,
}: MobileProfileSheetProps) {

  const router = useRouter();

  async function handleLogout() {
    await logoutUser();

    router.push("/login");
    router.refresh();
  }

  return (
    <AnimatePresence>

      {open && (

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[999] bg-black/50 xl:hidden"
        >

          <motion.div
            initial={{ y: 500 }}
            animate={{ y: 0 }}
            exit={{ y: 500 }}
            transition={{
              type: "spring",
              stiffness: 320,
              damping: 30,
            }}
            onClick={(e) => e.stopPropagation()}
            className="absolute bottom-0 left-0 right-0 rounded-t-3xl bg-card p-6"
          >

          {/* <motion.div
  initial={{ y: "100%" }}
  animate={{ y: 0 }}
  exit={{ y: "100%" }}
  transition={{
    type: "spring",
    stiffness: 260,
    damping: 28,
  }}
  onClick={(e) => e.stopPropagation()}
  className="absolute inset-x-0 bottom-0 min-h-[55vh] max-h-[85vh] overflow-y-auto rounded-t-[32px] border-t border-border bg-card px-6 pt-3 pb-8 shadow-2xl"
> */}

            {/* Header */}

            <div className="mb-6 flex items-center justify-between">

              <div className="flex items-center gap-4">

                <UserAvatar
                  name={user.name}
                  image={user.image}
                  size={56}
                />

                <div>

                  <h2 className="font-bold text-lg">

                    {user.name || "User"}

                  </h2>

                  <p className="text-sm text-muted-foreground">

                    {user.email}

                  </p>

                  <div className="mt-1 flex items-center gap-1">

                    <Sparkles className="h-3 w-3 text-yellow-500" />

                    <span className="text-xs text-muted-foreground">

                      Free Plan

                    </span>

                  </div>

                </div>

              </div>

              <button
                onClick={onClose}
                className="rounded-xl p-2 hover:bg-muted"
              >

                <X className="h-5 w-5" />

              </button>

            </div>

            {/* Menu */}

            <div className="space-y-2">

              <button className="flex w-full items-center gap-4 rounded-xl p-4 transition hover:bg-muted">

                <User className="h-5 w-5" />

                Profile

              </button>

              <button className="flex w-full items-center gap-4 rounded-xl p-4 transition hover:bg-muted">

                <Settings className="h-5 w-5" />

                Settings

              </button>

              <button
                onClick={handleLogout}
                className="flex w-full items-center gap-4 rounded-xl p-4 text-red-500 transition hover:bg-red-50 dark:hover:bg-red-950"
              >

                <LogOut className="h-5 w-5" />

                Logout

              </button>

            </div>

          </motion.div>

        </motion.div>

      )}

    </AnimatePresence>
  );
}