"use client";
import React from "react";
import '../globals.css';

const UniverseBackground = () => {
  return (
    <div className="fixed inset-0 bg-[#0a192f] z-[-1] overflow-hidden">
      <div className="stars"></div>
      <div className="stars2"></div>
      <div className="stars3"></div>
    </div>
  );
};

export default UniverseBackground;
