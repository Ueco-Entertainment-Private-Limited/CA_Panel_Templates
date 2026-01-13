"use client";

import { Facebook, Instagram, Linkedin, Mail, PhoneCall } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export const ContactSupport = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      // UPDATED CLASS: Added 'hidden md:flex' to hide on mobile and show on desktop
        className="hidden md:flex w-full bg-[#034EA2] py-0.5 px-6 md:px-16 flex-col md:flex-row items-center justify-between gap-4 shadow-md border-b border-white/10"
      >
      {/* Contact Details */}
      <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12">
        <a 
          href="mailto:admin@cagmc.com" 
          className="flex items-center gap-2.5 group hover:opacity-90 transition-opacity"
        >
          <Mail className="w-5 h-5 text-[#F4C430]" />
          <span className="text-[#F4C430] font-bold text-sm md:text-base tracking-wide">
            admin@cagmc.com
          </span>
        </a>

        <a 
          href="tel:+919785312345" 
          className="flex items-center gap-2.5 group hover:opacity-90 transition-opacity"
        >
          <PhoneCall className="w-5 h-5 text-[#F4C430]" />
          <span className="text-[#F4C430] font-bold text-sm md:text-base tracking-wide">
            +91-97853 12345
          </span>
        </a>
      </div>

      {/* Social Links */}
      <div className="flex items-center gap-5">
        {[
          { Icon: Facebook, link: "#" },
          { Icon: Linkedin, link: "#" },
          { Icon: Instagram, link: "#" }
        ].map((item, index) => (
          <Button 
            key={index}
            variant="ghost" 
            size="icon" 
            asChild
            className="h-12 w-12 text-[#F4C430] hover:bg-white/10 hover:text-white rounded-full transition-all active:scale-90"
          >
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <item.Icon className="w-7 h-7" />
            </a>
          </Button>
        ))}
      </div>
    </motion.div>
  );
};
