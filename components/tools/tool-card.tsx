"use client";

import Link from "next/link";

import {
  ArrowRight,
  Crown,
  Clock,
} from "lucide-react";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { ToolItem } from "@/config/tools";

interface ToolCardProps {
  tool: ToolItem;
}

export function ToolCard({
  tool,
}: ToolCardProps) {

  const Icon = tool.icon;

  return (

    <Card className="group relative overflow-hidden rounded-3xl border bg-background transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-primary/30">

      {/* Badge */}

      <div className="absolute right-4 top-4 flex gap-2">

        {tool.premium && (

          <span className="flex items-center gap-1 rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700 dark:bg-amber-500/20 dark:text-amber-300">

            <Crown className="h-3.5 w-3.5" />

            Pro

          </span>

        )}

        {tool.comingSoon && (

          <span className="flex items-center gap-1 rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700 dark:bg-blue-500/20 dark:text-blue-300">

            <Clock className="h-3.5 w-3.5" />

            Soon

          </span>

        )}

      </div>

      <div className="p-7">

        {/* Icon */}

        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 via-violet-600 to-cyan-500 text-white shadow-lg">

          <Icon className="h-7 w-7" />

        </div>

        {/* Category */}

        <p className="text-xs font-semibold uppercase tracking-wider text-primary">

          {tool.category}

        </p>

        {/* Title */}

        <h3 className="mt-2 text-xl font-bold">

          {tool.title}

        </h3>

        {/* Description */}

        <p className="mt-3 text-sm leading-6 text-muted-foreground">

          {tool.description}

        </p>
                {/* Action */}

        <div className="mt-8">

          {tool.comingSoon ? (

            <Button
              disabled
              className="h-11 w-full rounded-2xl"
              variant="secondary"
            >

              Coming Soon

            </Button>

          ) : (

            <Button
              asChild
              className="group h-11 w-full rounded-2xl"
            >

              <Link
                href={tool.href}
              >

                Open Tool

                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />

              </Link>

            </Button>

          )}

        </div>

      </div>

      {/* Hover Gradient */}

      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">

        <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-blue-600 via-violet-600 to-cyan-500" />

      </div>

    </Card>

  );

}