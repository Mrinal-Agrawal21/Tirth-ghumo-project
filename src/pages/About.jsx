import React from 'react'
import Navbar from './components/Navbar'
import { aboutBanner, galleryImg5 } from '../utils'
import SubscribeSection from './components/SubscribeSection'
import Footer from './components/Footer'
import Services from './components/Services'
const About = () => {
  return (
    <>
      <Navbar />
      <section className="relative w-full h-[350px] md:h-[450px] lg:h-[500px]">
              <img
                src={aboutBanner}
                alt="All Tours"
                className="w-full h-full object-cover"
              />
      
              <div className="absolute inset-0 flex items-center justify-center">
                <h1 className="text-6xl md:text-7xl font-bold">
                  <span className="text-white">About</span>{" "}
                  <span className="text-[#FAA935]">Us</span>
                </h1>
              </div>
       </section>
       <section className="py-12 px-6 md:px-16 lg:px-24 bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Who We Are */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Who <span className="text-[#FAA935]">We Are?</span>
                </h2>
                <p className="mt-3 text-gray-600 leading-relaxed">
                  We’re all about creating unforgettable experiences for our guests.
                  Our journey began with a simple passion for exploring the beauty of
                  the World.
                </p>
              </div>

              {/* Our Mission */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Our <span className="text-[#FAA935]">Mission</span>
                </h2>
                <p className="mt-3 text-gray-600 leading-relaxed">
                  We believe that travel is not just about visiting new places, but
                  about immersing yourself in new cultures, connecting with nature,
                  and making memories that last a lifetime.
                </p>
              </div>
            </div>

            {/* Right Image */}
            <div>
              <img
                src={galleryImg5}
                alt="Travel"
                className="rounded-lg shadow-lg w-[544px] h-[385px] object-cover"
              />
            </div>
          </div>
       </section>
       <Services />
       <SubscribeSection />
       <Footer />
    </>
  )
}

export default About