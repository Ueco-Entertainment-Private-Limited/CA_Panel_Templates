"use client";
import { motion, type Variants } from "framer-motion";
import { TRADEMARK_REGISTRATION } from "../../Data/Data";

const Trademark = () => {
  // Animation variants for the container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };

  // Animation variants for each card
  const cardVariants:Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] } 
    },
  };

  return (
    <section className="py-16 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Centered Heading with Fade-in */}
        <motion.div 
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Trademark Registration
          </h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="h-1 bg-emerald-500 mx-auto"
          />
        </motion.div>

        {/* Responsive Grid with Staggered Motion */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {TRADEMARK_REGISTRATION.map((data) => {
            const IconComponent = data.icon;
            return (
              <motion.div
                key={data.id}
                variants={cardVariants}
                whileHover={{ y: -8 }}
                className="group p-8 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-2xl hover:border-emerald-100 transition-all duration-300 flex flex-col items-center text-center"
              >
                {/* Icon Container - Now Slate-800 with Emerald hover detail */}
                <motion.div 
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                  className="mb-6 p-5 bg-white rounded-2xl shadow-sm border border-slate-50 group-hover:shadow-md group-hover:border-emerald-50 transition-all"
                >
                  <IconComponent
                    size={38}
                    // Color changed to Slate-800 as requested
                    className="text-slate-800 group-hover:text-emerald-600 transition-colors duration-300"
                    strokeWidth={1.5}
                  />
                </motion.div>

                {/* Fixed the 'heaading' typo from your original snippet */}
                <h3 className="text-lg font-bold text-slate-800 mb-3 group-hover:text-emerald-700 transition-colors">
                  {data.heading}
                </h3>

                <p className="text-slate-500 text-sm leading-relaxed group-hover:text-slate-600 transition-colors">
                  {data.paragraph}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Trademark;
