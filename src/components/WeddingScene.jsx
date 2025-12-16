import React from "react";
import { motion } from "framer-motion";
import QRCode from "react-qr-code";

export default function WeddingScene({ next }) {
  return (
    <motion.div
      className="scene"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h1
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Aarav & Leela
      </motion.h1>
      <motion.p
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        14 December 2026
      </motion.p>

      <motion.img
        src="/images/dancers.png"
        alt="Dancers"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      />

      <motion.img
        src="/images/ganesh.png"
        alt="Lord Ganesh"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      />

      <motion.img
        src="/images/fireworks.png"
        alt="Fireworks"
        className="fireworks"
      />

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2 }}
      >
        <QRCode value="https://your-rsvp-link.com" size={180} />
      </motion.div>

      <motion.button
        whileHover={{ scale: 1.1 }}
        onClick={next}
        style={{ marginTop: "30px" }}
      >
        RSVP
      </motion.button>
    </motion.div>
  );
}
