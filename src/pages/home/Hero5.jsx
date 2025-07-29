import React from 'react';
import bannerimg from '../../assets/banner.png';
import img2 from "../../assets/poster6.jpg";
import img3 from "../../assets/poster20.png";
import img4 from "../../assets/poster17.png";
import img5 from "../../assets/poster18.png";
import img6 from "../../assets/poster19.png";
import img7 from "../../assets/poster15.png";
import img8 from "../../assets/poster21.png";


const categories = [
  {
    title: "Sanjeevani Sulphor",
    description: "For vibrant leaf growth",
    imageUrl: "https://images.unsplash.com/photo-1627923790439-4194f107159d?q=80&w=1965&auto=format&fit=crop",
    altText: "Nitrogen-based fertilizers",
    fallbackImage: img5
  },
  {
    title: "Biozin+",
    description: "For strong root development",
    imageUrl: "https://images.unsplash.com/photo-1615943997583-684a7a13fe25?q=80&w=1974&auto=format&fit=crop",
    altText: "Phosphorus-rich fertilizers",
    fallbackImage: img3
  },
  {
    title: "Sanjeevani",
    description: "For overall plant health",
    imageUrl: "https://images.unsplash.com/photo-1591701042938-25133602da18?q=80&w=1974&auto=format&fit=crop",
    altText: "Potassium-based fertilizers",
    fallbackImage: img6
  },
  {
    title: "Potassium sulphate",
    description: "Eco-friendly and sustainable",
    imageUrl: "https://images.unsplash.com/photo-1587814299413-1647a7a8f8a8?q=80&w=1974&auto=format&fit=crop",
    altText: "Organic soil conditioners",
    fallbackImage: img4
  },
  {
    title: "Sanjeevani Sulphor",
    description: "For targeted deficiencies",
    imageUrl: "https://images.unsplash.com/photo-1515150182902-34533b8119e5?q=80&w=1974&auto=format&fit=crop",
    altText: "Micronutrient supplements",
    fallbackImage: img5
  },
  {
    title: "Humic+Fulvic Acid",
    description: "Improves enzyme function",
    imageUrl: "https://images.unsplash.com/photo-1601049534162-2dd06f1679e6?q=80&w=1974&auto=format&fit=crop",
    altText: "Zinc nutrients",
    fallbackImage: img7
  },
  {
    title: "Potassium Sulphate",
    description: "Enhances flowering",
    imageUrl: "https://images.unsplash.com/photo-1549887534-3ec93abae7f1?q=80&w=1974&auto=format&fit=crop",
    altText: "Flowering enhancers",
    fallbackImage: img8
  }
];

const CategoryCard = ({ title, description, imageUrl, altText, fallbackImage }) => {
  const handleImageError = (e) => {
    e.target.onerror = null;
    e.target.src = fallbackImage;
  };

  return (
    <div className="group text-center min-w-[250px] max-w-xs flex-shrink-0 transform hover:-translate-y-2 transition-transform duration-300 ease-in-out">
      <div className="relative h-80 w-full overflow-hidden rounded-lg shadow-lg">
        <img
          src={imageUrl}
          alt={altText}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          onError={handleImageError}
        />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-gray-800">{title}</h3>
      <p className="mt-1 text-sm text-gray-500">{description}</p>
    </div>
  );
};

const Hero5 = () => {
  const handleHeroImageError = (e) => {
    e.target.onerror = null;
    e.target.src = 'https://placehold.co/1920x800/22c55e/ffffff?text=Image+Not+Found';
  };

  return (
    <main className="font-sans bg-gray-50">
      <section className="w-full">

        {/* Top Banner Section */}
        <div className="relative h-[40vh] md:h-[45vh] w-full bg-[#1b341e] flex justify-center items-center gap-4 px-4">
          <img
            src={img2}
            alt="Left Side Banner"
            className="hidden md:block h-full object-contain"
            onError={handleHeroImageError}
          />
          <img
            src={bannerimg}
            alt="Banner of Hemant Fertilizers"
            className="w-[90vw] h-[50vh] md:w-auto md:h-full object-contain"
            onError={handleHeroImageError}
          />
        </div>

        {/* 🔶 Orange Divider Line */}
        <div className="w-full h-1 bg-yellow-500" />

        {/* Continuous Slider Section */}
        {/* <div className="bg-white overflow-hidden">
          <div className="py-12 md:py-16 relative">
            <div
              className="flex w-max animate-slide gap-6 px-4"
              style={{
                animation: 'scroll 40s linear infinite'
              }}
            >
              {[...categories, ...categories].map((category, idx) => (
                <CategoryCard
                  key={`${category.title}-${idx}`}
                  title={category.title}
                  description={category.description}
                  imageUrl={category.imageUrl}
                  altText={category.altText}
                  fallbackImage={category.fallbackImage}
                />
              ))}
            </div>

       
            <style>
              {`
                @keyframes scroll {
                  0% { transform: translateX(0); }
                  100% { transform: translateX(-50%); }
                }
              `}
            </style>
          </div>
        </div> */}
      </section>
    </main>
  );
};

export default Hero5;
