// "use client";

// import {
//   Bot,
//   Heart,
//   History,
//   TrendingUp,
//   Wrench,
// } from "lucide-react";

// const stats = [
//   {
//     title: "Total Tools",
//     value: "214",
//     change: "+12 this week",
//     icon: Wrench,
//     color: "from-blue-600 to-cyan-500",
//     progress: 92,
//   },
//   {
//     title: "AI Usage",
//     value: "82%",
//     change: "+18% this month",
//     icon: Bot,
//     color: "from-violet-600 to-fuchsia-500",
//     progress: 82,
//   },
//   {
//     title: "Favorites",
//     value: "38",
//     change: "+4 today",
//     icon: Heart,
//     color: "from-pink-500 to-rose-500",
//     progress: 64,
//   },
//   {
//     title: "History",
//     value: "124",
//     change: "16 today",
//     icon: History,
//     color: "from-emerald-500 to-green-600",
//     progress: 74,
//   },
// ];

// export function StatsGrid() {
//   return (
//     <section className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">

//       {stats.map((stat) => {

//         const Icon = stat.icon;

//         return (

//           <div
//             key={stat.title}
//             className="group relative overflow-hidden rounded-3xl border bg-card p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
//           >

//             {/* Glow */}

//             <div
//               className={`absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-to-br ${stat.color} opacity-10 blur-3xl transition-all duration-500 group-hover:scale-150`}
//             />

//             {/* Icon */}

//             <div
//               className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${stat.color} text-white shadow-lg`}
//             >

//               <Icon className="h-7 w-7" />

//             </div>

//             <p className="mt-6 text-sm font-medium text-muted-foreground">

//               {stat.title}

//             </p>

//             <h2 className="mt-2 text-4xl font-bold">

//               {stat.value}

//             </h2>

//             <div className="mt-4 flex items-center gap-2 text-sm font-medium text-green-600">

//               <TrendingUp className="h-4 w-4" />

//               {stat.change}

//             </div>

//             {/* Progress */}
//                         <div className="mt-6">

//               <div className="h-2 overflow-hidden rounded-full bg-muted">

//                 <div
//                   className={`h-full rounded-full bg-gradient-to-r ${stat.color}`}
//                   style={{ width: `${stat.progress}%` }}
//                 />

//               </div>

//               <div className="mt-2 flex items-center justify-between text-xs text-muted-foreground">

//                 <span>Progress</span>

//                 <span>{stat.progress}%</span>

//               </div>

//             </div>

//           </div>

//         );

//       })}

//     </section>

//   );

// }

"use client";

import {
  Bot,
  Heart,
  History,
  TrendingUp,
  Wrench,
  MoreHorizontal,
} from "lucide-react";

const stats = [
  {
    title: "Total Tools",
    value: "214",
    change: "+12%",
    subtitle: "this week",
    icon: Wrench,
    color: "from-blue-600 to-cyan-500",
    progress: 92,
  },
  {
    title: "AI Usage",
    value: "82%",
    change: "+18%",
    subtitle: "this month",
    icon: Bot,
    color: "from-violet-600 to-fuchsia-500",
    progress: 82,
  },
  {
    title: "Favorites",
    value: "38",
    change: "+4",
    subtitle: "today",
    icon: Heart,
    color: "from-pink-500 to-rose-500",
    progress: 64,
  },
  {
    title: "History",
    value: "124",
    change: "+16",
    subtitle: "today",
    icon: History,
    color: "from-emerald-500 to-green-600",
    progress: 74,
  },
];

export function StatsGrid() {
  return (
    <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">

      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <div
            key={stat.title}
            className="group relative overflow-hidden rounded-3xl border border-border/60 bg-background/70 p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_25px_60px_rgba(59,130,246,.12)]"
          >
            {/* Background Glow */}

            <div
              className={`absolute -right-16 -top-16 h-44 w-44 rounded-full bg-gradient-to-br ${stat.color} opacity-10 blur-3xl transition-all duration-500 group-hover:scale-150`}
            />

            {/* Top */}

            <div className="relative flex items-start justify-between">

              <div
                className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${stat.color} text-white shadow-lg`}
              >
                <Icon className="h-6 w-6" />
              </div>

              <button className="rounded-xl p-2 text-muted-foreground transition hover:bg-muted">
                <MoreHorizontal className="h-4 w-4" />
              </button>

            </div>

            {/* Title */}

            <p className="relative mt-6 text-sm font-medium text-muted-foreground">
              {stat.title}
            </p>

            {/* Value */}

            <h2 className="relative mt-2 text-4xl font-extrabold tracking-tight">
              {stat.value}
            </h2>

            {/* Trend */}

            <div className="relative mt-4 flex items-center justify-between">

              <div className="flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-600">

                <TrendingUp className="h-3.5 w-3.5" />

                {stat.change}

              </div>

              <span className="text-xs text-muted-foreground">
                {stat.subtitle}
              </span>

            </div>

            {/* Progress */}

            <div className="relative mt-6">

              <div className="h-2 overflow-hidden rounded-full bg-muted">

                <div
                  className={`h-full rounded-full bg-gradient-to-r ${stat.color} transition-all duration-1000`}
                  style={{
                    width: `${stat.progress}%`,
                  }}
                />

              </div>

              <div className="mt-2 flex items-center justify-between text-xs text-muted-foreground">

                <span>Progress</span>

                <span className="font-semibold">
                  {stat.progress}%
                </span>

              </div>

            </div>

          </div>
        );
      })}
    </section>
  );
}