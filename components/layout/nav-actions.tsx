import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./theme-toggle";

export function NavActions() {
  return (
    <div className="hidden items-center gap-3 lg:flex">
      <Button variant="ghost" size="icon">
        <Search className="h-5 w-5" />
      </Button>

      <ThemeToggle />

      <Button className="rounded-xl px-6">
        Get Started
      </Button>
    </div>
  );
}