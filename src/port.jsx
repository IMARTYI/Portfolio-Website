import React from "react";
import fullstackImage from "./assets/fullstack.png";
import FTPImage from "./assets/FTP.png";
import SkateImage from "./assets/skate.png"
import translateImage from "./assets/translate.png"
import currencyImage from "./assets/currency.png"


function Pastprojects() {
  const projects = [
    {
      title: "Full Stack Web Application",
      description: "This simple Fullstack application was built using modern tools and technologies.",
      image: fullstackImage,
      badges: ["Python", "HTML/CSS", "JavaScript"],
      links: {
        email: "mailto:?subject=Hugo%20Profile%20Template&body=Check%20it%20out:%20https%3a%2f%2fhugo-profile.netlify.app%2fblog%2fmarkdown-syntax",
        github: "https://github.com/gurusabarish/hugo-profile",
        twitter: "https://twitter.com/intent/tweet?text=Check+it+out:&url=https%3A%2F%2Fgithub.com%2Fgurusabarish%2Fhugo-profile",
      },
    },
    {
      title: "FTP Server",
      description: "A Client-Server architecture built for efficient file transfers and network management using flask.",
      image: FTPImage,
      badges: ["Python", "Flask", "Open Telemetry"],
      links: {
        email: "mailto:?subject=FTP%20Server&body=Check%20it%20out:%20https%3a%2f%2fexample.com",
        github: "https://github.com/example/ftp-server",
        twitter: "https://twitter.com/intent/tweet?text=Check+it+out:&url=https%3A%2F%2Fgithub.com%2Fexample%2Fftp-server",
      },
    },

    {
      title: "Skateboard Trick Recognition App",
      description: " An in progress app that harnesses the capabilites of Media Pipe's computer vision and Pytorch's neural network to correctly label skateboarding tricks.",
      image: SkateImage,
      badges: ["Python", "Open CV", "Media Pipe","Pytorch"],
      links: {
        email: "mailto:?subject=FTP%20Server&body=Check%20it%20out:%20https%3a%2f%2fexample.com",
        github: "https://github.com/example/ftp-server",
        twitter: "https://twitter.com/intent/tweet?text=Check+it+out:&url=https%3A%2F%2Fgithub.com%2Fexample%2Fftp-server",
      },
    },

    {
      title: "Talk2Me Translation app",
      description: "An application developed for Android utilizing Google Translate's API for real time accurate translations",
      image: translateImage,
      badges: ["Java","XML","SQLite","Google Translate API"],
      links: {
        email: "mailto:?subject=FTP%20Server&body=Check%20it%20out:%20https%3a%2f%2fexample.com",
        github: "https://github.com/example/ftp-server",
        twitter: "https://twitter.com/intent/tweet?text=Check+it+out:&url=https%3A%2F%2Fgithub.com%2Fexample%2Fftp-server",
      },
    },


    {
      title: "Currency Exchange",
      description: "A web application utilizing an API to perform real-time currency converions",
      image: currencyImage,
      badges: ["HTML","CSS","Javascript"],
      links: {
        email: "mailto:?subject=FTP%20Server&body=Check%20it%20out:%20https%3a%2f%2fexample.com",
        github: "https://github.com/example/ftp-server",
        twitter: "https://twitter.com/intent/tweet?text=Check+it+out:&url=https%3A%2F%2Fgithub.com%2Fexample%2Fftp-server",
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
                    className="badge bg-gray-600 text-white px-2 py-1 rounded text-sm"
                  >
                    {badge}
                  </span>
                ))}
              </div>
              <div className="flex space-x-3 mt-2">
                <a
                  href={project.links.email}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-green-500"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"></path>
                  </svg>
                </a>
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
                <a
                  href={project.links.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-green-500"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.798-2.423-15.777-2.423-23.756 0-57.529 46.73-104.963 104.963-104.963 30.249 0 57.468 12.753 76.546 33.194 23.44-4.548 45.568-13.234 65.266-25.196-7.797 24.527-24.48 45.221-46.132 58.576 21.133-2.408 41.876-8.448 60.743-16.56-14.162 20.647-32.016 38.882-52.517 56.557z"></path>
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
