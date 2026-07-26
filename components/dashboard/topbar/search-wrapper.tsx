"use client";

import { AnimatePresence, motion } from "framer-motion";

import { ToolSearch } from "@/components/search/tool-search";

interface Props {
  show: boolean;
}

export function SearchWrapper({
  show,
}: Props) {
  return (
    <AnimatePresence>

      {show && (

        <motion.div
          initial={{
            opacity: 0,
            y: -10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            y: -10,
          }}
          className="border-t bg-background p-4 xl:hidden"
        >

          <ToolSearch
            variant="dashboard"
            autoFocus
          />

        </motion.div>

      )}

    </AnimatePresence>
  );
}