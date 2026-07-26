// "use client";

// import { useState } from "react";
// import { Lock, Unlock, Download } from "lucide-react";

// export function ResizeControls() {
//   const [lockRatio, setLockRatio] = useState(true);

//   return (
//     <div className="rounded-3xl border bg-card p-6">

//       <h3 className="text-xl font-bold">
//         Resize Settings
//       </h3>

//       <p className="mt-1 text-sm text-muted-foreground">
//         Choose your desired image dimensions.
//       </p>

//       {/* Width & Height */}

//       <div className="mt-6 grid gap-4 sm:grid-cols-2">

//         <div>
//           <label className="mb-2 block text-sm font-medium">
//             Width (px)
//           </label>

//           <input
//             type="number"
//             placeholder="1920"
//             className="h-12 w-full rounded-xl border bg-background px-4 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
//           />
//         </div>

//         <div>
//           <label className="mb-2 block text-sm font-medium">
//             Height (px)
//           </label>

//           <input
//             type="number"
//             placeholder="1080"
//             className="h-12 w-full rounded-xl border bg-background px-4 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
//           />
//         </div>

//       </div>

//       {/* Lock Ratio */}

//       <button
//         onClick={() => setLockRatio(!lockRatio)}
//         className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl border py-3 transition hover:bg-muted"
//       >
//         {lockRatio ? (
//           <>
//             <Lock className="h-4 w-4" />
//             Aspect Ratio Locked
//           </>
//         ) : (
//           <>
//             <Unlock className="h-4 w-4" />
//             Aspect Ratio Unlocked
//           </>
//         )}
//       </button>

//       {/* Percentage */}

//       <div className="mt-6">
//         <label className="mb-3 block text-sm font-medium">
//           Quick Resize
//         </label>

//         <div className="grid grid-cols-4 gap-2">

//           {["25%", "50%", "75%", "100%"].map((item) => (
//             <button
//               key={item}
//               className="rounded-xl border py-2 text-sm transition hover:bg-primary hover:text-white"
//             >
//               {item}
//             </button>
//           ))}

//         </div>
//       </div>

//       {/* Output Format */}

//       <div className="mt-6">
//         <label className="mb-2 block text-sm font-medium">
//           Output Format
//         </label>

//         <select className="h-12 w-full rounded-xl border bg-background px-4 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20">

//           <option>Keep Original</option>
//           <option>JPG</option>
//           <option>PNG</option>
//           <option>WEBP</option>

//         </select>
//       </div>

//       {/* Resize Button */}

//       <button className="mt-8 flex h-12 w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 via-violet-600 to-cyan-500 font-semibold text-white shadow-lg transition hover:scale-[1.02]">

//         <Download className="h-5 w-5" />

//         Resize Image

//       </button>

//     </div>
//   );
// }

// "use client";

// import { Lock, Unlock, Download } from "lucide-react";
// import { useState } from "react";

// // interface ResizeControlsProps {
// //   width: number;
// //   height: number;
// //   setWidth: (value: number) => void;
// //   setHeight: (value: number) => void;
// // }

// // interface ResizeControlsProps {
// //   width: number;
// //   height: number;
// //   setWidth: (value: number) => void;
// //   setHeight: (value: number) => void;
// //   onResize: () => void;
// //   isProcessing: boolean;
// //   canResize: boolean;
// // }

// interface ResizeControlsProps {
//   width: number;
//   height: number;

//   setWidth: (value: number) => void;
//   setHeight: (value: number) => void;

//   lockRatio: boolean;
//   setLockRatio: (value: boolean) => void;

//   onResize: () => void;
//   isProcessing: boolean;
//   canResize: boolean;
// }

// export function ResizeControls({
//   width,
//   height,
//   setWidth,
//   setHeight,
//   onResize,
//   isProcessing,
//   canResize,
// }: ResizeControlsProps) {
  

//   return (
//     <div className="rounded-3xl border bg-card p-6">

//       <h3 className="text-xl font-bold">
//         Resize Settings
//       </h3>

//       <p className="mt-1 text-sm text-muted-foreground">
//         Customize your image size.
//       </p>

//       <div className="mt-6 grid gap-4 sm:grid-cols-2">

//         <div>
//           <label className="mb-2 block text-sm font-medium">
//             Width
//           </label>

//           <input
//             type="number"
//             value={width || ""}
//             onChange={(e) => setWidth(Number(e.target.value))}
//             className="h-12 w-full rounded-xl border bg-background px-4 outline-none focus:border-primary"
//           />
//         </div>

