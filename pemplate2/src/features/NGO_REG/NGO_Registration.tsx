import { motion } from "framer-motion";
import { NGO_CARDS } from "@/Constant/Data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const NGO_Registration = () => {
  return (
    // Padding aligned to Header: px-6 md:px-16
    <section className="bg-sky-50 py-16 px-6 md:px-16">
      <div className="w-full mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          // Heading color updated to Brand Navy #034EA2 and Yellow #EAB308
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#034EA2]"
        >
          NGO <span className="text-[#EAB308]">Registrations</span>
        </motion.h2>

        {/* Grid spacing maintained, alignment ensured by parent padding */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {NGO_CARDS.map((data, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -5 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              viewport={{ once: true }}
            >
              {/* Card UI preserved; colors aligned to #034EA2 and #EAB308 */}
              <Card className="h-full min-h-[350px] border-none shadow-lg bg-white hover:bg-sky-100 transition-colors duration-300 flex flex-col">
                <CardHeader className="flex flex-col items-center">
                  <div className="relative mb-4">
                    {/* Glow effect aligned to Yellow #EAB308 */}
                    <div className="absolute inset-0 bg-[#EAB308] blur-2xl opacity-20 rounded-full" />
                    <img
                      src={data.icon}
                      alt={data.heading}
                      className="w-14 h-14 relative z-10 filter drop-shadow-[0_0_15px_rgba(234,179,8,0.6)]"
                    />
                  </div>
                  <CardTitle className="text-lg font-semibold text-[#034EA2] text-center uppercase tracking-wide">
                    {data.heading}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col grow">
                  <p className="text-gray-600 text-center leading-relaxed">
                    {data.paragraph}
                  </p>
                  <div className="mt-auto pt-6 flex justify-center">
                    {/* Accent bar aligned to Yellow #EAB308 */}
                    <div className="h-1 w-12 bg-[#EAB308] rounded-full" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NGO_Registration;
