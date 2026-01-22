"use client";

import { FadeIn, StaggerContainer } from "./animations";
import { motion } from "motion/react";
import { fadeInUp } from "@/lib/animationVariants";

export default function Footer() {
  const column1Links = [
    { href: "#", label: "Products" },
    { href: "#", label: "Portfolio" },
    { href: "#", label: "Services" },
    { href: "#", label: "About us" },
    { href: "#", label: "Consultations" },
  ];

  const column2Links = [
    { href: "#", label: "Design guide" },
    { href: "#", label: "Resources" },
    { href: "#", label: "Case studies" },
    { href: "#", label: "Partners" },
  ];

  const bottomLinks = [
    { href: "#", label: "Privacy policy" },
    { href: "#", label: "Terms of service" },
    { href: "#", label: "Cookie settings" },
  ];

  return (
    <footer className="bg-black py-12 md:py-16 lg:py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-[1312px] mx-auto">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row gap-12 md:gap-8 lg:gap-16 mb-12 md:mb-16 lg:mb-20">
          {/* Left Column - Brand Info */}
          <FadeIn className="flex-1">
            <h3 className="text-white text-xl md:text-2xl font-medium tracking-[4px] mb-6 md:mb-8">
              TUSKARA
            </h3>

            {/* Address */}
            <div className="mb-4 md:mb-6">
              <p className="text-white text-sm font-light leading-[1.6] mb-1">
                Address
              </p>
              <p className="text-white text-sm font-light leading-[1.6]">
                Gronausestraat 710, 7534 AM Enschede,<br />
                The Netherlands
              </p>
            </div>

            {/* Contact */}
            <div className="mb-6 md:mb-8">
              <p className="text-white text-sm font-light leading-[1.6] mb-1">
                Contact
              </p>
              <p className="text-white text-sm font-light leading-[1.6]">
                hello@tuskara.com
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              <a href="#" className="text-white hover:opacity-80 transition-opacity" aria-label="Facebook">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a href="#" className="text-white hover:opacity-80 transition-opacity" aria-label="Instagram">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2" />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" fill="none" stroke="currentColor" strokeWidth="2" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </a>
              <a href="#" className="text-white hover:opacity-80 transition-opacity" aria-label="X (Twitter)">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="#" className="text-white hover:opacity-80 transition-opacity" aria-label="LinkedIn">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a href="#" className="text-white hover:opacity-80 transition-opacity" aria-label="YouTube">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.33z" fill="none" stroke="currentColor" strokeWidth="2" />
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor" />
                </svg>
              </a>
            </div>
          </FadeIn>

          {/* Right Columns - Links */}
          <StaggerContainer className="flex flex-col sm:flex-row gap-8 sm:gap-6">
            {/* Column 1 */}
            <motion.div className="w-full sm:w-40" variants={fadeInUp}>
              <nav className="flex flex-col">
                {column1Links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-white text-sm font-light leading-[1.6] py-2 hover:opacity-80 transition-opacity"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </motion.div>

            {/* Column 2 */}
            <motion.div className="w-full sm:w-40" variants={fadeInUp}>
              <nav className="flex flex-col">
                {column2Links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-white text-sm font-light leading-[1.6] py-2 hover:opacity-80 transition-opacity"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </motion.div>
          </StaggerContainer>
        </div>

        {/* Divider */}
        <FadeIn>
          <div className="h-px bg-white/20 mb-6 md:mb-8" />
        </FadeIn>

        {/* Bottom Row */}
        <FadeIn className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white text-xs sm:text-sm font-light leading-[1.6] text-center sm:text-left">
            © 2024 Tuskara. All design rights reserved.
          </p>
          <div className="flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-6">
            {bottomLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-white text-xs sm:text-sm font-light leading-[1.6] hover:opacity-80 transition-opacity"
              >
                {link.label}
              </a>
            ))}
          </div>
        </FadeIn>
      </div>
    </footer>
  );
}
