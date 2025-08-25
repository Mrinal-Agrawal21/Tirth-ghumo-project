import React from "react";
import { Sun, MapPinned, Settings } from "lucide-react"; 

const Services = () => {
  return (
    <section className="w-full py-16">
      <div className="max-w-full mx-6 flex items-center justify-between">
        <div>
          <p className="text-orange-400 italic font-semibold">What we serve</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
            We offer our best <br /> services
          </h2>
        </div>

        
        <div className="flex gap-6">
          
          <div className="w-[262px] h-[182px] rounded-xl p-6 shadow-[4px_4px_8px_rgba(250,169,53,0.4)] hover:shadow-md transition">
            <div className="bg-orange-400  text-white w-12 h-12 flex items-center justify-center rounded-full mb-4">
              <Sun size={22} />
            </div>
            <h3 className="font-semibold text-lg">Calculate Weather</h3>
            <p className="text-gray-500 text-sm mt-2">
              Lorem ipsum dolor sit amet, adipisicing elit.
            </p>
          </div>

          
          <div className="w-[262px] h-[182px] rounded-xl p-6 shadow-[4px_4px_8px_rgba(250,169,53,0.4)] hover:shadow-md transition">
            <div className="bg-orange-400 text-white w-12 h-12 flex items-center justify-center rounded-full mb-4">
              <MapPinned size={22} />
            </div>
            <h3 className="font-semibold text-lg">Best Tour Guide</h3>
            <p className="text-gray-500 text-sm mt-2">
              Lorem ipsum dolor sit amet, adipisicing elit.
            </p>
          </div>

          
          <div className="w-[262px] h-[182px] rounded-xl p-6 shadow-[4px_4px_8px_rgba(250,169,53,0.4)] hover:shadow-md transition">
            <div className="bg-orange-400 text-white w-12 h-12 flex items-center justify-center rounded-full mb-4">
              <Settings size={22} />
            </div>
            <h3 className="font-semibold text-lg">Customization</h3>
            <p className="text-gray-500 text-sm mt-2">
              Lorem ipsum dolor sit amet, adipisicing elit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
