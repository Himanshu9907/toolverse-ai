"use client";

import {
  Wand2,
  Download,
  RotateCcw,
  Loader2,
} from "lucide-react";

interface ControlsProps {
  canProcess: boolean;
  canDownload: boolean;
  loading: boolean;

  onRemove: () => void;
  onDownload: () => void;
}

export function Controls({
  canProcess,
  canDownload,
  loading,
  onRemove,
  onDownload,
}: ControlsProps) {
  return (
    <div className="rounded-3xl border bg-card p-6">

      <h2 className="text-xl font-bold">
        AI Controls
      </h2>

      <p className="mt-1 text-sm text-muted-foreground">
        Remove image background with one click.
      </p>

      {/* Remove Button */}

      <button
        type="button"
        onClick={onRemove}
        disabled={!canProcess || loading}
        className="mt-8 flex h-12 w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 via-violet-600 to-cyan-500 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-50"
      >
        {loading ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" />
            Removing...
          </>
        ) : (
          <>
            <Wand2 className="h-5 w-5" />
            Remove Background
          </>
        )}
      </button>

      {/* Download */}

      <button
        type="button"
        onClick={onDownload}
        disabled={!canDownload}
        className="mt-4 flex h-12 w-full items-center justify-center gap-2 rounded-2xl border font-semibold transition hover:bg-muted disabled:cursor-not-allowed disabled:opacity-50"
      >
        <Download className="h-5 w-5" />
        Download PNG
      </button>

      {/* Reset */}

      <button
        type="button"
        onClick={() => window.location.reload()}
        className="mt-4 flex h-12 w-full items-center justify-center gap-2 rounded-2xl border font-semibold transition hover:bg-muted"
      >
        <RotateCcw className="h-5 w-5" />
        Reset
      </button>

      {/* Tips */}

      <div className="mt-8 rounded-2xl bg-muted/40 p-4">

        <h3 className="font-semibold">
          Tips
        </h3>

        <ul className="mt-3 space-y-2 text-sm text-muted-foreground">

          <li>
            • Use high-resolution images for better quality.
          </li>

          <li>
            • PNG images preserve transparency.
          </li>

          <li>
            • Works best with people, products and objects.
          </li>

        </ul>

      </div>

    </div>
  );
}