import { useEffect, useState } from "react";
import Img1 from '../assets/Img/Image-1.png' 
import Img2 from '../assets/Img/Image-2.png' 
import Img3 from '../assets/Img/Image-3.png' 

const Hero = () => {
  const [slide, setSlide] = useState(0);

  const slides = [
    {
      img: Img1,
      title: "Search, Compare & Buy Property in India’s Top 4 Cities",
      desc: "Transparent Prices. Trusted Builders. Smarter Decisions",
      widthClass: "w-[85%]",
      descWidth: "md:w-[29%]"
    },
    {
      img: Img2,
      title: "Premium Properties Across India’s Leading Cities",
      desc: "Gurugram • Delhi • Mumbai • Noida — All the Best Options in One Place.",
      widthClass: "w-[85%]",
      descWidth: "md:w-[40%]"
    },
    {
      img: Img3,
      title: "India’s Fastest-Growing Real Estate Hotspots — All in One Portal",
      desc: "Discover High-ROI Properties in Gurugram, Delhi, Mumbai & Noida.",
      widthClass: "w-[85%]",
      descWidth: "md:w-[37%]"
    }
  ];

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      setSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[450px] sm:h-[300px] overflow-hidden mt-0">
      {slides.map((s, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-700 ${
            slide === i ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* IMAGE */}
          <img
            src={s.img}
            className="w-full h-[350px] object-cover"
            alt="slide"
          />

          {/* TEXT OVERLAY */}
          <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center px-10 text-white gap-y-4">
            <h1 className={`text-lg md:text-[32px] font-semibold pt-3 font-Roboto ${s.widthClass}`}>
              {s.title}
            </h1>
            <p
              className={`text-sm md:text-[16px] bg-blue-700 px-2 py-1 rounded-md font-Roboto ${s.descWidth}`}
            >
              {s.desc}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Hero;
