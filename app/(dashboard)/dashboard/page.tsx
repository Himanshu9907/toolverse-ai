import { WelcomeCard } from "@/components/dashboard/welcome-card";
import { StatsGrid } from "@/components/dashboard/stats-grid";
import { ContinueWorking } from "@/components/dashboard/continue-working";
import { RecommendedTools } from "@/components/dashboard/recommended-tools";
import { StaggerItem } from "@/components/animations/stagger-item";
import { StaggerChildren } from "@/components/animations/stagger-children";
import { QuickActions } from "@/components/dashboard/quick-actions";
import { DashboardFooter } from "@/components/dashboard/dashboard-footer";
import { LogoutButton } from "@/components/dashboard/logout-button";

export default function DashboardPage() {
  return (
    <div className="space-y-8">

      <StaggerChildren>

      <StaggerItem>
      <WelcomeCard />
      </StaggerItem>

       

    <StaggerItem>
  <div className="mt-6">
    <StatsGrid />
  </div>
</StaggerItem>

<StaggerItem>
  <div className="mt-12">
    <ContinueWorking />
  </div>
</StaggerItem>

<StaggerItem>
  <div className="mt-12">
    <RecommendedTools />
  </div>
</StaggerItem>

</StaggerChildren >

<div className="mt-12">
  <QuickActions />
</div>

<div className="mt-8 flex justify-end">
  <LogoutButton />
</div>

<DashboardFooter />

</div>
  );
}