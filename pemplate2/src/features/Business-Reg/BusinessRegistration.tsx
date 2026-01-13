import { BUSINESS_CARDS } from "@/Constant/Data";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const BusinessRegistration = () => {
  return (
    <section className="container mx-auto px-6 py-16 text-white">
      {/* Center Heading */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
          Business <span className="text-sky-500">Registrations</span>
        </h2>
      </motion.div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {BUSINESS_CARDS.map((data, index) => {
          const Icon = data.icon;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              {/* Compact Card with optimized height */}
              <Card className="h-full border border-sky-900/30 bg-slate-800 shadow-lg hover:border-sky-400 transition-all duration-300 group">
                <CardContent className="p-5 flex flex-col items-center text-center h-full">
                  {/* Reduced Icon Size and Glow Padding for Less Height */}
                  <div className="mb-4 p-3 rounded-xl bg-emerald-900/40 border border-emerald-500/20 shadow-[0_0_15px_rgba(52,211,153,0.2)]">
                    <Icon className="h-6 w-6 text-emerald-400" />
                  </div>

                  {/* Heading: Bright White */}
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-sky-400 transition-colors">
                    {data.heading}
                  </h3>

                  {/* Compact Paragraph with Sky Blue Text */}
                  <p className="text-sky-100/80 leading-snug text-xs md:text-sm">
                    {data.paragraph}
                    <span className="ml-1 inline-flex items-center justify-center w-5 h-5 rounded-full text-amber-400 group-hover:translate-x-1 transition-transform duration-300 shadow-[0_0_8px_rgba(251,191,36,0.4)] align-middle">
                      <ArrowRight className="h-3 w-3" />
                    </span>
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default BusinessRegistration;
