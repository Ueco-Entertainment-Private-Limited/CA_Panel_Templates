import React from "react";
import { motion, type Variants } from "framer-motion";

const GoldSeparator = () => (
  // Corrected typo from bg-linear-to-r to bg-gradient-to-r
  <div className="h-0.5 bg-linear-to-r from-[#D4AF37] to-transparent mb-6 w-1/4" />
);

const Footer: React.FC = () => {
  // Animation variant for the footer sections
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    // Added mt-6 for top margin, kept original bg and padding
    <motion.footer
      className="bg-black text-white py-12 px-4 md:px-8 mt-6"
      initial="hidden"
      animate="visible"
      transition={{ staggerChildren: 0.1 }}
    >
      {/* Used container, mx-auto, px-4 for alignment as requested */}
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Quick Links Section */}
        <motion.div variants={itemVariants}>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <GoldSeparator />

          <ul className="space-y-3">
            <li>
              <a
                href="#"
                className="hover:text-gray-400 transition duration-200"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-gray-400 transition duration-200"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-gray-400 transition duration-200"
              >
                Careers
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-gray-400 transition duration-200"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-gray-400 transition duration-200"
              >
                Resources & Publications
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-gray-400 transition duration-200"
              >
                Our Clients & Network
              </a>
            </li>
          </ul>
        </motion.div>

        {/* Pune Head Office Address Section */}
        <motion.div variants={itemVariants}>
          <h3 className="text-xl font-semibold mb-4">
            Pune Head Office Address
          </h3>
          <GoldSeparator />

          <address className="space-y-3 not-italic">
            <p>
              7, Saraswati Heights, Behind Goodluck Cafe, Deccan Gymkhana,
              Pune-411004
            </p>
            <p>
              Phone:{" "}
              <a
                href="tel:+917722063311"
                className="text-[#D4AF37] hover:text-amber-500 transition duration-200"
              >
                +91-7722063311
              </a>
            </p>
            <p>
              Email:{" "}
              <a
                href="mailto:ong@angca.com"
                className="text-[#D4AF37] hover:text-amber-500 transition duration-200"
              >
                ong@angca.com
              </a>
            </p>
          </address>
        </motion.div>

        {/* Pune Branch Office Address Section */}
        <motion.div variants={itemVariants}>
          <h3 className="text-xl font-semibold mb-4">
            Pune Branch Office Address
          </h3>
          <GoldSeparator />

          <address className="space-y-3 not-italic">
            <p>
              Tulasi Green, Office 1, B/H- D-Mart, Baner Road, Nandan Prospera
              Rd, Laxman Nagar, Baner, Pune, Maharashtra 411045
            </p>
            <p>
              Phone:{" "}
              <a
                href="tel:+919420442921"
                className="text-[#D4AF37] hover:text-amber-500 transition duration-200"
              >
                +91-9420442921
              </a>
            </p>
            <p>
              Email:{" "}
              <a
                href="mailto:ang@angca.com"
                className="text-[#D4AF37] hover:text-amber-500 transition duration-200"
              >
                ang@angca.com
              </a>
            </p>
          </address>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;

