"use client";

import Link from "next/link";
import { Menu } from "lucide-react";

import { navigation } from "@/config/navigation";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

export function MobileMenu() {
  return (
    <div className="lg:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>

        <SheetContent side="right" className="w-[320px]">
          <div className="mt-8 flex flex-col gap-2">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-4 py-3 text-base font-medium transition hover:bg-muted"
              >
                {item.title}
              </Link>
            ))}

            <Button className="mt-6 w-full rounded-xl">
              Get Started
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}