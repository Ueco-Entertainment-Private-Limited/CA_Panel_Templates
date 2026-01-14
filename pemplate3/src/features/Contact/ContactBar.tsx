"use client";

import { Mail, PhoneCall } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const contactBarVariants: Variants = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const Contact = () => {
  return (
    // Use motion.div for the top-level container to animate its appearance
    <motion.div
      variants={contactBarVariants}
      initial="hidden"
      animate="visible"
      // Styling matches the dark blue background from the image provided
      className="w-full bg-blue-900/90 text-white shadow-lg"
    >
      <div className="container mx-auto px-4 py-3 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Contact Info Group - Responsive layout switches from column to row */}
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <div className="flex items-center gap-2">
            <PhoneCall className="w-4 h-4 text-blue-400" />
            <span className="text-sm">+91 8484 04 8948</span>
          </div>

          {/* Use shadcn Separator for a clean divider */}
          <Separator
            orientation="vertical"
            className="hidden sm:block h-5 bg-white/20"
          />

          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-blue-400" />
            <span className="text-sm">ang@angca.com</span>
          </div>
        </div>

        {/* Appointment Button/Link */}
        <div className="shrink-0">
          {/* Uses shadcn Button component, customized with ghost variant */}
          <Button
            variant="ghost"
            className="text-white hover:bg-blue-700/50 hover:text-white transition-colors p-0 text-sm h-auto"
            asChild // Allows the Button component to act as an anchor tag
          >
            <a href="#">Make an Appointment</a>
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;

