// "use client";

// import {
//   Camera,
//   PlaySquare,
//   Users,
//   Briefcase,
//   Monitor,
//   Smartphone,
// } from "lucide-react";

// const presets = [
//   {
//   title: "Instagram Post",
//   size: "1080 × 1080",
//   icon: Camera,
//   color: "from-pink-500 to-orange-500",
// },
// {
//   title: "Instagram Story",
//   size: "1080 × 1920",
//   icon: Smartphone,
//   color: "from-fuchsia-500 to-pink-500",
// },
// {
//   title: "YouTube Thumbnail",
//   size: "1280 × 720",
//   icon: PlaySquare,
//   color: "from-red-500 to-rose-600",
// },
// {
//   title: "Facebook Cover",
//   size: "851 × 315",
//   icon: Users,
//   color: "from-blue-600 to-cyan-500",
// },
// {
//   title: "LinkedIn Post",
//   size: "1200 × 627",
//   icon: Briefcase,
//   color: "from-sky-500 to-blue-600",
// },
// {
//   title: "Desktop Wallpaper",
//   size: "1920 × 1080",
//   icon: Monitor,
//   color: "from-violet-600 to-indigo-600",
// },
// ];

// export function PresetGrid() {
//   return (
//     <div className="rounded-3xl border bg-card p-6">

//       <h3 className="text-xl font-bold">
//         Quick Presets
//       </h3>

//       <p className="mt-1 text-sm text-muted-foreground">
//         Select a popular image size.
//       </p>

//       <div className="mt-6 grid grid-cols-2 gap-4">

//         {presets.map((preset) => {
//           const Icon = preset.icon;

//           return (
//             <button
//               key={preset.title}
//               className="group rounded-2xl border p-4 text-left transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-lg"
//             >
//               <div
//                 className={`flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${preset.color} text-white`}
//               >
//                 <Icon className="h-5 w-5" />
//               </div>

//               <h4 className="mt-4 font-semibold">
//                 {preset.title}
//               </h4>

//               <p className="mt-1 text-sm text-muted-foreground">
//                 {preset.size}
//               </p>
//             </button>
//           );
//         })}

//       </div>

//     </div>
//   );
// }

"use client";

import {
  Camera,
  Smartphone,
  PlaySquare,
  Users,
  Briefcase,
  Monitor,
} from "lucide-react";

interface PresetGridProps {
  setWidth: (value: number) => void;
  setHeight: (value: number) => void;
}

const presets = [
  {
    title: "Instagram",
    width: 1080,
    height: 1080,
    icon: Camera,
    color: "from-pink-500 to-orange-500",
  },
  {
    title: "Story",
    width: 1080,
    height: 1920,
    icon: Smartphone,
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "YouTube",
    width: 1280,
    height: 720,
    icon: PlaySquare,
    color: "from-red-500 to-rose-500",
  },
  {
    title: "Facebook",
    width: 851,
    height: 315,
    icon: Users,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "LinkedIn",
    width: 1200,
    height: 627,
    icon: Briefcase,
    color: "from-sky-500 to-blue-600",
  },
  {
    title: "Desktop",
    width: 1920,
    height: 1080,
    icon: Monitor,
    color: "from-violet-600 to-indigo-600",
  },
];

export function PresetGrid({
  setWidth,
  setHeight,
}: PresetGridProps) {
  return (
    <div className="rounded-3xl border bg-card p-6">

      <h3 className="text-xl font-bold">
        Quick Presets
      </h3>

      <div className="mt-6 grid grid-cols-2 gap-4">

        {presets.map((preset) => {
          const Icon = preset.icon;

          return (
            <button
              key={preset.title}
              onClick={() => {
                setWidth(preset.width);
                setHeight(preset.height);
              }}
              className="rounded-2xl border p-4 text-left transition hover:-translate-y-1 hover:border-primary hover:shadow-lg"
            >
              <div
                className={`flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${preset.color} text-white`}
              >
                <Icon className="h-5 w-5" />
              </div>

              <h4 className="mt-4 font-semibold">
                {preset.title}
              </h4>

              <p className="text-sm text-muted-foreground">
                {preset.width} × {preset.height}
              </p>

            </button>
          );
        })}

      </div>

    </div>
  );
}