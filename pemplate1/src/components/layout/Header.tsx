"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { BsWhatsapp } from "react-icons/bs";
import { IMAGES } from "../../logo";

const NAV_ITEMS = [
  { name: "Start Business", categories: ["Private Limited", "LLP", "One Person Company", "Section 8"] },
  { name: "NGO", categories: ["Trust", "Society", "Section 8 NGO"] },
  { name: "Trademark", categories: ["Registration", "Objection", "Renewal"] },
  { name: "Compliances", categories: ["Annual Return", "GST Filing", "Audit"] },
  { name: "Blog" },
  { name: "About" },
  { name: "Contact" },
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100 shadow-sm">
      {/* Container aligned with ContactSupport: px-4 md:px-12 */}
      <div className="flex items-center justify-between px-4 md:px-12 h-16 md:h-20 w-full">
        
        {/* 1. Logo Section */}
        <div className="shrink-0">
          <a href="/" className="hover:opacity-80 transition-opacity">
            <img 
              src={IMAGES.logo} 
              alt="Cagmc Logo" 
              className="h-8 md:h-10 w-auto" 
            />
          </a>
        </div>

        {/* 2. Desktop Navigation */}
        <nav className="hidden lg:flex items-center h-full">
          <ul className="flex items-center gap-1 h-full">
            {NAV_ITEMS.map((item) => (
              <li 
                key={item.name} 
                className="relative h-full flex items-center"
                onMouseEnter={() => setHoveredItem(item.name)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <button className="flex items-center gap-1 px-4 py-2 text-[15px] font-medium text-gray-700 hover:text-blue-900 transition-colors rounded-full hover:bg-gray-50">
                  {item.name}
                  {item.categories && (
                    <motion.div 
                      animate={{ rotate: hoveredItem === item.name ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown size={14} className="opacity-50" />
                    </motion.div>
                  )}
                </button>

                {/* Framer Motion Dropdown */}
                <AnimatePresence>
                  {item.categories && hoveredItem === item.name && (
                    <motion.div 
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 15 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute top-[80%] left-0 pt-4 w-60 z-50"
                    >
                      <div className="bg-white border border-gray-100 shadow-2xl rounded-2xl p-2">
                        {item.categories.map((cat) => (
                          <a 
                            key={cat} 
                            href="#" 
                            className="block px-4 py-3 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-900 rounded-xl transition-colors"
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

        {/* 3. Right Action Section */}
        <div className="flex items-center gap-4">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="wa.me"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 bg-blue-900 text-white px-6 py-2.5 rounded-full text-sm font-semibold shadow-lg hover:bg-blue-800 transition-all"
          >
            <BsWhatsapp size={18} className="text-[#25D366]" />
            <span>+91-97853 12345</span>
          </motion.a>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-xl transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden fixed inset-0 top-[64px] md:top-[80px] bg-white z-[60] overflow-y-auto"
          >
            <nav className="p-6 pb-24">
              <ul className="flex flex-col gap-1">
                {NAV_ITEMS.map((item) => (
                  <li key={item.name} className="border-b border-gray-50">
                    <div
                      className="flex items-center justify-between py-4 px-2 text-lg font-medium text-gray-800"
                      onClick={() => setExpandedItem(expandedItem === item.name ? null : item.name)}
                    >
                      {item.name}
                      {item.categories && (
                        <motion.div animate={{ rotate: expandedItem === item.name ? 180 : 0 }}>
                          <ChevronDown size={20} />
                        </motion.div>
                      )}
                    </div>

                    <AnimatePresence>
                      {item.categories && expandedItem === item.name && (
                        <motion.ul
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="bg-gray-50 rounded-2xl overflow-hidden flex flex-col mb-4"
                        >
                          {item.categories.map((cat) => (
                            <li key={cat}>
                              <a href="#" className="block py-4 px-6 text-gray-600 font-medium border-l-4 border-transparent hover:border-blue-900 active:bg-blue-50">
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

              <div className="mt-8">
                <a 
                  href="wa.me" 
                  className="flex items-center justify-center gap-3 bg-blue-900 text-white w-full py-4 rounded-2xl font-bold shadow-xl"
                >
                  <BsWhatsapp size={22} className="text-[#25D366]" />
                  Contact on WhatsApp
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
