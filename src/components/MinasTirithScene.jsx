import React from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, Environment } from "@react-three/drei";

export default function MinasTirithScene({ next }) {
  const model = useGLTF("/models/minas-tirith.glb");
  return (
    <div className="scene">
      <Canvas camera={{ position: [0, 5, 15] }}>
        <ambientLight intensity={0.5} />
        <primitive object={model.scene} />
        <Environment preset="sunset" />
      </Canvas>
      <button onClick={next}>Approach the Gates</button>
    </div>
  );
}
