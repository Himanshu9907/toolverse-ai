"use client";

import { useState } from "react";

import { ThemeToggle } from "@/components/layout/theme-toggle";
import { MobileSidebar } from "@/components/dashboard/mobile-sidebar";
import { ToolSearch } from "@/components/search/tool-search";

import { SearchButton } from "./search-button";
import { SearchWrapper } from "./search-wrapper";
import { NotificationButton } from "./notification-button";
import { DesktopProfileMenu } from "./desktop-profile-menu";
import { MobileProfileSheet } from "./mobile-profile-sheet";
import { UserAvatar } from "./user-avatar";

interface Props {
  user: {
    name?: string | null;
    email?: string | null;
    image?: string | null;
  };
}

export function DashboardTopbar({ user }: Props) {
  const [showSearch, setShowSearch] = useState(false);
  const [mobileProfileOpen, setMobileProfileOpen] = useState(false);
  console.log("TOPBAR USER =", user);
  return (
    <>
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-xl">

      <div className="mx-auto flex h-16 max-w-[1700px] items-center px-5 lg:px-8">

        <div className="flex w-[230px] items-center gap-3">
          <MobileSidebar />

          <div>
            <h1 className="text-xl font-bold">Dashboard</h1>

            <p className="hidden text-xs text-muted-foreground lg:block">
              Good to see you again 👋
            </p>
          </div>
        </div>

        <div className="hidden flex-1 justify-center xl:flex">
          <div className="w-full max-w-[520px]">
            <ToolSearch variant="dashboard" />
          </div>
        </div>

        <div className="ml-auto flex items-center gap-2">

          <SearchButton
            open={showSearch}
            toggle={() => setShowSearch(!showSearch)}
          />

          <NotificationButton />

          <ThemeToggle />

          <DesktopProfileMenu user={user} />

          <button
            onClick={() => setMobileProfileOpen(true)}
            className="xl:hidden"
          >
            <UserAvatar
              name={user.name}
              image={user.image}
              size={36}
            />
          </button>

        </div>

      </div>

      <SearchWrapper show={showSearch} />

      

    </header>

    <MobileProfileSheet
        open={mobileProfileOpen}
        onClose={() => setMobileProfileOpen(false)}
        user={user}
      />

      </>
  );
}