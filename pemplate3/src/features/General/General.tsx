import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import MEETING_BANNER from "../../assets/Image/meetingBanner.png";

const MotionButton = motion.create(Button);

const General = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delayChildren: 0.2, staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <motion.section
      className="container mx-auto px-4 py-16 md:py-24" // Removed min-h-screen for better "short" sectioning
      variants={containerVariants}
      initial="hidden"
      whileInView="visible" // Animates when scrolled into view
      viewport={{ once: true }}
    >
      <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
        {/* Left Section: Image with Overlapping Gold Card */}
        <div className="relative pb-12 lg:pb-0">
          <motion.div variants={itemVariants} className="relative z-10">
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
              <img
                src={MEETING_BANNER}
                alt="Professional Meeting"
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>

          {/* Gold Achievement Card */}
          <motion.div
            variants={itemVariants}
            className="absolute -bottom-6 -right-2 md:right-8 z-20 bg-linear-to-br from-amber-500 via-yellow-600 to-amber-700 p-6 rounded-xl shadow-2xl flex gap-6 items-center text-white border border-yellow-400/30"
          >
            <div className="border-r border-white/20 pr-6">
              <p className="text-amber-100 text-[10px] uppercase tracking-widest font-bold">
                Since
              </p>
              <h2 className="text-2xl font-black italic">2002</h2>
            </div>
            <div>
              <h2 className="text-4xl font-black leading-none">23+</h2>
              <p className="text-amber-500 text-[10px] uppercase tracking-tighter font-bold bg-white px-2 py-0.5 rounded mt-1">
                Years Excellence
              </p>
            </div>
          </motion.div>
        </div>

        {/* Right Section: Content */}
        <motion.div className="space-y-6" variants={itemVariants}>
          <div className="space-y-2">
            <h2 className="text-3xl md:text-4xl font-bold text-black leading-tight">
              Accounting, Audit, Taxation & <br />
              <span className="text-gray-500">Corporate Advisory Firm</span>
            </h2>
          </div>

          <p className="text-gray-600 leading-relaxed text-sm md:text-base">
            A N. GAWADE & CO LLP, CA firm in Pune, India established in the year
            2002. We are team of Chartered Accountants in India we have been
            rendering a multitude of services under one roof over the 2 decades
            in the field of Accounts outsourcing, Auditing, Company formation in
            India, Business Taxation, Direct and Indirect Taxation,
            International Taxation, Starting business in India, registration of
            foreign companies, transfer pricing, Goods & Services Tax (GST),
            Company Law Consultancy, NRI Taxation, Startup Services and
            Book-Keeping & Outsourcing Services, Valuations and Insolvency
            Advisory Services.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-start pt-4">
            <MotionButton
              // Standard B&W Shadcn styling
              className="bg-black text-white hover:bg-gray-800 rounded-sm px-6 py-4 h-auto transition-all cursor-pointer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              READ MORE
            </MotionButton>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default General;
