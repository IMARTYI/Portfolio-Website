import React, { useState } from "react";
import { FaCode, FaProjectDiagram } from "react-icons/fa";
import brockPhoto from "./assets/brock.png";

function Education() {
  // State to track visibility of each section
  const [showContent, setShowContent] = useState({
    courses: false,
    projects: false,
  });

  // Toggle visibility of a section
  const toggleSection = (section) => {
    setShowContent((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <div className="flex flex-col items-center justify-center m-4 w-full">
      <div className="w-full md:w-9/12">
        <div className="bg-green-600 shadow-xl border border-gray-300 rounded-lg hover:border-green-400 hover:shadow-2xl transition duration-300 bg-opacity-50">
          <div className="p-6">
            {/* Degree Section (Always Visible) */}
            <div className="flex flex-row justify-between items-center">
              <h5 className="md:text-xl font-serif text-white">
                Bachelor of Science in Computer Science (Honours)
              </h5>
              <small className="text-gray-200">Sept 2020 - July 2025</small>
            </div>
            <div className="flex flex-col space-y-2 mt-4">
              <h6 className="text-lg font-serif text-white">Brock University</h6>
              <div>
                <img
                  alt="Brock University"
                  src={brockPhoto}
                  className="rounded-md h-20 w-20"
                />
              </div>
            </div>

            {/* Courses Header */}
            <div className="py-2">
              <button
                className="text-white font-semibold flex items-center hover:text-green-200 transition duration-200"
                onClick={() => toggleSection("courses")}
              >
                <FaCode className="text-white mr-2" />
                Relevant Course Material
              </button>
            </div>

            {/* Courses Content */}
            <div
              className={`transition-all duration-500 ease-in-out overflow-hidden ${
                showContent.courses ? "max-h-screen" : "max-h-0"
              }`}
            >
              <ul className="list-disc list-inside mt-2 text-white">
                <li>
                  Data Structures & Algorithms, Computer Architecture, Computer
                  Networking, Mobile Computing, Internet Technologies, Natural
                  Language Processing, Machine Learning
                </li>
              </ul>
            </div>

            {/* Projects Header */}
            <div className="py-2">
              <button
                className="text-gray-100 font-semibold flex items-center hover:text-green-200 transition duration-200"
                onClick={() => toggleSection("projects")}
              >
                <FaProjectDiagram className="text-gray-100 mr-2" />
                Notable Projects
              </button>
            </div>

            {/* Projects Content */}
            <div
              className={`transition-all duration-500 ease-in-out overflow-hidden ${
                showContent.projects ? "max-h-screen" : "max-h-0"
              }`}
            >
              <ul className="list-disc list-inside mt-2 text-gray-100">
                <li>
                  Detoxifying ChatGPT via Prompt Engineering: Leveraged advanced
                  techniques to filter harmful or inappropriate outputs
                  utilizing the safe edit dataset and prompt engineering
                  techniques.
                </li>
                <li>
                  Genetic Algorithm to decrypt text. Employing algorithms such
                  as tournament selection, crossover methods, mutation, and
                  elitism. Regularly converged on 93% accuracy.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
