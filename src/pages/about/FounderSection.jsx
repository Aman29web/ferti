import React from "react";
import { motion } from "framer-motion";
import img1 from "../../assets/2.jpg";
import img2 from "../../assets/3.jpg";

const founders = [
  {
    name: "Surendra Kushwaha",
    role: "Chairman",
    image: img1,
    bio: "Shri Surendra Kushwaha is the Director of Marketing at Hemant Fertilizers Pvt Ltd. A post-graduate from Kanpur University, he has more than 24 years of experience in the Agri–Input industry. Since the company's inception, he has driven its marketing and development strategies as the Marketing Director. He has played a key role in the company’s growth and has been recognized with numerous awards for his contributions, making him a true asset to the organization.",
  },
  {
    name: "Shri Rameshwar Kushwaha",
    role: "Director",
    image: img2,
    bio: "Shri Rameshwar Kushwaha is the Chairman of Hemant Fertilizers Pvt Ltd. After contributing his 29 years to business and reaching them to greater heights, he established Hemant Fertilizers in 1995. His deep commitment and inspiring leadership in initial turbulent days is an example worth inculcating. His passion to contribute to Indian Agriculture is Organic Fertilizers. His ability to prioritize and deal effectively with multiple tasks, reinforced with the skills to make effective decisions.",
  },
];

const cardVariants = {
  offscreen: { opacity: 0, y: 40 },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", bounce: 0.3, duration: 0.8 },
  },
};

const FounderSection = () => {
  return (
    <section className="bg-gradient-to-b from-green-50 to-white py-24 px-4 sm:px-10" id="founders">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-5xl sm:text-6xl font-extrabold text-green-900 mb-20 drop-shadow-md">
          Meet Our Founders
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
          {founders.map((founder, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition duration-300 border border-[green-200]"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
            >
              <img
                src={founder.image}
                alt={founder.name}
                className="w-40 h-40 object-cover rounded-full mx-auto mb-6 border-4 border-[#0B3E2A]"
              />
              <h3 className="text-3xl font-bold text-green-800 mb-1">{founder.name}</h3>
              <p className="text-lg text-gray-600 font-semibold uppercase mb-4">{founder.role}</p>
              <p className="text-base text-gray-800 font-medium leading-relaxed text-justify">
                {founder.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
