import React, { useState, useEffect } from "react";
import debugEntityImg from "../assets/agency_website.png";
import online_tutor from "../assets/online_tutor.png";
import VCS from "../assets/VCS.png";
import ustudy from "../assets/ustudy.png";
import greenearth from "../assets/GreenEarth.png";
import calculator from "../assets/calculator.png";

const projects = [
  {
    title: "Debug Entity",
    description:
      "This is an Agency website created in React.js and used some component library.",
    image: debugEntityImg,
    link: "https://agency-website-s81v.onrender.com",
  },
  {
    title: "Online Private Tutor",
    description:
      "This is a User Interface created in Figma and used some animations and wireframing.",
    image: online_tutor,
    link: "https://www.figma.com/design/nlP6HHBJErEz3QbX5bTtE1/Online-Private-Tutor-UI?node-id=76-2&p=f&t=9w2GKmMm2bPhGd4H-0",
  },
  {
    title: "VCS",
    description:
      "This is a User Interface created in Figma and used some animations and wireframing.",
    image: VCS,
    link: "https://www.figma.com/design/URx9I8q1EQ5ygdaeM25UOF/Visualize-Cyber-Solutions?node-id=27-3947&p=f&t=9cx5waP6Q0KvrY69-0",
  },
  {
    title: "UStudY",
    description: "This is a children's study website developed in React.js and Tailwind CSS.",
    image: ustudy,
    link: "https://u-stud-y-ytgw.vercel.app/",
  },

   {
    title: "GreenEart Plant Store",
    description: "This is a E-commerce website developed in React.js and Tailwind CSS.",
    image: greenearth,
    link: "https://plant-store-five.vercel.app/",
  },
  {
    title: "Calculator",
    description: "This is a Calculator using HTML, CSS and JavaScript.",
    image: calculator,
    link: "https://calculation-seven.vercel.app/",
  },
];

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex + 1 >= projects.length ? 0 : prevIndex + 1
      );
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [projects.length]);

  // Determine the number of visible cards based on screen size
  const getVisibleCards = () => {
    if (window.innerWidth >= 1024) return 3; // lg screens
    else if (window.innerWidth >= 640) return 2; // sm screens
    else return 1; // mobile
  };

  const visibleProjects = projects.slice(
    currentIndex,
    currentIndex + getVisibleCards()
  );

  // Handle edge case for visible cards
  if (visibleProjects.length < getVisibleCards()) {
    visibleProjects.push(
      ...projects.slice(0, getVisibleCards() - visibleProjects.length)
    );
  }

  // Handle dot click
  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div id="projects" className="text-white py-10 px-6 relative overflow-hidden pt-24 ">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight tracking-tighter mb-6 text-center">
        My Projects
      </h2>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-transform duration-500 ease-in-out">
          {visibleProjects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 p-5 rounded-xl shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 duration-300 flex flex-col"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover rounded-md"
              />
              <h3 className="text-xl font-semibold mt-4">{project.title}</h3>
              <p className="text-gray-400 mt-2 flex-row">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center mt-4 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md"
              >
                View Website
              </a>
            </div>
          ))}
        </div>
        {/* Dots Navigation */}
        <div className="flex justify-center mt-6 gap-2">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-blue-600 scale-125"
                  : "bg-gray-400 hover:bg-gray-300"
              }`}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;