import QRCode from "qrcode.react";

export default function WeddingReveal({ next }) {
  return (
    <div className="scene">
      <img src="/images/fireworks.png" className="fireworks" alt="Fireworks" />
      <h1 className="elvish">Aarav & Leela</h1>
      <p>14 December 2026</p>
      <button onClick={next}>Blessings Await</button>
    </div>
  );
}
