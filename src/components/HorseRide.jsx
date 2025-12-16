import React from "react";

export default function HorseRide({ next }) {
  return (
    <div className="horse-ride scene">
      <img src="/images/horse.png" alt="Horse Ride" style={{ width: "80%", maxWidth: 300 }} />
      <button onClick={next}>Ride to Minas Tirith</button>
    </div>
  );
}
