"use client";

import { useAIImageGenerator } from "@/hooks/use-ai-image-generator";

import { InputPanel } from "./input-panel";
import { ImageGrid } from "./image-grid";
import { Toolbar } from "./toolbar";

export function AIImageGenerator() {
  const {
    loading,
    input,
    images,

    updateInput,
    generate,

    clear,
    download,
    regenerate,
    randomPrompt,
  } = useAIImageGenerator();

  return (
    <div className="space-y-8">

      <div className="grid gap-8 xl:grid-cols-2">

        {/* LEFT */}

        <InputPanel
          input={input}
          loading={loading}
          onChange={updateInput}
          onGenerate={generate}
          onClear={clear}
          onRandomPrompt={randomPrompt}
        />

        {/* RIGHT */}

        <div className="space-y-5">

          <Toolbar
            loading={loading}
            disabled={images.length === 0}
            onDownload={download}
            onClear={clear}
            onRegenerate={regenerate}
          />

          <ImageGrid
            images={images}
            loading={loading}
            prompt={input.prompt}
          />

        </div>

      </div>

    </div>
  );
}

export default AIImageGenerator;