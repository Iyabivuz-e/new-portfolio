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

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Social media links configuration
  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/iyabivuze/",
      icon: <Linkedin className="w-5 h-5" />,
    },
    {
      name: "GitHub",
      href: "https://github.com/Iyabivuz-e",
      icon: <Github className="w-5 h-5" />,
    },
    {
      name: "Twitter",
      href: "https://twitter.com/dieudonne_dev",
      icon: <Twitter className="w-5 h-5" />,
    },
    {
      name: "Instagram",
      href: "https://instagram.com/dieudonne_dev",
      icon: <Instagram className="w-5 h-5" />,
    },
    {
      name: "Facebook",
      href: "https://facebook.com/dieudonne.iyabivuze",
      icon: <Facebook className="w-5 h-5" />,
    },
  ];

  // Contact information
  const contactInfo = [
    {
      method: "Email",
      value: "iyabivuzed@gmail.com",
      href: "mailto:iyabivuzed@gmail.com",
      icon: <Mail className="w-4 h-4 mr-2" />,
    },
    {
      method: "Phone",
      value: "+39 351 679 5037",
      href: "tel:+39 351 679 5037",
      icon: <Phone className="w-4 h-4 mr-2" />,
    },
  ];

  return (
    <footer className="py-12 bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="flex flex-col">
            <h3 className="text-xl font-bold text-white mb-4">
              Dieudonne Iyabivuze
            </h3>
            <p className="text-gray-400 mb-4">
              Building innovative solutions for the web and beyond.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow on ${link.name}`}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Portfolio
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-3">
              {contactInfo.map((item) => (
                <li key={item.method}>
                  <a
                    href={item.href}
                    className="flex items-center text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {item.icon}
                    <span>{item.value}</span>
                  </a>
                </li>
              ))}
            </ul>

            {/* Call To Action */}
            <button
              onClick={() => (window.location.href = "tel:+39 351 679 5037")}
              className="mt-6 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md flex cursor-pointer items-center justify-center transition-colors duration-200"
            >
              <Phone className="w-4 h-4 mr-2" />
              <span>Call Now</span>
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-6"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-400 mb-4 md:mb-0">
            © {currentYear} Dieudonne Iyabivuze. All rights reserved.
          </p>

          {/* <div className="flex space-x-6">
            <a
              href="/privacy"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              Terms of Service
            </a>
          </div> */}
        </div>

        {/* Cookie Consent Banner - Uncomment when needed */}
        {/* 
        <div className="fixed bottom-0 left-0 right-0 bg-gray-800 p-4 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-300 mb-4 md:mb-0">
            This website uses cookies to ensure you get the best experience.
          </p>
          <div className="flex space-x-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors duration-200">
              Accept
            </button>
            <button className="bg-transparent border border-gray-600 text-gray-300 py-2 px-4 rounded-md hover:bg-gray-700 transition-colors duration-200">
              Preferences
            </button>
          </div>
        </div>
        */}
      </div>
    </footer>
  );
};

export default Footer;
