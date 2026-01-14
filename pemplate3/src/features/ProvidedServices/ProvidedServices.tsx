import React from "react";
import { motion, Variants } from "framer-motion";
import {type LucideIcon } from "lucide-react";
import { PROVIDED_SERVICES } from "@/constants/data";

interface ServiceItem {
  id: number;
  list: string;
  icon: LucideIcon;
}

const ProvidedServices: React.FC = () => {
  // Staggered entrance from the left for a high-end feel
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.04, delayChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  // Splitting content into exact 1-10 and 11-20 columns
  const col1 = PROVIDED_SERVICES.slice(0, 10);
  const col2 = PROVIDED_SERVICES.slice(10, 20);

  return (
    <section className="relative w-full py-12 mt-6 bg-zinc-950 overflow-hidden border-y border-white/5">
      {/* Mirror Finish Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-tr from-black via-zinc-900/40 to-black opacity-60" />

      {/* Subtle Ambient Glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight text-center">
              Firm provides Services to Various Industries
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Column 1: Items 1-10 */}
            <div className="flex flex-col gap-2">
              {col1.map((service) => (
                <ServiceRow
                  key={service.id}
                  service={service}
                  variants={itemVariants}
                />
              ))}
            </div>

            {/* Column 2: Items 11-20 */}
            <div className="flex flex-col gap-2">
              {col2.map((service) => (
                <ServiceRow
                  key={service.id}
                  service={service}
                  variants={itemVariants}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ServiceRow = ({
  service,
  variants,
}: {
  service: ServiceItem;
  variants: Variants;
}) => (
  <motion.div
    variants={variants}
    whileHover={{ x: 4, backgroundColor: "rgba(255, 255, 255, 0.03)" }}
    className="group flex items-center gap-3 p-2.5 rounded-md border border-white/3 transition-all duration-300"
  >
    <div className="shrink-0 w-5 h-5 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-blue-600/20 transition-colors">
      <service.icon className="w-3 h-3 text-zinc-400 group-hover:text-blue-400" />
    </div>
    <span className="text-zinc-300 text-[13px] md:text-sm font-medium tracking-wide">
      {service.list}
    </span>
  </motion.div>
);

export default ProvidedServices;
