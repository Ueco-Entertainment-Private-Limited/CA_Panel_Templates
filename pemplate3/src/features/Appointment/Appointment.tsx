import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Appointment = () => {
  return (
    <div className="min-h-screen bg-sky-50 flex items-center justify-center p-4 md:p-8">
      {/* Book Container */}
      <motion.div
        initial={{ rotateY: -15, opacity: 0 }}
        animate={{ rotateY: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 bg-white shadow-2xl rounded-lg overflow-hidden border border-gray-200 relative"
      >
        {/* LEFT PAGE: Appointment Form (B/W Theme) */}
        <div className="p-8 md:p-12 bg-white flex flex-col justify-center border-r border-gray-100">
          <motion.div initial={{ x: -20 }} animate={{ x: 0 }}>
            <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-black pb-2 inline-block">
              Let's Schedule An Appointment
            </h2>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <Label className="text-xs font-bold uppercase tracking-wider">
                    First Name
                  </Label>
                  <Input
                    placeholder="John"
                    className="border-gray-300 focus-visible:ring-black"
                  />
                </div>
                <div className="space-y-1">
                  <Label className="text-xs font-bold uppercase tracking-wider">
                    Last Name
                  </Label>
                  <Input
                    placeholder="Doe"
                    className="border-gray-300 focus-visible:ring-black"
                  />
                </div>
              </div>

              {/* New Company Name Input */}
              <div className="space-y-1">
                <Label className="text-xs font-bold uppercase tracking-wider">
                  Company Name
                </Label>
                <Input
                  placeholder="Acme Corp"
                  className="border-gray-300 focus-visible:ring-black"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <Label className="text-xs font-bold uppercase tracking-wider">
                    Email
                  </Label>
                  <Input
                    type="email"
                    placeholder="john@example.com"
                    className="border-gray-300"
                  />
                </div>
                <div className="space-y-1">
                  <Label className="text-xs font-bold uppercase tracking-wider">
                    Phone
                  </Label>
                  <Input
                    type="tel"
                    placeholder="+91-000..."
                    className="border-gray-300"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <Label className="text-xs font-bold uppercase tracking-wider">
                  Preferred Date
                </Label>
                <Input type="date" className="border-gray-300" />
              </div>

              {/* Dropdown for last input */}
              <div className="space-y-1">
                <Label className="text-xs font-bold uppercase tracking-wider">
                  Inquiry Type
                </Label>
                <Select>
                  <SelectTrigger className="border-gray-300">
                    <SelectValue placeholder="Select purpose" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="consultation">
                      Business Consultation
                    </SelectItem>
                    <SelectItem value="partnership">
                      Partnership Inquiry
                    </SelectItem>
                    <SelectItem value="support">Technical Support</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button className="w-full bg-black hover:bg-gray-800 text-white py-6 mt-4">
                Confirm Booking
              </Button>
            </form>
          </motion.div>
        </div>

        {/* RIGHT PAGE: Visit Us (Gold Accent Area) */}
        <div className="p-8 md:p-12 bg-neutral-50 flex flex-col justify-center">
          <motion.div initial={{ x: 20 }} animate={{ x: 0 }}>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Visit Us</h2>

            <div className="space-y-10">
              {/* Head Office - Gold Border */}
              <div className="relative pl-6 border-l-4 border-[#D4AF37]">
                <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-1">
                  Pune Head Office
                </p>
                <p className="text-lg text-gray-800 font-medium leading-relaxed">
                  7, Saraswati Heights, Behind Goodluck Cafe, <br />
                  Deccan Gymkhana, Pune - 411004
                </p>
                <p className="mt-2 font-bold text-[#D4AF37]">
                  Phone: <span className="text-black">+91-7722063311</span>
                </p>
              </div>

              {/* Branch Office - Gold Border */}
              <div className="relative pl-6 border-l-4 border-[#D4AF37]">
                <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-1">
                  Pune Branch Office
                </p>
                <p className="text-lg text-gray-800 font-medium leading-relaxed">
                  Tulasi Green, Office 1, B/H D-Mart, Baner Road, <br />
                  Nandan Prospera Rd, Laxman Nagar, Baner, Pune - 411045
                </p>
                <p className="mt-2 font-bold text-[#D4AF37]">
                  Phone: <span className="text-black">+91-9420442921</span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Appointment;
