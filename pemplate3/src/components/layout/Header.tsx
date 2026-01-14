"use client";
import { motion } from "framer-motion";
import Navigation from "@/features/Navigation/Navigation";
import MainNavigation from "@/features/MainNavigation/MainNavigation";

export default function Header() {
  // Define the main colors as variables for clarity
  const colorCharcoal = "#0a0a0a";
  const colorGold = "#D4AF37"; // Your existing gold hex

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      // White background, text is charcoal, bottom border is gold
      className={`relative w-full min-h-[80vh] md:min-h-screen flex flex-col text-[${colorCharcoal}] bg-white border-b border-[${colorGold}]/70 shadow-sm`}
    >
      {/* Dynamic Gold Glow Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Main Gold Glow (more intense) */}
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className={`absolute -top-[10%] -left-[10%] w-[50%] md:w-[40%] h-[40%] bg-[${colorGold}]/10 blur-[150px] rounded-full`}
        />
        {/* Subtle secondary glow (optional) */}
        <div className="absolute top-[20%] -right-[5%] w-[40%] md:w-[30%] h-[30%] bg-white/50 blur-[100px] rounded-full" />
      </div>

      <div className="relative z-10 w-full flex flex-col h-full backdrop-blur-[2px]">
        {/* Navigation Wrapper: Subtle Gold Divider Line */}
        <nav
          className={`w-full border-b border-[${colorGold}]/30 bg-white/60 backdrop-blur-md px-4 md:px-8`}
        >
          <div className="max-w-7xl mx-auto">
            <Navigation />
          </div>
        </nav>

        {/* Main Content Area */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex-1 flex flex-col justify-center px-6 md:px-12 lg:px-24"
        >
          <div className="max-w-7xl mx-auto w-full">
            <MainNavigation />
          </div>
        </motion.div>
      </div>
    </motion.header>
  );
}
