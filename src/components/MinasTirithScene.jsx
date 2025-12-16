import React, { useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import Gates from "./Gates";
import { Howl } from "howler";

export default function MinasTirithScene({ next }) {
  useEffect(() => {
    const gandalf = new Howl({ src: ["/audio/gandalf.mp3"] });
    gandalf.play();
    gandalf.on("end", () => next());
  }, [next]);

  const { scene: minas } = useGLTF("/models/minas-tirith.glb");

  return (
    <div className="minas-tirith-scene">
      <Canvas camera={{ position: [0, 10, 30] }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 20, 10]} />
        <primitive object={minas} />
        <Gates />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}
