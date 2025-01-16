import React, { useState } from "react";
import { FaCode, FaProjectDiagram, FaChevronDown, FaChevronUp, FaLaptopCode, FaNetworkWired, FaComments } from "react-icons/fa";
import brockPhoto from "./assets/brock.png";

function Education() {
  const courses = [
    {
      courseName: "COSC 2P03 - Advance Data Structures",
      description: "This course deepened my understanding of complex data structures like trees, graphs, and hash tables, along with advanced techniques in sorting, searching, recursion, and algorithm analysis. I gained hands-on experience implementing and optimizing these structures for various real-world applications.",
      icon: <FaLaptopCode />,
    },
    {
      courseName: "COSC 2P12 - Computer Architecture",
      description: "Focusing on the evolution of digital computers, this course covered the architecture of modern computers, including functional units, control, buses, and memory management. I developed a strong understanding of low-level computer operations and programming in assembly language.",
      icon: <FaCode />,
    },
    {
      courseName: "COSC 3P94 - Human Computer Interaction",
      description: "This course explored the human aspect of computing, teaching me to design user-friendly systems by considering human factors and various interaction paradigms. I applied design methodologies such as GOMS and Task Analysis to optimize the user experience.",
      icon: <FaComments />,
    },
    {
      courseName: "COSC 4P14 - Advanced Computer Networks",
      description: "Through this course, I gained expertise in networking protocols and distributed systems, with a focus on their applications and underlying principles. This course has strengthened my understanding of modern networking technologies.",
      icon: <FaNetworkWired />,
    },
    {
      courseName: "COSC 4P84 - Natural Language Processing",
      description: "I explored the intersection of machine learning and natural language processing, learning advanced algorithms and techniques for processing and understanding human language. This course equipped me with the knowledge to apply these techniques to real-world tasks like sentiment analysis and language modeling.",
      icon: <FaCode />,
    },
    {
      courseName: "COSC 3P95 - Software Testing",
      description: "This course focused on various software development principles beyond programming, such as debugging, testing, and performance evaluation. I learned techniques for ensuring software quality through static and dynamic analysis, regression testing, and defect tracking.",
      icon: <FaCode />,
    },
  ];

  const [showContent, setShowContent] = useState({
    courses: false,
    projects: false,
  });

  const [visibleDescriptions, setVisibleDescriptions] = useState({});

  const toggleSection = (section) => {
    setShowContent((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

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
            <p className="text-white font-serif pt-12">
              Throughout my Bachelor of Science in Computer Science (Honours) at Brock University, I have undertaken a variety of challenging and enriching courses that have shaped my skills and knowledge in both foundational and advanced areas of computer science.
            </p>

            {/* Courses Header */}
            <div className="py-2">
              <div className="text-white font-semibold flex items-center">
                <FaCode className="text-white mr-2" />
                Relevant Course Material
              </div>
            </div>

            {/* Courses Content */}
            <div className="transition-all duration-500 ease-in-out overflow-hidden">
              <ul className="list-none mt-2 text-white space-y-2 font-semibold">
                {courses.map((course, index) => (
                  <li key={index}>
                    <div className="flex flex-col">
                      <button
                        onClick={() => toggleDescription(index)}
                        className="text-left text-white flex items-center justify-between hover:text-green-500 transition duration-200"
                      >
                        <span className="flex items-center space-x-2">
                          {course.icon}
                          <span>{course.courseName}</span>
                        </span>
                        {visibleDescriptions[index] ? (
                          <FaChevronUp className="ml-2" />
                        ) : (
                          <FaChevronDown className="ml-2" />
                        )}
                      </button>
                      {/* Slide-down animation for description */}
                      <div
                        className={`overflow-hidden transition-all duration-500 ease-in-out max-h-0 ${
                          visibleDescriptions[index] ? "max-h-screen" : ""
                        }`}
                      >
                        <p className="mt-2 text-sm text-gray-200 bg-green-600 rounded-lg p-4">
                          {course.description}
                        </p>
                      </div>
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
