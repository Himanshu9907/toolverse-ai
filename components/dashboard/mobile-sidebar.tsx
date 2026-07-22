"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { DashboardSidebar } from "./sidebar";

import {
  Bot,
  FileText,
  Heart,
  History,
  Home,
  Image,
  Menu,
  Settings,
  Sparkles,
  Video,
  Wand2,
} from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const menu = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: Home,
  },
  {
    title: "Image Tools",
    href: "/dashboard/image-tools",
    icon: Image,
  },
  {
    title: "PDF Tools",
    href: "/dashboard/pdf-tools",
    icon: FileText,
  },
  {
    title: "AI Tools",
    href: "/dashboard/ai-tools",
    icon: Bot,
  },
  {
    title: "Video Tools",
    href: "/dashboard/video-tools",
    icon: Video,
  },
  {
    title: "AI Automation",
    href: "/dashboard/automation",
    icon: Wand2,
  },
  {
    title: "Favorites",
    href: "/dashboard/favorites",
    icon: Heart,
  },
  {
    title: "History",
    href: "/dashboard/history",
    icon: History,
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
];

export function MobileSidebar() {
  const pathname = usePathname();

  return (
    <Sheet>

      <SheetTrigger asChild>

        <button className="flex h-11 w-11 items-center justify-center rounded-xl border lg:hidden">

          <Menu className="h-5 w-5" />

        </button>

      </SheetTrigger>

      {/* <SheetContent side="left" className="w-80 p-0">

        <div className="border-b p-6">

          <div className="flex items-center gap-3">

            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 via-violet-600 to-cyan-500 text-white">

              <Sparkles className="h-6 w-6" />

            </div>

            <div>

              <h2 className="font-bold text-lg">

                ToolVerse AI

              </h2>

              <p className="text-sm text-muted-foreground">

                Productivity Suite

              </p>

            </div>

          </div>

        </div>

        <div className="space-y-2 p-4">

          {menu.map((item) => {

            const Icon = item.icon;

            const active = pathname === item.href;

            return (

              <Link
                key={item.title}
                href={item.href}
                className={`flex items-center gap-3 rounded-2xl px-4 py-3 transition ${
                  active
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-muted"
                }`}
              >

                <Icon className="h-5 w-5" />

                {item.title}

              </Link>

            );

          })}

        </div>

      </SheetContent> */}

      <SheetContent side="left" className="w-72 p-0">

  <DashboardSidebar mobile />

</SheetContent>

    </Sheet>
  );
}