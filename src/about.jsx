import React from "react";

function AboutMe() {
  return (
    <>
      <div class="rgb(36,36,36)">
        <div class="container mx-auto py-8">
          <div class="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
            <div class="col-span-4 sm:col-span-3">
              <div class="bg-green-600 bg-opacity-50 shadow rounded-lg p-6">
                <div class="flex flex-col items-center">
                  <img
                    src="david3.jpg"
                    class="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0 top-0"
                  ></img>
                  <h1 class="text-xl text-white font-bold">David Martin</h1>
                  <p class="text-white">Junior Developer</p>
                  <div class="mt-6 flex flex-wrap gap-4 justify-center">
                    <a
                      href="#"
                      class="g-gray-300 hover:bg-gray-400 text-white  py-2 px-4 rounded"
                    >
                      Resume
                    </a>
                  </div>
                </div>
                <hr class="my-6 border-t border-gray-800" />
                <div class="flex flex-col">
                  <span class="text-white uppercase font-bold tracking-wider mb-2">
                    Technical Skills
                  </span>
                  <ul class="text-white">
                    <li class="mb-2">Java</li>
                    <li class="mb-2">Python</li>
                    <li class="mb-2">Node</li>
                    <li class="mb-2">React</li>
                    <li class="mb-2">Flask</li>
                    <li class="mb-2">SQL</li>
                    <li class="mb-2">HTML/CSS</li>
                    <li class="mb-2">Javascript</li>
                    

                    <li></li>
                  </ul>
                </div>
              </div>
            </div>
            <div class=" bg-green-600 bg-opacity-50 col-span-4 sm:col-span-9">
              <div class="bg-g shadow rounded-lg p-6">
                <h2 class=" text-white text-xl font-bold mb-4">About Me</h2>
                <p class="text-white">


Welcome to my website! My name is David Martin, and I am a Computer Science student at Brock University. I began my programming journey at the age of 18 during my final year of high school. Since then, I’ve been passionate about exploring the vast and exciting world of Computer Science while honing my practical coding skills. Below, you’ll find a selection of projects I’ve worked on throughout the years.
                </p>

                <h2 class=" text-white text-xl font-bold mt-6 mb-4">
                  Interests
                </h2>

                <div class="mb-6">
                  <div class="flex justify-between">
                    <span class="text-white-600 font-bold">Web Development</span>
                    <p>
                     
                    </p>
                  </div>
                  <p class="mt-2 text-white"></p>
                </div>
                <div class="mb-6">
                  <div class="flex justify-between">
                    <span class="text-white-600 font-bold">NLP</span>
                  
                      
                  </div>
                  <p class="mt-2 text-white"></p>
                </div>
                
                <div class="mb-6">
                  <div class="flex justify-between">
                    <span class="text-white-600 font-bold">Computer Networking</span>
                    <p>
                      
                    </p>
                  </div>
                  <p class="mt-2 text-white"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
