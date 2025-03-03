"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Home, User, CodeIcon, Briefcase, Mail, Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
      setIsMobileMenuOpen(false); // Close mobile menu after clicking a link
    }
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 w-full z-50 transition-all ${
        isScrolled ? "bg-white/90 backdrop-blur-lg shadow-md" : "bg-transparent"
      }`}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 sm:px-12 lg:px-20 z-50">
        <div className="flex items-center justify-between py-4">
          {/* Logo or Name */}
          <Link href="/" className="flex items-center gap-2">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-xl font-bold text-gray-900"
            >
              Dieudonne
            </motion.div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("hero")}
              className="flex items-center cursor-pointer gap-2 text-gray-700 hover:text-indigo-600 transition-all"
            >
              <Home className="w-5 h-5" />
              <span>Home</span>
            </button>
            <button
              onClick={() => scrollToSection("about me")}
              className="flex items- cursor-pointer gap-2 text-gray-700 hover:text-indigo-600 transition-all"
            >
              <User className="w-5 h-5" />
              <span>About</span>
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="flex items- cursor-pointer gap-2 text-gray-700 hover:text-indigo-600 transition-all"
            >
              <CodeIcon className="w-5 h-5" />
              <span>Skills</span>
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="flex items- cursor-pointer gap-2 text-gray-700 hover:text-indigo-600 transition-all"
            >
              <Briefcase className="w-5 h-5" />
              <span>Projects</span>
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="flex items- cursor-pointer gap-2 text-gray-700 hover:text-indigo-600 transition-all"
            >
              <Mail className="w-5 h-5" />
              <span>Contact</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-700 hover:text-indigo-600 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Links */}
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden mt-4 pb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <button
              onClick={() => scrollToSection("home")}
              className="w-full flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-indigo-600 hover:bg-gray-100 rounded-lg transition-all"
            >
              <Home className="w-5 h-5" />
              <span>Home</span>
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="w-full flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-indigo-600 hover:bg-gray-100 rounded-lg transition-all"
            >
              <User className="w-5 h-5" />
              <span>About</span>
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="w-full flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-indigo-600 hover:bg-gray-100 rounded-lg transition-all"
            >
              <CodeIcon className="w-5 h-5" />
              <span>Skills</span>
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="w-full flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-indigo-600 hover:bg-gray-100 rounded-lg transition-all"
            >
              <Briefcase className="w-5 h-5" />
              <span>Projects</span>
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="w-full flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-indigo-600 hover:bg-gray-100 rounded-lg transition-all"
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
