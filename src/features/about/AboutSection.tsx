import { BiRightArrow } from "react-icons/bi";

const AboutSection = () => {
  return (
    <section className="py-16 px-6 md:py-24 md:px-12 lg:px-24 bg-white">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Responsive Heading: Large and Bold for Authority */}
        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
          Chartered Accountants <br className="hidden md:block" /> in Jaipur
        </h2>

        {/* Paragraphs with optimized line-height and spacing */}
        <div className="space-y-6 text-gray-700">
          <p className="text-lg md:text-xl leading-relaxed">
            The Chartered Accountants have been a significant part of not just
            the Indian economy but also of all the companies in the country
            which plays a crucial role in ensuring financial health. A Chartered
            Accountant is a professional who provides financial and tax services
            to individuals, businesses, and organizations.
          </p>

          <p className="text-lg md:text-xl leading-relaxed">
            <span className="font-semibold text-blue-900">
              CA Goyal Mangal & Co.
            </span>
            , founded in 2011 by CA Pulkit Goyal, offers high-end consultancy
            and expertise. Our team of highly skilled professionals provides tax
            consultancy, accounting, auditing, and financial advisory to meet
            diverse client needs in Jaipur and beyond.
          </p>
        </div>

        {/* Action Button with Icon Integration */}
        <button className="flex items-center gap-2 group bg-blue-900 hover:bg-blue-800 text-white px-8 py-4 rounded-full font-bold transition-all duration-300 transform hover:-translate-y-1 shadow-lg cursor-pointer">
          <span>Read More</span>
          <BiRightArrow className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </section>
  );
};

export default AboutSection;
