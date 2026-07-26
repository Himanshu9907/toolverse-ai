// "use client";

// import { motion } from "framer-motion";
// import { ReactNode } from "react";

// export function Floating({
//   children,
// }: {
//   children: ReactNode;
// }) {
//   return (
//     <motion.div
//       animate={{
//         y: [0, -12, 0],
//       }}
//       transition={{
//         duration: 4,
//         repeat: Infinity,
//         ease: "easeInOut",
//       }}
//     >
//       {children}
//     </motion.div>
//   );
// }

"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FloatingProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
}

export function Floating({
  children,
  delay = 0,
  duration = 4,
  y = 12,
}: FloatingProps) {
  return (
    <motion.div
      animate={{
        y: [0, -y, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
}