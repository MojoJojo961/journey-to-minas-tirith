import React, { useState } from "react";
import Scene from "./components/Scene";
import HorseRide from "./components/HorseRide";
import MinasTirithScene from "./components/MinasTirithScene";
import Gates from "./components/Gates";
import WeddingReveal from "./components/WeddingReveal";
import Blessing from "./components/Blessing";
import RSVP from "./components/RSVP";

export default function App() {
  const [step, setStep] = useState(0);
  const next = () => setStep((s) => s + 1);

  return (
    <div className="app">
      {step === 0 && <Scene next={next} />}
      {step === 1 && <HorseRide next={next} />}
      {step === 2 && <MinasTirithScene next={next} />}
      {step === 3 && <Gates next={next} />}
      {step === 4 && <WeddingReveal next={next} />}
      {step === 5 && <Blessing next={next} />}
      {step === 6 && <RSVP />}
    </div>
  );
}
