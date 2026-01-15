"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      /* Ensure the section itself takes full height of the grid cell */
      className="w-full h-full py-2"
    >
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        /* 
           FIXES:
           1. Changed 'h-fit' to 'h-full' to match the Contact Form height.
           2. Changed 'lg:max-w-[70%]' to 'w-full' to align horizontally.
           3. Added 'justify-between' to push the button to the bottom if content is short.
        */
        className="relative z-0 w-full h-full bg-white/40 backdrop-blur-2xl p-8 md:p-12 rounded-[2.5rem] border border-[#D4AF37]/70 shadow-sm flex flex-col justify-between space-y-6 text-left"
      >
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-3xl lg:text-6xl font-black tracking-tighter text-black uppercase leading-[0.9]">
              Welcome To <br />
              <span className="text-[#D4AF37]">AN GAWADE & CO LLP</span>
            </h2>
            <p className="text-[10px] font-bold tracking-[0.3em] text-black/50 uppercase">
              Indian Chartered Accountants Firm
            </p>
          </div>

          <div className="max-w-2xl">
            <p className="text-sm lg:text-base leading-relaxed text-black/80 font-medium">
              We at ANG provide comprehensive services for{" "}
              <span className="text-black font-semibold">
                Income Tax, International Tax and Transfer Pricing
              </span>
              , GST, Bookkeeping in Tally and QuickBooks, Auditing, and Overseas
              Business Setup.
            </p>
          </div>
        </div>

        <div className="pt-2">
          <Button className="bg-black text-white hover:bg-white hover:text-black border-2 border-black rounded-full px-8 py-6 transition-all duration-500 group cursor-pointer text-xs uppercase tracking-widest font-bold w-full md:w-auto">
            View Our Services
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform text-[#D4AF37]" />
          </Button>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default About;
