"use client";
import { motion } from "framer-motion";
import Navigation from "@/features/Navigation/Navigation";
import MainNavigation from "@/features/MainNavigation/MainNavigation";

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="relative w-full min-h-[80vh] md:min-h-screen flex flex-col bg-white border-b border-[#D4AF37]/70 shadow-sm"
    >
      {/* Background Glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[10%] -left-[10%] w-[50%] md:w-[40%] h-[40%] bg-[#D4AF37]/10 blur-[150px] rounded-full"
        />
      </div>

      {/* 
        FIX 1: Navigation MUST be separate and have the highest z-index.
        We removed it from the blurred container below.
      */}
      <nav className="sticky top-0 z-100 w-full border-b border-[#D4AF37]/30 bg-white/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <Navigation />
        </div>
      </nav>

      {/* 
        FIX 2: Content Area is separate and has a lower z-index (z-0).
        This ensures it never competes with the nav dropdowns.
      */}
      <div className="relative z-0 w-full flex-1 flex flex-col backdrop-blur-[2px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex-1 flex flex-col justify-center px-6 md:px-12 lg:px-24 py-4"
        >
          <div className="max-w-7xl mx-auto w-full">
            <MainNavigation />
          </div>
        </motion.div>
      </div>
    </motion.header>
  );
}
