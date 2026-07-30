// "use client";

// import { useAIGenerator } from "@/hooks/use-ai-generator";

// import { InputPanel } from "./input-panel";
// import { OutputPanel } from "./output-panel";
// import { Toolbar } from "./toolbar";

// export function AITextGenerator() {

//   const {

//     loading,

//     input,

//     output,

//     updateInput,

//     generate,

//     clear,

//     copy,

//     download,

//   } = useAIGenerator();

//   return (

//     <div className="space-y-6">

//       <div className="grid gap-6 lg:grid-cols-2">

//         {/* Left */}

//         <InputPanel

//           input={input}

//           loading={loading}

//           onChange={updateInput}

//           onGenerate={generate}

//           onClear={clear}

//         />

//         {/* Right */}

//         <div className="space-y-4">

//           <Toolbar

//             loading={loading}

//             disabled={!output.text}

//             onCopy={copy}

//             onDownload={download}

//             onClear={clear}

//             onRegenerate={generate}

//           />

//           <OutputPanel

//             output={output}

//             loading={loading}

//             onCopy={copy}

//             onDownload={download}

//           />

//         </div>

//       </div>

//     </div>

//   );

// }

// export default AITextGenerator;

"use client";

import { useAIGenerator } from "@/hooks/use-ai-generator";

import { InputPanel } from "./input-panel";
import { OutputPanel } from "./output-panel";
import { Toolbar } from "./toolbar";

export function AITextGenerator() {
  const {
    loading,
    input,
    output,
    updateInput,
    generate,
    clear,
    copy,
    download,
  } = useAIGenerator();

  return (
    <section className="mx-auto w-full max-w-7xl">
      <div className="grid gap-8 lg:grid-cols-[430px_1fr] items-start">
        {/* LEFT PANEL */}
        {/* <div className="sticky top-24"> */}
        <div className="lg:sticky lg:top-24">
          <InputPanel
            input={input}
            loading={loading}
            onChange={updateInput}
            onGenerate={generate}
            onClear={clear}
          />
        </div>

        {/* RIGHT PANEL */}
        <div className="space-y-5">
          <Toolbar
            loading={loading}
            disabled={!output.text}
            onCopy={copy}
            onDownload={download}
            onClear={clear}
            onRegenerate={generate}
          />

          <OutputPanel
            output={output}
            loading={loading}
            onCopy={copy}
            onDownload={download}
          />
        </div>
      </div>
    </section>
  );
}

export default AITextGenerator;