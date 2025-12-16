import React from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";

export default function HorseRide({ next }) {
  const model = useGLTF("/models/horse.glb");
  return (
    <div className="scene">
      <Canvas camera={{ position: [0, 2, 6] }}>
        <ambientLight intensity={0.4} />
        <primitive object={model.scene} scale={1.2} />
        <OrbitControls enableZoom={false} />
      </Canvas>
      <button onClick={next}>Ride to Minas Tirith</button>
    </div>
  );
}
