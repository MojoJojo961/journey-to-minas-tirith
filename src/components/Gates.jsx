import React, { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";

export default function Gates() {
  const left = useRef();
  const right = useRef();
  useEffect(() => {
    let progress = 0;
    const interval = setInterval(() => {
      if (progress < 1) {
        left.current.position.x -= 0.05;
        right.current.position.x += 0.05;
        progress += 0.05;
      } else clearInterval(interval);
    }, 50);
  }, []);
  return (
    <>
      <mesh ref={left} position={[-2, 0, 0]}>
        <boxGeometry args={[1, 5, 0.5]} />
        <meshStandardMaterial color="silver" />
      </mesh>
      <mesh ref={right} position={[2, 0, 0]}>
        <boxGeometry args={[1, 5, 0.5]} />
        <meshStandardMaterial color="silver" />
      </mesh>
    </>
  );
}
