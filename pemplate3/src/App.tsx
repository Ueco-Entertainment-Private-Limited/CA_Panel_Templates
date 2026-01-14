"use client";

import { motion, useScroll, useTransform } from "framer-motion";

import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Achievement from "./features/Achievement/Achievement";
import Appointment from "./features/Appointment/Appointment";
import General from "./features/General/General";
import ProvidedServices from "./features/ProvidedServices/ProvidedServices";
import Services from "./features/Services/Services";

export default function App() {
  // Tracks global page scroll
  const { scrollYProgress } = useScroll();

  // FIX: Use percentages so the marker travels the full height of the container
  const markerY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.3, 1]);

  return (
    <>
      <Header />

      <div className="max-w-7xl mx-auto border-x-2 border-[#D4AF37] min-h-screen relative">
        {/* GOLD MARKER */}
        <motion.div
          className="absolute left-1/2 h-4 w-4 bg-[#FFD700] rounded-full shadow-lg shadow-[#FFD700]/70 z-50 -translate-x-1/2"
          style={{
            top: markerY, // Use 'top' with percentage for easier vertical tracking
            scale,
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

