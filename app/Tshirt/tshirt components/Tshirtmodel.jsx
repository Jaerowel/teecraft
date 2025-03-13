"use client";

import * as THREE from "three";
import { useLoader } from "@react-three/fiber";
import { useEffect, useMemo, useRef } from "react";
import { TextureLoader, MeshStandardMaterial } from "three";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { DecalGeometry } from "three/examples/jsm/geometries/DecalGeometry";

export default function TShirtModel({ color, fullTexture, decalTexture }) {
  const groupRef = useRef();

  // Load the 3D T-Shirt OBJ model
  const tShirtModel = useLoader(OBJLoader, "/assets/oversized-tshirt.obj");

  // Load the full wrap texture if provided
  const baseTexture = useMemo(() => {
    if (!fullTexture) return null;
    return new TextureLoader().load(fullTexture);
  }, [fullTexture]);

  // Load the decal texture if provided
  const decalTex = useMemo(() => {
    if (!decalTexture) return null;
    return new TextureLoader().load(decalTexture);
  }, [decalTexture]);

  useEffect(() => {
    if (!tShirtModel) return;

    tShirtModel.traverse((child) => {
      if (child.isMesh) {
        // Apply base material with color or full wrap texture
        child.material = new MeshStandardMaterial({
          color: color || "#ffffff",
          map: baseTexture || null,
        });

        // If a decal texture is provided, project it onto the mesh
        if (decalTex) {
          const decalGeometry = new DecalGeometry(
            child,                    // Target mesh
            new THREE.Vector3(0, 0, 0.5), // Position on the chest
            new THREE.Euler(0, 0, 0),     // Orientation
            new THREE.Vector3(1, 1, 1)    // Size of the decal
          );

          const decalMaterial = new MeshStandardMaterial({
            map: decalTex,
            transparent: true,
            depthTest: true,
          });

          const decalMesh = new THREE.Mesh(decalGeometry, decalMaterial);
          groupRef.current.add(decalMesh);
        }
      }
    });
  }, [tShirtModel, color, baseTexture, decalTex]);

  return (
    <group ref={groupRef}>
      <primitive
        object={tShirtModel}
        position={[0, -5.5, 0]}
        rotation={[0, Math.PI/2.1, 0]}
        scale={4.5}
      />
    </group>
  );
}
