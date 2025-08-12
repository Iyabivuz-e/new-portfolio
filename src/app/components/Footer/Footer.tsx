"use client"
import React from "react";
import {
  Mail,
  Linkedin,
  Github,
  Twitter,
  Instagram,
  Facebook,
  Phone,
} from "lucide-react";
import Link from "next/link";
import { useTheme } from "../../contexts/ThemeContext";

const Footer = () => {
  const { theme } = useTheme();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/dieudonne-iyabivuze-b5b1b3252/",
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn Profile",
    },
    {
      name: "GitHub",
      href: "https://github.com/Iyabivuz-e",
      icon: <Github className="w-5 h-5" />,
      label: "GitHub Profile",
    },
    {
      name: "Twitter",
      href: "https://x.com/dieudonnei_",
      icon: <Twitter className="w-5 h-5" />,
      label: "Twitter Profile",
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/dieudonnei_/",
      icon: <Instagram className="w-5 h-5" />,
      label: "Instagram Profile",
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/dieudonne.iyabivuze.5",
      icon: <Facebook className="w-5 h-5" />,
      label: "Facebook Profile",
    },
  ];

  return (
    <footer className={`py-16 border-t ${
      theme === 'dark'
        ? 'bg-gray-900 border-gray-800 text-gray-300'
        : 'bg-white border-gray-200 text-gray-600'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className={`text-2xl font-light mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Dieudonne
            </h3>
            <p className={`text-sm leading-relaxed max-w-md ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Full-Stack Developer and AI/ML enthusiast passionate about creating
              beautiful, user-friendly experiences that bridge design and functionality.
            </p>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className={`text-sm font-medium mb-4 uppercase tracking-wider ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Contact
            </h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4" />
                <span className="text-sm">dieudonnei@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4" />
                <span className="text-sm">+39 351 5 8 8 8 8 8 8</span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className={`text-sm font-medium mb-4 uppercase tracking-wider ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Connect
            </h4>
            <div className="flex gap-3">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-lg border transition-all hover:scale-110 ${
                    theme === 'dark'
                      ? 'border-gray-700 hover:bg-gray-800'
                      : 'border-gray-200 hover:bg-gray-50'
                  }`}
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className={`pt-8 border-t text-center ${
          theme === 'dark' ? 'border-gray-800' : 'border-gray-200'
        }`}>
          <p className="text-sm">
            &copy; {currentYear} Dieudonne Iyabivuze. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;