import React from "react";
import { subscribeImg } from "../../utils";
const SubscribeSection = () => {
  return (
    <section className="bg-[#CAE5F4] py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-snug">
            Subscribe now to get useful traveling information
          </h2>

          {/* Input and Button */}
          <div className="flex items-center mt-6 max-w-md bg-white rounded-md shadow-sm overflow-hidden">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 focus:outline-none text-gray-700"
            />
            <button className="bg-[#f7a52c] text-white px-6 py-3 font-semibold hover:bg-[#e69520] transition-all">
              Subscribe
            </button>
          </div>

          {/* Small Text */}
          <p className="mt-4 text-gray-700 text-sm md:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            adipisci sunt in, provident facere ipsam?
          </p>
        </div>

        {/* Right Image */}
        <div className="flex justify-center md:justify-end">
          <img src={subscribeImg} alt="Traveler" className="max-h-[350px] scale-[1.3] object-contain" />
        </div>
      </div>
    </section>
  );
};

export default SubscribeSection;
