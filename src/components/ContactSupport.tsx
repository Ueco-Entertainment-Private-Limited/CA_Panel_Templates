import { Facebook, Instagram, Linkedin, Mail, PhoneCall } from "lucide-react";

const SOCIAL_LINKS = [
  { name: "Facebook", href: "https://facebook.com", icon: Facebook },
  { name: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
  { name: "Instagram", href: "https://instagram.com", icon: Instagram },
];

const ContactSupport = () => {
  return (
    // 'h-2' on mobile creates the thin blue strip.
    // 'md:h-12' restores the full height for larger screens.
    <div className="bg-blue-900 h-2 md:h-12 flex items-center px-4 md:px-12 justify-between text-white transition-all duration-300 overflow-hidden">
      {/* 
          Contact Section 
          'hidden md:flex' hides all contact info on mobile and only shows it from 768px+
      */}
      <div className="hidden md:flex items-center gap-6 text-sm font-medium">
        <div className="flex items-center gap-2">
          <Mail size={16} className="text-blue-300" aria-hidden="true" />
          <a
            href="mailto:admin@cagmc.com"
            className="hover:text-blue-200 transition-colors"
          >
            admin@cagmc.com
          </a>
        </div>
        <div className="flex items-center gap-2 border-l border-blue-700 pl-6">
          <PhoneCall size={16} className="text-blue-300" aria-hidden="true" />
          <a
            href="tel:+919785312345"
            className="hover:text-blue-200 transition-colors"
          >
            +91-97853 12345
          </a>
        </div>
      </div>

      {/* 
          Social Media Section
          'hidden md:flex' also hides the social icons on mobile.
      */}
      <nav className="hidden md:flex" aria-label="Social Media Links">
        <ul className="flex items-center gap-6">
          {SOCIAL_LINKS.map(({ name, href, icon: Icon }) => (
            <li key={name}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1 hover:text-blue-300 transition-all hover:scale-110 block"
                aria-label={`Visit our ${name} page`}
              >
                <Icon size={18} strokeWidth={2} />
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default ContactSupport;
