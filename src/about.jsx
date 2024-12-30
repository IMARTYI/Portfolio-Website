import React from "react";

function AboutMe() {
  return (
    <div className="">
      <div className="container mx-auto py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Profile Section */}
          <div className="col-span-1 md:col-span-1 bg-green-600 bg-opacity-50 shadow-lg rounded-lg p-6 border-white border ">
            <div className="flex flex-col items-center">
              <img
                src="david3.jpg"
                alt="David Martin"
                className="w-32 h-32 bg-gray-300 rounded-full mb-4"
              />
              <h1 className="text-xl text-white font-bold">David Martin</h1>
              <h2 className="text-white text-sm font-medium mt-1">
                Junior Developer
              </h2>
              <button className="mt-4 bg-white text-green-600 font-semibold py-2 px-4 rounded-lg hover:bg-gray-200">
                Resume
              </button>
            </div>
            <hr className="my-6 border-t border-gray-800" />
            <div>
              <h3 className="text-white uppercase font-bold tracking-wider mb-2">
                Technical Skills
              </h3>
              <ul className="text-white space-y-2">
                <li>Java</li>
                <li>Python</li>
                <li>Node</li>
                <li>React</li>
                <li>Flask</li>
                <li>SQL</li>
                <li>HTML/CSS</li>
                <li>JavaScript</li>
              </ul>
            </div>
          </div>

          {/* About Me Section */}
          <div className="col-span-1 md:col-span-3 bg-green-600 bg-opacity-50 shadow-lg rounded-lg p-6 border-white border hover:border-green-600">
            <h2 className="text-white text-xl font-bold mb-4">About Me</h2>
            <p className="text-white">
              Welcome to my website! My name is David Martin, and I am a
              Computer Science student at Brock University. I began my
              programming journey at the age of 18 during my final year of high
              school. Since then, I’ve been passionate about exploring the vast
              and exciting world of Computer Science while honing my practical
              coding skills. Below, you’ll find my interests and the projects I
              have completed or am currently working on. Enjoy your stay!
            </p>

            <h2 className="text-white text-xl font-bold mt-6 mb-4">Interests</h2>

            {/* Interest - Web Development */}
            <div className="mb-6">
              <h3 className="text-white font-bold">Web Development</h3>
              <p className="text-white mt-2">
                My journey in web development began with creating a simple
                website using just HTML. From there, I explored CSS, JavaScript,
                and modern frameworks like React and Tailwind CSS to build
                dynamic and visually appealing interfaces. I’ve also worked on
                backend technologies like Flask and Express.js to create robust
                web applications. I’m passionate about staying updated with
                cutting-edge tools in this ever-evolving field.
              </p>
            </div>

            {/* Interest - NLP */}
            <div className="mb-6">
              <button>
          
              <h3 className="text-white font-bold">
                Natural Language Processing (NLP)
              </h3>
              </button>
              <p className="text-white mt-2">
                NLP fascinates me due to its potential in bridging the gap
                between humans and machines. I’ve worked on projects involving
                sentiment analysis, text classification, and fine-tuning
                transformer models like BERT to perform emotion recognition and
                irony detection. Exploring AI’s ability to process and
                understand language continues to drive my curiosity.
              </p>
            </div>

            {/* Interest - Computer Networking */}
            <div className="mb-6">
              <h3 className="text-white font-bold">Computer Networking</h3>
              <p className="text-white mt-2">
                With a strong foundation in networking from courses like 4P14, I
                am intrigued by how interconnected systems communicate
                efficiently and securely. I’ve explored protocols, socket
                programming, and network troubleshooting, which have deepened my
                understanding of this domain.
              </p>
            </div>

            {/* Future Goals Section */}
            <h2 className="text-white text-xl font-bold mt-6 mb-4">
              Future Goals
            </h2>
            <div className="mb-6">
              <h3 className="text-white font-bold">
                Skateboarding Trick Recognition App
              </h3>
              <p className="text-white mt-2">
                One of my main goals is to build an AI-powered skateboarding
                trick recognition app. This app, called <span
                className="italic">Skeptic</span>, will allow users to upload
                videos of their tricks, which will then be evaluated using
                computer vision techniques. Friends can provide feedback on
                whether the trick was successfully landed, and points will be
                awarded for successful tricks. This app combines my passion for
                skateboarding and my love for programming, showcasing how
                technology can enhance sports and community engagement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
