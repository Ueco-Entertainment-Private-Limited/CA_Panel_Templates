import { motion, type Variants } from "framer-motion";
import { MoveRight, ShieldCheck } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AUDIT_TAX_CARDS } from "@/Constant/Data";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants: Variants = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 80 } },
};

const AuditTax = () => {
  return (
    // Padding aligned to Header: px-6 md:px-16
    <section className="bg-sky-50 py-24 px-6 md:px-16 overflow-hidden">
      <div className="w-full mx-auto">
        {/* Header Section - Border color aligned to #EAB308 */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-16 border-l-4 border-[#EAB308] pl-6"
        >
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-none">
            Audit & <span className="text-[#034EA2]">Tax Management</span>
          </h2>
        </motion.div>

        {/* Responsive Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {AUDIT_TAX_CARDS.map((data, idx) => (
            <motion.div key={idx} variants={cardVariants} className="h-full">
              {/* UI Kept exactly same, only hex codes updated to #034EA2 and #EAB308 */}
              <Card className="group relative h-full flex flex-col justify-between bg-[#112240] border-slate-800 hover:border-[#EAB308]/50 transition-all duration-500 shadow-xl overflow-hidden rounded-xl">
                {/* Visual Accent glow updated to #EAB308 */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#EAB308]/10 blur-3xl group-hover:bg-[#EAB308]/20 transition-all" />

                <CardHeader className="relative z-10 pt-8 px-5">
                  <div className="w-11 h-11 rounded-full bg-sky-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <ShieldCheck
                      className="text-sky-400 group-hover:text-[#EAB308]"
                      size={22}
                    />
                  </div>
                  <CardTitle className="text-lg font-bold text-white group-hover:text-[#EAB308] transition-colors leading-snug">
                    {data.heading}
                  </CardTitle>
                </CardHeader>

                <CardContent className="relative z-10 px-5 grow">
                  <p className="text-slate-400 leading-relaxed text-sm antialiased">
                    {data.paragraph}
                  </p>
                </CardContent>

                <CardFooter className="relative z-10 pb-8 px-5 pt-4">
                  <Button
                    variant="ghost"
                    className="p-0 h-auto text-[#EAB308] hover:text-[#EAB308] hover:bg-transparent flex items-center gap-2 group/btn font-bold text-xs tracking-widest"
                  >
                    Read MORE
                    <MoveRight
                      className="group-hover/btn:translate-x-2 transition-transform"
                      size={14}
                    />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AuditTax;
