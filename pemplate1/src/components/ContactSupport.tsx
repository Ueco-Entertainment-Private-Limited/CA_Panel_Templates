//contact support
"use client";

import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin, Mail, PhoneCall } from "lucide-react";

const SOCIAL_LINKS = [
  { name: "Facebook", href: "https://facebook.com", icon: Facebook },
  { name: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
  { name: "Instagram", href: "https://instagram.com", icon: Instagram },
];

const ContactSupport = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      // Use 'xl:flex' to match the breakpoint where your Header's full menu appears
      className="hidden xl:flex h-10 md:h-12 items-center text-white transition-all duration-300"
      style={{ backgroundColor: "var(--brand-blue)" }}
    >
      {/* 
          ALIGNMENT FIX: 
          1. Matches Header's 'px-4 md:px-12' for horizontal alignment.
          2. Matches Header's 'max-w-7xl mx-auto' to keep content centered.
      */}
      <div className="w-full max-w-7xl mx-auto px-4 md:px-12 flex items-center justify-between">
        {/* Contact Section */}
        <div className="flex items-center gap-6 text-sm font-medium">
          <div className="flex items-center gap-2">
            <Mail size={16} className="text-blue-300" aria-hidden="true" />
            <a
              href="mailto:admin@cagmc.com"
              className="hover:text-blue-200 transition-colors"
            >
              admin@cagmc.com
            </a>
          </div>
          <div className="flex items-center gap-2 border-l border-blue-700 pl-6">
            <PhoneCall size={16} className="text-blue-300" aria-hidden="true" />
            <a
              href="tel:+919785312345"
              className="hover:text-blue-200 transition-colors"
            >
              +91-97853 12345
            </a>
          </div>
        </div>

        {/* Social Media Section */}
        <nav aria-label="Social Media Links">
          <ul className="flex items-center gap-6">
            {SOCIAL_LINKS.map(({ name, href, icon: Icon }) => (
              <li key={name}>
                <motion.a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className="p-1 hover:text-blue-300 block"
                  aria-label={`Visit our ${name} page`}
                >
                  <Icon size={18} strokeWidth={2} />
                </motion.a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </motion.div>
  );
};

export default ContactSupport;
