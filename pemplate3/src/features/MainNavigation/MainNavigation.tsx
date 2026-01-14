"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
import About from "../About/About";
import ContactForm from "../Contact/ContactForm";

const MainNavigation: React.FC = () => {
  // Animation for the entrance of the section
  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="w-full">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        className="container mx-auto px-4 py-4"
      >
        {/* 
            Grid Layout: 
            - grid-cols-1: Stacked on mobile
            - lg:grid-cols-2: Side-by-side on large screens
            - items-start: Ensures components align at the top
        */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Column: About Section */}
          <div className="w-full">
            <About />
          </div>

          {/* Right Column: Contact Form Section */}
          <div className="w-full">
            <ContactForm />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default MainNavigation;
