import React from "react";
import fullstackImage from "./assets/fullstack.png";
import FTPImage from "./assets/FTP.png";
import SkateImage from "./assets/skate.png";
import translateImage from "./assets/translate.png";
import currencyImage from "./assets/currency.png";
import snakeImage from "./assets/snake.png";

function Pastprojects() {
  const projects = [
    {
      title: "Full Stack Web Application",
      description: "This simple Fullstack application was built using modern tools and technologies.",
      image: fullstackImage,
      badges: ["Python", "HTML/CSS", "JavaScript"],
      links: {
        github: "https://github.com/gurusabarish/hugo-profile",
      },
    },
    {
      title: "FTP Server",
      description: "A Client-Server architecture built for efficient file transfers and network management using flask.",
      image: FTPImage,
      badges: ["Python", "Flask", "Open Telemetry"],
      links: {
        github: "https://github.com/example/ftp-server",
      },
    },
    {
      title: "Skateboard Trick Recognition App",
      description: " An in progress app that harnesses the capabilites of Media Pipe's computer vision and Pytorch's neural network to correctly label skateboarding tricks.",
      image: SkateImage,
      badges: ["Python", "Open CV", "Media Pipe", "Pytorch"],
      links: {
        github: "https://github.com/example/ftp-server",
      },
    },
    {
      title: "Talk2Me Translation app",
      description: "An application developed for Android utilizing Google Translate's API for real time accurate translations",
      image: translateImage,
      badges: ["Java", "XML", "SQLite", "Google Translate API"],
      links: {
        github: "https://github.com/example/ftp-server",
      },
    },
    {
      title: "Currency Exchange",
      description: "A web application utilizing an API to perform real-time currency conversions",
      image: currencyImage,
      badges: ["HTML", "CSS", "Javascript"],
      links: {
        github: "https://github.com/example/ftp-server",
      },
      
    },
    {
      title: "Snake Game",
      description: "Implementation in Java of the classic snake game that never fails to get old ! ",
      image: snakeImage,
      badges: ["Java"],
      links: {
        github: "https://github.com/example/ftp-server",
      },
      
    },
    {
      title: "Scheduler App Android",
      description: "Implementation in Java of the classic snake game that never fails to get old ! ",
      image: snakeImage,
      badges: ["Java"],
      links: {
        github: "https://github.com/example/ftp-server",
      },
      
    },
  ];

  return (
    <div className="p-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col font-bold text-white transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:translate-y-2 rounded-b-lg rounded-md"
          >
            <div className="relative overflow-hidden">
              <img
                className="w-full h-64 object-cover transform transition-transform duration-300 ease-in-out hover:scale-110"
                src={project.image}
                alt={project.title}
              />
            </div>
            <div className="bg-green-600 bg-opacity-50 text-center p-3">
              <h3 className="text-lg font-semibold">{project.title}</h3>
            </div>
            <div className="text-white p-3 bg-green-600 bg-opacity-50">
              <p>{project.description}</p>
            </div>
            <div className="flex flex-wrap justify-between items-center p-3 bg-green-600 bg-opacity-50">
              <div className="space-x-1">
                {project.badges.map((badge, i) => (
                  <span
                    key={i}
                    className="badge bg-green-500 text-white px-2 py-1 rounded text-sm"
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
                  className="text-white hover:text-green-500"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 496 512"
                  >
                    <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9z"></path>
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
