import React from "react";

export default function Blessing({ next }) {
  return (
    <div className="scene">
      <img src="/images/ganesh.png" alt="Lord Ganesh" />
      <h2>Blessings from the Divine</h2>
      <button onClick={next}>RSVP</button>
    </div>
  );
}
