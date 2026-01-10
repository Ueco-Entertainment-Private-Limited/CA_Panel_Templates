import { IMAGES } from "../../logo";

const HeroSlider = () => {
  return (
    <div
      className="relative h-screen w-full flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        // Adding a 50% black overlay to handle the bright white image contrast
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${IMAGES.working_1})`,
      }}
    >
      <div className="flex flex-col items-center text-center text-white px-4">
        {/* max-w-md or max-w-xl restricts width to force the heading into two lines */}
        <h2 className="text-4xl md:text-6xl font-bold mb-6 max-w-2xl leading-tight">
          Welcome to CA Goyal Mangal & Co.
        </h2>

        <p className="text-xl md:text-2xl mb-8 font-light tracking-wide">
          Transforming Knowledge into Values
        </p>

        <button className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white font-bold py-3 px-10 rounded-lg transition-all duration-300 cursor-pointer uppercase tracking-wider">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default HeroSlider;
