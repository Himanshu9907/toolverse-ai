// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";

// import {
//   LayoutDashboard,
//   Image,
//   FileText,
//   Bot,
//   Video,
//   Wand2,
//   History,
//   Heart,
//   Settings,
//   Sparkles,
//   ChevronRight,
// } from "lucide-react";

// const menuItems = [
//   {
//     title: "Dashboard",
//     href: "/dashboard",
//     icon: LayoutDashboard,
//   },
//   {
//     title: "Image Tools",
//     href: "/dashboard/image-tools",
//     icon: Image,
//   },
//   {
//     title: "PDF Tools",
//     href: "/dashboard/pdf-tools",
//     icon: FileText,
//   },
//   {
//     title: "AI Tools",
//     href: "/dashboard/ai-tools",
//     icon: Bot,
//   },
//   {
//     title: "Video Tools",
//     href: "/dashboard/video-tools",
//     icon: Video,
//   },
//   {
//     title: "AI Automation",
//     href: "/dashboard/automation",
//     icon: Wand2,
//   },
// ];

// const accountItems = [
//   {
//     title: "Favorites",
//     href: "/dashboard/favorites",
//     icon: Heart,
//   },
//   {
//     title: "History",
//     href: "/dashboard/history",
//     icon: History,
//   },
//   {
//     title: "Settings",
//     href: "/dashboard/settings",
//     icon: Settings,
//   },
// ];

// export function DashboardSidebar() {

//   const pathname = usePathname();

//   return (

//     <aside className="hidden w-72 shrink-0 border-r bg-background lg:flex lg:flex-col">

//       {/* Logo */}

//       <div className="border-b p-6">

//         <Link
//           href="/"
//           className="flex items-center gap-3"
//         >

//           <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 via-violet-600 to-cyan-500 text-white shadow-lg">

//             <Sparkles className="h-6 w-6" />

//           </div>

//           <div>

//             <h2 className="text-lg font-bold">

//               ToolVerse AI

//             </h2>

//             <p className="text-sm text-muted-foreground">

//               Productivity Suite

//             </p>

//           </div>

//         </Link>

//       </div>

//       {/* Navigation */}

//       <div className="flex-1 overflow-y-auto px-4 py-6">

//         <p className="mb-4 px-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">

//           Workspace

//         </p>
//                 <nav className="space-y-2">

//           {menuItems.map((item) => {

//             const Icon = item.icon;

//             const isActive = pathname === item.href;

//             return (

//               <Link
//                 key={item.title}
//                 href={item.href}
//                 className={`group flex items-center justify-between rounded-2xl px-4 py-3 transition-all duration-300 ${
//                   isActive
//                     ? "bg-primary text-primary-foreground shadow-lg"
//                     : "text-muted-foreground hover:bg-muted hover:text-foreground"
//                 }`}
//               >

//                 <div className="flex items-center gap-3">

//                   <Icon
//                     className={`h-5 w-5 transition-transform duration-300 ${
//                       !isActive && "group-hover:scale-110"
//                     }`}
//                   />

//                   <span className="font-medium">

//                     {item.title}

//                   </span>

//                 </div>

//                 <ChevronRight
//                   className={`h-4 w-4 transition-all duration-300 ${
//                     isActive
//                       ? "translate-x-1"
//                       : "opacity-0 group-hover:translate-x-1 group-hover:opacity-100"
//                   }`}
//                 />

//               </Link>

//             );

//           })}

//         </nav>

//         {/* Account */}

//         <p className="mb-4 mt-10 px-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">

//           Account

//         </p>

//         <nav className="space-y-2">

//           {accountItems.map((item) => {

//             const Icon = item.icon;

//             const isActive = pathname === item.href;

//             return (

//               <Link
//                 key={item.title}
//                 href={item.href}
//                 className={`group flex items-center justify-between rounded-2xl px-4 py-3 transition-all duration-300 ${
//                   isActive
//                     ? "bg-primary text-primary-foreground shadow-lg"
//                     : "text-muted-foreground hover:bg-muted hover:text-foreground"
//                 }`}
//               >

//                 <div className="flex items-center gap-3">

//                   <Icon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />

//                   <span className="font-medium">

//                     {item.title}

//                   </span>

//                 </div>

//                 <ChevronRight className="h-4 w-4 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100" />

//               </Link>

//             );

//           })}

//         </nav>

//       </div>
//             {/* Premium Upgrade Card */}

//       <div className="border-t p-4">

//         <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-violet-600 to-cyan-500 p-5 text-white shadow-xl">

//           <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20 backdrop-blur">

//             <Sparkles className="h-6 w-6" />

//           </div>

//           <h3 className="text-lg font-bold">

//             ToolVerse Pro

//           </h3>

//           <p className="mt-2 text-sm leading-6 text-blue-100">

//             Unlock premium AI tools, unlimited usage,
//             faster processing and exclusive features.

//           </p>

//           <button className="mt-5 flex w-full items-center justify-center rounded-2xl bg-white py-3 font-semibold text-slate-900 transition-all duration-300 hover:scale-[1.03] hover:shadow-xl">

//             Upgrade Now

//           </button>

//         </div>

//       </div>

//     </aside>

//   );

// }

// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";

// import {
//   Home,
//   Image,
//   FileText,
//   Bot,
//   Video,
//   Wand2,
//   Heart,
//   History,
//   Settings,
//   Sparkles,
// } from "lucide-react";

