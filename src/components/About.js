import React from "react";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";


const AboutSection = () => {
  return (
    <motion.div id="about"
      className="text-white p-6 md:p-12 lg:p-20"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      whileHover={{ scale: 1.05 }}
    >
      <div className="max-w-4xl mx-auto">
        {/* About Me Heading */}
        <motion.h2
          className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tighter border-l-4 border-yellow-500 pl-2 mb-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
         <ReactTyped
                       strings={[
                         "About Me",
                        
                       ]}
                       typeSpeed={100}
                       loop={true}
                       backSpeed={50}
                     />
                     
        </motion.h2>

        {/* About Me Description */}
        <motion.p
          className="text-sm md:text-xl lg:text-2xl text-gray-300 leading-relaxed mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          I’m a passionate web developer who loves building modern, responsive,
          and user-friendly websites and apps. With expertise in React, Tailwind
          CSS, and Node.js, I turn ideas into sleek, high-performing digital
          experiences. Whether it’s a stylish portfolio, a powerful e-commerce
          site, or an interactive web app, I focus on making every project fast,
          accessible, and scalable. My goal is to create solutions that are not
          just visually appealing but also easy to use, ensuring a seamless
          experience for every user.
        </motion.p>

       
       
      </div>
    </motion.div>
  );
};

export default AboutSection;
