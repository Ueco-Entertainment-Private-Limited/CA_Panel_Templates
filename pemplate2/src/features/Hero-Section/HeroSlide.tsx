"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { IMAGES } from "@/assets/Images";

const slidesData = [
  { key: "working_1" },
  { key: "working_2" },
  { key: "working_3" },
  { key: "working_4" },
  { key: "working_5" },
];

const HeroSlide = () => {
  const autoplay = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: false })
  );

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    autoplay.current,
  ]);

  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setCurrent(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <section className="relative w-full h-[80vh] min-h-150 overflow-hidden bg-slate-950">
      {/* BACKGROUND SLIDER */}
      <div ref={emblaRef} className="w-full h-full overflow-hidden">
        <div className="flex h-full">
          {slidesData.map((slide, index) => (
            <div key={index} className="relative min-w-full h-[80vh] min-h-150">
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-5000 scale-105"
                style={{
                  backgroundImage: `url(${
                    IMAGES[slide.key as keyof typeof IMAGES]
                  })`,
                  backgroundColor: "#42658d",
                  backgroundBlendMode: "multiply",
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* STATIC CONTENT */}
      <div className="absolute inset-0 z-20 pointer-events-none flex items-center">
        <div className="container mx-auto px-6 md:px-12 pointer-events-auto">
          <div className="max-w-4xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <h2 className="text-[#FFEF00] text-md md:text-base font-bold tracking-[0.3em] uppercase mb-4 opacity-90">
                  Welcome to
                </h2>

                <h1 className="text-4xl md:text-7xl font-extrabold text-white mb-6 leading-tight tracking-tight">
                  CA Goyal Mangal & Co.
                </h1>

                <p className="text-lg md:text-2xl text-slate-200 font-light mb-10 max-w-2xl leading-relaxed border-l-2 border-[#FFEF00] pl-6 italic">
                  "Transforming Knowledge into Values"
                </p>

                <div className="flex flex-col sm:flex-row gap-5">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-[#FFEF00] text-slate-950 font-bold py-4 px-10 rounded-sm flex items-center justify-center text-sm uppercase tracking-wider transition-colors hover:bg-white"
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-transparent border border-white/40 text-white font-bold py-4 px-10 rounded-sm flex items-center justify-center text-sm uppercase tracking-wider backdrop-blur-md hover:bg-white hover:text-slate-950 transition-all"
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    Contact Us
                  </motion.button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* PROGRESS INDICATORS */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {slidesData.map((_, i) => (
          <button
            key={i}
            onClick={() => emblaApi?.scrollTo(i)}
            className={`h-1.5 transition-all duration-500 rounded-full ${
              current === i ? "w-12 bg-[#FFEF00]" : "w-4 bg-white/30"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlide;
