import React from 'react';
import img1 from "../../assets/logo2.jpg";
import img2 from "../../assets/poster15.png";
import img3 from "../../assets/poster20.png";
import img4 from "../../assets/poster17.png";
import img5 from "../../assets/poster18.png";
import img6 from "../../assets/poster19.png";


const IMAGE_DATA = {
  logo: img1,
  gallery: [img2, img3, img4, img5, img6], // You can replace img1 with another pic if available
};

export default function NewHero2() {
  return (
    <div className="relative bg-green-50 min-h-screen font-sans flex flex-col">
      
      {/* Top Green Border */}
      <div className="h-2.5 bg-green-600 w-full"></div>

      <main className="flex-grow flex flex-col items-center justify-center container mx-auto px-4 sm:px-6 lg:px-12 py-20">
        
        {/* Main Content Area */}
        <div className="w-full max-w-7xl">

          {/* Header and Text Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            
            {/* Logo and Title */}
            <div className="flex items-center">
              <img 
                src={IMAGE_DATA.logo} 
                alt="Hemant Fertilizers Logo" 
                className="w-20 h-22 sm:w-40 sm:h-40 flex-shrink-0"
                onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/96x96/ffffff/000000?text=Logo'; }}
              />
              <div className="ml-4">
                <h1 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-gray-800">
                  Hemant Fertilizers <br></br> Pvt. Ltd.
                </h1>
              </div>
            </div>

            {/* Descriptive Text */}
            <div className="text-gray-600 text-base lg:text-lg leading-relaxed">
              <p>
                Pioneering the future of agriculture with innovative and sustainable fertilizer solutions.
                We are dedicated to empowering farmers by enhancing crop yield and soil health for a prosperous and green tomorrow.
              </p>
              <p className="mt-4 text-green-700 font-medium text-lg">
                🌿 Embrace the power of <span className="font-bold text-green-800">Organic Fertilizers</span> — the natural path to fertile soil, healthier crops, and a greener planet.
              </p>
              <p className="mt-2 text-gray-700">
                Our <span className="font-semibold text-green-700">organic blends</span> not only nourish your soil but also restore its vitality, supporting long-term agricultural success without harmful chemicals.
              </p>
            </div>
          </div>

          {/* Image Gallery Section */}
          <section className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {IMAGE_DATA.gallery.map((src, index) => (
              <div 
                key={index}
                className="overflow-hidden rounded-xl shadow-md transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl group"
              >
                <img 
                  src={src} 
                  alt={`Farming and agriculture image ${index + 1}`} 
                  className="w-full h-full object-cover aspect-[4/5]"
                />
              </div>
            ))}
          </section>
        </div>
      </main>

      {/* Bottom Green Border */}
      {/* Optional: Uncomment if you'd like a footer accent */}
      {/* <div className="h-2.5 bg-green-600 w-full"></div> */}
    </div>
  );
}