// const menu = [
//   { title: "Dashboard", href: "/dashboard", icon: Home },
//   { title: "Image Tools", href: "/dashboard/image-tools", icon: Image },
//   { title: "PDF Tools", href: "/dashboard/pdf-tools", icon: FileText },
//   { title: "AI Tools", href: "/dashboard/ai-tools", icon: Bot },
//   { title: "Video Tools", href: "/dashboard/video-tools", icon: Video },
//   { title: "AI Automation", href: "/dashboard/automation", icon: Wand2 },
//   { title: "Favorites", href: "/dashboard/favorites", icon: Heart },
//   { title: "History", href: "/dashboard/history", icon: History },
// ];

// export function DashboardSidebar() {
//   const pathname = usePathname();

//   return (
//     <aside className="flex h-screen w-72 flex-col border-r bg-background">

//       {/* Logo */}

//       <div className="border-b p-6">

//         <Link href="/" className="flex items-center gap-3">

//           <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 via-violet-600 to-cyan-500 text-white">

//             <Sparkles className="h-6 w-6" />

//           </div>

//           <div>

//             <h2 className="text-lg font-bold">

//               ToolVerse AI

//             </h2>

//             <p className="text-sm text-muted-foreground">

//               Productivity Suite

//             </p>

//           </div>

//         </Link>

//       </div>

//       {/* Menu */}

//       <nav className="flex-1 space-y-2 p-4">

//         {menu.map((item) => {

//           const Icon = item.icon;

//           const active = pathname === item.href;

//           return (

//             <Link
//               key={item.title}
//               href={item.href}
//               className={`flex items-center gap-3 rounded-2xl px-4 py-3 transition-all duration-300 ${
//                 active
//                   ? "bg-primary text-primary-foreground"
//                   : "hover:bg-muted"
//               }`}
//             >

//               <Icon className="h-5 w-5" />

//               <span className="font-medium">

//                 {item.title}

//               </span>

//             </Link>

//           );

//         })}

//       </nav>

//       {/* Bottom */}

//       <div className="border-t p-4">

//         <Link
//           href="/dashboard/settings"
//           className="flex items-center gap-3 rounded-2xl px-4 py-3 transition hover:bg-muted"
//         >

//           <Settings className="h-5 w-5" />

//           Settings

//         </Link>

//       </div>

//     </aside>
//   );
// }

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Home,
  Image,
  FileText,
  Bot,
  Video,
  Wand2,
  Heart,
  History,
  Settings,
  Sparkles,
} from "lucide-react";

import { SheetClose } from "@/components/ui/sheet";

const menu = [
  { title: "Dashboard", href: "/dashboard", icon: Home },
  { title: "Image Tools", href: "/dashboard/image-tools", icon: Image },
  { title: "PDF Tools", href: "/dashboard/pdf-tools", icon: FileText },
  { title: "AI Tools", href: "/dashboard/ai-tools", icon: Bot },
  { title: "Video Tools", href: "/dashboard/video-tools", icon: Video },
  { title: "AI Automation", href: "/dashboard/automation", icon: Wand2 },
  { title: "Favorites", href: "/dashboard/favorites", icon: Heart },
  { title: "History", href: "/dashboard/history", icon: History },
];

type DashboardSidebarProps = {
  mobile?: boolean;
};

export function DashboardSidebar({
  mobile = false,
}: DashboardSidebarProps) {

  const pathname = usePathname();

  const LinkWrapper = ({
    children,
  }: {
    children: React.ReactNode;
  }) =>
    mobile ? (
      <SheetClose asChild>{children}</SheetClose>
    ) : (
      <>{children}</>
    );

  return (
    <aside
      className={`flex flex-col border-r bg-background ${
        mobile ? "h-full w-full" : "h-screen w-72"
      }`}
    >
      {/* Logo */}

      <div className="border-b p-6">

        <LinkWrapper>

          <Link href="/" className="flex items-center gap-3">

            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 via-violet-600 to-cyan-500 text-white">

              <Sparkles className="h-6 w-6" />

            </div>

            <div>

              <h2 className="text-lg font-bold">

                ToolVerse AI

              </h2>

              <p className="text-sm text-muted-foreground">

                Productivity Suite

              </p>

            </div>

          </Link>

        </LinkWrapper>

      </div>

      {/* Menu */}

      <nav className="flex-1 space-y-2 overflow-y-auto p-4">
                {menu.map((item) => {

          const Icon = item.icon;

          const active = pathname === item.href;

          return (

            <LinkWrapper key={item.title}>

              <Link
                href={item.href}
                className={`flex items-center gap-3 rounded-2xl px-4 py-3 transition-all duration-300 ${
                  active
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-muted"
                }`}
              >

                <Icon className="h-5 w-5 shrink-0" />

                <span className="font-medium">

                  {item.title}

                </span>

              </Link>

            </LinkWrapper>

          );

        })}

      </nav>

      {/* Bottom */}

      <div className="border-t p-4">

        <LinkWrapper>

          <Link
            href="/dashboard/settings"
            className="flex items-center gap-3 rounded-2xl px-4 py-3 transition-all duration-300 hover:bg-muted"
          >

            <Settings className="h-5 w-5 shrink-0" />

            <span className="font-medium">

              Settings

            </span>

          </Link>

        </LinkWrapper>

      </div>

    </aside>

  );

}