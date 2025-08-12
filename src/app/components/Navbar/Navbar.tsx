"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Home, User, CodeIcon, Briefcase, Mail, Menu, X } from "lucide-react";
import { useState } from "react";
import { useTheme } from "../../contexts/ThemeContext";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme } = useTheme();

  // Add scroll event listener to toggle navbar background
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      setIsScrolled(window.scrollY > 50);
    });
  }

  // Smooth scroll to section
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false); 
    }
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? theme === 'dark'
            ? "bg-gray-900/95 backdrop-blur-md border-b border-gray-800"
            : "bg-white/95 backdrop-blur-md border-b border-gray-200"
          : "bg-transparent"
      }`}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 py-4 sm:px-12 lg:px-20">
        <div className="flex items-center justify-between">
          {/* Logo or Name */}
          <Link href="/" className="flex items-center gap-2">
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`text-xl font-light tracking-wide transition-colors ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}
            >
              Dieudonne
            </motion.div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("hero")}
              className={`px-4 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 ${
                theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className={`px-4 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 ${
                theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className={`px-4 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 ${
                theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className={`px-4 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 ${
                theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className={`px-4 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 ${
                theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Contact
            </button>
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button and Theme Toggle */}
          <div className="md:hidden flex items-center gap-3">
            <ThemeToggle />
            <button
              className={`p-2 focus:outline-none transition-colors ${
                theme === 'dark' ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'
              }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Links */}
        {isMobileMenuOpen && (
          <motion.div
            className={`md:hidden mt-4 pb-4 rounded-lg ${
              theme === 'dark' ? 'bg-slate-800/50' : 'bg-white/50'
            } backdrop-blur-sm`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <button
              onClick={() => scrollToSection("hero")}
              className={`w-full flex items-center gap-2 px-4 py-3 rounded-lg transition-all ${
                theme === 'dark'
                  ? 'text-gray-300 hover:text-blue-400 hover:bg-slate-700/50'
                  : 'text-gray-700 hover:text-blue-600 hover:bg-gray-100/50'
              }`}
            >
              <Home className="w-5 h-5" />
              <span>Home</span>
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className={`w-full flex items-center gap-2 px-4 py-3 rounded-lg transition-all ${
                theme === 'dark'
                  ? 'text-gray-300 hover:text-blue-400 hover:bg-slate-700/50'
                  : 'text-gray-700 hover:text-blue-600 hover:bg-gray-100/50'
              }`}
            >
              <User className="w-5 h-5" />
              <span>About</span>
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className={`w-full flex items-center gap-2 px-4 py-3 rounded-lg transition-all ${
                theme === 'dark'
                  ? 'text-gray-300 hover:text-blue-400 hover:bg-slate-700/50'
                  : 'text-gray-700 hover:text-blue-600 hover:bg-gray-100/50'
              }`}
            >
              <CodeIcon className="w-5 h-5" />
              <span>Skills</span>
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className={`w-full flex items-center gap-2 px-4 py-3 rounded-lg transition-all ${
                theme === 'dark'
                  ? 'text-gray-300 hover:text-blue-400 hover:bg-slate-700/50'
                  : 'text-gray-700 hover:text-blue-600 hover:bg-gray-100/50'
              }`}
            >
              <Briefcase className="w-5 h-5" />
              <span>Projects</span>
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className={`w-full flex items-center gap-2 px-4 py-3 rounded-lg transition-all ${
                theme === 'dark'
                  ? 'text-gray-300 hover:text-blue-400 hover:bg-slate-700/50'
                  : 'text-gray-700 hover:text-blue-600 hover:bg-gray-100/50'
              }`}
            >
              <Mail className="w-5 h-5" />
              <span>Contact</span>
            </button>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
