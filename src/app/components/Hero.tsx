"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import FastForwardIcon from "@mui/icons-material/FastForward";
// import Button from "@mui/material/Button";


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
    <>
      <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-100 px-16 max-md:py-8 max-md:gap-3">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
            Hello, I&apos;m Dieudonne
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-gray-500 leading-relaxed">
            <span ref={textRef}></span>
          </p>
        </div>
        <div className="flex flex-1 items-center justify-center my-8 md:my-0 md:mx-8 animate-bounce">
          <FastForwardIcon className="w-50 h-50 text-blue-500" />
        </div>
        <div className="flex-1 flex justify-center md:justify-end">
          <div className="w-54 h-54 md:w-100 md:h-100 relative">
            <Image
              src="/pic.jpg"
              alt="Dieudonne"
              layout="fill"
              objectFit="cover"
              className="rounded-full border-4 border-white shadow-lg"
              priority
            />
          </div>
        </div>
      </div>
      {/* <div>
        <Button variant="contained">Hire Me</Button>;
        <Button variant="contained">Hello world</Button>;
      </div> */}
    </>
  );
};

export default Hero;
