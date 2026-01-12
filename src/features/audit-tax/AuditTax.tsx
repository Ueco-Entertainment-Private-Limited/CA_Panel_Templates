"use client";
import { motion, type Variants } from "framer-motion";
import { BiRightArrow } from "react-icons/bi";
import { AUDIT_TAX_CARDS } from "../../Data/Data";

const AuditTax = () => {
  const primaryOrange = "#f97316";

  // Animation for the grid container
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Cards appear one after another
      },
    },
  };

  // Animation for individual cards
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="py-16 px-4 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Animated Heading Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Audit and Tax Management
          </h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 96 }} // w-24 equivalent
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="h-1.5 bg-orange-500 mx-auto rounded-full"
          />
        </motion.div>

        {/* Animated Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {AUDIT_TAX_CARDS.map((data) => {
            const IconComponent = data.icon;
            return (
              <motion.div
                key={data.id}
                variants={cardVariants}
                whileHover={{ y: -8 }} // Gentle lift on hover
                className="group bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col h-full items-center text-center"
              >
                {/* Icon Container with subtle pop effect */}
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="mb-4 inline-block p-4 bg-orange-50 rounded-2xl transition-colors group-hover:bg-orange-100"
                >
                  <IconComponent
                    size={36}
                    color={primaryOrange}
                  />
                </motion.div>

                <h3 className="text-lg font-bold text-gray-800 mb-3 leading-tight">
                  {data.heading}
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  {data.paragraph}
                </p>

                {/* Interactive Action Link */}
                <motion.a
                  href="#"
                  className="flex items-center text-orange-500 hover:text-orange-600 transition-colors font-bold text-sm mt-auto group/link"
                >
                  Read More
                  <BiRightArrow className="ml-2 transition-transform duration-300 group-hover/link:translate-x-1" />
                </motion.a>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default AuditTax;
