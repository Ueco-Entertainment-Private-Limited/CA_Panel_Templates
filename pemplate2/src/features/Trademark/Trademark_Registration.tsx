import { motion } from "framer-motion";
import { TRADEMARK_REGISTRATION } from "@/Constant/Data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Trademark_Registration = () => {
  return (
    // Updated padding to md:px-16 to match your Header's px-6 md:px-16
    <section className="bg-sky-50/50 py-12 px-6 md:px-16">
      <div className="w-full mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          // Changed text colors to match your brand: #034EA2 and #EAB308
          className="text-3xl md:text-4xl font-bold text-center mb-10 text-[#034EA2]"
        >
          Trademark <span className="text-[#EAB308]">Registrations</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TRADEMARK_REGISTRATION.map((data, index) => {
            const Icon = data.icon;
            const isAlternate = index % 2 !== 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -8 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                viewport={{ once: true }}
                className="flex"
              >
                <Card
                  className={`flex-1 h-full min-h-85 border-none shadow-sm transition-all duration-300 flex flex-col items-center group
                    ${isAlternate ? "bg-sky-100/60" : "bg-white"}`}
                >
                  <CardHeader className="flex flex-col items-center pt-8">
                    <div className="relative mb-5">
                      {/* Changed glow to #EAB308 to match header accent */}
                      <div className="absolute inset-0 bg-[#EAB308] blur-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-300 rounded-full scale-125" />

                      {/* Changed icon color to #034EA2 and hover to #EAB308 */}
                      <div className="relative z-10 p-3 text-[#034EA2] group-hover:text-[#EAB308] transition-colors duration-300">
                        <Icon
                          size={40}
                          strokeWidth={1.5}
                          className="filter drop-shadow-[0_0_5px_rgba(234,179,8,0.4)]"
                        />
                      </div>
                    </div>

                    {/* Text color changed to #034EA2 */}
                    <CardTitle className="text-base font-bold text-[#034EA2] text-center uppercase tracking-tight px-2 leading-tight">
                      {data.heading}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="flex flex-col grow items-center px-5 pb-8">
                    <p className="text-gray-600 text-center text-xs md:text-sm leading-relaxed font-medium">
                      {data.paragraph}
                    </p>

                    <div className="mt-auto pt-4">
                      {/* Changed accent bar to #EAB308 to match header underline */}
                      <div className="h-1 w-8 bg-[#EAB308] rounded-full group-hover:w-14 transition-all duration-300" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Trademark_Registration;
