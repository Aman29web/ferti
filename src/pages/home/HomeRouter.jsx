import React from 'react'
import Navbar from '../../component/navbar/Navbar'
import HeroSection from './HeroSection'

import Hero3 from './Hero3'

import StatisticsSection from './StatisticsSection'
import ProductSolutions from './ProductSolutions'
import SustainabilitySection from './SustainabilitySection'
import NewsSection from './NewsSection'
import TestimonialsSection from './TestimonialsSection'
import ImpactStats from './ImpactStats'
import CTASection from './CTASection'
import Footer from '../../component/footer/Footer'
import HomeServices from './HomeServices'
import HomeServiceCards from './HomeServiceCards'
import FertilizerResultCarousel from './FertilizerResultCarousel'
import TestimonialSlider from './TestimonialSlider'
import Services3 from './Services3'
import InnovationSection from './InnovationSection'
import InnovationBlock from './InnovationBlock'
import FertilizerInfo from './FertilizerInfo'
import FertilizerShowcase from './FertilizerShowcase'
import NewHero from './NewHero'
import NewHero2 from './NewHero2'
import Hero5 from './Hero5'
import HeroSection2 from './HeroSection2'

const HomeRouter = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection2></HeroSection2>
      {/* <Hero5></Hero5> */}
      {/* <NewHero2></NewHero2> */}
      {/* <NewHero></NewHero> */}
      {/* <HeroSection></HeroSection> */}
      {/* <Hero4></Hero4> */}
      <ImpactStats></ImpactStats>

      {/* <StatisticsSection></StatisticsSection> */}
      <Services3></Services3>
      {/* <InnovationSection></InnovationSection> */}
      <InnovationBlock></InnovationBlock>
      <ProductSolutions></ProductSolutions>
      <FertilizerInfo></FertilizerInfo>
      <FertilizerShowcase></FertilizerShowcase>

      {/* <HomeServiceCards></HomeServiceCards> */}
      {/* <CTASection></CTASection> */}
     <SustainabilitySection></SustainabilitySection>
      <NewsSection></NewsSection>
      {/* <FertilizerResultCarousel></FertilizerResultCarousel> */}
      {/* <TestimonialSlider></TestimonialSlider> */}
      <TestimonialsSection></TestimonialsSection>
      {/* <TestimonialSlider></TestimonialSlider> */}

      <Footer></Footer>
      {/* <HomeServices></HomeServices> */}
      {/* <Hero3></Hero3> */}
      {/* <HeroSection2></HeroSection2> */}
      {/* <HeroSection></HeroSection> */}
    </div>
  )
}

export default HomeRouter
