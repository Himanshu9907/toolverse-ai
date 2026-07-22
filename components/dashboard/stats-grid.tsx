"use client";

import {
  Bot,
  Heart,
  History,
  TrendingUp,
  Wrench,
} from "lucide-react";

const stats = [
  {
    title: "Total Tools",
    value: "214",
    change: "+12 this week",
    icon: Wrench,
    color: "from-blue-600 to-cyan-500",
    progress: 92,
  },
  {
    title: "AI Usage",
    value: "82%",
    change: "+18% this month",
    icon: Bot,
    color: "from-violet-600 to-fuchsia-500",
    progress: 82,
  },
  {
    title: "Favorites",
    value: "38",
    change: "+4 today",
    icon: Heart,
    color: "from-pink-500 to-rose-500",
    progress: 64,
  },
  {
    title: "History",
    value: "124",
    change: "16 today",
    icon: History,
    color: "from-emerald-500 to-green-600",
    progress: 74,
  },
];

export function StatsGrid() {
  return (
    <section className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">

      {stats.map((stat) => {

        const Icon = stat.icon;

        return (

          <div
            key={stat.title}
            className="group relative overflow-hidden rounded-3xl border bg-card p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
          >

            {/* Glow */}

            <div
              className={`absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-to-br ${stat.color} opacity-10 blur-3xl transition-all duration-500 group-hover:scale-150`}
            />

            {/* Icon */}

            <div
              className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${stat.color} text-white shadow-lg`}
            >

              <Icon className="h-7 w-7" />

            </div>

            <p className="mt-6 text-sm font-medium text-muted-foreground">

              {stat.title}

            </p>

            <h2 className="mt-2 text-4xl font-bold">

              {stat.value}

            </h2>

            <div className="mt-4 flex items-center gap-2 text-sm font-medium text-green-600">

              <TrendingUp className="h-4 w-4" />

              {stat.change}

            </div>

            {/* Progress */}
                        <div className="mt-6">

              <div className="h-2 overflow-hidden rounded-full bg-muted">

                <div
                  className={`h-full rounded-full bg-gradient-to-r ${stat.color}`}
                  style={{ width: `${stat.progress}%` }}
                />

              </div>

              <div className="mt-2 flex items-center justify-between text-xs text-muted-foreground">

                <span>Progress</span>

                <span>{stat.progress}%</span>

              </div>

            </div>

          </div>

        );

      })}

    </section>

  );

}