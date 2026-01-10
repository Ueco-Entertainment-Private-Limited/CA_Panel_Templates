import React from "react";
import { AlignRightIcon, type LucideIcon } from "lucide-react";
import { BUSINESS_CARDS } from "../../Data/Data";

interface BusinessCardData {
  id: number | string;
  icon: LucideIcon;
  heading: string;
  paragraph: string;
  iconColor: string;
  strokeWidth: string;
}

const BusinessRegistration: React.FC = () => {
  return (
    <section className="py-12 px-6 md:py-20 lg:px-16 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center md:text-left">
          Business Registrations
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {BUSINESS_CARDS.map((data: BusinessCardData) => {
            const IconComponent = data.icon;

            return (
              <div
                key={data.id}
                className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="mb-4 inline-block">
                    <IconComponent
                      size={32}
                      color={data.iconColor}
                      strokeWidth={Number(data.strokeWidth)}
                    />
                  </div>

                  <h3 className="text-lg font-bold text-gray-800 mb-3 leading-tight">
                    {data.heading}
                  </h3>
                </div>

                <div className="mt-4 flex items-start justify-between gap-3 border-t border-gray-50 pt-4">
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {data.paragraph}
                  </p>
                  <div className="text-emerald-500 shrink-0">
                    <AlignRightIcon size={20} />
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
