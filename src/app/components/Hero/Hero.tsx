"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import FastForwardIcon from "@mui/icons-material/FastForward";
import Button from "@mui/material/Button";

const Hero = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(textRef.current, {
      strings: [
        "Software Developer",
        "Frontend Developer",
        "Backend Developer",
        "AI/ML Admirer",
      ],
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 1500,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  return (
    <section
      id="hero"
      className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-100 bg-white px-16 max-md:py-8 max-md:gap-3"
    >
      {/* Left Section: Text and Buttons */}
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
          Hello, I&apos;m Dieudonne
        </h1>
        <p className="mt-4 text-xl md:text-2xl text-gray-500 leading-relaxed">
          <span ref={textRef}></span>
        </p>
        {/* Short Tagline */}
        <p className="mt-4 text-lg md:text-xl text-gray-600">
          I create beautiful, user-friendly experiences.
        </p>
        {/* Call-to-Action Buttons */}
        <div className="mt-8 flex gap-4 justify-center md:justify-start">
          <Button
            variant="contained"
            className="bg-blue-500 hover:bg-blue-600 text-white"
          >
            View My Work
          </Button>
          <Button
            variant="outlined"
            className="border-blue-500 text-blue-500 hover:bg-blue-50"
          >
            Contact Me
          </Button>
        </div>
      </div>

      {/* Middle Section: Icon */}
      <div className="flex flex-1 items-center justify-center my-8 md:my-0 md:mx-8 animate-bounce">
        <FastForwardIcon className="w-50 h-50 text-blue-500" />
      </div>

      {/* Right Section: Image */}
      <div className="flex-1 flex justify-center md:justify-end">
        <div className="w-64 h-64 md:w-100 md:h-100 relative">
          <Image
            src="/icon.jpg"
            alt="Dieudonne"
            layout="fill"
            objectFit="cover"
            className="rounded-full border-4 border-white shadow-lg"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
