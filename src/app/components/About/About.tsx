"use client";

import { Terminal, Palette, Settings, Database, Cpu } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTheme } from "../../contexts/ThemeContext";

const About = () => {
  const { theme } = useTheme();

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="about"
      className={`py-24 ${
        theme === 'dark'
          ? 'bg-gradient-to-b from-gray-900 to-gray-800'
          : 'bg-gradient-to-b from-gray-50 to-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className={`text-5xl lg:text-6xl font-light mb-16 text-center ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            About
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
            {/* Profile Picture */}
            <motion.div
              className="flex justify-center lg:justify-start"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="w-64 h-64 relative">
                <Image
                  src="/pic.jpg"
                  alt="Dieudonne"
                  className={`w-full h-full object-cover rounded-2xl ${
                    theme === 'dark' ? 'border border-gray-700' : 'border border-gray-200'
                  }`}
                  width={500}
                  height={500}
                />
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              className="lg:col-span-2 space-y-8"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="space-y-6">
                <p className={`text-xl leading-relaxed ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  I'm a passionate{" "}
                  <span className={`font-medium ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    Software Developer
                  </span>
                  ,{" "}
                  <span className={`font-medium ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    Full-Stack Developer
                  </span>{" "}
                  and{" "}
                  <span className={`font-medium ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>AI/ML Enthusiast</span>{" "}
                  who loves turning big ideas into cool, easy-to-use apps.
                </p>

                <p className={`text-lg leading-relaxed ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  Whether I'm building websites with React and Node.js, creating smart AI
                  tools, or designing smooth systems, I'm all about making tech work
                  beautifully.
                </p>
              </div>

              {/* Skills List */}
              <motion.div
                className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                {['Coding', 'Design', 'Problem Solving', 'AI/ML', 'Databases', 'Systems'].map((skill, index) => (
                  <div
                    key={skill}
                    className={`text-center py-3 px-4 rounded-lg border transition-all hover:scale-105 ${
                      theme === 'dark'
                        ? 'bg-gray-800 border-gray-700 text-gray-300'
                        : 'bg-gray-50 border-gray-200 text-gray-700'
                    }`}
                  >
                    <span className="text-sm font-medium">{skill}</span>
                  </div>
                ))}
              </motion.div>

              {/* Call-to-Action Button */}
              <motion.div
                className="mt-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <button
                  onClick={() => scrollToSection("contact")}
                  className={`px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:scale-105 ${
                    theme === 'dark'
                      ? 'bg-white text-gray-900 hover:bg-gray-100'
                      : 'bg-gray-900 text-white hover:bg-gray-800'
                  }`}
                >
                  Let's create something amazing together
                </button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;