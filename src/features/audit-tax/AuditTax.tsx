import { BiRightArrow } from "react-icons/bi";
import { AUDIT_TAX_CARDS } from "../../Data/Data";

const AuditTax = () => {
  // Define a consistent orange color hex value for clarity
  const primaryOrange = "#f97316"; // Hex for Tailwind orange-500

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Centered Heading with Orange Accent */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Audit and Tax Management
          </h2>
          <div className="h-1.5 w-24 bg-orange-500 mx-auto rounded-full"></div>
        </div>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {AUDIT_TAX_CARDS.map((data) => {
            const IconComponent = data.icon;
            return (
              <div
                key={data.id}
                // Removed justify-between as content should flow naturally now
                className="group bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col h-full items-center text-center"
              >
                {/* Icon Container: Centered and Orange */}
                <div className="mb-4 inline-block p-3 bg-orange-50 rounded-lg">
                  <IconComponent
                    size={40}
                    // Explicitly setting the color to the defined orange hex
                    color={primaryOrange}
                    strokeWidth={2}
                  />
                </div>

                {/* Content Area */}
                <h3 className="text-lg font-bold text-gray-800 mb-3 leading-tight">
                  {data.heading}
                </h3>

                {/* Paragraph Text */}
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  {data.paragraph}
                </p>

                {/* Inline Link: Follows the paragraph directly */}
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-orange-500 hover:text-orange-600 transition-colors font-medium text-sm mt-auto" // mt-auto pushes link to the bottom if paragraphs vary in length
                >
                  Read More
                  <BiRightArrow className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AuditTax;
