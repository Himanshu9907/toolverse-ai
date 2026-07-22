
// "use client";

// import { Bell, Menu, Plus, Search } from "lucide-react";
// import { ThemeToggle } from "@/components/layout/theme-toggle";
// import { MobileSidebar } from "@/components/dashboard/mobile-sidebar";

// export function DashboardTopbar() {
//   return (
//     <header className="sticky top-0 z-40 border-b border-border/50 bg-background/80 backdrop-blur-xl">

//       <div className="flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">

//         {/* LEFT */}

//         <div className="flex items-center gap-4 flex-1">

//           {/* Mobile Menu */}

//           <MobileSidebar />

//           {/* Heading */}

//           <div>

//             <h1 className="text-xl font-bold lg:text-2xl">

//               Dashboard

//             </h1>

//             <p className="hidden text-sm text-muted-foreground sm:block">

//               Welcome back 👋

//             </p>

//           </div>

//           {/* Search */}

//           <div className="ml-8 hidden max-w-xl flex-1 lg:block">

//             <div className="relative">

//               <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />

//               <input
//                 placeholder="Search AI tools..."
//                 className="h-12 w-full rounded-2xl border bg-background pl-12 pr-4 outline-none transition-all duration-300 focus:border-primary focus:ring-2 focus:ring-primary/20"
//               />

//             </div>

//           </div>

//         </div>

//         {/* RIGHT */}

//         <div className="flex items-center gap-2 sm:gap-3">

//           {/* Mobile Search */}

//           <button className="flex h-11 w-11 items-center justify-center rounded-xl border transition hover:bg-muted lg:hidden">

//             <Search className="h-5 w-5" />

//           </button>

//           {/* New Tool */}

//           <button className="hidden items-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 via-violet-600 to-cyan-500 px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:scale-[1.03] md:flex">

//             <Plus className="h-4 w-4" />

//             New Tool

//           </button>

//           {/* Notification */}

//           <button className="relative flex h-11 w-11 items-center justify-center rounded-xl border transition hover:bg-muted">

//             <Bell className="h-5 w-5" />

//             <span className="absolute right-3 top-3 h-2.5 w-2.5 rounded-full bg-red-500 ring-2 ring-background" />

//           </button>

//           {/* Theme */}

//           <ThemeToggle />

//           {/* User */}

//           <button className="flex items-center gap-3 rounded-2xl border bg-background px-2 py-2 transition hover:bg-muted sm:px-3">

//             <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 via-violet-600 to-cyan-500 font-bold text-white">

//               H

//             </div>

//             <div className="hidden lg:block">

//               <p className="text-sm font-semibold">

//                 Himanshu

//               </p>

//               <p className="text-xs text-muted-foreground">

//                 Free Plan

//               </p>

//             </div>

//           </button>

//         </div>

//       </div>

//     </header>
//   );
// }


"use client";

import { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

import { Bell, Plus, Search } from "lucide-react";

import { ThemeToggle } from "@/components/layout/theme-toggle";

import { MobileSidebar } from "@/components/dashboard/mobile-sidebar";

export function DashboardTopbar() {

  const [showSearch, setShowSearch] = useState(false);

  return (

    <header className="sticky top-0 z-40 border-b border-border/50 bg-background/80 backdrop-blur-xl">

      <div className="flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* LEFT */}

        <div className="flex flex-1 items-center gap-4">

          <MobileSidebar />

          <div>

            <h1 className="text-xl font-bold lg:text-2xl">

              Dashboard

            </h1>

            <p className="hidden text-sm text-muted-foreground sm:block">

              Welcome back 👋

            </p>

          </div>

          {/* Desktop Search */}

          <div className="ml-8 hidden max-w-xl flex-1 lg:block">

            <div className="relative">

              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />

              <input
                type="text"
                placeholder="Search AI tools..."
                className="h-12 w-full rounded-2xl border bg-background pl-12 pr-4 outline-none transition-all duration-300 focus:border-primary focus:ring-2 focus:ring-primary/20"
              />

            </div>

          </div>

        </div>

        {/* RIGHT */}

        <div className="flex items-center gap-2 sm:gap-3">

          {/* Mobile Search */}

          <button
            onClick={() => setShowSearch(!showSearch)}
            className="flex h-11 w-11 items-center justify-center rounded-xl border transition hover:bg-muted lg:hidden"
          >

            {showSearch ? (

              <span className="text-lg font-bold">

                ✕

              </span>

            ) : (

              <Search className="h-5 w-5" />

            )}

          </button>

          {/* New Tool */}

          <button className="hidden items-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 via-violet-600 to-cyan-500 px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:scale-[1.03] md:flex">

            <Plus className="h-4 w-4" />

            New Tool

          </button>

                    {/* Notifications */}

          <button className="relative flex h-11 w-11 items-center justify-center rounded-xl border transition hover:bg-muted">

            <Bell className="h-5 w-5" />

            <span className="absolute right-3 top-3 h-2.5 w-2.5 rounded-full bg-red-500 ring-2 ring-background" />

          </button>

          {/* Theme */}

          <ThemeToggle />

          {/* User */}

          <button className="flex items-center gap-3 rounded-2xl border bg-background px-2 py-2 transition hover:bg-muted sm:px-3">

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 via-violet-600 to-cyan-500 font-bold text-white">

              H

            </div>

            <div className="hidden lg:block">

              <p className="text-sm font-semibold">

                Himanshu

              </p>

              <p className="text-xs text-muted-foreground">

                Free Plan

              </p>

            </div>

          </button>

        </div>

      </div>

      {/* Mobile Search */}

      <AnimatePresence>

        {showSearch && (

          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="border-t bg-background p-4 lg:hidden"
          >

            <div className="relative">

              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />

              <input
                autoFocus
                type="text"
                placeholder="Search AI tools..."
                className="h-12 w-full rounded-2xl border bg-background pl-12 pr-4 outline-none transition-all duration-300 focus:border-primary focus:ring-2 focus:ring-primary/20"
              />

            </div>

          </motion.div>

        )}

      </AnimatePresence>

    </header>

  );

}