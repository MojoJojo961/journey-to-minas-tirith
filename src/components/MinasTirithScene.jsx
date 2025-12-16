import React from "react";
import { motion } from "framer-motion";
import Countdown from "./Countdown";

export default function MinasTirithScene({ next }) {
  return (
    <motion.div
      className="scene"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <img src="/images/minas-tirith.png" alt="Minas Tirith" />
      <motion.h2
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Long has the White City stood —
      </motion.h2>
      <motion.p
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        a guardian of hope, a witness to fate.<br />
        Today, it opens its gates… not for war, but for love.
      </motion.p>
      <Countdown targetDate="2026-12-14T10:00:00" />
      <motion.button whileHover={{ scale: 1.1 }} onClick={next}>
        Next
      </motion.button>
    </motion.div>
  );
}
