import React, { useState } from "react";
import {
  FaCode,
  FaProjectDiagram,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import brockPhoto from "../assets/brock.png";

function Education() {
  const courses = [
    {
      courseName: "COSC 2P03 - Advance Data Structures",
      description:
        " This course deepened my understanding of complex data structures like trees, graphs, and hash tables, along with advanced techniques in sorting, searching, recursion, and algorithm analysis. I gained hands-on experience implementing and optimizing these structures for various real-world applications.",
    },
    {
      courseName: "COSC 2P12 - Computer Archectcurie",
      description:
        "Focusing on the evolution of digital computers, this course covered the architecture of modern computers, including functional units, control, buses, and memory management. I developed a strong understanding of low-level computer operations and programming in assembly language.",
    },
    {
      courseName: "COSC 3P94- Human Computer Interaction",
      description:
        "This course explored the human aspect of computing, teaching me to design user-friendly systems by considering human factors and various interaction paradigms. I applied design methodologies such as GOMS and Task Analysis to optimize the user experience.",
    },
    {
      courseName: "COSC 4P14- Advanced Computer Networks",
      description:
        "Through this course, I gained expertise in networking protocols and distributed systems, with a focus on their applications and underlying principles. This course has strengthened my understanding of modern networking technologies.",
    },
    {
      courseName: "COSC 4P84 - Natural Language Processing",
      description:
        "I explored the intersection of machine learning and natural language processing, learning advanced algorithms and techniques for processing and understanding human language. This course equipped me with the knowledge to apply these techniques to real-world tasks like sentiment analysis and language modeling.",
    },
    {
      courseName: "COSC 3P95 - Software Testing",
      description:
        "This course focused on various software development principles beyond programming, such as debugging, testing, and performance evaluation. I learned techniques for ensuring software quality through static and dynamic analysis, regression testing, and defect tracking..",
    },
  ];

  const projects = [
    {
      projectName: "Detoxifying ChatGPT via Prompt Engineering",
      description:
        "Leveraged advanced techniques to filter harmful or inappropriate outputs utilizing the safe edit dataset and prompt engineering techniques.",
    },
    {
      projectName: "Genetic Algorithm to Decrypt Text",
      description:
        "Employing algorithms such as tournament selection, crossover methods, mutation, and elitism. Regularly converged on 93% accuracy.",
    },
  ];

  const [visibleDescriptions, setVisibleDescriptions] = useState({
    courses: {},
    projects: {},
  });

  const toggleDescription = (category, index) => {
    setVisibleDescriptions((prev) => ({
      ...prev,
      [category]: {
        ...prev[category],
        [index]: !prev[category][index],
      },
    }));
  };

  return (
    <div className="flex flex-col items-center justify-center w-full px-4">
      <div className="bg-green-800 border border-gray-300 shadow-xl hover:shadow-2xl hover:border-green-400 transition duration-300 rounded-xl p-6 w-full max-w-4xl">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
          <h5 className="text-xl font-serif text-white">
            Bachelor of Science in Computer Science (Honours)
          </h5>
          <small className="text-gray-200">Sept 2020 - July 2025</small>
        </div>

        <div className="flex items-center space-x-4 mb-6">
          <img
            alt="Brock University"
            src={brockPhoto}
            className="rounded-md h-28 w-28"
          />

          <h1 className=" text-4xl font-serif text-white">Brock University</h1>
        </div>

        <p className="text-white font-semibold mb-6">
          Throughout my Bachelor of Science in Computer Science (Honours) at
          Brock University, I have undertaken a variety of challenging and
          enriching courses that have shaped my skills and knowledge in both
          foundational and advanced areas of computer science.
        </p>

        <Section
          icon={<FaCode className="text-white mr-2" />}
          title="Relevant Course Material"
          items={courses}
          category="courses"
          visibleDescriptions={visibleDescriptions}
          toggleDescription={toggleDescription}
        />

        <Section
          icon={<FaProjectDiagram className="text-white mr-2" />}
          title="Notable Projects"
          items={projects}
          category="projects"
          visibleDescriptions={visibleDescriptions}
          toggleDescription={toggleDescription}
        />
      </div>
    </div>
  );
}

function Section({
  icon,
  title,
  items,
  category,
  visibleDescriptions,
  toggleDescription,
}) {
  return (
    <div className="mb-6">
      <div className="text-white font-semibold flex items-center mb-2">
        {icon}
        {title}
      </div>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index}>
            <div className="flex flex-col">
              <button
                onClick={() => toggleDescription(category, index)}
                className="bg-green-700 bg-opacity-50 text-white px-4 py-2 rounded-lg flex items-center justify-between hover:bg-green-500 transition duration-200"
              >
                {item[category === "courses" ? "courseName" : "projectName"]}
                {visibleDescriptions[category][index] ? (
                  <FaChevronUp className="ml-2 transition-transform" />
                ) : (
                  <FaChevronDown className="ml-2 transition-transform" />
                )}
              </button>
              {visibleDescriptions[category][index] && (
                <p className="mt-2 text-sm text-gray-200 bg-green-600 rounded-lg p-4">
                  {item.description}
                </p>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Education;
