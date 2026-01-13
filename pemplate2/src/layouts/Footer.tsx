"use client";

import { motion, type Variants } from "framer-motion";
import {
  Facebook,
  Instagram,
  Linkedin,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";


const Footer = () => {
  // Variants for staggered column entrance
  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 },
  };

  // The sections data is defined within the component for clarity
  const sections = [
    {
      title: "Business Registration",
      links: [
        "Private Limited Company Registration",
        "Public Limited Company Registration",
        "One Person Company Registration",
        "Company Registration",
        "Foreign Company Registration",
      ],
    },
    {
      title: "Licenses",
      links: [
        "GST Registration",
        "FSSAI Registration",
        "MSME Udyam Registration",
        "ISO Certification",
        "Business Registration Number",
      ],
    },
    {
      title: "Audit & Tax",
      links: [
        "NGO Audit",
        "NRI Taxation",
        "TDS Return",
        "Tax Audit",
        "Statutory Audit",
      ],
    },
  ];

  return (
    // Updated background to deep navy consistent with the AuditTax section
    <footer className="bg-[#0A192F] text-white overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {sections.map((section, idx) => (
            <div key={idx}>
              <h3 className="text-lg font-bold mb-6 border-b border-white/10 pb-3 inline-block tracking-wide">
                {section.title}
              </h3>
              <ul className="space-y-4 text-sm text-slate-300">
                {section.links.map((link, i) => (
                  <motion.li key={i} variants={itemVariants}>
                    <a
                      href="#"
                      // Hover color updated to the primary orange accent
                      className="hover:text-[#FF6B00] hover:translate-x-1 inline-block transition-all duration-300"
                    >
                      {link}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}

          {/* Get Contact Section */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-bold mb-6 border-b border-white/10 pb-3 inline-block tracking-wide">
              Get Contact
            </h3>
            <ul className="space-y-4 text-sm text-slate-300">
              <li className="flex items-start gap-3">
                {/* Icon color updated to primary orange accent */}
                <Phone size={16} className="text-[#FF6B00] shrink-0 mt-0.5" />
                <span>+91-97853 12345</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={16} className="text-[#FF6B00] shrink-0 mt-0.5" />
                <span>admin@caogmc.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-[#FF6B00] shrink-0 mt-0.5" />
                <span>
                  S4, Shree Gopal Nagar, Gopalpura Bypass, Jaipur-302019
                </span>
              </li>
              <li>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  // Link color updated to primary orange accent
                  className="text-[#FF6B00] hover:text-[#FF8533] transition duration-200 font-semibold underline underline-offset-4 mt-2 inline-block"
                >
                  Locate us on Google Map
                </a>
              </li>
            </ul>

            {/* Social Icons with individual hover scales */}
            <div className="flex space-x-4 mt-8">
              {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ y: -4, scale: 1.1 }}
                  // Subtle gray background with orange hover
                  className="bg-white/5 p-3 rounded-lg hover:bg-[#FF6B00] transition-all duration-300 shadow-md"
                >
                  <Icon size={20} className="text-white" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Footer Bottom Bar (remains white background as per your image) */}
      <div className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto py-5 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-800">
          <p className="font-medium text-center md:text-left">
            Copyright © 2026 **Goyal Mangal & Company**. All Rights Reserved.
          </p>
          <div className="flex space-x-6 mt-3 md:mt-0">
            <a
              href="#"
              className="hover:text-[#FF6B00] font-semibold transition duration-200"
            >
              Disclaimer
            </a>
            <a
              href="#"
              className="hover:text-[#FF6B00] font-semibold transition duration-200"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
