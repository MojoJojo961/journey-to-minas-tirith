import React, { useEffect } from "react";
import { Howl } from "howler";
import QRCode from "react-qr-code";

export default function WeddingScene() {
  useEffect(() => {
    const frodo = new Howl({ src: ["/audio/frodo.mp3"] });
    const shehnai = new Howl({ src: ["/audio/shehnai.mp3"] });
    frodo.play();
    shehnai.play();
  }, []);

  return (
    <div className="wedding-scene">
      <h1 className="elvish-font">Aarav & Leela</h1>
      <p>14 December 2026</p>
      <img src="/images/dancers.png" alt="Bollywood Dancers" />
      <img src="/images/ganesh.png" alt="Lord Ganesh" />
      <img src="/images/fireworks.png" alt="Fireworks" />
      <QRCode value="https://your-rsvp-link.com" size={180} />
    </div>
  );
}
