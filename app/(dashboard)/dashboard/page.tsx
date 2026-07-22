import { WelcomeCard } from "@/components/dashboard/welcome-card";
import { StatsGrid } from "@/components/dashboard/stats-grid";
import { ContinueWorking } from "@/components/dashboard/continue-working";
import { RecommendedTools } from "@/components/dashboard/recommended-tools";
import { StaggerItem } from "@/components/animations/stagger-item";
import { StaggerChildren } from "@/components/animations/stagger-children";
import { QuickActions } from "@/components/dashboard/quick-actions";

export default function DashboardPage() {
  return (
    <div className="space-y-8">

      <StaggerChildren>

      <StaggerItem>
      <WelcomeCard />
      </StaggerItem>

       <StaggerItem>
      <div className="grid gap-6 lg:grid-cols-2">

        <div className="rounded-3xl border bg-card p-8">

          <h2 className="text-2xl font-bold">

            Stats Grid

          </h2>

          <p className="mt-3 text-muted-foreground">

            Coming in next step...

          </p>

        </div>

        <div className="rounded-3xl border bg-card p-8">

          <h2 className="text-2xl font-bold">

            Continue Working

          </h2>

          <p className="mt-3 text-muted-foreground">

            Coming in next step...

          </p>

        </div>

      </div>

      <div className="rounded-3xl border bg-card p-8">

        <h2 className="text-2xl font-bold">

          Recommended Tools

        </h2>

        <p className="mt-3 text-muted-foreground">

          Coming in next step...

        </p>

      </div>

      <div className="rounded-3xl border bg-card p-8">

        <h2 className="text-2xl font-bold">

          Recent Activity

        </h2>

        <p className="mt-3 text-muted-foreground">

          Coming in next step...

        </p>

      </div>
      </StaggerItem>

      <StaggerItem>
      <StatsGrid />
      </StaggerItem>

      <StaggerItem>
      <ContinueWorking />
      </StaggerItem>

      <StaggerItem>
      <RecommendedTools />
      </StaggerItem>

      </StaggerChildren>

      <QuickActions />

    </div>
  );
}