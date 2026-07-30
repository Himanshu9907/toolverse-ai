"use client";

import {
  Download,
  RefreshCw,
  RotateCcw,
} from "lucide-react";

import { Button } from "@/components/ui/button";

interface ToolbarProps {
  loading: boolean;
  disabled?: boolean;

  onDownload: () => void;
  onClear: () => void;
  onRegenerate: () => void;
}

export function Toolbar({
  loading,
  disabled = false,
  onDownload,
  onClear,
  onRegenerate,
}: ToolbarProps) {
  return (
    <div className="flex flex-wrap gap-3">

      <Button
        variant="outline"
        onClick={onDownload}
        disabled={disabled || loading}
      >
        <Download className="mr-2 h-4 w-4" />

        Download All

      </Button>

      <Button
        variant="outline"
        onClick={onRegenerate}
        disabled={loading}
      >
        <RefreshCw
          className={`mr-2 h-4 w-4 ${
            loading ? "animate-spin" : ""
          }`}
        />

        Generate Again

      </Button>

      <Button
        variant="destructive"
        onClick={onClear}
        disabled={loading}
      >
        <RotateCcw className="mr-2 h-4 w-4" />

        Clear

      </Button>

    </div>
  );
}

export default Toolbar;