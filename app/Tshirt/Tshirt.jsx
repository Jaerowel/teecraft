"use client";

import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import FileUpload from "./tshirt components/Fileupload";
import TShirtModel from "./tshirt components/Tshirtmodel";
import Lighting from "./tshirt components/lighting";

const TShirtDesigner = () => {
  const [color, setColor] = useState("#ffffff");
  const [fullTexture, setFullTexture] = useState(null);
  const [decalTexture, setDecalTexture] = useState(null);

  return (
    <div className="relative min-h-screen overflow-hidden bg-transparent">
      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row min-h-screen w-full gap-8 p-8">
        {/* 3D T-Shirt Preview */}
        <div className="w-full md:w-2/3 h-[80vh] backdrop-blur-lg shadow-2xl rounded-xl border border-white/20 bg-transparent">
          <Canvas camera={{ position: [0, 0, 3] }}>
            <Lighting />
            <TShirtModel
              color={color}
              fullTexture={fullTexture}
              decalTexture={decalTexture}
            />
          </Canvas>
        </div>

        {/* Controls Section */}
        <div className="w-full md:w-1/3 space-y-8">
          <header className="text-center md:text-left">
            <h1 className="text-5xl font-extrabold text-white mb-4">
              T-Shirt Designer
            </h1>
            <p className="text-xl text-white/80">
              Upload an image or pick a color to customize your T-shirt!
            </p>
          </header>

          {/* File Upload */}
          <div className="bg-transparent backdrop-blur-lg p-6 rounded-xl shadow-lg border border-white/20">
            <FileUpload
              setFullTexture={setFullTexture}
              setDecalTexture={setDecalTexture}
            />

            {/* Color Picker */}
            <div className="mt-6 flex items-center gap-4">
              <label className="text-xl text-white font-medium">
                Pick Color:
              </label>
              <input
                type="color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
                className="w-16 h-16 p-0 border-2 border-white/30 rounded-lg cursor-pointer bg-transparent"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TShirtDesigner;
