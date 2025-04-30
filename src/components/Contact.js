import React from "react";
import { motion } from "framer-motion";
import { FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa";
import ContactGraphic from "../assets/contact.png"; // Make sure you have this image

const Contact = () => {
  return (
    <div id="contact" className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 ">
      
      {/* Left Side - Contact Info */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center md:text-left md:w-1/2 mb-8 md:mb-0"
      >
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight tracking-tighter mb-5 text-white">
          Contact Me
        </h2>
        
        <p className="text-white text-xl font-semibold mt-2">Feel free to contact me with any inquiries or questions!</p>

        <div className="flex space-x-6 mt-8 text-white justify-center md:justify-start">
          <a href="https://www.linkedin.com/in/kamini-jha-b694ba217/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
            <FaLinkedinIn size={30} />
          </a>
          <a href="https://github.com/Kaminikjha" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
            <FaGithub size={30} />
          </a>
          <a href="mailto:kaminijhag@gmail.com" className="hover:text-blue-500">
            <FaEnvelope size={30} />
          </a>
        </div>
      </motion.div>

      {/* Right Side - Graphic */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="md:w-1/3 flex justify-center"
      >
        <img src={ContactGraphic} alt="Contact Illustration" className="max-w-full h-auto" />
      </motion.div>
      
    </div>
  );
};

export default Contact;
