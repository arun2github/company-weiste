"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import React from 'react'; // For SVGProps

// --- Theme Colors (Elegant Tech Minimalism) ---
const BG_FOOTER = '#F0F0F0'; // Slightly darker than main BG for subtle separation
const TEXT_PRIMARY_FOOTER = '#222222';
const TEXT_SECONDARY_FOOTER = '#555555';
const ACCENT_ELEGANT_FOOTER = '#004D40'; // Deep Teal
const BORDER_FOOTER = '#D1D5DB'; // Light gray for border

// --- Social Icon Components (Simplified for Footer) ---
const LinkedInIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
);
const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => ( // Placeholder X/Twitter Icon
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
);
const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
);
const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878V14.89H8.897v-2.99h1.541V9.526c0-1.524.878-2.493 2.372-2.493.687 0 1.412.126 1.412.126v2.538h-1.267c-.738 0-1.01.467-1.01 1.057v1.16h2.819l-.442 2.99h-2.377v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = {
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Services', href: '#services' },
      { name: 'Team', href: '#team' },
      { name: 'Contact', href: '#contact' },
    ],
    keyServices: [
      { name: 'Web Development', href: '#services' },
      { name: 'Mobile Apps', href: '#services' },
      { name: 'Digital Strategy', href: '#services' },
      { name: 'SEO Optimization', href: '#services' },
    ],
  };

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/whalecore-innovations/', icon: LinkedInIcon },
    { name: 'Twitter', href: 'https://x.com/whalecore_in', icon: TwitterIcon },
    { name: 'Instagram', href: 'https://www.instagram.com/whalecore.innovations/', icon: InstagramIcon },
    { name: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61576958610369', icon: FacebookIcon },
  ];

  return (
    <motion.footer 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      style={{ backgroundColor: BG_FOOTER }} 
      className="text-sm"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8 md:gap-10 lg:gap-8 mb-12">
          {/* Brand Info */}
          <div className="col-span-2 text-center md:text-left md:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block text-2xl tracking-tight mb-3 focus:outline-none" aria-label="WhaleCore Innovations Home">
              <span style={{ color: ACCENT_ELEGANT_FOOTER, fontWeight: '700' }} className="mr-1.5">WhaleCore</span>
              <span style={{ color: TEXT_PRIMARY_FOOTER, fontWeight: '400' }}>Innovations</span>
            </Link>
            <p className="pr-4" style={{ color: TEXT_SECONDARY_FOOTER }}>
            Transform Your Digital Vision,Into Reality. We build innovative solutions to elevate your brand.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold mb-4 text-base tracking-wide" style={{ color: TEXT_PRIMARY_FOOTER }}>
              Company
            </h3>
            <ul className="space-y-2.5">
              {navLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="transition-colors duration-200 ease-out"
                    style={{ color: TEXT_SECONDARY_FOOTER }}
                    onMouseEnter={(e) => e.currentTarget.style.color = ACCENT_ELEGANT_FOOTER}
                    onMouseLeave={(e) => e.currentTarget.style.color = TEXT_SECONDARY_FOOTER}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Key Services Links */}
          <div>
            <h3 className="font-semibold mb-4 text-base tracking-wide" style={{ color: TEXT_PRIMARY_FOOTER }}>
              Key Services
            </h3>
            <ul className="space-y-2.5">
              {navLinks.keyServices.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="transition-colors duration-200 ease-out"
                    style={{ color: TEXT_SECONDARY_FOOTER }}
                    onMouseEnter={(e) => e.currentTarget.style.color = ACCENT_ELEGANT_FOOTER}
                    onMouseLeave={(e) => e.currentTarget.style.color = TEXT_SECONDARY_FOOTER}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect / Social Links */}
          <div className="col-span-2 text-center md:text-left md:col-span-1 lg:col-span-1">
            <h3 className="font-semibold mb-4 text-base tracking-wide" style={{ color: TEXT_PRIMARY_FOOTER }}>
              Connect With Us
            </h3>
            <div className="flex space-x-4 justify-center md:justify-start">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={social.name}
                    className="p-2 rounded-md transition-colors duration-200 ease-out flex items-center justify-center group"
                    style={{ color: TEXT_SECONDARY_FOOTER }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = ACCENT_ELEGANT_FOOTER;
                      e.currentTarget.style.backgroundColor = '#E6F3F1'; // Light teal bg
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = TEXT_SECONDARY_FOOTER;
                      e.currentTarget.style.backgroundColor = 'transparent';
                    }}
                  >
                    <Icon className="w-5 h-5 transition-transform duration-200 ease-out group-hover:scale-110" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div 
          className="border-t pt-8 mt-8 flex flex-col sm:flex-row justify-between items-center"
          style={{ borderColor: BORDER_FOOTER }}
        >
          <p style={{ color: TEXT_SECONDARY_FOOTER }}>
            &copy; {currentYear} WhaleCore Innovations. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <Link
              href="/privacy-policy" // Updated to common slug
              className="transition-colors duration-200 ease-out"
              style={{ color: TEXT_SECONDARY_FOOTER }}
              onMouseEnter={(e) => e.currentTarget.style.color = ACCENT_ELEGANT_FOOTER}
              onMouseLeave={(e) => e.currentTarget.style.color = TEXT_SECONDARY_FOOTER}
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service" // Updated to common slug
              className="transition-colors duration-200 ease-out"
              style={{ color: TEXT_SECONDARY_FOOTER }}
              onMouseEnter={(e) => e.currentTarget.style.color = ACCENT_ELEGANT_FOOTER}
              onMouseLeave={(e) => e.currentTarget.style.color = TEXT_SECONDARY_FOOTER}
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer; 