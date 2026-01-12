"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IMAGES } from "../../logo";

const images = [
  IMAGES.working_1,
  IMAGES.working_2,
  IMAGES.working_3,
  IMAGES.working_4,
  IMAGES.working_5,
];

const HeroSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[calc(100vh-112px)] w-full overflow-hidden bg-black">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          {/* Background Image with Ken Burns Zoom Effect */}
          <motion.div
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 6, ease: "linear" }}
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${images[currentIndex]})`,
            }}
          />

          {/* Content Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex flex-col items-center justify-center text-center text-white px-4 md:px-12 max-w-5xl">
              
              {/* Staggered Heading */}
              <motion.h2
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-4xl md:text-7xl font-bold mb-6 drop-shadow-2xl leading-tight"
              >
                Welcome to <br className="hidden md:block" />
                <span className="text-blue-400">CA Goyal Mangal & Co.</span>
              </motion.h2>

              {/* Subtext */}
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="text-lg md:text-2xl mb-10 font-light tracking-wide text-gray-200"
              >
                Transforming Knowledge into Values
              </motion.p>

              {/* Action Buttons */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.1, duration: 0.8 }}
                className="flex flex-wrap justify-center gap-4"
              >
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-600 hover:bg-blue-700 text-white py-4 px-10 rounded-full font-semibold transition-all shadow-xl uppercase tracking-widest text-sm"
                >
                  Get Started
                </motion.button>
                
                <motion.button 
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,1)", color: "#000" }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white py-4 px-10 rounded-full font-semibold transition-all uppercase tracking-widest text-sm"
                >
                  Contact Us
                </motion.button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Slide Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-1.5 transition-all duration-500 rounded-full ${
              currentIndex === index ? "w-8 bg-blue-500" : "w-2 bg-white/50 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
