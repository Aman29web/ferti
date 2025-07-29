import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import logo1 from "../../assets/logo1.jpg";
import logo2 from "../../assets/logo2.jpg"; // Assuming this is the second logo

const Footer = () => {
  return (
    <footer className="bg-[#0B3E2A] text-white pt-16 pb-10 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Logo & Description */}
        <div className="flex flex-col items-start gap-4">
          <div className="flex items-center gap-4">
            <img src={logo1} alt="Logo 1" className="h-25 rounded-lg shadow-md" />
            <img src={logo2} alt="Logo 2" className="h-25 rounded-lg shadow-md" />
          </div>
          {/* <h3 className="text-xl font-bold">Hemant Fertilizers</h3> */}
          <p className="text-gray-300 text-sm max-w-sm">
            Driving sustainable agriculture with trusted products and farmer-first service.
          </p>
        </div>

        {/* Products */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Our Products</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="hover:text-green-200 transition">Fertilizers</li>
            <li className="hover:text-green-200 transition">Crop Protection</li>
            <li className="hover:text-green-200 transition">Bio-Products</li>
            <li className="hover:text-green-200 transition">Soil Enhancers</li>
          </ul>
        </div>

        {/* Social Media & Typing Text */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-center md:text-left pl-30">Connect With Us</h4>
          <div className="flex justify-center md:justify-start space-x-4 mb-6 pl-28">
            <a href="#" className="p-2 rounded-full bg-white text-green-900 hover:bg-green-200 transition">
              <FaFacebookF />
            </a>
            <a href="#" className="p-2 rounded-full bg-white text-green-900 hover:bg-green-200 transition">
              <FaTwitter />
            </a>
            <a href="#" className="p-2 rounded-full bg-white text-green-900 hover:bg-green-200 transition">
              <FaInstagram />
            </a>
            <a href="#" className="p-2 rounded-full bg-white text-green-900 hover:bg-green-200 transition">
              <FaLinkedinIn />
            </a>
          </div>

          {/* Typing Effect */}
          <h2 className="text-xl md:text-2xl font-bold text-center mt-4">
            <Typewriter
              words={["HEMANT FERTILIZERS Pvt. Ltd."]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </h2>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="text-center text-sm text-gray-400 mt-10 border-t border-green-700 pt-6">
        © {new Date().getFullYear()} Hemant Fertilizers. All rights reserved. <br />
        Developed by ankiyatech.com
      </div>
    </footer>
  );
};

export default Footer;
