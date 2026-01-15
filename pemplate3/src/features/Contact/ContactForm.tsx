"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";

const ContactForm = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="relative z-0 bg-white/40 backdrop-blur-2xl p-8 md:p-12 rounded-[2.5rem] border border-[#D4AF37]/70 shadow-xs w-full max-w-2xl flex flex-col space-y-6"
    >
      <div className="space-y-2">
        <h3 className="text-2xl lg:text-4xl font-black text-black uppercase tracking-tighter leading-none">
          Get In <span className="text-[#D4AF37]">Touch</span>
        </h3>
        <p className="text-[10px] font-bold tracking-[0.3em] text-black/40 uppercase">
          Enquire for Financial Services
        </p>
      </div>

      <form className="flex flex-col gap-4">
        <Input
          placeholder="Full Name"
          className="bg-white/60 border-[#D4AF37]/70 focus:border-[#D4AF37] text-black placeholder:text-black/60 h-12 rounded-2xl transition-all"
        />
        <Input
          placeholder="Email Address"
          className="bg-white/60 border-[#D4AF37]/70 focus:border-[#D4AF37] text-black placeholder:text-black/60 h-12 rounded-2xl transition-all"
        />
        <div className="grid grid-cols-2 gap-4">
          <Input
            placeholder="Mobile"
            className="bg-white/60 border-[#D4AF37]/70 focus:border-[#D4AF37] text-black placeholder:text-black/60 h-12 rounded-2xl transition-all"
          />
          <Input
            placeholder="Company"
            className="bg-white/60 border-[#D4AF37]/70 focus:border-[#D4AF37] text-black placeholder:text-black/60 h-12 rounded-2xl transition-all"
          />
        </div>

        <div className="pt-2">
          <Button className="w-full bg-black text-white hover:bg-white hover:text-black border-2 border-black rounded-full h-14 transition-all duration-500 flex items-center justify-center gap-2 cursor-pointer text-xs uppercase tracking-widest font-bold group">
            Send Message
            <Send className="h-4 w-4 text-[#D4AF37] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Button>
        </div>
      </form>
    </motion.div>
  );
};

export default ContactForm;
