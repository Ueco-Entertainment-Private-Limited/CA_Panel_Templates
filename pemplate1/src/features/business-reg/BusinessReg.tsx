"use client";

import React from "react";
import { motion, type Variants } from "framer-motion"; // 1. Added Variants type
import { ArrowRight } from "lucide-react";
import { BUSINESS_CARDS } from "../../Data/Data";

const BusinessRegistration: React.FC = () => {
  // 2. Explicitly type the variants to avoid internal logic errors
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.1 // Ensures children start after container
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: "easeOut" } 
    },
  };

  return (
    <section className="py-12 px-6 md:py-16 lg:px-16 bg-gray-50 flex justify-center overflow-hidden">
      <div className="max-w-7xl w-full">
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-3 tracking-tight">
            Business Registrations
          </h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            className="h-1.5 bg-emerald-500 mx-auto rounded-full"
          />
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible" // 3. Re-triggered correctly on scroll
          viewport={{ once: true, amount: 0.2 }} // 4. Changed margin to amount for better reliability
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {BUSINESS_CARDS.map((data) => {
            const IconComponent = data.icon;

            return (
              <motion.div
                key={data.id}
                variants={cardVariants} // 5. This will now correctly inherit 'visible' from parent
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col group cursor-pointer"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-emerald-50 rounded-xl group-hover:bg-emerald-100 transition-colors shrink-0">
                    <IconComponent
                      size={28}
                      color={data.iconColor}
                      strokeWidth={Number(data.strokeWidth) || 2}
                    />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 leading-snug">
                    {data.heading}
                  </h3>
                </div>

                <div className="flex flex-col">
                  <p className="text-sm text-gray-600 leading-relaxed mb-3">
                    {data.paragraph}
                  </p>
                  
                  <div className="flex items-center gap-1 text-emerald-600 font-bold text-xs uppercase tracking-wider group-hover:gap-2 transition-all">
                    <span>Explore More</span>
                    <ArrowRight size={14} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default BusinessRegistration;
