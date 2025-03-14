"use client";

import Image from "next/image";

export default function TopNavbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <button className="bg-white text-black px-4 py-2 rounded-lg font-semibold">
          LOGO
        </button>
      </div>

      {/* Buttons */}
      <div className="flex items-center space-x-4">
        <button className="text-white border border-white px-4 py-2 rounded-full hover:bg-white hover:text-black transition">
          Sign up
        </button>
        <button className="text-white border border-white px-4 py-2 rounded-full hover:bg-white hover:text-black transition">
          Login
        </button>
      </div>
    </nav>
  );
}
