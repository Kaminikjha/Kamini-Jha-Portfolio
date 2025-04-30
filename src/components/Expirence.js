import React from "react";
import { motion } from "framer-motion";
import htmlIcon from "../assets/html.png";
import cssIcon from "../assets/css.png";
import jsIcon from "../assets/javascript.png";
import tailwindIcon from "../assets/tailwind.png";
import bootstrapIcon from "../assets/bootstrap.png";
import reactIcon from "../assets/react.png";
import canvaIcon from "../assets/canva.png";
import figmaIcon from "../assets/figma.png";
import mongodb from "../assets/mongodb.png";
import nodejs from "../assets/nodejs.png";

const Experience = () => {
  return (
    <div id="experience" className="text-white py-12 px-4 md:px-8">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight tracking-tighter mb-10 text-center">My Experience</h2>
      
      <div className="grid grid-cols-3 md:grid-cols-5 gap-4 max-w-6xl mx-auto">
        {[htmlIcon, cssIcon, jsIcon, reactIcon,   tailwindIcon, bootstrapIcon, mongodb, nodejs, figmaIcon, canvaIcon].map((icon, index) => (
          <motion.div
            key={index}
            className="bg-gray-100 p-3 rounded-lg shadow-md flex flex-col items-center justify-center"
            
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 10, delay: index * 0.05 }}
          >
            <img src={icon} alt="Skill Icon" className=" h-14 object-contain" />
          </motion.div>
        ))}
      </div>

      <div className="mt-16 space-y-8 max-w-4xl mx-auto">
        <motion.div
          className="bg-gray-800 p-6 rounded-xl shadow-lg"
          whileHover={{ scale: 1.03 }}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100, damping: 10 }}
        >
          <h3 className="text-lg md:text-xl font-semibold">Gollamudi Technology and Software</h3>
          <p className="text-gray-400 text-md md:text-lg">Dec 2024 - Present</p>
          <ul className="mt-2 text-md">
            <li>- Web Developer</li>
          </ul>
        </motion.div>

        <motion.div
          className="bg-gray-800 p-6 rounded-xl shadow-lg"
          whileHover={{ scale: 1.03 }}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.1 }}
        >
          <h3 className="text-lg md:text-xl font-semibold">Suvidha Foundation</h3>
          <p className="text-gray-400 text-md md:text-lg">May 2024 - Aug 2024 (3 months internship)</p>
          <ul className="mt-2 text-md">
            <li>- Frontend Developer</li>
          </ul>
        </motion.div>

        <motion.div
          className="bg-gray-800 p-6 rounded-xl shadow-lg"
          whileHover={{ scale: 1.03 }}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.2 }}
        >
          <h3 className="text-lg md:text-xl font-semibold">Visualize Informatica Innovations Solution Pvt Ltd</h3>
          <p className="text-gray-400 text-md md:text-lg">May 2023 - Feb 2024 (10 months internship)</p>
          <ul className="mt-2 text-md">
            <li>- UI/UX Designer Intern</li>
            <li>- Graphic Designer Intern</li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;
