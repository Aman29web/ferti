import React from "react";
// import { motion } from "framer-motion";
// import { motion } from "framer-motion";

import fertilizer1 from "../../assets/poster15.png";
// import fertilizer1 from "../../assets/poster15.png";
import fertilizer2 from "../../assets/poster16.png";
import fertilizer3 from "../../assets/poster17.png";
import fertilizer4 from "../../assets/poster18.png";
import fertilizer5 from "../../assets/poster19.png";
import fertilizer6 from "../../assets/poster20.png";
import fertilizer7 from "../../assets/poster21.png";
import fertilizer8 from "../../assets/poster22.png";
import fertilizer9 from "../../assets/poster23.png";



const fertilizers = [
  {
    id: 1,
    name: "Gregor Black",
    weight: "5 KG",
    type: "Beneficial Element Fertilizer",
    description:
      "Specially developed to enhance plant strength, improve soil health, and boost overall crop yield. Promotes resistance against pests and stress.",
    image: fertilizer1,
  },
{
  "id": 2,
  "name": "Mrida-Shakti",
  "weight": "1 KG",
  "type": "Organic Manure",
  "description": "An organic manure enriched with essential macro and micro plant nutrients to improve soil health and enhance the growth of various vegetable crops.",
  "image": fertilizer2,
},
  {
   "id": 3,
  "name": "HFPL 0:0:50 Potassium Sulphate",
  "weight": "1 KG",
  "type": "Water Soluble Fertilizer",
  "description": "An imported, water-soluble potassium sulphate (0:0:50) fertilizer, suitable for foliar application and fertigation. It enhances fruit quality, size, and colour in various crops.",
  "image": fertilizer3,
  },
  {
    "id": 4,
  "name": "HFPL Sanjivani Sulphur Urvarak",
  "weight": "1 KG",
  "type": "Sulphur 90% WDG Fertilizer",
  "description": "An imported Sulphur 90% WDG (Water Dispersible Granules) powder fertilizer in micronized form, designed to correct sulphur deficiency and improve plant growth.",
  "image": fertilizer4,
  },
  {
    "id": 5,
  "name": "HFPL Sanjivani Sulphur 90% G.E.",
  "weight": "1 KG",
  "type": "Sulphur Fertilizer",
  "description": "An imported 'Sanjivani' fertilizer containing Sulphur 90% G.E. It is formulated to provide essential sulphur, promoting robust plant growth and overall vitality.",
  "image": fertilizer5,
  },
  {
    "id": 6,
  "name": "BIOZIN+ Chelated Bio-Zinc",
  "weight": "Not Mentioned",
  "type": "Organic Manure with Chelated Bio-Zinc",
  "description": "An organic manure enriched with Chelated Bio-Zinc, suitable for both soil and foliar application. It is designed to improve nutrient uptake and support healthy growth in a variety of crops.",
  "image": fertilizer6,
  },
  {
     "id": 7,
  "name": "HFPL 0:0:50 Potassium Sulphate",
  "weight": "1 KG",
  "type": "Water Soluble Fertilizer",
  "description": "An imported, water-soluble Potassium Sulphate (0:0:50) fertilizer. Ideal for foliar application and fertigation to enhance fruit quality, size, and overall crop vigor.",
  "image": fertilizer7,
  },
  {
   "id": 8,
  "name": "HFPL Gregor Black",
  "weight": "Not Mentioned",
  "type": "Activated Humic Acid + Fulvic Acid 98%",
  "description": "A soil conditioner containing 98% Activated Humic and Fulvic Acid. Gregor Black is suitable for all types of plants and home gardens, promoting strong root development and overall plant growth.",
  "image": fertilizer8,
  },
  {
   "id": 9,
  "name": "HFPL Sanjivani Sulphur Urvarak",
  "weight": "1 KG",
  "type": "Sulphur 90% WDG Fertilizer",
  "description": "An imported, micronized Sulphur (90% WDG) fertilizer in powder form. It serves as a vital nutrient to correct sulphur deficiency and enhance overall plant health and vigorous growth.",
  "image": fertilizer9,
  },
];

const FertilizerShowcase = () => {
  return (
    <section className="bg-orange-50 py-20 px-4 md:px-10 text-green-900">
      <h2 className="text-3xl md:text-5xl font-bold text-center text-green-700 mb-16 tracking-tight">
        Our Premium Fertilizers
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {fertilizers.map((fertilizer, index) => (
          <div
            key={fertilizer.id}
            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-[green-200]"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src={fertilizer.image}
              alt={fertilizer.name}
              className="max-h-full max-w-full object-contain"
            />
            <div className="p-6 space-y-3">
              <h3 className="text-2xl font-semibold text-green-800">
                {fertilizer.name}
              </h3>
              <p className="text-sm text-green-800">
                <strong>Type:</strong> {fertilizer.type}
              </p>
              <p className="text-sm text-gray-700">
                <strong>Net Weight:</strong> {fertilizer.weight}
              </p>
              <p className="text-sm text-gray-700">{fertilizer.description}</p>
              <p className="mt-4 text-xs text-gray-700">
                Packed & Marketed by:
                <br />
                <span className="font-semibold text-green-800">
                  Hemant Fertilizers Pvt. Ltd.
                </span>
                <br />
                G-14, Site-1 Indl. Estate, Unnao (U.P.)
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FertilizerShowcase;
