import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Html } from "@react-three/drei";

export default function HorseRide({ next }) {
  const { scene: horse } = useGLTF("/models/horse.glb");

  return (
    <div className="horse-ride">
      <Canvas camera={{ position: [0, 5, 20] }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 10]} />
        <primitive object={horse} />
        <OrbitControls enableZoom={false} />
      </Canvas>
      <Html>
        <button onClick={next}>Ride to Minas Tirith</button>
      </Html>
    </div>
  );
}
