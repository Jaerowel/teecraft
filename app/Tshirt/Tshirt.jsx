"use client";

import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import FileUpload from "./tshirt components/Fileupload";
import TShirtModel from "./tshirt components/Tshirtmodel";
import Lighting from "./tshirt components/lighting";
const TShirtDesigner = () => {
  const [color, setColor] = useState("#ffffff");

  // NEW: Full and decal texture states
  const [fullTexture, setFullTexture] = useState(null);
  const [decalTexture, setDecalTexture] = useState(null);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <header className="text-center mb-6">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-2">
          T-Shirt Designer
        </h1>
        <p className="text-gray-500">
          Upload an image or pick a color to customize your T-shirt!
        </p>
      </header>

      {/* File Upload */}
      <FileUpload
        setFullTexture={setFullTexture}
        setDecalTexture={setDecalTexture}
      />

      {/* Color Picker */}
      <div className="mt-4 flex items-center gap-2">
        <label className="text-gray-700 font-medium">Pick Color:</label>
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className="w-10 h-10 p-0 border border-gray-300 rounded cursor-pointer"
        />
      </div>

      {/* 3D T-Shirt Preview */}
      <div className="w-full max-w-4xl h-[500px] bg-white shadow-lg rounded-xl mt-6">
        <Canvas camera={{ position: [0, 0, 3] }}>
          <Lighting />
          <TShirtModel
            color={color}
            fullTexture={fullTexture}
            decalTexture={decalTexture}
          />
        </Canvas>
      </div>
    </div>
  );
};

export default TShirtDesigner;
