"use client"; // Required if using Next.js App Router for hooks that rely on browser APIs

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
// Assuming these feature components are imported correctly
import Achievement from "./features/Achievement/Achievement";
import Appointment from "./features/Appointment/Appointment";
import General from "./features/General/General";
import ProvidedServices from "./features/ProvidedServices/ProvidedServices";
import Services from "./features/Services/Services";

export default function App() {
  // 1. Create a ref to track the scrollable area
  const mainContainerRef = useRef<HTMLDivElement>(null);

  // 2. Track scroll progress within that container
  const { scrollYProgress } = useScroll({
    target: mainContainerRef,
    offset: ["start start", "end end"], // Track from the very top to the very bottom of the element
  });

  // 3. Map the 0-1 scroll progress to a vertical position (0% to 100%)
  const markerY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <>
      <Header />

      {/* The main container with vertical gold borders */}
      <div
        ref={mainContainerRef}
        className="max-w-7xl mx-auto border-l-2 border-r-2 border-[#D4AF37] min-h-screen relative overflow-hidden" // Added 'relative' and 'overflow-hidden' for positioning the marker
      >
        {/* The moving "bright circle" marker */}
        <motion.div
          className="absolute left-0 right-0 h-4 w-4 bg-[#FFD700] rounded-full shadow-lg shadow-[#FFD700]/70 z-10 mx-auto transform -translate-y-1/2"
          style={{
            y: markerY,
            // Simple scale effect for a "bright" pulse feel
            scale: useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.2, 1]),
          }}
        />
        <main>
          <General />
          <Achievement />
          <Services />
          <ProvidedServices />
          <Appointment />
        </main>
      </div>

      <Footer />
    </>
  );
}
