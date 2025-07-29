import React from "react";
import { FaSeedling, FaTractor, FaMapMarkedAlt, FaUsers } from "react-icons/fa";
// import { motion } from "framer-motion";

const stats = [
  {
    label: "FARMER TOUCH POINTS",
    value: "1,00,00+",
    icon: <FaSeedling className="text-4xl text-green-600" />,
  },
  {
    label: "AGRICULTURAL PRODUCTS",
    value: "15+",
    icon: <FaUsers className="text-4xl text-green-600" />,
  },
  
  {
    label: "RETAIL STORES",
    value: "350+",
    icon: <FaTractor className="text-4xl text-green-600" />,
  },
  {
    label: "YEARS OF SERVICES",
    value: "30+",
    icon: <FaMapMarkedAlt className="text-4xl text-green-600" />,
  },
];

const ImpactStats = () => {
  return (
    <section className="bg-orange-50 py-20 px-6 md:px-12" id="impact">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-12">
          Our Impact Across India
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {stats.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center bg-green-50 rounded-xl p-6 shadow hover:shadow-md transition"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="mb-3">{item.icon}</div>
              <h3 className="text-3xl font-bold text-green-800">{item.value}</h3>
              <p className="text-gray-600 text-sm mt-2">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;
