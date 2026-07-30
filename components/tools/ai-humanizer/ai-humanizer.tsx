"use client";

import { useAIHumanizer } from "@/hooks/use-ai-humanizer";

import { InputPanel } from "./input-panel";
import { OutputPanel } from "./output-panel";
import { Toolbar } from "./toolbar";

export function AIHumanizer() {
  const {
    loading,

    input,

    output,

    updateInput,

    humanize,

    clear,

    copy,

    download,
  } = useAIHumanizer();

  return (
    <div className="space-y-8">

      <div className="grid gap-8 xl:grid-cols-2">

        {/* Left */}

        <InputPanel
          input={input}
          loading={loading}
          onChange={updateInput}
          onHumanize={humanize}
          onClear={clear}
        />

        {/* Right */}

        <div className="space-y-4">

          <Toolbar
            loading={loading}
            disabled={!output.text}
            onCopy={copy}
            onDownload={download}
            onClear={clear}
            onRegenerate={humanize}
          />

          {/* <OutputPanel
            output={output}
            loading={loading}
            onCopy={copy}
            onDownload={download}
          /> */}
          <OutputPanel
  output={output}
  loading={loading}
  onCopy={copy}
  onDownload={download}
  originalText={input.text}
/>

        </div>

      </div>

    </div>
  );
}

export default AIHumanizer;