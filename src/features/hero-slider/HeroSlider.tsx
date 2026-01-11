import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { IMAGES } from "../../logo";

const slideProperties = {
  duration: 6000,
  transitionDuration: 500,
  infinite: true,
  indicators: false,
  pauseOnHover: true,
  arrows: false,
  canSwipe: true,
  scale: 0.4, 
};

const HeroSlider = () => {
  const images = [
    IMAGES.working_1,
    IMAGES.working_2,
    IMAGES.working_3,
    IMAGES.working_4,
    IMAGES.working_5,
  ];

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <Zoom {...slideProperties}>
        {images.map((image, index) => (
          <div key={index} className="w-full h-screen">
            <div
              className="w-full h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${image})`,
              }}
            >
              <div className="flex flex-col items-center justify-center text-center text-white px-4">
                <h2 className="text-4xl md:text-6xl font-bold mb-6 max-w-2xl drop-shadow-lg">
                  Welcome to CA Goyal Mangal & Co.
                </h2>
                <p className="text-xl md:text-2xl mb-8 font-light drop-shadow-md">
                  Transforming Knowledge into Values
                </p>
                <button className="border-2 border-white hover:bg-white hover:text-blue-900 py-3 px-10 rounded-lg transition-all duration-300 uppercase tracking-wider">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        ))}
      </Zoom>
    </div>
  );
};

export default HeroSlider;
