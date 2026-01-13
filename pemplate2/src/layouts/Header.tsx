"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "../assets/Images/logo.webp";

const NAV_ITEMS = [
  {
    name: "Start Business",
    categories: ["Private Limited", "LLP", "One Person Company", "Section 8"],
  },
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
      <div className="flex items-center justify-between px-6 md:px-16 h-20 w-full">
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
          <ul className="flex items-center gap-6 h-full">
            {NAV_ITEMS.map((item) => (
              <li
                key={item.name}
                className="relative h-full flex items-center group cursor-pointer"
                onMouseEnter={() => setHoveredItem(item.name)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <div className="relative py-2">
                  <span
                    className={`text-[16px] font-bold transition-colors ${
                      hoveredItem === item.name
                        ? "text-[#EAB308]"
                        : "text-[#034EA2]"
                    }`}
                  >
                    {item.name}
                  </span>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: hoveredItem === item.name ? "100%" : 0 }}
                    className="absolute bottom-0 left-0 h-0.75 bg-[#EAB308] rounded-full"
                    transition={{ duration: 0.3 }}
                  />
                </div>

                <AnimatePresence>
                  {item.categories && hoveredItem === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 w-64 pt-2"
                    >
                      <div className="bg-[#034EA2] shadow-xl rounded-lg p-2 overflow-hidden border-t-4 border-[#EAB308]">
                        {item.categories.map((cat) => (
                          <a
                            key={cat}
                            href="#"
                            className="block px-4 py-3 text-sm font-medium text-white hover:bg-white hover:text-[#034EA2] rounded-md transition-all duration-200"
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

        {/* 3. Mobile Hamburger Trigger */}
        <div className="lg:hidden flex items-center">
          <button
            className="p-2 text-[#034EA2] hover:bg-blue-50 rounded-xl transition-colors"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={32} />
          </button>
        </div>
      </div>

      {/* Fullscreen Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 bg-white z-9999 overflow-y-auto flex flex-col"
          >
            {/* Header inside Overlay for Logo and Close Button */}
            <div className="flex items-center justify-between px-6 h-20 border-b border-gray-100 shrink-0">
              <img
                src={logo}
                alt="Cagmc Logo"
                className="h-10 w-auto object-contain"
              />
              <button
                className="p-2 text-[#034EA2] hover:bg-blue-50 rounded-xl transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <X size={32} />
              </button>
            </div>

            {/* Mobile Nav Items */}
            <nav className="p-6">
              <ul className="flex flex-col">
                {NAV_ITEMS.map((item) => (
                  <li key={item.name} className="border-b border-gray-100">
                    <div
                      className={`flex items-center justify-between py-5 text-xl font-bold cursor-pointer ${
                        expandedItem === item.name
                          ? "text-[#EAB308]"
                          : "text-[#034EA2]"
                      }`}
                      onClick={() =>
                        setExpandedItem(
                          expandedItem === item.name ? null : item.name
                        )
                      }
                    >
                      {item.name}
                      {item.categories && (
                        <span className="text-sm">
                          {expandedItem === item.name ? "−" : "+"}
                        </span>
                      )}
                    </div>

                    {item.categories && expandedItem === item.name && (
                      <motion.ul
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        className="bg-blue-50 rounded-xl mb-4 overflow-hidden"
                      >
                        {item.categories.map((cat) => (
                          <li key={cat}>
                            <a
                              href="#"
                              className="block py-4 px-6 text-[#034EA2] font-semibold border-l-4 border-[#EAB308]"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {cat}
                            </a>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
