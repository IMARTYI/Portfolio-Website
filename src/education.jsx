import React, { useState } from "react";
import { FaCode, FaProjectDiagram, FaChevronDown, FaChevronUp } from "react-icons/fa";
import brockPhoto from "./assets/brock.png";

function Education() {
  const courses = [
    {
      courseName: "COSC 2P03",
      description: "Data Structures: Explored linked lists, trees, graphs, and their applications.",
    },
    {
      courseName: "COSC 2P12",
      description: "Algorithms: Studied sorting, searching, and optimization techniques.",
    },
    {
      courseName: "COSC 3P94",
      description: "Artificial Intelligence: Covered foundational AI concepts and their practical applications.",
    },
    {
      courseName: "COSC 4P14",
      description: "Computer Networking: Focused on networking protocols and distributed systems.",
    },
    {
      courseName: "COSC 4P84",
      description: "Machine Learning: Explored advanced ML algorithms and fine-tuning techniques.",
    },
  ];

  // State to track visibility of each section and course descriptions
  const [showContent, setShowContent] = useState({
    courses: false,
    projects: false,
  });

  const [visibleDescriptions, setVisibleDescriptions] = useState({});

  // Toggle visibility of a section
  const toggleSection = (section) => {
    setShowContent((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  // Toggle visibility of a course description
  const toggleDescription = (index) => {
    setVisibleDescriptions((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <div className="flex flex-col items-center justify-center w-full container px-4">
      <div className="w-full">
        <div className="bg-green-800 shadow-xl border border-gray-300 rounded-lg hover:border-green-400 hover:shadow-2xl transition duration-300">
          <div className="p-6">
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
              <div className="text-white font-semibold flex items-center">
                <FaCode className="text-white mr-2" />
                Relevant Course Material
              </div>
            </div>

            {/* Courses Content */}
            <div className="transition-all duration-500 ease-in-out overflow-hidden">
              <ul className="list-none mt-2 text-white space-y-2">
                {courses.map((course, index) => (
                  <li key={index}>
                    <div className="flex flex-col">
                      <button
                        onClick={() => toggleDescription(index)}
                        className="bg-green-700 text-white px-4 py-2 rounded-lg flex items-center justify-between hover:bg-green-500 transition duration-200"
                      >
                        {course.courseName}
                        {visibleDescriptions[index] ? (
                          <FaChevronUp className="ml-2" />
                        ) : (
                          <FaChevronDown className="ml-2" />
                        )}
                      </button>
                      {visibleDescriptions[index] && (
                        <p className="mt-2 text-sm text-gray-200 bg-green-600 rounded-lg p-4">
                          {course.description}
                        </p>
                      )}
                    </div>
                  </li>
                ))}
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
