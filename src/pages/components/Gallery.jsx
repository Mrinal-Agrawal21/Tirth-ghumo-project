import React from "react";
import { galleryImg1, galleryImg2, galleryImg3, galleryImg4, galleryImg5, galleryImg6, galleryImg7 } from "../../utils";

const images = [
    { src: galleryImg1},
    { src: galleryImg2},
    { src: galleryImg3},
    { src: galleryImg4},
    { src: galleryImg5},
    { src: galleryImg6},
    { src: galleryImg7},
];

const Gallery = () => {
  return (
    <section className="py-16 px-8">
      <div className="mb-6">
        <span className="bg-orange-400 text-white px-4 py-1 rounded-full text-sm italic">
          Gallery
        </span>
        <h2 className="text-2xl font-semibold mt-3 text-gray-900">
          View Our customer's tour Gallery
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
              alt={img.src}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />

           

           
          </div>
        );
      })}
    </div>
    </section>
  );
};

export default Gallery;
