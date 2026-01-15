"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
import About from "../About/About";
import ContactForm from "../Contact/ContactForm";

const MainNavigation: React.FC = () => {
  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="w-full relative z-0 group">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        className="transition-opacity duration-500 group-hover:opacity-60"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 items-start">
          <div className="w-full">
            <About />
          </div>

          <div className="w-full">
            <ContactForm />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default MainNavigation;
