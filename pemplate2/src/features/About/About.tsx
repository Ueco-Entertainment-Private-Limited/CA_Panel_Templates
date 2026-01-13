import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="container mx-auto px-6 py-16 max-w-4xl">
      {/* Background Accent Decor */}
      <div className="absolute top-0 right-0 -z-10 h-64 w-64 bg-sky-100/50 blur-3xl rounded-full" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-8"
      >
        <div className="flex items-center gap-3">
          <div className="h-1 w-12 bg-amber-400 rounded-full" />
          <h2 className="text-4xl md:text-5xl font-black text-sky-900 tracking-tight">
            CA in <span className="text-sky-600">Jaipur</span>
          </h2>
        </div>

        {/* Paragraph 1 - Highlight Card */}
        <Card className="border-none shadow-lg bg-white hover:shadow-sky-100 transition-shadow duration-300">
          <CardContent className="p-8">
            <p className="text-xl text-slate-700 leading-relaxed font-medium">
              CA Goyal Mangal & Co., a Chartered Accountant firm, founded in
              2011, by CA Pulkit Goyal with the enthusiasm of providing the best
              consultancy and expertise. The team consists of highly skilled and
              experienced professionals by offering tax consultancy, accounting,
              tax auditing and financial advisory to meet our diverse client
              needs.
            </p>
          </CardContent>
        </Card>

        {/* Paragraph 2 - Interactive Reveal */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0, scale: 0.95 }}
              animate={{ height: "auto", opacity: 1, scale: 1 }}
              exit={{ height: 0, opacity: 0, scale: 0.95 }}
              className="overflow-hidden"
            >
              <div className="grid grid-cols-1 gap-6 pt-2">
                <div className="p-8 rounded-2xl bg-sky-50 border-l-8 border-amber-400 shadow-sm">
                  <p className="text-lg text-sky-900 leading-relaxed italic">
                    The Chartered Accountants have been a significant part of
                    not just the Indian economy but also of all the companies in
                    the country which plays a crucial role in ensuring financial
                    health. A Chartered Accountant is a professional who
                    provides financial and tax services to individuals,
                    businesses, and organizations. They are also known as
                    Certified Public Accountants (CAPs). CA in Jaipur works in
                    all areas of finance, including auditing, taxation,
                    financial planning, etc.
                  </p>
                </div>

                <div className="p-8 rounded-2xl bg-slate-50/50 border border-slate-100">
                  <p className="text-lg text-slate-600 leading-relaxed">
                    CA Goyal Mangal & Co., a Chartered Accountant firm, founded
                    in 2011, by CA Pulkit Goyal with the enthusiasm of providing
                    the best consultancy and expertise. The team consists of
                    highly skilled and experienced professionals by offering tax
                    consultancy, accounting, tax auditing and financial advisory
                    to meet our diverse client needs.
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Read More Button - Sky Blue & Yellow Theme */}
        <div className="flex justify-center md:justify-start pt-4">
          <Button
            onClick={() => setIsExpanded(!isExpanded)}
            className={`
              h-14 px-8 text-lg font-bold rounded-full transition-all duration-500 cursor-pointer
              ${
                isExpanded
                  ? "bg-slate-800 text-white hover:bg-slate-900"
                  : "bg-sky-500 text-white hover:bg-sky-600 shadow-lg shadow-sky-200 hover:-translate-y-1"
              }
            `}
          >
            <span className="flex items-center gap-2">
              {isExpanded ? "Show Less" : "Read More"}
              {isExpanded ? (
                <ChevronUp className="h-5 w-5" />
              ) : (
                <ChevronDown className="h-5 w-5 animate-bounce" />
              )}
            </span>
          </Button>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
