import React from "react";
import { motion } from "framer-motion";
import htmlIcon from "../assets/html-file.png";
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
    <div id="experience" className=" text-white py-12 px-4 md:px-8">
      <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tighter mb-10">My Experience</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
        <motion.div
          className="bg-gray-100 p-5 rounded-xl shadow-lg flex flex-col items-center"
          whileHover={{ scale: 1.1 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img src={htmlIcon} alt="HTML" className="w-20 h-20" />
          {/* <p className="text-center mt-2">HTML</p> */}
        </motion.div>

        <motion.div
          className="bg-gray-100 p-5 rounded-xl shadow-lg flex flex-col items-center"
          whileHover={{ scale: 1.1 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img src={cssIcon} alt="CSS" className="w-20 h-20" />
          {/* <p className="text-center mt-2">CSS</p> */}
        </motion.div>

        <motion.div
          className="bg-gray-100 p-5 rounded-xl shadow-lg flex flex-col items-center"
          whileHover={{ scale: 1.1 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <img src={jsIcon} alt="JavaScript" className="w-20 h-20" />
          {/* <p className="text-center mt-2">JavaScript</p> */}
        </motion.div>

        <motion.div
          className="bg-gray-100 p-5 rounded-xl shadow-lg flex flex-col items-center"
          whileHover={{ scale: 1.1 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <img src={reactIcon} alt="JavaScript" className="w-20 h-20" />
          {/* <p className="text-center mt-2">JavaScript</p> */}
        </motion.div>
        
        <motion.div
          className="bg-gray-100 p-5 rounded-xl shadow-lg flex flex-col items-center"
          whileHover={{ scale: 1.1 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <img src={canvaIcon} alt="JavaScript" className="w-20 h-20" />
          {/* <p className="text-center mt-2">JavaScript</p> */}
        </motion.div>

        <motion.div
          className="bg-gray-100 p-5 rounded-xl shadow-lg flex flex-col items-center"
          whileHover={{ scale: 1.1 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <img src={figmaIcon} alt="JavaScript" className="w-20 h-20" />
          {/* <p className="text-center mt-2">JavaScript</p> */}
        </motion.div>


        <motion.div
          className="bg-gray-100 p-5 rounded-xl shadow-lg flex flex-col items-center"
          whileHover={{ scale: 1.1 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img src={tailwindIcon} alt="Tailwind CSS" className="w-14 h-14" />
          <p className="text-center text-black text-xl font-semibold">Tailwind CSS</p>
        </motion.div>

        <motion.div
          className="bg-gray-100 p-5 rounded-xl shadow-lg flex flex-col items-center"
          whileHover={{ scale: 1.1 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img src={bootstrapIcon} alt="Tailwind CSS" className="w-14 h-14" />
          <p className="text-center text-black text-xl font-semibold">Bootstrap</p>
        </motion.div>

        <motion.div
          className="bg-gray-100 p-5 rounded-xl shadow-lg flex flex-col items-center"
          whileHover={{ scale: 1.1 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img src={mongodb} alt="Tailwind CSS" className="w-14 h-14" />
          <p className="text-center text-black text-xl font-semibold">Mongo DB</p>
        </motion.div>
       
        <motion.div
          className="bg-gray-100 p-5 rounded-xl shadow-lg flex flex-col items-center"
          whileHover={{ scale: 1.1 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <img src={nodejs} alt="JavaScript" className="w-20 h-20" />
          {/* <p className="text-center mt-2">JavaScript</p> */}
        </motion.div>

      </div>
      
      <div className="mt-12 space-y-6">

      <motion.div
          className="bg-gray-800 p-6 rounded-xl shadow-lg"
          whileHover={{ scale: 1.02 }}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-sm md:text-lg lg:text-xl font-semibold">Gollamudi Technology and Software</h3>
          <p className="text-gray-400 text-lg">02 dec 2024 (working)</p>
          <ul className="mt-2 text-lg">
            <li>- Web Developer</li>
          </ul>
        </motion.div>

        <motion.div
          className="bg-gray-800 p-6 rounded-xl shadow-lg"
          whileHover={{ scale: 1.02 }}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-sm md:text-lg lg:text-xl font-semibold">Suvidha Foundation</h3>
          <p className="text-gray-400 text-lg">May 2024 - Aug 2024 (3 months internship)</p>
          <ul className="mt-2 text-lg">
            <li>- Frontend Developer</li>
          </ul>
        </motion.div>


        <motion.div
          className="bg-gray-800 p-6 rounded-xl shadow-lg"
          whileHover={{ scale: 1.02 }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-sm md:text-lg lg:text-xl font-semibold">Visualize Informatica Innovations Solution Private Limited</h3>
          <p className="text-gray-400 text-lg">May 2023 - Feb 2024 (10 months internship)</p>
          <ul className="mt-2 text-lg">
            <li>- UI/UX Designer Intern</li>
            <li>- Graphic Designer Intern</li>
          </ul>
        </motion.div>

        

        
      </div>
    </div>
  );
};

export default Experience;
