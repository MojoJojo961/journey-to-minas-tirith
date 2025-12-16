import React from "react";

export default function Scene({ next }) {
  return (
    <section className="scene">
      <h1>Welcome, Brave Traveler</h1>
      <button onClick={next}>Begin Journey</button>
    </section>
  );
}
