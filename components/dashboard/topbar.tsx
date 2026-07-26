// "use client";

// import { useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import {
//   Bell,
//   Search,
//   Sparkles,
//   ChevronDown,
//   User,
//   Settings,
//   LogOut,
//   X,
// } from "lucide-react";

// import { ThemeToggle } from "@/components/layout/theme-toggle";
// import { MobileSidebar } from "@/components/dashboard/mobile-sidebar";
// import { ToolSearch } from "@/components/search/tool-search";

// import { useRouter } from "next/navigation";
// import { logoutUser } from "@/actions/logout";

// export function DashboardTopbar() {
//   const [showSearch, setShowSearch] = useState(false);

//   const [profileOpen, setProfileOpen] = useState(false);

//   const [mobileProfileOpen, setMobileProfileOpen] = useState(false);

// const router = useRouter();

// const handleLogout = async () => {
//   await logoutUser();

//   router.push("/login");
//   router.refresh();
// };

//   return (
//     <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">

//       <div className="mx-auto flex h-16 max-w-[1700px] items-center py-12 px-5 lg:px-8">

//         {/* ================= LEFT ================= */}

//         <div className="flex w-[230px] items-center gap-3">

//           <MobileSidebar />

//           <div className="min-w-0">

//             <h1 className="truncate text-xl font-bold tracking-tight">

//               Dashboard

//             </h1>

//             <p className="hidden text-xs text-muted-foreground lg:block">

//               Good to see you again 👋

//             </p>

//           </div>

//         </div>

//         {/* ================= CENTER ================= */}

//         <div className="hidden flex-1 justify-center xl:flex">

//           <div className="w-full max-w-[520px]">

//             <ToolSearch variant="dashboard" />

//           </div>

//         </div>
//                 {/* ================= RIGHT ================= */}

//         <div className="ml-auto flex items-center gap-2">

//           {/* Mobile Search */}

//           <button
//             onClick={() => setShowSearch(!showSearch)}
//             className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-background transition-all duration-300 hover:bg-muted xl:hidden"
//           >
//             {showSearch ? (
//               <span className="text-lg font-semibold">✕</span>
//             ) : (
//               <Search className="h-4 w-4" />
//             )}
//           </button>

//           <button className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-background transition-all duration-300 hover:bg-muted ml-3">

//             <Bell className="h-4 w-4" />

//             <span className="absolute right-2.5 top-2.5 h-2 w-2 rounded-full bg-red-500 ring-2 ring-background" />

//           </button>

//           {/* Theme */}

//           <ThemeToggle />

//           <div className="relative hidden xl:block">

//   <button
//     onClick={() => setProfileOpen(!profileOpen)}
//     className="group flex h-10 items-center gap-3 rounded-xl border border-border bg-background px-2 pr-3 transition-all duration-300 hover:bg-muted"
//   >

//     <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 via-violet-600 to-cyan-500 text-sm font-bold text-white">

//       H

//     </div>

//     <div className="hidden text-left xl:block">

//       <p className="text-sm font-semibold leading-none">

//         Himanshu

//       </p>

//       <div className="mt-1 flex items-center gap-1">

//         <Sparkles className="h-3 w-3 text-yellow-500" />

//         <span className="text-xs text-muted-foreground">

//           Free Plan

//         </span>

//       </div>

//     </div>

//     <ChevronDown
//       className={`hidden h-4 w-4 transition xl:block ${
//         profileOpen ? "rotate-180" : ""
//       }`}
//     />

//   </button>

//   {profileOpen && (

//     <div className="absolute right-0 mt-3 w-56 overflow-hidden rounded-2xl border bg-card shadow-xl">

//       <button className="flex w-full items-center gap-3 px-5 py-3 hover:bg-muted">

//         <User className="h-4 w-4" />

//         Profile

//       </button>

//       <button className="flex w-full items-center gap-3 px-5 py-3 hover:bg-muted">

//         <Settings className="h-4 w-4" />

//         Settings

//       </button>

//       <button
//         onClick={handleLogout}
//         className="flex w-full items-center gap-3 px-5 py-3 text-red-500 hover:bg-red-50 dark:hover:bg-red-950"
//       >

//         <LogOut className="h-4 w-4" />

//         Logout

//       </button>

//     </div>

//   )}

// </div>

//         </div>

//       </div>





//       <div className="xl:hidden">

//   <button
//     onClick={() => setMobileProfileOpen(true)}
//     className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-background transition hover:bg-muted"
//   >

//     <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 via-violet-600 to-cyan-500 text-sm font-bold text-white">

//       H

//     </div>

//   </button>

// </div>
//             {/* ================= MOBILE SEARCH ================= */}

//       <AnimatePresence>

//         {showSearch && (

//           <motion.div
//             initial={{ opacity: 0, y: -10 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -10 }}
//             transition={{ duration: 0.2 }}
//             className="border-t border-border bg-background/95 p-4 backdrop-blur-xl xl:hidden"
//           >

//             <ToolSearch
//               variant="dashboard"
//               autoFocus
//             />

//           </motion.div>

//         )}

//       </AnimatePresence>

//       <AnimatePresence>

//   {mobileProfileOpen && (

//     <motion.div
//       className="fixed inset-0 z-[999] bg-black/50 xl:hidden"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       onClick={() => setMobileProfileOpen(false)}
//     >

//       <motion.div
//         initial={{ y: 500 }}
//         animate={{ y: 0 }}
//         exit={{ y: 500 }}
//         transition={{
//           type: "spring",
//           damping: 30,
//           stiffness: 320,
//         }}
//         onClick={(e) => e.stopPropagation()}
//         className="absolute bottom-0 left-0 right-0 rounded-t-3xl bg-card p-6"
//       >

//         <div className="mb-6 flex items-center justify-between">

//           <div className="flex items-center gap-4">

//             <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 via-violet-600 to-cyan-500 text-lg font-bold text-white">

//               H

//             </div>

//             <div>

//               <h3 className="text-lg font-bold">
//                 Himanshu
//               </h3>

//               <p className="text-sm text-muted-foreground">
//                 Free Plan
//               </p>

//             </div>

//           </div>

//           <button
//             onClick={() => setMobileProfileOpen(false)}
//             className="rounded-xl p-2 hover:bg-muted"
//           >
//             <X className="h-5 w-5" />
//           </button>

//         </div>

//         <div className="space-y-2">

//           <button className="flex w-full items-center gap-4 rounded-xl p-4 hover:bg-muted">

//             <User className="h-5 w-5" />

//             Profile

//           </button>

//           <button className="flex w-full items-center gap-4 rounded-xl p-4 hover:bg-muted">

//             <Settings className="h-5 w-5" />

//             Settings

//           </button>

//           <button
//             onClick={handleLogout}
//             className="flex w-full items-center gap-4 rounded-xl p-4 text-red-500 hover:bg-red-50 dark:hover:bg-red-950"
//           >

//             <LogOut className="h-5 w-5" />

//             Logout

//           </button>

//         </div>

//       </motion.div>

//     </motion.div>

//   )}

// </AnimatePresence>

//     </header>

//   );

// }