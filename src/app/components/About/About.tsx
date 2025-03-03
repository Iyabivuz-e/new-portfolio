"use client";
import { Code, Terminal, Palette, Settings } from "lucide-react";

const About = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            About Me
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            A little bit about who I am and what I do.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Side: Image or Graphic */}
          <div className="flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
              <div className="absolute w-64 h-64 md:w-80 md:h-80 bg-white/10 backdrop-blur-sm rounded-full"></div>
              <Code className="w-20 h-20 text-white" />
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Hey there! I’m{" "}
              <span className="font-bold text-blue-500">Dieudonne</span>, a
              passionate{" "}
              <span className="font-bold text-purple-500">
                Software Developer
              </span>{" "}
              and{" "}
              <span className="font-bold text-green-500">Full-Stack Developer</span>{" "}
              with a love for creating beautiful, functional, and user-friendly
              experiences. I thrive on solving problems and turning ideas into
              reality through code and design.
            </p>

            {/* Skills Icons */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm">
                <Terminal className="w-5 h-5 text-blue-500" />
                <span className="text-gray-700">Coding</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm">
                <Palette className="w-5 h-5 text-purple-500" />
                <span className="text-gray-700">Design</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm">
                <Settings className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">Problem Solving</span>
              </div>
            </div>

            {/* Call-to-Action Button */}
            <div className="mt-6">
              <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all">
                Let’s Build Something Awesome!
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
