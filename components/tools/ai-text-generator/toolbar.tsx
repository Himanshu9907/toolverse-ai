"use client";

import {
  Copy,
  Download,
 RotateCcw,
  RefreshCw,
} from "lucide-react";

import { Button } from "@/components/ui/button";

interface ToolbarProps {

  loading: boolean;

  disabled?: boolean;

  onCopy: () => void;

  onDownload: () => void;

  onClear: () => void;

  onRegenerate: () => void;

}

export function Toolbar({

  loading,

  disabled = false,

  onCopy,

  onDownload,

  onClear,

  onRegenerate,

}: ToolbarProps) {

  return (

    <div className="flex flex-wrap gap-3">

      <Button

        variant="outline"

        onClick={onCopy}

        disabled={disabled || loading}

      >

        <Copy className="mr-2 h-4 w-4" />

        Copy

      </Button>

      <Button

        variant="outline"

        onClick={onDownload}

        disabled={disabled || loading}

      >

        <Download className="mr-2 h-4 w-4" />

        Download

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

        Regenerate

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