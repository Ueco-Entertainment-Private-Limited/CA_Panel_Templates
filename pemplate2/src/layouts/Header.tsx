"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { BsWhatsapp } from "react-icons/bs";
import logo from "../assets/Images/logo.webp";

const NAV_ITEMS = [
  { name: "Start Business", categories: ["Private Limited", "LLP", "One Person Company", "Section 8"] },
  { name: "NGO", categories: ["Trust", "Society", "Section 8 NGO"] },
  { name: "Trademark", categories: ["Registration", "Objection", "Renewal"] },
  { name: "Compliances", categories: ["Annual Return", "GST Filing", "Audit"] },
  { name: "Blog", categories: null },
  { name: "About", categories: null },
  { name: "Contact", categories: null },
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100 shadow-sm">
      {/* Container Logic: Matching ContactSupport (px-6 md:px-16) */}
      <div className="flex items-center justify-between px-6 md:px-16 h-20 w-full max-w-[1920px] mx-auto">
        
        {/* 1. Logo Section */}
        <div className="shrink-0">
          <a href="/" className="hover:opacity-90 transition-opacity">
            <img 
              src={logo} 
              alt="Cagmc Logo" 
              className="h-10 md:h-12 w-auto object-contain" 
            />
          </a>
        </div>

        {/* 2. Desktop Navigation */}
        <nav className="hidden lg:flex items-center h-full">
          <ul className="flex items-center gap-2 h-full">
            {NAV_ITEMS.map((item) => (
              <li 
                key={item.name} 
                className="relative h-full flex items-center"
                onMouseEnter={() => setHoveredItem(item.name)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <button 
                  className={`flex items-center gap-1.5 px-4 py-2 text-[16px] font-semibold transition-all rounded-full ${
                    hoveredItem === item.name ? "text-[#034EA2] bg-blue-50/50" : "text-gray-700"
                  }`}
                >
                  {item.name}
                  {item.categories && (
                    <ChevronDown 
                      size={16} 
                      className={`transition-transform duration-300 ${hoveredItem === item.name ? "rotate-180 text-[#034EA2]" : "opacity-40"}`} 
                    />
                  )}
                </button>

                {/* SLIDE-UP DROPDOWN ANIMATION */}
                <AnimatePresence>
                  {item.categories && hoveredItem === item.name && (
                    <motion.div 
                      initial={{ opacity: 0, y: 20, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute top-[75%] left-0 pt-4 w-64 z-50"
                    >
                      <div className="bg-white border border-gray-100 shadow-2xl rounded-2xl p-2 overflow-hidden">
                        {item.categories.map((cat) => (
                          <a 
                            key={cat} 
                            href="#" 
                            className="block px-4 py-3 text-sm font-medium text-gray-600 hover:bg-[#034EA2] hover:text-white rounded-xl transition-all duration-200"
                          >
                            {cat}
                          </a>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            ))}
          </ul>
        </nav>

        {/* 3. Action Section - Aligned with Social Icons above */}
        <div className="flex items-center gap-4">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="wa.me"
            className="hidden md:flex items-center gap-2 bg-[#034EA2] text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-lg hover:shadow-blue-200 transition-all"
          >
            <BsWhatsapp size={20} className="text-[#25D366]" />
            <span>+91-97853 12345</span>
          </motion.a>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-2 text-[#034EA2] hover:bg-blue-50 rounded-xl transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="lg:hidden fixed inset-0 top-[80px] bg-white z-[60] overflow-y-auto"
          >
            <nav className="p-6 pb-32">
              <ul className="flex flex-col gap-2">
                {NAV_ITEMS.map((item) => (
                  <li key={item.name} className="border-b border-gray-50 last:border-0">
                    <div
                      className="flex items-center justify-between py-5 px-2 text-xl font-bold text-gray-800"
                      onClick={() => setExpandedItem(expandedItem === item.name ? null : item.name)}
                    >
                      {item.name}
                      {item.categories && (
                        <ChevronDown className={`transition-transform ${expandedItem === item.name ? "rotate-180 text-[#034EA2]" : ""}`} />
                      )}
                    </div>

                    <AnimatePresence>
                      {item.categories && expandedItem === item.name && (
                        <motion.ul
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="bg-blue-50/50 rounded-2xl overflow-hidden mb-4"
                        >
                          {item.categories.map((cat) => (
                            <li key={cat}>
                              <a href="#" className="block py-4 px-8 text-gray-700 font-semibold border-l-4 border-transparent active:border-[#034EA2] active:bg-white">
                                {cat}
                              </a>
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </li>
                ))}
              </ul>

              <div className="mt-10">
                <a 
                  href="wa.me" 
                  className="flex items-center justify-center gap-3 bg-[#25D366] text-white w-full py-5 rounded-2xl font-black text-lg shadow-xl"
                >
                  <BsWhatsapp size={26} />
                  WhatsApp Support
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
