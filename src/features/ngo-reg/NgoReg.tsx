"use client";
import { motion, type Variants } from "framer-motion"; // 1. Added Variants type
import { NGO_CARDS } from "../../Data/Data";

const NgoRegistration = () => {
  // Container variants to manage the staggered children animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Delay between each card appearing
      },
    },
  };

  // Individual card variants
  const cardVariants:Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto overflow-hidden">
      {/* Centered Heading with Fade-in */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 relative inline-block">
          NGO Registration
          <motion.span 
            initial={{ width: 0 }}
            whileInView={{ width: "5rem" }} // w-20 equivalent
            transition={{ delay: 0.5, duration: 0.8 }}
            className="block h-1 bg-emerald-500 mx-auto mt-2"
          ></motion.span>
        </h2>
      </motion.div>

      {/* Responsive Grid Layout with Staggered Animation */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {NGO_CARDS.map((data) => (
          <motion.div
            key={data.id}
            variants={cardVariants}
            whileHover={{ 
              y: -10, 
              transition: { duration: 0.2 } 
            }}
            className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-100"
          >
            {/* Icon Container with Scale-in effect */}
            <motion.div 
              whileHover={{ rotate: 5, scale: 1.1 }}
              className="mb-4 p-3 rounded-full bg-emerald-50"
            >
              <img
                src={data.icon}
                alt={data.heading}
                className="w-16 h-16 object-contain"
              />
            </motion.div>

            {/* Content */}
            <h3 className="text-xl font-semibold mb-3 text-gray-800">
              {data.heading}
            </h3>
            <p className="text-gray-600 leading-relaxed text-sm">
              {data.paragraph}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default NgoRegistration;
