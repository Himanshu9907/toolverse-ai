"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";

import {
  Search,
  ArrowRight,
  Star,
} from "lucide-react";

import { featuredTools } from "@/config/tools";

interface ToolSearchProps {
  variant?: "hero" | "dashboard";
  autoFocus?: boolean;
}

export function ToolSearch({
  variant = "hero",
  autoFocus = false,
}: ToolSearchProps) {

  const router = useRouter();

  const wrapperRef = useRef<HTMLDivElement>(null);

  const [query, setQuery] = useState("");

  const [focused, setFocused] = useState(false);

  const [activeIndex, setActiveIndex] = useState(-1);

  const results = useMemo(() => {

    if (!query.trim()) return [];

    const q = query.toLowerCase();

    return featuredTools.filter((tool) =>

      tool.title.toLowerCase().includes(q) ||

      tool.description.toLowerCase().includes(q) ||

      tool.category.toLowerCase().includes(q)

    );

  }, [query]);

  const openTool = (href: string) => {

    router.push(href);

    setFocused(false);

    setQuery("");

  };

  useEffect(() => {

    function handleClickOutside(e: MouseEvent) {

      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(e.target as Node)
      ) {

        setFocused(false);

      }

    }

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () =>

      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );

  }, []);
    const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {

    if (!results.length) return;

    switch (e.key) {

      case "ArrowDown":

        e.preventDefault();

        setActiveIndex((prev) =>
          prev < results.length - 1
            ? prev + 1
            : 0
        );

        break;

      case "ArrowUp":

        e.preventDefault();

        setActiveIndex((prev) =>
          prev > 0
            ? prev - 1
            : results.length - 1
        );

        break;

      case "Enter":

        e.preventDefault();

        if (activeIndex >= 0) {

          openTool(results[activeIndex].href);

        } else if (results.length > 0) {

          openTool(results[0].href);

        }

        break;

      case "Escape":

        setFocused(false);

        break;

    }

  };

  return (

    <div
      ref={wrapperRef}
      // className={`relative w-full ${
      //   variant === "hero"
      //     ? "max-w-4xl"
      //     : "max-w-xl"
      // }`}
      className="relative w-full"
    >

      {/* Search Box */}

      <div
        className={`flex flex-col rounded-2xl border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)] transition-all duration-300 dark:border-slate-800 dark:bg-slate-900

        ${
          variant === "hero"
            ? "p-3 md:flex-row md:items-center"
            : "p-2"
        }`}
      >

        <div className="relative flex-1">

          <Search className="absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

          <input
            autoFocus={autoFocus}
            value={query}
            onFocus={() => {
              setFocused(true);
              setActiveIndex(-1);
            }}
            onChange={(e) => {
              setQuery(e.target.value);
              setFocused(true);
              setActiveIndex(-1);
            }}
            onKeyDown={handleKeyDown}
            placeholder="Search image tools, PDF tools, AI tools..."
            className="h-14 w-full rounded-xl border-0 bg-transparent pl-14 pr-4 text-base outline-none placeholder:text-slate-400 dark:text-white"
          />

        </div>

        {variant === "hero" && (

          <button
            onClick={() => {

              if (results.length > 0) {

                openTool(results[0].href);

              }

            }}
            className="mt-3 flex h-14 items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 via-violet-600 to-cyan-500 min-w-[180px] px-8 font-semibold text-white transition hover:scale-[1.02] md:mt-0"
          >

            Search

            <ArrowRight className="ml-2 h-5 w-5"/>

          </button>

        )}

      </div>

            {/* Search Results */}

      {focused && query.trim().length > 0 && (

        <div className="absolute left-0 right-0 top-full z-50 mt-3 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl dark:border-slate-800 dark:bg-slate-900">

          {results.length > 0 ? (

            <div className="max-h-[420px] overflow-y-auto p-3">

              {results.map((tool, index) => {

                const Icon = tool.icon;

                return (

                  <button
                    key={tool.id}
                    onClick={() => openTool(tool.href)}
                    className={`group flex w-full items-center gap-5 rounded-2xl p-4 text-left transition-all duration-300

                    ${
                      activeIndex === index
                        ? "bg-blue-50 dark:bg-slate-800"
                        : "hover:bg-slate-100 dark:hover:bg-slate-800"
                    }`}
                  >

                    {/* Icon */}

                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 via-violet-600 to-cyan-500 text-white shadow-lg">

                      <Icon className="h-7 w-7"/>

                    </div>

                    {/* Content */}

                    <div className="min-w-0 flex-1">

                      <div className="flex flex-wrap items-center gap-2">

                        <h3 className="truncate font-semibold text-slate-900 dark:text-white">

                          {tool.title}

                        </h3>

                        {tool.premium && (

                          <span className="rounded-full bg-amber-100 px-2 py-1 text-[10px] font-bold text-amber-700 dark:bg-amber-500/20 dark:text-amber-300">

                            PRO

                          </span>

                        )}

                      </div>

                      <p className="mt-1 line-clamp-2 text-sm text-slate-500 dark:text-slate-400">

                        {tool.description}

                      </p>

                      <div className="mt-3 flex flex-wrap items-center gap-3">

                        <span className="rounded-full bg-primary/10 px-2 py-1 text-xs font-medium text-primary">

                          {tool.category}

                        </span>

                        <div className="flex items-center gap-1">

                          <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400"/>

                          <span className="text-xs text-slate-500">

                            4.9

                          </span>

                        </div>

                      </div>

                    </div>

                    {/* Arrow */}

                    <ArrowRight className="h-5 w-5 shrink-0 text-slate-400 transition-transform duration-300 group-hover:translate-x-1"/>

                  </button>

                );

              })}

            </div>
                      ) : (

            <div className="flex flex-col items-center justify-center px-8 py-12">

              <Search className="h-12 w-12 text-slate-300 dark:text-slate-600" />

              <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">

                No tools found

              </h3>

              <p className="mt-2 max-w-sm text-center text-sm text-slate-500 dark:text-slate-400">

                Try searching for Compress Image, Merge PDF,
                Background Remover, AI Writer or OCR Scanner.

              </p>

            </div>

          )}

        </div>

      )}

    </div>

  );

}

