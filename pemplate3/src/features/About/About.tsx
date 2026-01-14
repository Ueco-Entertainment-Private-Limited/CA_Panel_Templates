"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      /* 
         FIX: Added 'relative z-0' to ensure this stays below the navbar dropdowns.
         Increased 'bg-white/40' for better 2026 contrast.
      */
      className="relative z-0 max-w-2xl bg-white/40 backdrop-blur-2xl p-8 md:p-12 rounded-[2.5rem] border border-[#D4AF37]/30 shadow-xs flex flex-col space-y-6 text-left h-fit"
    >
      <div className="space-y-2">
        <h2 className="text-3xl lg:text-5xl font-black tracking-tighter text-black uppercase leading-[0.9]">
          Welcome To <br />
          <span className="text-[#D4AF37]">AN GAWADE & CO LLP</span>
        </h2>
        <p className="text-[10px] font-bold tracking-[0.3em] text-black/50 uppercase">
          Indian Chartered Accountants Firm
        </p>
      </div>

      <div className="max-w-lg">
        <p className="text-sm lg:text-base leading-relaxed text-black/80 font-medium">
          We at ANG provide comprehensive services for{" "}
          <span className="text-black font-semibold">
            Income Tax, International Tax and Transfer Pricing
          </span>
          , GST, Bookkeeping in Tally and QuickBooks, Auditing, and Overseas
          Business Setup.
        </p>
      </div>

      <div className="pt-2">
        <Button className="bg-black text-white hover:bg-white hover:text-black border-2 border-black rounded-full px-8 py-6 transition-all duration-500 group cursor-pointer text-xs uppercase tracking-widest font-bold">
          View Our Services
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform text-[#D4AF37]" />
        </Button>
      </div>
    </motion.div>
  );
};

export default About;
