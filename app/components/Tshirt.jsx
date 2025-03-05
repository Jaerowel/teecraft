"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import TShirtModel from "./tshirt components/Tshirtmodel";
import FileUpload from "./tshirt components/Fileupload";
import { useState } from "react";

export default function Tshirt() {  
  const [texture, setTexture] = useState(null);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-4 text-black">T-Shirt Designer</h1>
      <p className="text-gray-600 mb-4">Upload an image to customize your T-shirt!</p>
      
      {/* Upload Design */}
      <FileUpload setTexture={setTexture} />

      {/* 3D T-Shirt Preview */}
      <div className="w-full h-[500px] bg-white shadow-lg rounded-xl mt-4">
        <Canvas camera={{ position: [0, 0, 3] }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[2, 2, 2]} />
          <OrbitControls 
            enableZoom={false}  
            minPolarAngle={Math.PI / 2} 
            maxPolarAngle={Math.PI / 2} 
          />
          <TShirtModel texture={texture} />
        </Canvas>
      </div>
    </div>
  );
}
