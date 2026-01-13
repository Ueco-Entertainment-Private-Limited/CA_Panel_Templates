"use client";
import { motion } from "framer-motion";
import { BiRightArrow } from "react-icons/bi";

const AboutSection = () => {
  return (
    <section className="py-16 px-6 md:py-24 bg-slate-50 flex justify-center">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Heading & Accent */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-5"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-blue-600"></div>
            <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">
              Established 2011
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight">
            Leading Chartered Accountants <span className="text-blue-700">in Jaipur</span>
          </h2>
          <p className="mt-6 text-slate-500 font-medium italic border-l-4 border-blue-600 pl-4">
            "Ensuring financial health through precision and integrity."
          </p>
        </motion.div>

        {/* Right Column: Content & Action */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="lg:col-span-7 space-y-6"
        >
          <div className="space-y-5 text-slate-700 leading-relaxed text-base md:text-lg">
            <p>
              Chartered Accountants are the backbone of the Indian economy, playing 
              a crucial role in maintaining the financial integrity of businesses. 
              They provide more than just calculations; they offer a roadmap for 
              sustainable growth and regulatory compliance.
            </p>

            <p>
              <span className="font-bold text-slate-900">CA Goyal Mangal & Co.</span> 
              was founded in 2011 by <span className="text-blue-800 font-semibold">CA Pulkit Goyal</span>. 
              Our firm bridges the gap between complex financial regulations and 
              your business goals. From high-end consultancy to routine tax audits, 
              we bring a decade of expertise to the Jaipur market and beyond.
            </p>
          </div>

          <div className="pt-4">
            <motion.button 
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-3 group bg-slate-900 hover:bg-blue-800 text-white px-8 py-3.5 rounded-lg font-bold transition-all duration-300 shadow-md"
            >
              <span>Learn More About Us</span>
              <BiRightArrow className="text-blue-400 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutSection;
