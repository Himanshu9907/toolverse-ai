"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export function Floating({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <motion.div
      animate={{
        y: [0, -12, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
}