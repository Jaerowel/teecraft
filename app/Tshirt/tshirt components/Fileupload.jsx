"use client";

import { useState } from "react";

export default function FileUpload({ setFullTexture, setDecalTexture }) {
  const [mode, setMode] = useState("full"); // full or decal

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);

      if (mode === "full") {
        setFullTexture(url); // Full texture mode
      } else {
        setDecalTexture(url); // Decal mode
      }
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 w-full max-w-sm">
      <div className="flex justify-center gap-4">
        <button
          onClick={() => setMode("full")}
          className={`px-4 py-2 rounded ${
            mode === "full" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"
          }`}
        >
          Full Wrap
        </button>
        <button
          onClick={() => setMode("decal")}
          className={`px-4 py-2 rounded ${
            mode === "decal" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"
          }`}
        >
          Decal
        </button>
      </div>

      <label className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer w-full text-center">
        {mode === "full" ? "Upload Full Texture" : "Upload Decal"}
        <input
          type="file"
          accept="image/*"
          onChange={handleUpload}
          className="hidden"
        />
      </label>
    </div>
  );
}
