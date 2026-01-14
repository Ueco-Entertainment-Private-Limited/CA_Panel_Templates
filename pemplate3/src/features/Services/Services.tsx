import { motion } from "framer-motion";
import { SERVICES_DATA } from "@/constants/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Services = () => {
  // Aesthetic Dull Orange for 2026
  const dullOrange = "#d97706";

  return (
    <section className="py-16 bg-white dark:bg-black text-black dark:text-white overflow-hidden">
      <div className="container mx-auto px-4 lg:px-20">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-zinc-100 mb-4">
            What We Do
          </h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="h-1 bg-orange-500 mx-auto rounded-full mb-8"
          />

          <h2 className="text-2xl md:text-4xl font-black tracking-tighter uppercase max-w-4xl mx-auto leading-tight mb-6">
            We assist clients in <span className="text-orange-600">Audits</span>
            , <span className="text-orange-600">Tax</span> &{" "}
            <span className="text-orange-600">Accounting</span> and other
            services
          </h2>

          <p className="max-w-3xl mx-auto text-sm md:text-base text-gray-600 dark:text-gray-400 font-medium leading-relaxed">
            We at ANG provide many services for Income Tax, International Tax
            and Transfer Pricing, Goods and Services Tax (GST), Book Keeping &
            Accounting in Tally as well as Quickbooks Accounting, Auditing,
            India Entry Services and Overseas Business Setup Services.
          </p>
        </div>

        {/* Responsive Zig-Zag Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10 items-start">
          {SERVICES_DATA.map((data, index) => {
            const IconComponent = data.icon;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                // Vertical Zig-Zag Stagger
                className={`${!isEven ? "lg:mt-16" : "mt-0"}`}
              >
                <Card
                  className={`
                    relative mx-auto max-w-75 min-h-70 flex flex-col items-center text-center p-8
                    bg-zinc-50 dark:bg-zinc-900/40 
                    border-2 border-dashed border-orange-500/40
                    hover:border-orange-600 transition-all duration-500
                    ${
                      isEven
                        ? "rounded-tr-[50px] rounded-bl-[50px]"
                        : "rounded-tl-[50px] rounded-br-[50px] shadow-lg shadow-orange-500/5"
                    }
                  `}
                >
                  <CardHeader className="p-0 flex flex-col items-center w-full">
                    {/* Icon Container */}
                    <div className="mb-5 p-4 bg-white dark:bg-zinc-800 rounded-2xl border border-orange-100 dark:border-orange-900/30 shadow-sm group-hover:scale-110 transition-transform duration-300">
                      {IconComponent && (
                        <IconComponent
                          size={32}
                          color={dullOrange}
                          strokeWidth={1.5}
                        />
                      )}
                    </div>

                    {/* Heading - Forced to 2 lines via max-width */}
                    <CardTitle className="text-lg md:text-xl font-bold uppercase tracking-tight leading-[1.2] max-w-45 h-12 flex items-center justify-center text-zinc-800 dark:text-zinc-100">
                      {data.heading}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="p-0 mt-4 w-full">
                    <p className="text-xs md:text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed line-clamp-3">
                      {data.paragraph}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Centered Button */}
        <div className="mt-20 flex justify-center">
          <Button
            variant="outline"
            className="group px-10 py-7 border-2 border-zinc-900 dark:border-zinc-100 rounded-full font-bold uppercase tracking-[0.2em] text-xs
            hover:bg-orange-600 hover:border-orange-600 hover:text-white transition-all duration-500 shadow-xl cursor-pointer"
          >
            View All Services
            <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
