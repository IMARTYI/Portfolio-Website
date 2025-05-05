import React from "react";
import fullstackImage from "../assets/fullstack.png";
import FTPImage from "../assets/FTP.png";
import SkateImage from "../assets/skate.png";
import translateImage from "../assets/translate.png";
import currencyImage from "../assets/currency.png";
import snakeImage from "../assets/snake.png";
import scheduleImage from "../assets/schedule.png"
import SketchifyImage from "../assets/SketchifyImage.png"


function Pastprojects() {
  const projects = [
    {
      title: "Sketchify",
      description:
        " A cutting edge AI powered application that generates enhanced Images from user Sketches, utilizing Gemini and Imagen 3.0",
      image: SketchifyImage,
      badges: ["Python", "Next Js", "React","Flask"],
      links: {
        github: "https://github.com/IMARTYI/Webpage",
        demo:  "https://sketchify-live.vercel.app/"
      },
    },
    {
      title: "FTP Server",
      description:
        "A Client-Server architecture built for efficient file transfers and network management using flask.",
      image: FTPImage,
      badges: ["Python", "Flask", "Open Telemetry"],
      links: {
        github: "https://github.com/IMARTYI/FTP-Server-with-Flask",
        demo: "https://github.com/IMARTYI/FTP-Server-with-Flask"
      },
    },
    {
      title: "Skateboard Trick Recognition App",
      description:
        "An in progress app that harnesses the capabilites of Media Pipe's computer vision and Pytorch's neural network to correctly label skateboarding tricks.",
      image: SkateImage,
      badges: ["Python", "Open CV", "Media Pipe", "Pytorch"],
      links: {
        github: "https://github.com/IMARTYI/Skateboard-trick-classifier-",
        demo: "https://github.com/IMARTYI/Skateboard-trick-classifier-"
      },
    },
    {
      title: "Talk2Me Translation App",
      description:
        "An application developed for Android utilizing Google Translate's API for real-time accurate translations.",
      image: translateImage,
      badges: ["Java", "XML", "SQLite", "Google Translate API"],
      links: {
        github: "https://github.com/Bfernandez02/Translator-App",
        demo: "https://github.com/Bfernandez02/Translator-App"
      },
    },
    {
      title: "Currency Exchange",
      description:
        "A web application utilizing an API to perform real-time currency conversions.",
      image: currencyImage,
      badges: ["HTML", "CSS", "JavaScript"],
      links: {
        github: "https://github.com/IMARTYI/CurrencyExchange",
        demo: "https://github.com/IMARTYI/CurrencyExchange"
      },
    },
    {
      title: "Snake Game",
      description:
        "Implementation in Java of the classic snake game that never fails to get old!",
      image: snakeImage,
      badges: ["Java"],
      links: {
        github: "https://github.com/IMARTYI/BasicsnakeGame",
        demo: "https://github.com/IMARTYI/BasicsnakeGame"
      },
    },

   {
  title: "Scheduling App for Android",
  description:
    "A scheduling application built strictly for android devices. Intuitive design for users to effectively schedule and plan out future commitments", 
  image: scheduleImage,
  badges: ["Java", "Android Studio", "SQLite"],
  links: {
    github: "https://github.com/IMARTYI/MeetingPlannerAndroid",
    demo:"https://github.com/IMARTYI/MeetingPlannerAndroid"
  },
}
  ];

  return (
    <div className="p-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col font-sarif text-white transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:translate-y-2 rounded-b-lg rounded-md"
          >
            <div className="relative overflow-hidden">
              <a href={project.links.demo}>
              <img
                className="w-full h-64 object-cover transform transition-transform duration-300 ease-in-out hover:scale-110 rounded-t-md"
                src={project.image}
                alt={project.title}
              />
              </a>
            
            </div>
            <div className="bg-green-600 bg-opacity-50 text-center p-3 ">
              <h3 className="text-lg font-serif">{project.title}</h3>
            </div>
            <div className="text-white p-3 bg-green-600 bg-opacity-50">
              <p>{project.description}</p>
            </div>
            <div className="flex flex-wrap justify-between items-center p-3 bg-green-600 bg-opacity-50 rounded-b-md">
              <div className="space-x-1 ">

                {project.badges.map((badge, i) => (
                  <span
                    key={i}
                    className="badge bg-green-500 text-white px-2 py-1 rounded text-xs"
                  >
                    {badge}
                  </span>
                ))}
              </div>
              <div className="flex space-x-3 mt-2">
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-white hover:text-green-500"
                >
                  <svg
                    className="w-5 h-5 mr-1"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 496 512"
                  >
                    <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM248 8C111 8 0 119 0 256c0 110.1 71.3 203.3 170.4 236.2 12.8 2.3 17.5-5.6 17.5-12.4 0-6.1-.2-22.3-.3-43.8-69.4 15.1-84-33.4-84-33.4-11.6-29.4-28.3-37.2-28.3-37.2-23.1-15.8 1.8-15.5 1.8-15.5 25.5 1.8 38.9 26.2 38.9 26.2 22.7 38.9 59.6 27.7 74.2 21.2 2.3-16.4 8.9-27.7 16.2-34.1-55.4-6.3-113.7-27.7-113.7-123.2 0-27.2 9.8-49.4 25.8-66.8-2.6-6.3-11.2-31.8 2.4-66.3 0 0 21-6.7 68.8 25.6 20-5.6 41.5-8.4 62.9-8.5 21.3.1 42.9 2.9 62.9 8.5 47.8-32.4 68.8-25.6 68.8-25.6 13.6 34.5 5 60 2.4 66.3 16 17.4 25.8 39.6 25.8 66.8 0 95.7-58.4 116.8-113.9 123 9.2 7.9 17.4 23.6 17.4 47.6 0 34.4-.3 62.2-.3 70.6 0 6.9 4.6 14.8 17.6 12.3C424.8 459.2 496 366.1 496 256 496 119 385 8 248 8z" />
                  </svg>
                  
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Pastprojects;