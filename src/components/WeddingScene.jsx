import React from "react";
import QRCode from "react-qr-code";

export default function WeddingScene({ next }) {
  return (
    <div className="wedding-scene scene">
      <h1>Aarav & Leela</h1>
      <p>14 December 2026</p>
      <img src="/images/dancers.png" alt="Dancers" style={{ width: "60%", maxWidth: 250 }} />
      <img src="/images/ganesh.png" alt="Lord Ganesh" style={{ width: "50%", maxWidth: 200 }} />
      <img src="/images/fireworks.png" alt="Fireworks" style={{ width: "80%", maxWidth: 300 }} />
      <QRCode value="https://your-rsvp-link.com" size={180} />
      <button onClick={next}>RSVP</button>
    </div>
  );
}
