import React, { useRef } from "react";
import { motion } from "framer-motion";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import emailjs from 'emailjs-com'; // Make sure to install this package
import ContactGraphic from "../assets/contact.png"; // Make sure you have this image

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
      .then((result) => {
          console.log(result.text);
          form.current.reset();
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div id="contact" className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 ">
      
      {/* Left Side - Contact Form */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center md:text-left md:w-1/2 mb-8 md:mb-0  "
      >
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight tracking-tighter mb-5 text-white">
          Contact Me
        </h2>
        <a href="mailto:kaminijhag@gmail.com" className="text-blue-600 text-2xl underline">
          kaminijhag@gmail.com
        </a>
        <p className="text-white text-xl font-semibold mt-2">Feel free to contact me with any inquiries or questions!</p>

        <form ref={form} onSubmit={sendEmail} className="w-full max-w-2xl flex flex-col gap-6 mt-8">
          <div className="flex flex-col md:flex-row gap-6 text-white text-xl">
            <input
              type="text"
              name="user_name"
              placeholder="Name"
              required
              className="flex-1 border-b-2 border-blue-600 outline-none bg-transparent py-2 placeholder-white"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Email Address"
              required
              className="flex-1 border-b-2 border-white outline-none bg-transparent py-2 placeholder-white"
            />
          </div>
          <textarea
            name="message"
            placeholder="Message"
            required
            rows="4"
            className="w-full border-b-2 border-white outline-none bg-transparent py-2 placeholder-white text-xl text-white"
          ></textarea>

          <div className="flex justify-end">
            <button
              type="submit"
              className="border-2 border-white px-6 py-2 rounded-full font-semibold text-white hover:bg-blue-500 hover:text-white transition"
            >
              Submit
            </button>
          </div>
        </form>

        <div className="flex space-x-6 mt-8 text-white justify-center md:justify-start">
          <a href="https://www.linkedin.com/in/kamini-jha-b694ba217/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
            <FaLinkedinIn size={30} />
          </a>
          <a href="https://github.com/Kaminikjha" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
            <FaGithub size={30} />
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
