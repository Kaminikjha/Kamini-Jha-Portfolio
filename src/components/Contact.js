import React from "react";
import { motion } from "framer-motion";
import { FaLinkedinIn, FaEnvelopeOpenText, FaGithub } from "react-icons/fa";

const Contact = () => {
  const socialLinks = [
    { Icon: FaLinkedinIn, link: "https://www.linkedin.com/in/kamini-jha-b694ba217/" },
    { Icon: FaGithub, link: "https://github.com/Kaminikjha" },
  ];

  return (
    <div id="contact" className="border-t border-gray-700 text-white py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Side: Contact Text */}
        <motion.div
          className="text-left"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-lg md:text-xl lg:text-3xl font-bold leading-tight tracking-tighter mb-2">
            Contact Us
          </h2>
          <p className="text-gray-200 text-lg">Feel free to reach out</p>
        </motion.div>

        {/* Center: Email with Icon */}
        <motion.div
          className="text-center flex items-center gap-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <FaEnvelopeOpenText size={20} className="text-gray-200" />
          <p className="text-gray-200 text-lg">kaminijhag@gmail.com</p>
        </motion.div>

        {/* Right Side: Social Logos */}
        <motion.div
          className="flex space-x-4 md:space-x-6"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {socialLinks.map(({ Icon, link }, index) => (
            <motion.a
              key={index}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-400 text-white transition-all cursor-pointer hover:bg-gray-700 hover:border-gray-700"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Icon size={20} />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;