import { NGO_CARDS } from "../../Data/Data";

const NgoRegistration = () => {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      {/* Centered Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 relative inline-block">
          NGO Registration
          <span className="block h-1 w-20 bg-emerald-500 mx-auto mt-2"></span>
        </h2>
      </div>

      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {NGO_CARDS.map((data) => (
          <div
            key={data.id}
            className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-100"
          >
            {/* Icon Container */}
            <div className="mb-4 p-3 rounded-full bg-emerald-50">
              <img
                src={data.icon}
                alt={data.heading}
                className="w-16 h-16 object-contain"
              />
            </div>

            {/* Content */}
            <h3 className="text-xl font-semibold mb-3 text-gray-800">
              {data.heading}
            </h3>
            <p className="text-gray-600 leading-relaxed text-sm">
              {data.paragraph}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NgoRegistration;
