import React from 'react'
import Navbar from './components/Navbar'
import Homehero from './components/Homehero'
import Services from './components/Services'
import FeaturedTours from './components/FeaturedTours'
import Experience from './components/Experience'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import SubscribeSection from './components/SubscribeSection'
import Footer from './components/Footer'
const Home = () => {
  return (
    <>
      <Navbar/>
      <Homehero/>
      <Services/>
      <FeaturedTours/>
      <Experience/>
      <Gallery/>
      <Testimonials/>
      <SubscribeSection/>
      <Footer/>
    </>
)
}

export default Home