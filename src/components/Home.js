import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { ReactTyped } from "react-typed";
import emailjs from "emailjs-com";

const Home = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    //Your EmailJS service ID, templete ID, and public key
    const serviceId = "service_6dmiyzx";
    const templateId = "template_xxeyn07";
    const publicKey = "pilFSvoqFoHBRuGBG";

    //Create a new object that contains dynamic templete params
    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Kamini Jha",
      message: message,
    };

    //send the email using EmailJS

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((Response) => {
        console.log("Email sent successfully!", Response);
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };

  // State for showing click feedback
  const [isClicked, setIsClicked] = useState(false);

  // Handler for contact button click
  const handleContactClick = () => {
    setIsClicked(true);
    // Reset the clicked state after animation
    setTimeout(() => setIsClicked(false), 1000);
    // Opens default email client with specified email
    window.location.href =
      "mailto:kaminijhag@gmail.com?subject=Hello%20from%20your%20website";
  };

  return (
    <section
      id="/"
      className="mt-20 md:mt-0 sm:h-screen flex items-center justify-center text-white p-4 md:px-36"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8 ">
        {/* Left Section - Text Content with Motion */}
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <motion.h1
            className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight tracking-tighter mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          >
            <h1>
              Hi,{" "}
              <ReactTyped
                strings={["I'm Kamini Kumari"]}
                typeSpeed={100}
                loop={true}
                backSpeed={50}
              />
            </h1>
          </motion.h1>
          <motion.p
            className="text-sm md:text-xl lg:text-2xl text-gray-300 leading-relaxed mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeInOut" }}
          >
            I am a passionate Frontend Developer specializing in crafting
            visually stunning and highly functional user interfaces. I thrive on
            transforming ideas into seamless, engaging digital experiences that
            drive impact and innovation.
          </motion.p>
          <motion.button
            className={`bg-blue-600 text-white py-2 px-6 md:py-3 md:px-8 text-sm md:text-lg font-semibold rounded-3xl hover:opacity-85 hover:scale-105 transition-all duration-300 relative ${
              isClicked ? "bg-blue-700" : ""
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleContactClick}
            animate={isClicked ? { y: -5 } : { y: 0 }}
          >
            Contact Me
            {isClicked && (
              <motion.span
                className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-xs text-blue-200"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                Email opening...
              </motion.span>
            )}
          </motion.button>
        </motion.div>

        {/* Right Section - Lottie Animation */}
        <motion.div
          className="flex-1 flex justify-center md:justify-end w-full max-w-[700px] lg:max-w-[900px]"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7, duration: 0.8, ease: "easeInOut" }}
        >
          <DotLottieReact
            src="https://lottie.host/77601f96-79d9-4976-8751-67a34017c512/05FmHWws24.lottie"
            loop
            autoplay
            className="w-full h-auto"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
