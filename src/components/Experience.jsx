import React from "react";
import { motion } from "framer-motion";
import IHPImage from "../assets/IHP.png";
import VertmixImage from "../assets/vertmix-logo.svg";

const experiences = [
  {
    company: "Interact Health Pro",
    location: "Toronto, ON",
    role: "Full-Stack Mobile Developer Intern",
    period: "Feb 2025 – Jun 2025",
    image: IHPImage, 
    points: [
      "Directly involved with architecture design, developing a MERN stack-based application employing React-Native while adopting the MVC design pattern.",
      "Designed and implemented database using MongoDB with efficient schema design, reducing API calls and lowering latency by 30%.",
      "Configured and integrated authentication with Firebase, enhancing security and reliability.",
      "Collaborated with the dev team using Jira for workflow monitoring and task assignment.",
    ],
  },
  {
    company: "Vertmix",
    location: "Waterloo, ON",
    role: "Front-End Developer Intern",
    period: "May 2024 – Aug 2024",
    image: VertmixImage, 
    points: [
      "Implemented user interfaces in React, translating wireframes into functional components for 2,500+ users.",
      "Integrated APIs using Axios to dynamically load React components while maintaining performance.",
      "Leveraged TypeScript for scalable, responsive web pages, boosting usability across devices.",
      "Used Git for version control, ensuring organized collaboration and workflow consistency.",
    ],
  },
];

export const Experience = () => {
  return (
    <div className="relative max-w-5xl mx-auto py-16 px-4">
      {/* Vertical line in the middle */}
      <div className="absolute left-1/2 top-0 w-1 bg-green-600 bg-opacity-50 h-full transform -translate-x-1/2" />

      <div className="space-y-16">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={`relative flex items-center w-full ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            }`}
          >
            {/* Timeline dot */}
            <div className="absolute left-1/2 w-6 h-6 bg-green-600 rounded-full border-4 border-white transform -translate-x-1/2 z-10 shadow-lg" />

            {/* Card */}
            <div
              className={`w-[45%] p-6 bg-green-600 bg-opacity-50 shadow-xl rounded-2xl border border-gray-100 ${
                index % 2 === 0 ? "mr-auto text-left" : "ml-auto text-left"
              }`}
            >
              {/* Image */}
              {exp.image && (
                <img
                  src={exp.image}
                  alt={exp.company}
                  className="w-96 h-52 object-contain mb-4"
                />
              )}

              <h2 className="text-xl font-semibold text-white">{exp.role}</h2>
              <p className="text-white font-medium">
                {exp.company} • {exp.location}
              </p>
              <p className="text-sm text-white mb-4">{exp.period}</p>
              <ul className="list-disc list-inside space-y-2 text-white">
                {exp.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
