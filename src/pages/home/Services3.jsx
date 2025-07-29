import React from 'react';
import img1 from "../../assets/pic1.jpg"
import img2 from "../../assets/pic5.jpg"
// import img3 from "../../assets/img17.jpg"
import img4 from "../../assets/pic2.jpg"
import img5 from "../../assets/pic4.jpg"

// --- SVG Icon for the arrow ---
const ArrowIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    fill="none" 
    viewBox="0 0 24 24" 
    strokeWidth={2.5}
    stroke="currentColor" 
    className="w-8 h-8 text-green-500 transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1 group-hover:translate-x-1"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
  </svg>
);

// --- Reusable Product Card Component ---
const ProductCard = ({ imageSrc, title }) => {
  return (
    <div className="bg-white rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 ease-in-out flex flex-col group cursor-pointer transform hover:-translate-y-1
                    scale-[0.92] sm:scale-100">
      <div className="relative w-full aspect-[4/3] rounded-t-3xl overflow-hidden">
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x300/e2e8f0/94a3b8?text=Image+Not+Found'; }}
        />
        <div className="absolute bottom-0 right-0 h-20 w-20 bg-[#F9F6F2] rounded-tl-full"></div>
        <div className="absolute bottom-5 right-5">
          <ArrowIcon />
        </div>
      </div>
      <div className="p-5 w-full mt-auto">
        <h3 className="text-xl font-semibold text-gray-700">{title}</h3>
      </div>
    </div>
  );
};

// --- Main Section Component ---
export default function Services3() {
  const services = [
    {
      title: 'Fertilizers',
      imageSrc: img1,
    },
    {
      title: 'Speciality Nutrients',
      imageSrc: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=2070&auto=format&fit=crop',
    },
    {
      title: 'Organic Fertilisers',
      imageSrc: img5,
    },
    {
      title: 'Crop Protection',
      imageSrc: img2,
    },
    {
      title: 'Bio Products',
      imageSrc: img4,
    },
    {
      title: 'Retail',
      imageSrc: 'https://images.unsplash.com/photo-1580913428023-02c695666d61?q=80&w=2070&auto=format&fit=crop',
    },
  ];

  return (
    <div className="bg-[#F9F6F2] font-sans w-full py-16">
      <div className="container mx-auto px-4">
        <div className="text-center md:text-left mb-12">
          <p className="text-lg font-semibold text-amber-600 mb-2">Our Products & Services</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">What We Serve</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {services.map((service, index) => (
            <ProductCard key={index} title={service.title} imageSrc={service.imageSrc} />
          ))}
        </div>
      </div>
    </div>
  );
}
