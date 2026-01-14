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
      // glassmorphism: white/10 opacity lets the background image show through
      className="bg-white/10 backdrop-blur-xl p-8 md:p-12 rounded-[2rem] border border-white/90 shadow-xl flex flex-col space-y-6 text-left h-fit"
    >
      <div className="space-y-2">
        <h2 className="text-3xl lg:text-5xl font-extrabold tracking-tighter text-black uppercase leading-none">
          Welcome To <br />
          <span className="text-white/60">AN GAWADE & CO LLP</span>
        </h2>
        <p className="text-xs font-bold tracking-[0.2em] text-white/70 uppercase">
          Indian Chartered Accountants Firm
        </p>
      </div>

      <div className="max-w-xl">
        <p className="text-md lg:text-lg leading-relaxed text-white/80 font-medium">
          We at{" "}
          <span className="font-bold text-black italic underline decoration-1">
            ANG
          </span>{" "}
          provide services for Income Tax, International Tax, and GST. Expertise
          in <span className="font-bold text-white">Tally & QuickBooks</span>.
        </p>
        <p className="mt-2 text-white/70 leading-relaxed text-sm lg:text-base">
          From Auditing to Overseas Business Setup, we deliver financial
          solutions for global scale.
        </p>
      </div>

      <div className="pt-2">
        <Button className="bg-black text-white hover:bg-white hover:text-black border border-black rounded-full px-6 py-5 transition-all duration-300 group cursor-pointer">
          View Our Services
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </motion.div>
  );
};

export default About;
