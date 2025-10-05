"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { ArrowRight, Download, Mail } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useTheme } from "../../contexts/ThemeContext";

const Hero = () => {
  const textRef = useRef(null);
  const { theme } = useTheme();

  useEffect(() => {
    const typed = new Typed(textRef.current, {
      strings: [
        "Software Developer...",
        "Frontend Developer...",
        "Backend Developer...",
        "AI/ML Admirer...",
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
      className={`min-h-screen pt-32 flex items-center justify-center relative ${
        theme === 'dark'
          ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900'
          : 'bg-gradient-to-br from-white via-gray-50 to-white'
      }`}
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, ${theme === 'dark' ? 'white' : 'black'} 1px, transparent 0)`,
          backgroundSize: '20px 20px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className={`text-6xl lg:text-8xl font-light mb-8 tracking-tight ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Dieudonne
            </motion.h1>

            <motion.div
              className={`text-xl lg:text-2xl mb-6 font-light ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span ref={textRef}></span>
            </motion.div>

            <motion.p
              className={`text-lg lg:text-xl mb-12 max-w-2xl mx-auto leading-relaxed ${
                theme === 'dark' ? 'text-gray-500' : 'text-gray-500'
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              I create beautiful, user-friendly experiences that bridge the gap between design and functionality.
            </motion.p>

            {/* Call-to-Action Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Link
                href="https://drive.google.com/file/d/1WTlPo1F5hVSeNjaY27vehJjp4AvVMaGr/view?usp=sharing"
                target="_blank"
                className={`inline-flex items-center gap-3 px-8 py-4 rounded-lg font-medium cursor-pointer transition-all duration-400 ease-out hover:translate-y-[-4px] hover:shadow-lg ${
                  theme === 'dark'
                    ? 'bg-white text-gray-900 hover:bg-gray-100'
                    : 'bg-gray-900 text-white hover:bg-gray-800'
                }`}
              >
                <Download className="w-5 h-5" />
                View Resume
              </Link>
              <button
                onClick={() => scrollToSection("contact")}
                className={`inline-flex items-center gap-3 px-8 py-4 rounded-lg font-medium cursor-pointer transition-all duration-400 ease-out hover:translate-y-[-4px] hover:shadow-lg ${
                  theme === 'dark'
                    ? 'border border-gray-600 text-gray-300 hover:bg-gray-800'
                    : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
              >
                <Mail className="w-5 h-5" />
                Contact Me
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );


};

export default Hero;
