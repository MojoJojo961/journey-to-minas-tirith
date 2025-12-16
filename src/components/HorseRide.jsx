import React from "react";
import { motion } from "framer-motion";

export default function HorseRide({ next }) {
  return (
    <motion.div
      className="scene"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <h2>Take the horse and ride to Minas Tirith</h2>
      <motion.img
        src="/images/horse.png"
        alt="Horse Ride"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        style={{ width: "80%", maxWidth: 300 }}
      />
      <motion.button whileHover={{ scale: 1.1 }} onClick={next}>
        Ride
      </motion.button>
    </motion.div>
  );
}
