"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import FastForwardIcon from "@mui/icons-material/FastForward";
import Button from "@mui/material/Button";
import { motion } from "framer-motion";

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

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gradient-to-br from-blue-300 to-purple-300 px-16 max-sm:px-10 max-md:py-32 -z-10 max-md:gap-3"
    >
      {/* Left Section: Text and Buttons */}
      <motion.div
        className="flex-1 text-center md:text-left"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
          Hello, I&apos;m Dieudonne
        </h1>
        <p className="mt-4 text-xl md:text-2xl text-gray-700 leading-relaxed">
          <span ref={textRef}></span>
        </p>
        {/* Short Tagline */}
        <p className="mt-4 text-lg md:text-xl text-gray-700">
          I create beautiful, user-friendly experiences.
        </p>
        {/* Call-to-Action Buttons */}
        <div className="mt-8 flex gap-4 justify-center md:justify-start max-sm:flex-col">
          <Button
            variant="contained"
            className="bg-purple-500 hover:bg-purple-600 text-white"
          >
            View My Resume
          </Button>
          <Button
            onClick={() => scrollToSection("contact")}
            variant="outlined"
            className="border-blue-500 text-blue-500 hover:bg-blue-50"
          >
            Contact Me
          </Button>
        </div>
      </motion.div>

      {/* Middle Section: Icon */}
      <motion.div
        className="flex flex-1 items-center justify-center my-8 md:my-0 md:mx-8"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <FastForwardIcon className="w-50 h-50 text-blue-500" />
      </motion.div>

      {/* Right Section: Image */}
      <motion.div
        className="flex-1 flex justify-center md:justify-end"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <div className="w-64 h-64 md:w-100 md:h-100 relative">
          <Image
            src="/icon.jpg"
            alt="Dieudonne Coding"
            layout="fill"
            objectFit="cover"
            className="rounded-full border-4 border-white shadow-lg"
            priority
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
