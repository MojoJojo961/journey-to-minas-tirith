import React, { useState } from "react";
import SceneWrapper from "./components/SceneWrapper";
import HorseRide from "./components/HorseRide";
import MinasTirithScene from "./components/MinasTirithScene";
import WeddingScene from "./components/WeddingScene";
import RSVP from "./components/RSVP";

export default function App() {
  const [scene, setScene] = useState(0);
  const nextScene = () => setScene(scene + 1);

  return (
    <SceneWrapper>
      {scene === 0 && <HorseRide next={nextScene} />}
      {scene === 1 && <MinasTirithScene next={nextScene} />}
      {scene === 2 && <WeddingScene next={nextScene} />}
      {scene === 3 && <RSVP />}
    </SceneWrapper>
  );
}
