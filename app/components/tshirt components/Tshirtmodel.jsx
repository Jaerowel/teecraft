"use client";

import { useLoader, useThree } from "@react-three/fiber";
import { useEffect, useMemo } from "react";
import { TextureLoader, MeshStandardMaterial } from "three";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";

export default function TShirtModel({ color, texture }) {
  // Load the 3D T-Shirt model
  const tShirtModel = useLoader(OBJLoader, "/assets/oversized-tshirt.obj");

  // ✅ Fix: Use useMemo to avoid breaking Hooks order
  const baseTexture = useMemo(() => {
    return texture ? new TextureLoader().load(texture) : null;
  }, [texture]);

  useEffect(() => {
    if (tShirtModel) {
      tShirtModel.traverse((child) => {
        if (child.isMesh) {
          child.material = new MeshStandardMaterial({
            color: color || "#ffffff", // Base color
            map: baseTexture || null,  // Apply uploaded texture if available
          });
        }
      });
    }
  }, [tShirtModel, color, baseTexture]);

  return (
    <primitive 
      object={tShirtModel} 
      position={[0, -5.5, 0]} 
      rotation={[0, Math.PI, 0]} 
      scale={4.5} 
    />
  );
}
