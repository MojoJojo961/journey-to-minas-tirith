import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

export default function Gates({ next }) {
  const gates = useGLTF("/models/gates.glb");
  const leftGate = useRef(), rightGate = useRef();

  useFrame(() => {
    if (leftGate.current.rotation.y > -Math.PI/2)
      leftGate.current.rotation.y -= 0.01;
    if (rightGate.current.rotation.y < Math.PI/2)
      rightGate.current.rotation.y += 0.01;
  });

  return (
    <div className="scene">
      <Canvas camera={{ position: [0, 3, 10] }}>
        <ambientLight intensity={0.4} />
        <primitive object={gates.scene.getObjectByName("LeftGate")} ref={leftGate}/>
        <primitive object={gates.scene.getObjectByName("RightGate")} ref={rightGate}/>
      </Canvas>
      <button onClick={next}>Enter the City</button>
    </div>
  );
}
