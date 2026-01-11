import { TRADEMARK_REGISTRATION } from "../../Data/Data";

const Trademark = () => {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Centered Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Trademark Registration
          </h2>
          <div className="h-1 w-20 bg-emerald-500 mx-auto"></div>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {TRADEMARK_REGISTRATION.map((data) => {
            const IconComponent = data.icon;
            return (
              <div
                key={data.id}
                className="group p-8 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center"
              >
                {/* Icon Container with subtle background */}
                <div className="mb-6 p-4 bg-white rounded-full shadow-sm group-hover:scale-110 transition-transform duration-300">
                  <IconComponent
                    size={40}
                    color={
                      data.iconColor === "#808080" ? "#10b981" : data.iconColor
                    }
                    strokeWidth={2}
                  />
                </div>

                <h3 className="text-xl font-bold text-slate-800 mb-3">
                  {data.heaading}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed">
                  {data.paragraph}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Trademark;
