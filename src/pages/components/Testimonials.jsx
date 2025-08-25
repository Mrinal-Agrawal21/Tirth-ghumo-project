import React from "react";
import { reviewAv1, reviewAv2, reviewAv3 } from "../../utils";
export default function Testimonials() {
    return (
      <section className="px-6 md:px-16 py-12 bg-white">
        {/* Tagline */}
        <div className="mb-10">
          <span className="bg-[#FAA935] text-white px-4 py-1 rounded-full font-island text-lg">
            Fans Love
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-semibold text-gray-900">
            What our fans say about us
          </h2>
        </div>
  
        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="text-center md:text-left">
            <p className="text-gray-600 mb-6">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus sit,
              explicabo provident hic distinctio molestias voluptates nobis alias
              placeat suscipit earum debitis recusandae voluptate illum expedita
              corrupti aliquid doloribus delectus?
            </p>
            <div className="flex items-center justify-center md:justify-start space-x-3">
              <img
                src={reviewAv1} // put local image path here
                alt="John Deep"
                className="w-[85px] h-[63px]  object-cover"
              />
              <div>
                <h4 className="font-semibold text-gray-900">John Deep</h4>
                <p className="text-gray-500 text-sm">Customer</p>
              </div>
            </div>
          </div>
  
          {/* Testimonial 2 */}
          <div className="text-center md:text-left">
            <p className="text-gray-600 mb-6">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus sit,
              explicabo provident hic distinctio molestias voluptates nobis alias
              placeat suscipit earum debitis recusandae voluptate illum expedita
              corrupti aliquid doloribus delectus?
            </p>
            <div className="flex items-center justify-center md:justify-start space-x-3">
              <img
                src={reviewAv2} // put local image path here
                alt="Ally Gomez"
                className="w-[85px] h-[63px]  object-cover"
              />
              <div>
                <h4 className="font-semibold text-gray-900">Ally Gomez</h4>
                <p className="text-gray-500 text-sm">Customer</p>
              </div>
            </div>
          </div>
  
          {/* Testimonial 3 */}
          <div className="text-center md:text-left">
            <p className="text-gray-600 mb-6">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus sit,
              explicabo provident hic distinctio molestias voluptates nobis alias
              placeat suscipit earum debitis recusandae voluptate illum expedita
              corrupti aliquid doloribus delectus?
            </p>
            <div className="flex items-center justify-center md:justify-start space-x-3">
              <img
                src={reviewAv3} // put local image path here
                alt="Alex Bugg"
                className="w-[85px] h-[63px] object-cover"
              />
              <div>
                <h4 className="font-semibold text-gray-900">Alex Bugg</h4>
                <p className="text-gray-500 text-sm">Customer</p>
              </div>
            </div>
          </div>
        </div>
  
        {/* Pagination dots */}
        <div className="flex justify-center space-x-2 mt-10">
          <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
          <span className="w-3 h-3 bg-gray-500 rounded-full"></span>
          <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
          <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
        </div>
      </section>
    );
  }
  