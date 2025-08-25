import React from "react";
import { MapPin, Ruler, Users, Search } from "lucide-react";
import { heroImg1, heroImg2,heroVideo } from "../../utils";
import SearchBar from "./SearchBar";
const Homehero = () => {
  return (
    <>  
    <section className="w-full flex flex-col md:flex-row justify-between items-center px-6 md:px-16 py-10">
      {/* Left Content */}
      <div className="md:w-1/2 flex flex-col gap-6">
        {/* Small Button */}
        <button className="bg-[#FAA935] text-black px-4 py-2 rounded-full text-sm font-medium w-fit shadow-sm">
          Know Before You Go
        </button>

        {/* Heading */}
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-snug">
          Traveling opens the door to creating{" "}
          <span className="text-[#FAA935]">memories</span>
        </h1>

        {/* Paragraph */}
        <p className="text-gray-600 leading-relaxed">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam
          asperiores soluta voluptas quas voluptates. Molestiae tempora
          dignissimos, animi praesentium molestias perferendis porro expedita
          delectus. Soluta natus porro.
        </p>
      </div>

      {/* Right Images */}
      <div className="md:w-1/2 flex gap-5 ml-5 mt-10 md:mt-0">
        <img
          src={heroImg1}
          alt="travel1"
          className="rounded-[2rem] border border-orange-300 object-cover w-[120px] h-[250px] md:w-[180px] md:h-[350px]"
        />
        <video
          src={heroVideo}
          autoPlay
          loop
          muted
          className="rounded-[2rem] border border-orange-300 object-cover w-[120px] h-[250px] md:w-[180px] md:h-[350px] mt-6"
        />
        <img
          src={heroImg2}
          alt="travel3"
          className="rounded-[2rem] border border-orange-300 object-cover w-[120px] h-[250px] md:w-[180px] md:h-[350px] mt-12"
        />
      </div>
    </section>
    <SearchBar/>  
    </>
  );
};

export default Homehero;
