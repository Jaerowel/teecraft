"use client";

import Image from "next/image";
import { star2, star3, star, wallet } from "@/app/helper/DummyImage";

export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center px-4 py-20 bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white overflow-hidden">

      {/* Optional Background Light Effects */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-indigo-900 via-purple-900 to-indigo-800 opacity-40 -z-10"></div>

      {/* Icon / Illustration */}
      <div className="mb-6">
        <Image
          src={wallet}
          alt="Hero Illustration"
          width={80}
          height={80}
          className="mx-auto"
        />
      </div>

      {/* Title */}
      <h1 className="text-5xl font-bold leading-tight max-w-3xl">
        Design your{" "}
        <span className="text-purple-400 underline decoration-wavy">Creations</span>{" "}
        smartly.
      </h1>

      {/* Subtitle */}
      <p className="mt-6 text-gray-300 max-w-xl">
        Take control of your designs with real-time previews, smart editing tools, and insights that help you create better and faster.
      </p>

      {/* CTA Buttons */}
      <div className="mt-10 flex space-x-4">
        <button className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
          Get Started
        </button>
        <button className="border border-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition">
          Learn more
        </button>
      </div>

      {/* Floating icons (Optional) */}
      <div className="absolute top-20 right-40 animate-float-slow">
        <Image
          src={star}
          alt="Star Icon"
          width={40}
          height={40}
        />
      </div>
      <div className="absolute bottom-20 left-40 animate-float">
        <Image
          src={star3}
          alt="Paper Plane Icon"
          width={40}
          height={40}
        />
      </div>
    </section>
  );
}
