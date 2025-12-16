import React from "react";

export default function MinasTirithScene({ next }) {
  return (
    <div className="minas-tirith-scene scene">
      <img src="/images/minas-tirith.png" alt="Minas Tirith" style={{ width: "80%", maxWidth: 400 }} />
      <h2>Long has the White City stood —</h2>
      <p>a guardian of hope, a witness to fate.<br />
      Today, it opens its gates… not for war, but for love.</p>
      <button onClick={next}>Next</button>
    </div>
  );
}
