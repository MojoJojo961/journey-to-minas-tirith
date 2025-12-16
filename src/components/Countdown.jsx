import React, { useState, useEffect } from "react";

export default function Countdown({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const diff = new Date(targetDate) - now;
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div style={{ fontSize: "1.2em", marginBottom: "20px" }}>
      {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m left
    </div>
  );
}
