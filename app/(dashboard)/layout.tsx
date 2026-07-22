// import type { ReactNode } from "react";

// import { DashboardSidebar } from "@/components/dashboard/sidebar";
// import { DashboardTopbar } from "@/components/dashboard/topbar";

// export default function DashboardLayout({
//   children,
// }: {
//   children: ReactNode;
// }) {
//   return (
//     <div className="min-h-screen bg-background">

//       <div className="flex">

//         {/* Sidebar */}

//         <DashboardSidebar />

//         {/* Content */}

//         <div className="flex min-h-screen flex-1 flex-col">

//           <DashboardTopbar />

//           <main className="flex-1 p-6 lg:p-8">

//             {children}

//           </main>

//         </div>

//       </div>

//     </div>
//   );
// }

import type { ReactNode } from "react";

import { DashboardSidebar } from "@/components/dashboard/sidebar";
import { DashboardTopbar } from "@/components/dashboard/topbar";

export default function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-muted/30">

      {/* Desktop Sidebar */}

      {/* <div className="flex">

        <aside className="hidden lg:block">

          <DashboardSidebar />

        </aside> */}

        {/* Content */}

        {/* <div className="flex min-h-screen flex-1 flex-col">

          <DashboardTopbar />

          <main className="flex-1 p-4 sm:p-6 lg:p-8">

            <div className="mx-auto max-w-7xl">

              {children}

            </div>

          </main>

        </div>

      </div> */}

      <div className="flex h-screen overflow-hidden">

   <div className="hidden lg:block">
    <DashboardSidebar />
  </div>

  <div className="flex flex-1 flex-col overflow-hidden">

    <DashboardTopbar />

    <main className="flex-1 overflow-y-auto p-6">

      {children}

    </main>

  </div>

</div>

    </div>
  );
}