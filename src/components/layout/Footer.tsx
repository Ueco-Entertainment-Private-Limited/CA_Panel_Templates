import { Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#10487a] text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Business Registration */}
          <div>
            <h3 className="text-lg font-bold mb-4">Business Registration</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>
                <a
                  href="#"
                  className="hover:text-white transition duration-200"
                >
                  Private Limited Company Registration
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition duration-200"
                >
                  Public Limited Company Registration
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition duration-200"
                >
                  One Person Company Registration
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition duration-200"
                >
                  Company Registration
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition duration-200"
                >
                  Foreign Company Registration
                </a>
              </li>
            </ul>
          </div>

          {/* Licenses */}
          <div>
            <h3 className="text-lg font-bold mb-4">Licenses</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>
                <a
                  href="#"
                  className="hover:text-white transition duration-200"
                >
                  GST Registration
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition duration-200"
                >
                  FSSAI Registration
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition duration-200"
                >
                  MSME Udyam Registration
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition duration-200"
                >
                  ISO Certification
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition duration-200"
                >
                  Business Registration Number
                </a>
              </li>
            </ul>
          </div>

          {/* Audit & Tax */}
          <div>
            <h3 className="text-lg font-bold mb-4">Audit & Tax</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>
                <a
                  href="#"
                  className="hover:text-white transition duration-200"
                >
                  NGO Audit
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition duration-200"
                >
                  NRI Taxation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition duration-200"
                >
                  TDS Return
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition duration-200"
                >
                  Tax Audit
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition duration-200"
                >
                  Statutory Audit
                </a>
              </li>
            </ul>
          </div>

          {/* Get Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Get Contact</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>Phone: +91-97853 12345</li>
              <li>E-mail: admin@caogmc.com</li>
              <li>
                Location: S4, Shree Gopal Nagar, Gopalpura Bypass,
                Jaipur-302019,
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition duration-200 font-semibold"
                >
                  Locate us on Google Map
                </a>
              </li>
            </ul>
            {/* Social Icons */}
            <div className="flex space-x-4 mt-4">
              <a
                href="#"
                className="hover:text-gray-300 transition duration-200"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="hover:text-gray-300 transition duration-200"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="hover:text-gray-300 transition duration-200"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Bar - Updated Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-800">
          <p className="mb-2 md:mb-0">
            Copyright © 2024 Goyal Mangal & Company. All Rights Reserved
          </p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-600 transition duration-200">
              Disclaimer
            </a>
            <a href="#" className="hover:text-gray-600 transition duration-200">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
