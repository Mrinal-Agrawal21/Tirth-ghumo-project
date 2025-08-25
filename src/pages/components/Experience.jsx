import React from "react";
import {experienceImg} from "../../utils";
export default function Experience() {
  return (
    <section className="w-full bg-white py-16">
      <div className="w-full flex flex-col md:flex-row items-center justify-between px-6">
        
        {/* LEFT CONTENT */}
        <div className="flex-1 space-y-6">
          {/* Tag */}
          <span className="bg-orange-400 text-white px-4 py-1 rounded-full text-sm font-medium">
            Experience
          </span>

          {/* Heading */}
          <h2 className="text-4xl font-bold text-gray-900 leading-snug">
            With our all experience <br /> we will serve you
          </h2>

          {/* Description */}
          <p className="text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Quas aliquam, hic tempora inventore suscipit unde.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-6 mt-8">
            <div className="flex flex-col items-center">
              <div className="bg-[#FAA935] text-white px-6 py-4 rounded-tl-lg rounded-br-lg text-2xl font-bold shadow-md">
                12k+
              </div>
              <p className="mt-2 text-gray-600">Successful trip</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-[#FAA935] text-white px-6 py-4 rounded-tl-lg rounded-br-lg text-2xl font-bold shadow-md">
                2k+
              </div>
              <p className="mt-2 text-gray-600">Regular clients</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-[#FAA935] text-white px-6 py-4 rounded-tl-lg rounded-br-lg text-2xl font-bold shadow-md">
                15
              </div>
              <p className="mt-2 text-gray-600">Year experience</p>
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex-1 relative flex justify-center items-center">
         <img src={experienceImg} alt="" />
        </div>
      </div>
    </section>
  );
}

