//header
"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { BsWhatsapp } from "react-icons/bs";
import { IMAGES } from "../../logo";

type NavItem = {
  name: string;
  categories?: string[];
};

const NAV_ITEMS: NavItem[] = [
  {
    name: "Start Business",
    categories: ["Private Limited", "LLP", "One Person Company", "Section 8"],
  },
  { name: "NGO", categories: ["Trust", "Society", "Section 8 NGO"] },
  { name: "Trademark", categories: ["Registration", "Objection", "Renewal"] },
  { name: "Compliances", categories: ["Annual Return", "GST Filing", "Audit"] },
  { name: "Blog" },
  { name: "About" },
  { name: "Contact" },
];

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-gray-100 shadow-sm">
      {/* HEADER BAR */}
      <div className="flex items-center justify-between px-4 md:px-12 h-16 md:h-20">
        {/* LOGO */}
        <a href="/" className="shrink-0">
          <img src={IMAGES.logo} alt="Cagmc Logo" className="h-8 md:h-10" />
        </a>

        {/* DESKTOP NAV (XL ONLY) */}
        <nav className="hidden xl:flex items-center h-full">
          <ul className="flex items-center gap-1 h-full">
            {NAV_ITEMS.map((item) => (
              <li
                key={item.name}
                className="relative h-full flex items-center"
                onMouseEnter={() => setHoveredItem(item.name)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-900 rounded-full hover:bg-gray-50">
                  {item.name}
                  {item.categories && (
                    <motion.span
                      animate={{ rotate: hoveredItem === item.name ? 180 : 0 }}
                    >
                      <ChevronDown size={14} />
                    </motion.span>
                  )}
                </button>

                <AnimatePresence>
                  {item.categories && hoveredItem === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 mt-2 w-60 bg-white border shadow-xl rounded-2xl p-2 z-50"
                    >
                      {item.categories.map((cat) => (
                        <a
                          key={cat}
                          href="#"
                          className="block px-4 py-3 text-sm hover:bg-blue-50 rounded-xl"
                        >
                          {cat}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            ))}
          </ul>
        </nav>

        {/* RIGHT ACTIONS */}
        <div className="flex items-center gap-4">
          {/* DESKTOP WHATSAPP (XL ONLY) */}
          <motion.a
            href="https://wa.me/919785312345"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="hidden xl:flex items-center gap-2 bg-blue-900 text-white px-6 py-2.5 rounded-full text-sm font-semibold"
          >
            <BsWhatsapp className="text-[#25D366]" />
            +91-97853-12345
          </motion.a>

          {/* HAMBURGER (BELOW XL) */}
          <button
            className="xl:hidden p-2 rounded-xl hover:bg-gray-100"
            onClick={() => setIsMobileMenuOpen((v) => !v)}
          >
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU (BELOW XL) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            // Full screen from top-0, z-100 to cover the original header
            className="xl:hidden fixed inset-0 bg-white z-100 overflow-y-auto"
          >
            {/* HEADER: justify-end pushes the X icon to the right */}
            <div className="flex items-center justify-end px-4 md:px-12 h-16 md:h-20">
              <button
                type="button"
                className="p-2 text-gray-700 hover:bg-gray-100 rounded-xl transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {/* X icon is now strictly on the right */}
                <X size={30} />
              </button>
            </div>

            {/* MENU CONTENT */}
            <nav className="p-6 pt-2">
              {NAV_ITEMS.map((item) => (
                <div
                  key={item.name}
                  className="border-b border-gray-50 last:border-0"
                >
                  <button
                    className="w-full flex justify-between items-center py-5 text-lg font-medium text-gray-800"
                    onClick={() =>
                      setExpandedItem(
                        expandedItem === item.name ? null : item.name
                      )
                    }
                  >
                    {item.name}
                    {item.categories && (
                      <motion.span
                        animate={{
                          rotate: expandedItem === item.name ? 180 : 0,
                        }}
                      >
                        <ChevronDown size={20} />
                      </motion.span>
                    )}
                  </button>

                  <AnimatePresence>
                    {item.categories && expandedItem === item.name && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden bg-gray-50 rounded-2xl mb-4"
                      >
                        {item.categories.map((cat) => (
                          <a
                            key={cat}
                            href="#"
                            className="block px-6 py-4 text-gray-600 font-medium active:bg-blue-100"
                          >
                            {cat}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              {/* WHATSAPP BUTTON */}
              <div className="mt-8 pb-10">
                <a
                  href="wa.me"
                  className="flex justify-center items-center gap-3 bg-blue-900 text-white py-4 rounded-2xl font-bold shadow-xl active:scale-95 transition-transform"
                >
                  <BsWhatsapp size={22} className="text-[#25D366]" />
                  <span>Contact on WhatsApp</span>
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
