import React from "react";
import { AlignRightIcon } from "lucide-react";
// import { AlignRightIcon, type LucideIcon } from "lucide-react";
import { BUSINESS_CARDS } from "../../Data/Data";

// Define the interface to match your data.ts structure
// interface BusinessCardData {
//   id: number | string;
//   icon: any; // Using any because data contains both LucideIcons and React Icons
//   heading: string;
//   paragraph: string;
//   iconColor: string;
//   strokeWidth: string;
// }

const BusinessRegistration: React.FC = () => {
  return (
    <section className="py-12 px-6 md:py-20 lg:px-16 bg-gray-50 flex justify-center">
      <div className="max-w-7xl w-full">
        {/* Centered Heading with Bottom Accent */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Business Registrations
          </h2>
          <div className="h-1.5 w-24 bg-emerald-500 mx-auto rounded-full"></div>
        </div>

        {/* Responsive Grid: 1 col (mobile), 2 cols (tablet), 4 cols (desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {BUSINESS_CARDS.map((data) => {
            const IconComponent = data.icon;

            return (
              <div
                key={data.id}
                className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
              >
                {/* Icon and Heading Section */}
                <div className="flex flex-col items-center text-center mb-4">
                  <div className="mb-5 p-4 bg-emerald-50 rounded-xl inline-block">
                    <IconComponent
                      size={36}
                      color={data.iconColor}
                      strokeWidth={Number(data.strokeWidth) || 2}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 leading-tight">
                    {data.heading}
                  </h3>
                </div>

                {/* Paragraph and Footer Section */}
                <div className="mt-auto flex flex-col items-center">
                  <p className="text-sm text-gray-600 leading-relaxed text-center mb-6">
                    {data.paragraph}
                  </p>

                  <div className="w-full flex items-center justify-between border-t border-gray-100 pt-4 text-emerald-600 font-medium text-sm">
                    <span>Explore More</span>
                    <AlignRightIcon
                      size={18}
                      className="transform rotate-180"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BusinessRegistration;
