"use client";
import { Terminal, Palette, Settings, Database, Cpu } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="py-16 bg-gradient-to-br from-blue-300 to-white"
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            About Me
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            A little bit about who I am and what I do.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Profile Picture Container */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden">
              <Image
                src="/pic.jpg"
                alt="Your profile picture"
                className="w-full h-full object-cover rounded-full border-gray-100 border-8"
                width={500}
                height={500}
              />
            </div>
          </motion.div>

          {/* Right Side: Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <p className="text-lg text-gray-700 leading-relaxed">
              I’m a passionate{" "}
              <span className="font-bold text-blue-500">
                Software Developer
              </span>
              ,{" "}
              <span className="font-bold text-purple-500">
                Full-Stack Developer
              </span>{" "}
              and{" "}
              <span className="font-bold text-green-500">AI/ML Enthiast</span>{" "}
              who loves turning big ideas into cool, easy-to-use apps. Whether
              I’m building websites with React and Node.js, creating smart AI
              tools, or designing smooth systems, I’m all about making tech work
              beautifully.
            </p>

            {/* Skills Icons */}
            <div className="flex flex-wrap gap-4">
              <motion.div
                className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
              >
                <Terminal className="w-5 h-5 text-blue-500" />
                <span className="text-gray-700">Coding</span>
              </motion.div>
              <motion.div
                className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                <Palette className="w-5 h-5 text-purple-500" />
                <span className="text-gray-700">Design</span>
              </motion.div>
              <motion.div
                className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 }}
              >
                <Settings className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">Problem Solving</span>
              </motion.div>
              <div className="flex items-center gap-2 bg-white px-6 py-3 rounded-xl shadow-sm hover:shadow-md transition-all">
                <Cpu className="w-5 h-5 text-orange-500" />
                <span className="text-gray-700">AI/ML</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-6 py-3 rounded-xl shadow-sm hover:shadow-md transition-all">
                <Database className="w-5 h-5 text-pink-500" />
                <span className="text-gray-700">Databases</span>
              </div>
            </div>

            {/* Call-to-Action Button */}
            <motion.div
              className="mt-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.6 }}
            >
              <button
                id="contact"
                className="px-6 cursor-pointer py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all"
              >
                Let’s create something that doesn’t just work —{" "}
                <span className="text-gray-100 font-bold">it rocks!</span>
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
