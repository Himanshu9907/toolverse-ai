"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

import {
  Search,
  ArrowRight,
} from "lucide-react";

import { Input } from "@/components/ui/input";
import { ToolCard } from "@/components/tools/tool-card";

import {
  searchTools,
} from "@/config/tools";

export function ToolSearch() {

  const [query, setQuery] = useState("");

  const results = useMemo(() => {

    if (!query.trim()) return [];

    return searchTools(query);

  }, [query]);

  return (

    <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">

      {/* Header */}

      <div className="text-center">

        <h1 className="text-4xl font-bold">

          Search Tools

        </h1>

        <p className="mt-3 text-muted-foreground">

          Find any tool instantly.

        </p>

      </div>

      {/* Search Box */}

      <div className="mx-auto mt-10 max-w-2xl">

        <div className="relative">

          <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />

          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search tools..."
            className="h-14 rounded-2xl pl-12 text-base"
          />

        </div>

      </div>

            {/* Results */}

      <div className="mt-12">

        {!query.trim() ? (

          <div className="rounded-3xl border border-dashed p-12 text-center">

            <Search className="mx-auto h-12 w-12 text-muted-foreground" />

            <h2 className="mt-6 text-2xl font-bold">

              Search your favorite tools

            </h2>

            <p className="mt-3 text-muted-foreground">

              Start typing to instantly find Image, PDF, AI,
              Video and Automation tools.

            </p>

          </div>

        ) : results.length === 0 ? (

          <div className="rounded-3xl border border-dashed p-12 text-center">

            <h2 className="text-2xl font-bold">

              No tools found

            </h2>

            <p className="mt-3 text-muted-foreground">

              Try another keyword.

            </p>

          </div>

        ) : (

          <>

            <div className="mb-8 flex items-center justify-between">

              <h2 className="text-2xl font-bold">

                {results.length} Result{results.length > 1 ? "s" : ""}

              </h2>

              <Link
                href="/tools"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
              >

                View All

                <ArrowRight className="h-4 w-4" />

              </Link>

            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

              {results.map((tool) => (

                <ToolCard
                  key={tool.id}
                  tool={tool}
                />

              ))}

            </div>

          </>

        )}

      </div>

    </section>

  );

}