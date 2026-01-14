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
    /* 
       1. Added 'relative z-0': This ensures the entire section stays 
          behind the Navbar (which should be z-50).
       2. Added 'group': This allows us to dim the content when the 
          user is interacting with the top area.
    */
    <div className="w-full relative z-0 group">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        /* 
           3. Added 'group-hover:opacity-60': When the user hovers near 
              the top/nav area, the About/Contact sections will dim slightly
              to make the dropdown text pop.
        */
        className="container mx-auto px-4 py-4 transition-opacity duration-500 group-hover:opacity-60"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
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
