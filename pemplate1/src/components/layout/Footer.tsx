"use client";
import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  // Variants for staggered column entrance
  const containerVariants = {
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

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 },
  };

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
    <footer className="bg-[#10487a] text-white overflow-hidden">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {sections.map((section, idx) => (
            <div key={idx}>
              <h3 className="text-lg font-bold mb-5 border-b border-white/10 pb-2 inline-block">
                {section.title}
              </h3>
              <ul className="space-y-3 text-sm text-gray-300">
                {section.links.map((link, i) => (
                  <motion.li key={i} variants={itemVariants}>
                    <a
                      href="#"
                      className="hover:text-emerald-400 hover:translate-x-1 inline-block transition-all duration-200"
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
            <h3 className="text-lg font-bold mb-5 border-b border-white/10 pb-2 inline-block">
              Get Contact
            </h3>
            <ul className="space-y-4 text-sm text-gray-300">
              <li className="flex items-start gap-3">
                <Phone size={16} className="text-emerald-400 shrink-0 mt-1" />
                <span>+91-97853 12345</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={16} className="text-emerald-400 shrink-0 mt-1" />
                <span>admin@caogmc.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-emerald-400 shrink-0 mt-1" />
                <span>S4, Shree Gopal Nagar, Gopalpura Bypass, Jaipur-302019</span>
              </li>
              <li>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 transition duration-200 font-semibold underline underline-offset-4"
                >
                  Locate us on Google Map
                </a>
              </li>
            </ul>

            {/* Social Icons with individual hover scales */}
            <div className="flex space-x-4 mt-6">
              {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ y: -3, scale: 1.1 }}
                  className="bg-white/10 p-2 rounded-lg hover:bg-white/20 transition-colors"
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Footer Bottom Bar */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-5 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-800">
          <p className="font-medium text-center md:text-left">
            Copyright © 2026 **Goyal Mangal & Company**. All Rights Reserved.
          </p>
          <div className="flex space-x-6 mt-3 md:mt-0">
            <a href="#" className="hover:text-emerald-600 font-semibold transition duration-200">
              Disclaimer
            </a>
            <a href="#" className="hover:text-emerald-600 font-semibold transition duration-200">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
