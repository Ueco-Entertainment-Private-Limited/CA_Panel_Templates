import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { BsWhatsapp } from "react-icons/bs";
import { IMAGES } from "../../logo";

const NAV_ITEMS = [
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

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  const toggleMobileSubmenu = (name: string) => {
    setExpandedItem(expandedItem === name ? null : name);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100 shadow-sm">
      <div className="flex items-center justify-between px-4 md:px-12 py-3 w-full">
        {/* 1. Logo - Always Visible */}
        <div className="shrink-0">
          <a href="/" className="hover:opacity-80 transition-opacity">
            <img
              src={IMAGES.logo}
              alt="Cagmc Logo"
              className="h-8 md:h-10 w-auto"
            />
          </a>
        </div>

        {/* 2. Desktop Navigation (Hidden on Mobile/Tablet) */}
        <nav className="hidden lg:flex items-center">
          <ul className="flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <li key={item.name} className="group relative">
                <button className="flex items-center gap-1 px-3 py-2 text-[15px] font-medium text-gray-600 hover:text-blue-900 transition-all rounded-full hover:bg-gray-50">
                  {item.name}
                  {item.categories && (
                    <ChevronDown
                      size={14}
                      className="opacity-50 group-hover:rotate-180 transition-transform duration-300"
                    />
                  )}
                </button>

                {item.categories && (
                  <div className="absolute top-full left-0 pt-2 hidden group-hover:block w-56 animate-in fade-in zoom-in-95 duration-200">
                    <div className="bg-white border border-gray-100 shadow-2xl rounded-2xl p-2 overflow-hidden">
                      <ul className="flex flex-col">
                        {item.categories.map((cat) => (
                          <li key={cat}>
                            <a
                              href="#"
                              className="block px-4 py-2.5 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-900 rounded-xl transition-colors"
                            >
                              {cat}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Right Section: Desktop WhatsApp & Mobile Toggle */}
        <div className="flex items-center gap-4">
          {/* Desktop WhatsApp: Hidden on 'lg' and below to keep mobile clean */}
          <a
            href="wa.me"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex items-center gap-2 bg-blue-900 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-blue-800 transition-all active:scale-95 shadow-md"
          >
            <BsWhatsapp size={18} className="text-[#25D366]" />
            <span className="hidden xl:inline">+91-97853 12345</span>
            <span className="xl:hidden">WhatsApp</span>
          </a>

          {/* Hamburger Icon: Visible on lg and below */}
          <button
            className="lg:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-15 bg-white z-50 overflow-y-auto animate-in slide-in-from-right duration-300">
          <nav className="p-6 pb-20">
            <ul className="flex flex-col gap-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.name} className="border-b border-gray-50 pb-2">
                  <div
                    className="flex items-center justify-between py-3 px-2 text-lg font-medium text-gray-700 active:bg-gray-50 rounded-lg"
                    onClick={() =>
                      item.categories && toggleMobileSubmenu(item.name)
                    }
                  >
                    {item.name}
                    {item.categories && (
                      <ChevronDown
                        size={20}
                        className={`transition-transform duration-300 ${
                          expandedItem === item.name ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </div>

                  {item.categories && expandedItem === item.name && (
                    <ul className="bg-gray-50 rounded-xl mt-1 p-2 flex flex-col gap-1">
                      {item.categories.map((cat) => (
                        <li key={cat}>
                          <a
                            href="#"
                            className="block py-3 px-4 text-gray-600 active:text-blue-900 font-medium"
                          >
                            {cat}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>

            {/* Mobile-Only WhatsApp Button: Integrated inside the menu */}
            <div className="mt-8 px-2">
              <a
                href="wa.me"
                className="flex items-center justify-center gap-3 bg-blue-900 text-white w-full py-4 rounded-2xl font-bold shadow-lg active:scale-95 transition-transform"
              >
                <BsWhatsapp size={20} className="text-[#25D366]" />
                Contact on WhatsApp
              </a>
              <p className="text-center text-gray-400 text-xs mt-4">
                Available 24/7 for business queries.
              </p>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
