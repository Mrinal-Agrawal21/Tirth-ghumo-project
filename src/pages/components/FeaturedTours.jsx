import React from "react";
import { tourImg1, tourImg2, tourImg3, tourImg4, tourImg5, tourImg6, tourImg7 } from "../../utils";

const images = [
    { src: tourImg1, title: "Big Ben" , subtitle: "LONDON" },
    { src: tourImg2, title: "Bali" , subtitle: "INDONESIA" },
    { src: tourImg3, title: "Sydney" , subtitle: "AUSTRALIA" },
    { src: tourImg4, title: "Dubai" , subtitle: "UAE" },
    { src: tourImg5, title: "Phetchabun" , subtitle: "THAILAND" },
    { src: tourImg6, title: "Paris" , subtitle: "FRANCE" },
    { src: tourImg7, title: "Wuxi" , subtitle: "CHINA" },
];

const FeaturedTours = () => {
  return (
    <section className="py-16 px-8">
      <div className="mb-6">
        <span className="bg-orange-400 text-white px-4 py-1 rounded-full text-sm italic">
          Explore
        </span>
        <h2 className="text-2xl font-semibold mt-3 text-gray-900">
          Our featured tours
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[200px]">
      {images.map((img, i) => {
        const isTall = Math.random() > 0.6; 
        return (
          <div
            key={i}
            className={`relative overflow-hidden rounded-xl shadow-lg group ${
              isTall ? "row-span-2" : "row-span-1"
            }`}
          >
            <img
              src={img.src}
              alt={img.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors duration-300"></div>

            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-2">
              <h2 className="text-3xl font-island drop-shadow-lg">{img.title}</h2>
              <p className="text-4xl font-bold tracking-wide uppercase">{img.subtitle}</p>
            </div>
          </div>
        );
      })}
    </div>
    </section>
  );
};

export default FeaturedTours;
