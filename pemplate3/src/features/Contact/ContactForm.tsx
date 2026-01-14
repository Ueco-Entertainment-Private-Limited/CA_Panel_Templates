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
      transition={{ duration: 0.8, ease: "easeOut" }}
      // h-fit ensures no extra vertical space. bg-white/40 for image visibility.
      className="bg-white/10 backdrop-blur-xl p-6 rounded-[2rem] border border-white/30 shadow-xl w-full lg:max-w-90 h-fit ml-auto"
    >
      <div className="mb-4">
        <h3 className="text-lg font-bold text-black uppercase tracking-widest border-b-2 border-black inline-block">
          Contact Us
        </h3>
      </div>

      <form className="flex flex-col gap-3">
        <Input
          placeholder="Full Name"
          className="bg-white/50 border-black/20 focus:border-black text-black placeholder:text-black/50 h-10 rounded-xl"
        />
        <Input
          placeholder="Email Address"
          className="bg-white/50 border-black/20 focus:border-black text-black placeholder:text-black/50 h-10 rounded-xl"
        />
        <div className="grid grid-cols-2 gap-2">
          <Input
            placeholder="Mobile"
            className="bg-white/50 border-black/20 focus:border-black text-black placeholder:text-black/50 h-10 rounded-xl"
          />
          <Input
            placeholder="Company"
            className="bg-white/50 border-black/20 focus:border-black text-black placeholder:text-black/50 h-10 rounded-xl"
          />
        </div>
        <Button className="bg-black text-white hover:bg-neutral-800 rounded-xl h-10 mt-2 flex items-center justify-center gap-2 cursor-pointer">
          Send <Send className="h-4 w-4" />
        </Button>
      </form>
    </motion.div>
  );
};

export default ContactForm;
