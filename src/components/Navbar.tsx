"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#", label: "wallcoverings" },
    { href: "#", label: "rugs" },
    { href: "#", label: "materials" },
    { href: "#", label: "about" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#080808] shadow-[0_4px_3.5px_rgba(0,0,0,0.25)] border-b border-[#ffffff1a]">
      <div className="flex items-center justify-between px-4 md:px-8 lg:px-16 h-[72px]">
        {/* Left Navigation Links - Hidden on mobile */}
        <div className="hidden md:flex items-center gap-4 lg:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-white text-sm lg:text-base font-light hover:opacity-80 transition-opacity"
            >
              {link.label}
              {link.label === "about" && " ▾"}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <motion.span
            className="w-6 h-0.5 bg-white block"
            animate={isMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.2 }}
          />
          <motion.span
            className="w-6 h-0.5 bg-white block"
            animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.2 }}
          />
          <motion.span
            className="w-6 h-0.5 bg-white block"
            animate={isMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.2 }}
          />
        </button>

        {/* Center Logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <span className="text-white text-xl md:text-2xl font-medium tracking-[4px]">
            TUSKARA
          </span>
        </div>

        {/* Right Button - Hidden on smallest screens */}
        <div className="flex items-center">
          <button className="hidden sm:block bg-white text-black text-sm lg:text-base font-medium px-4 lg:px-5 py-2 rounded-full hover:bg-gray-100 transition-colors">
            trade login
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-[#080808] border-t border-[#ffffff1a]"
          >
            <div className="flex flex-col px-4 py-4 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-white text-lg font-light hover:opacity-80 transition-opacity py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                  {link.label === "about" && " ▾"}
                </a>
              ))}
              <button className="sm:hidden bg-white text-black text-base font-medium px-5 py-3 rounded-full hover:bg-gray-100 transition-colors mt-2 w-full">
                trade login
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
