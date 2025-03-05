"use client";

import { useLoader } from "@react-three/fiber";
import { useEffect, useState } from "react";
import { TextureLoader, MeshStandardMaterial } from "three";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";

export default function TShirtModel({ texture }) {
  const tShirtModel = useLoader(OBJLoader, "/assets/oversized-tshirt.obj");
  const [loadedTexture, setLoadedTexture] = useState(null);

  // Load the texture dynamically when a new file is uploaded
  useEffect(() => {
    if (texture) {
      const textureLoader = new TextureLoader();
      textureLoader.load(texture, (loaded) => {
        setLoadedTexture(loaded);
      });
    }
  }, [texture]);

  // Apply texture to all materials in the T-shirt model
  useEffect(() => {
    if (tShirtModel && loadedTexture) {
      tShirtModel.traverse((child) => {
        if (child.isMesh) {
          child.material = new MeshStandardMaterial({ map: loadedTexture });
        }
      });
    }
  }, [tShirtModel, loadedTexture]);

  return (
    <primitive 
      object={tShirtModel} 
      position={[0, -5.5, 0]} // Adjust position to center
      rotation={[0, Math.PI, 0]} // Face the camera
      scale={4.5} 
    />
  );
}
