import { Facebook, Instagram, Linkedin, Mail, PhoneCall } from "lucide-react";

const SOCIAL_LINKS = [
  { name: "Facebook", href: "facebook.com", icon: Facebook },
  { name: "LinkedIn", href: "linkedin.com", icon: Linkedin },
  { name: "Instagram", href: "instagram.com", icon: Instagram },
];

const ContactSupport = () => {
  return (
    <div className="bg-blue-600 h-10 flex items-center px-6 justify-between text-white">
      {/* Contact Section */}
      <div className="flex gap-6 text-sm">
        <div className="flex items-center gap-2">
          <Mail size={18} aria-hidden="true" />
          <a href="mailto:admin@cagmc.com" className="">
            admin@cagmc.com
          </a>
        </div>
        <div className="flex items-center gap-2">
          <PhoneCall size={18} aria-hidden="true" />
          <a href="tel:+919785312345" className="">
            +91-97853 12345
          </a>
        </div>
      </div>

      {/* Social Media Section */}
      <nav aria-label="Social Media Links">
        <ul className="flex items-center gap-6">
          {SOCIAL_LINKS.map(({ name, href, icon: Icon }) => (
            <li key={name}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
                aria-label={`Visit our ${name} page`}
              >
                <Icon size={18} />
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default ContactSupport;
