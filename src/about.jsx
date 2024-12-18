import React from "react";


function AboutMe (){

    return(
        <>

        <div class="rgb(36,36,36)">
    <div class="container mx-auto py-8">
        <div class="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
            <div class="col-span-4 sm:col-span-3">
                <div class="bg-blue-600 bg-opacity-50 shadow rounded-lg p-6">
                    <div class="flex flex-col items-center">
                        <img src="david3.jpg" class="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0 top-0" >
                        </img>
                        <h1 class="text-xl text-white font-bold">David Martin</h1>
                        <p class="text-white">Junior Developer</p>
                        <div class="mt-6 flex flex-wrap gap-4 justify-center">
                            <a href="#" class="g-gray-300 hover:bg-gray-400 text-black-100 py-2 px-4 rounded">Resume</a>
                        </div>
                    </div>
                    <hr class="my-6 border-t border-gray-800"/>
                    <div class="flex flex-col">
                        <span class="text-white uppercase font-bold tracking-wider mb-2">Skills</span>
                        <ul class="text-white">
                            <li class="mb-2">Java</li>
                            <li class="mb-2">SQL</li>
                            <li class="mb-2">Python</li>
                            <li class="mb-2">HTML/CSS</li>
                            <li class="mb-2">Javascript</li>
                            <li class="mb-2">Figma</li>
                            <li class="mb-2">Flask</li>
                            <li class="mb-2">Linux</li>

                            <li></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class=" bg-blue-600 bg-opacity-50 col-span-4 sm:col-span-9">
                <div class="bg-g shadow rounded-lg p-6">
                    <h2 class=" text-white text-xl font-bold mb-4">About Me</h2>
                    <p class="text-white">I would like to welcome you to my  website. My name is David Martin and I am a Computer Science Student at Brock University. I started my Promgramming journey at the age of 18 during my final senior year of high school. I want to contiue to learn about the vast realm of Computer Science all while developing my practical coding skills. Presented below are a number of projects I have worked on over the years.
                    </p>
                    
                   

                    <h2 class=" text-white text-xl font-bold mt-6 mb-4">Projects
                    </h2>

                    <div class="mb-6">
                        <div class="flex justify-between">
                            <span class="text-white-600 font-bold">Web Developer</span>
                            <p>
                                <span class="text-white mr-2">at ABC Company</span>
                                <span class="text-white-600">2017 - 2019</span>
                            </p>
                        </div>
                        <p class="mt-2 text-white">
                        </p>
                    </div>
                    <div class="mb-6">
                        <div class="flex justify-between">
                            <span class="text-white-600 font-bold">Web Developer</span>
                            <p>
                                <span class="text-white-600 mr-2">at ABC Company</span>
                                <span class="text-white-600">2017 - 2019</span>
                            </p>
                        </div>
                        <p class="mt-2 text-white">
                        </p>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
</div>
</>
)
}


export default AboutMe