//         <div>
//           <label className="mb-2 block text-sm font-medium">
//             Height
//           </label>

//           <input
//             type="number"
//             value={height || ""}
//             onChange={(e) => setHeight(Number(e.target.value))}
//             className="h-12 w-full rounded-xl border bg-background px-4 outline-none focus:border-primary"
//           />
//         </div>

//       </div>

//       <button
//         onClick={() => setLockRatio(!lockRatio)}
//         className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl border py-3 transition hover:bg-muted"
//       >
//         {lockRatio ? (
//           <>
//             <Lock className="h-4 w-4" />
//             Aspect Ratio Locked
//           </>
//         ) : (
//           <>
//             <Unlock className="h-4 w-4" />
//             Aspect Ratio Unlocked
//           </>
//         )}
//       </button>

//       {/* <button
//         disabled
//         className="mt-8 flex h-12 w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 via-violet-600 to-cyan-500 font-semibold text-white opacity-70"
//       >
//         <Download className="h-5 w-5" />
//         Resize Image
//       </button> */}

//       <button
//   onClick={onResize}
//   disabled={!canResize || isProcessing}
//   className="mt-8 flex h-12 w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 via-violet-600 to-cyan-500 font-semibold text-white shadow-lg transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-50"
// >
//   <Download className="h-5 w-5" />

//   {isProcessing ? "Resizing..." : "Resize Image"}
// </button>

//     </div>
//   );
// }

"use client";

import { Lock, Unlock, Download } from "lucide-react";

interface ResizeControlsProps {
  width: number;
  height: number;

  setWidth: (value: number) => void;
  setHeight: (value: number) => void;

  lockRatio: boolean;
  setLockRatio: (value: boolean) => void;

  onResize: () => void;
  onDownload: () => void;

  isProcessing: boolean;
  canResize: boolean;
}

export function ResizeControls({
  width,
  height,
  setWidth,
  setHeight,
  lockRatio,
  setLockRatio,
  onResize,
  onDownload,
  isProcessing,
  canResize,
}: ResizeControlsProps) {
  return (
    // <div className="rounded-3xl border bg-card p-6">
    // <div className="w-full rounded-2xl border bg-card p-5 lg:sticky lg:top-24 lg:rounded-3xl lg:p-6">
    <div className="w-full rounded-2xl border bg-card p-5 lg:rounded-3xl lg:p-6">

      <h3 className="text-xl font-bold">
        Resize Settings
      </h3>

      <p className="mt-1 text-sm text-muted-foreground">
        Customize your image size.
      </p>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

        {/* Width */}

        <div>

          <label className="mb-2 block text-sm font-medium">
            Width
          </label>

          <input
            type="number"
            value={width || ""}
            onChange={(e) => setWidth(Number(e.target.value))}
            className="h-12 w-full rounded-xl border bg-background px-4 outline-none transition focus:border-primary"
          />

        </div>

        {/* Height */}

        <div>

          <label className="mb-2 block text-sm font-medium">
            Height
          </label>

          <input
            type="number"
            value={height || ""}
            onChange={(e) => setHeight(Number(e.target.value))}
            className="h-12 w-full rounded-xl border bg-background px-4 outline-none transition focus:border-primary"
          />

        </div>

      </div>

      {/* Aspect Ratio */}

      <button
        type="button"
        onClick={() => setLockRatio(!lockRatio)}
        className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl border py-3 transition hover:bg-muted"
      >
        {lockRatio ? (
          <>
            <Lock className="h-4 w-4" />
            Aspect Ratio Locked
          </>
        ) : (
          <>
            <Unlock className="h-4 w-4" />
            Aspect Ratio Unlocked
          </>
        )}
      </button>

      {/* Resize */}

      <button
        type="button"
        onClick={onResize}
        disabled={!canResize || isProcessing}
        className="mt-8 flex h-11 sm:h-12 w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 via-violet-600 to-cyan-500 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-50"
      >
        <Download className="h-5 w-5" />

        {isProcessing ? "Resizing..." : "Resize Image"}
      </button>

      <button
  type="button"
  onClick={onDownload}
  disabled={!canResize}
  className="mt-4 flex h-12 w-full items-center justify-center gap-2 rounded-2xl border font-semibold transition hover:bg-muted disabled:opacity-50"
>
  <Download className="h-5 w-5" />
  Download Image
</button>

    </div>
  );
}