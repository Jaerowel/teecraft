import React from "react";
import { OrbitControls } from "@react-three/drei";

const Lighting = () => {
  return (
    <>
      {/* Hemisphere Light */}
      <hemisphereLight
        intensity={1}
        skyColor="#ffffff"
        groundColor="#444444"
      />

      {/* Ambient Light */}
      <ambientLight intensity={0.5} />

      {/* Directional Lights */}
      <directionalLight
        position={[0, 0, 5]}
        intensity={1.5}
      />
      <directionalLight
        position={[0, 0, -5]}
        intensity={0.8}
      />

      {/* Point Light */}
      <pointLight
        position={[0, 1, 2]}
        intensity={0.5}
      />

      {/* Orbit Controls */}
      <OrbitControls
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 2}
        enablePan={false}
      />
    </>
  );
};

export default Lighting;
