import { ChevronDown } from "lucide-react";
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
  return (
    <header className="flex items-center justify-between px-10 py-3 bg-white border-b border-gray-100 sticky top-0 z-100">
      <div className="shrink-0">
        <a href="/" className="hover:opacity-80 transition-opacity">
          <img src={IMAGES.logo} alt="Cagmc Logo" className="h-9 w-auto" />
        </a>
      </div>

      <nav className="flex items-center">
        <ul className="flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <li key={item.name} className="group relative">
              <button className="flex items-center gap-1 px-4 py-2 text-[15px] font-medium text-gray-600 group-hover:text-blue-600 transition-all rounded-full group-hover:bg-blue-50/50">
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
                            className="block px-4 py-2.5 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-700 rounded-xl transition-colors"
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

      {/* 3. WhatsApp Action */}
      <a
        href="wa.me"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-gray-900 text-white px-5 py-4 rounded-full text-sm font-semibold hover:bg-blue-600 transition-all shadow-sm active:scale-95"
      >
        <BsWhatsapp size={18} className="text-[#25D366]" />
        <span>+91-97853 12345</span>
      </a>
    </header>
  );
};

export default Header;
