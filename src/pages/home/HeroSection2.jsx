import React from 'react';
import heroImage from '../../assets/banner.png'; // for large screens
import mobileImage1 from '../../assets/b1.png'; // image 1 for small screens
import mobileImage2 from '../../assets/b2.png'; // image 2 for small screens

const HeroSection2 = () => {
  return (
    <section className="w-full mt-0 p-0">
      {/* Desktop/Large Screen Image */}
      <img
        src={heroImage}
        alt="Hero"
        className="hidden sm:block w-full h-auto object-cover"
      />

      {/* Mobile Images */}
      <div className="block sm:hidden">
        <img
          src={mobileImage1}
          alt="Mobile Hero 1"
          className="w-full h-auto object-cover"
        />
        <img
          src={mobileImage2}
          alt="Mobile Hero 2"
          className="w-full h-auto object-cover"
        />
      </div>

      <div className="w-full h-1 bg-yellow-500" />
    </section>
  );
};

export default HeroSection2;
