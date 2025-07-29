import React from 'react';
import img1 from "../../assets/logo2.jpg"

// You can replace these with your actual image URLs
const IMAGE_URLS = {
  logo: img1, // The logo you provided
  bg1: 'https://images.unsplash.com/photo-1492496913980-5013382e103b?q=80&w=2812&auto=format&fit=crop',
  bg2: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=2874&auto=format&fit=crop',
  bg3: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2940&auto=format&fit=crop',
  bg4: 'https://images.unsplash.com/photo-1560493676-04071c5f467b?q=80&w=2874&auto=format&fit=crop',
};

// Main App Component
export default function NewHero() {
  return (
    <div className="bg-[#1A3A2A] font-sans">
      <main className="relative min-h-screen flex flex-col lg:flex-row items-center justify-center overflow-hidden p-4">
        
        {/* Background Collage Effect */}
        <div className="absolute inset-0 z-0 opacity-15">
            <div 
                className="absolute top-[-5%] right-[-5%] w-1/3 h-1/3 bg-no-repeat bg-cover bg-center"
                style={{ 
                  backgroundImage: `url(${IMAGE_URLS.bg1})`,
                  borderRadius: '49% 51% 70% 30% / 30% 40% 60% 70%',
                  transform: 'rotate(30deg)'
                }}
            ></div>
            <div 
                className="absolute top-1/4 left-[-10%] w-1/2 h-1/2 bg-no-repeat bg-cover bg-center"
                style={{ 
                  backgroundImage: `url(${IMAGE_URLS.bg2})`,
                  borderRadius: '55% 45% 44% 56% / 60% 58% 42% 40%',
                   transform: 'rotate(-15deg)'
                }}
            ></div>
            <div 
                className="absolute bottom-[-10%] left-[15%] w-1/3 h-1/3 bg-no-repeat bg-cover bg-center"
                style={{ 
                  backgroundImage: `url(${IMAGE_URLS.bg3})`,
                  borderRadius: '59% 41% 71% 29% / 52% 64% 36% 48%',
                   transform: 'rotate(10deg)'
                }}
            ></div>
             <div 
                className="absolute bottom-[-5%] right-[5%] w-1/2 h-1/2 bg-no-repeat bg-cover bg-center"
                style={{ 
                  backgroundImage: `url(${IMAGE_URLS.bg4})`,
                  borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
                  transform: 'rotate(-45deg)'
                }}
            ></div>
        </div>

        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            
            {/* Left Side: Big Logo */}
            <div className="flex items-center justify-center order-last lg:order-first mt-8 lg:mt-0">
              <div className="bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-2xl transition-transform duration-500 hover:scale-105 hover:bg-white">
                <img 
                  src={IMAGE_URLS.logo} 
                  alt="HFPL Logo" 
                  className="w-64 lg:w-80 h-auto"
                  onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/320x320/ffffff/1A3A2A?text=Logo'; }}
                />
              </div>
            </div>

            {/* Right Side: Text Content */}
            <div className="text-center lg:text-left">
              <h2 className="text-lg font-semibold text-green-300 tracking-wider">
                Hemant Fertilizers
              </h2>
              <h1 className="mt-2 text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight tracking-tight drop-shadow-lg">
                THE FUTURE
                <br />
                OF FARMING
              </h1>
              
              <div className="mt-6 flex justify-center lg:justify-start">
                  <div className="bg-[#4CAF50] inline-block transform -skew-x-12 shadow-lg">
                      <p className="px-6 py-2 text-xl font-bold text-white skew-x-12">
                          Embracing Innovation
                      </p>
                  </div>
              </div>

              <p className="mt-8 max-w-lg mx-auto lg:mx-0 text-gray-200 bg-[#1A3A2A]/50 backdrop-blur-sm p-4 rounded-md">
                The future of farming is here. We are committed to providing the best fertilizers to help you grow your crops and increase your yield. Our products are made with the highest quality ingredients and are designed to be environmentally friendly.
              </p>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}
