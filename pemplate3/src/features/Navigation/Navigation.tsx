"use client";

import { useState } from "react";
import LOGO from "../../assets/Image/logo/logo.jpg";
import { motion, AnimatePresence } from "framer-motion";
import { User, PhoneCall, Menu, ChevronDown } from "lucide-react"; // Added Chevron
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const NAV_ITEMS = [
  { name: "About Us", categories: ["Our Team"] },
  {
    name: "Valuation Services",
    categories: ["Bangalore", "Chennai", "Delhi", "Hyderabad"],
  },
  {
    name: "Services",
    categories: [
      "Start-Up",
      "GST Services",
      "CFO Services",
      "Account & Payroll Processing",
      "Transfer Pricing",
      "India Entry Services",
      "Country-wise Setup & Taxation",
      "GAAP / IND-AS / IFRS",
      "IPO Advisory",
      "Audit & Assurance",
      "Company Formation",
      "Income Tax Advisory",
      "ESOPs",
      "Financial Advisory",
      "Forensic Accounting",
    ],
  },
  { name: "Others", categories: ["News & Events", "Gallery", "Publications"] },
  { name: "Careers", categories: null },
  { name: "Contact Us", categories: null },
] as const;

const Navigation = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="sticky top-0 z-50 w-full"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="bg-white border border-slate-100 rounded-2xl flex items-center justify-between px-6 h-14 shadow-xl relative">
          <motion.img
            whileHover={{ scale: 1.05 }}
            src={LOGO}
            alt="logo"
            className="h-8 cursor-pointer"
          />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center h-full">
            <ul className="flex items-center gap-1 h-full">
              {NAV_ITEMS.map((item) => (
                <li
                  key={item.name}
                  className="relative h-full flex items-center"
                  onMouseEnter={() => setHoveredItem(item.name)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <button
                    className={`flex items-center gap-1 px-4 py-2 text-[15px] font-bold transition-all duration-300 rounded-lg ${
                      hoveredItem === item.name
                        ? "text-[#D4AF37] bg-slate-50"
                        : "text-slate-800"
                    }`}
                  >
                    {item.name}
                    {item.categories && (
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-300 ${
                          hoveredItem === item.name ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </button>

                  <AnimatePresence>
                    {item.categories && hoveredItem === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        className={`absolute top-[calc(100%-8px)] pt-4 z-50 ${
                          item.name === "Services"
                            ? "left-1/2 -translate-x-1/2"
                            : "left-0"
                        }`}
                      >
                        <div className="bg-[#1a1a1a] p-4 shadow-2xl rounded-xl border border-white/10">
                          <ul
                            className={`grid gap-1 ${
                              item.categories.length > 6
                                ? "grid-cols-2 w-125"
                                : "grid-cols-1 w-60"
                            }`}
                          >
                            {item.categories.map((cat) => (
                              <li key={cat}>
                                <a className="block rounded-lg px-4 py-2.5 text-sm font-medium text-white/80 hover:text-black hover:bg-[#D4AF37] transition-all duration-200 cursor-pointer">
                                  {cat}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              className="hover:text-[#D4AF37] hover:bg-slate-50 cursor-pointer rounded-full"
            >
              <User className="h-5 w-5" />
            </Button>

            {/* Styled Contact Button */}
            <Button className="hidden md:flex bg-black text-white hover:bg-[#D4AF37] hover:text-black transition-all duration-300 rounded-full px-6 font-bold shadow-lg hover:shadow-[#D4AF37]/20 border-none group">
              <PhoneCall className="h-4 w-4 mr-2 group-hover:animate-pulse" />
              Contact Us
            </Button>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="lg:hidden rounded-full hover:bg-slate-50"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[320px] bg-white border-l border-slate-100 p-0"
              >
                <div className="h-full flex flex-col pt-12 pb-6">
                  <div className="flex-1 overflow-y-auto px-6">
                    <Accordion type="single" collapsible className="w-full">
                      {NAV_ITEMS.map((item) =>
                        item.categories ? (
                          <AccordionItem
                            value={item.name}
                            key={item.name}
                            className="border-b-slate-100"
                          >
                            <AccordionTrigger className="text-[17px] font-bold text-slate-800 hover:text-[#D4AF37] py-4 hover:no-underline">
                              {item.name}
                            </AccordionTrigger>
                            <AccordionContent>
                              <div className="flex flex-col gap-1 pl-4 border-l-2 border-[#D4AF37]/30 mb-2">
                                {item.categories.map((cat) => (
                                  <SheetClose asChild key={cat}>
                                    <a className="block py-3 text-[15px] font-semibold text-slate-600 hover:text-[#D4AF37] transition-colors">
                                      {cat}
                                    </a>
                                  </SheetClose>
                                ))}
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                        ) : (
                          <div
                            key={item.name}
                            className="py-4 border-b border-slate-100"
                          >
                            <SheetClose asChild>
                              <a className="text-[17px] font-bold text-slate-800 hover:text-[#D4AF37] block w-full transition-colors">
                                {item.name}
                              </a>
                            </SheetClose>
                          </div>
                        )
                      )}
                    </Accordion>
                  </div>
                  <div className="px-6 pt-6 mt-auto">
                    <Button className="w-full bg-black text-white hover:bg-[#D4AF37] hover:text-black rounded-xl h-12 font-bold transition-all duration-300">
                      Connect with Us
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Navigation;
