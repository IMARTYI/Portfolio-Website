import React from "react";


function Education(){

    return(
        <>
<div class="flex flex-col items-center justify-center m-4">
  <div class="w-full md:w-9/12">
    <div
      class="bg-green-600 bg-opacity-50 shadow-xl border border-gray-300 rounded-lg hover:border-green-400 hover:shadow-2xl transition duration-300"
    >
      <div class="p-6">
        <div class="flex flex-row justify-between items-center">
          <h5 class="text-xl font-serif text-white">Bachelor of Science in Computer Science</h5>
          <small class="text-gray-200">2020 - 2020</small>
        </div>
        <a href="https://example.org" target="_blank">
          <h6 class="text-lg font-sarif text-blue-400 hover:text-blue-300 hover:underline mt-1">
           Brock University
          </h6>
        </a>
      
        <div class="py-2">
          <p class="text-gray-100">
            I published two papers in the ACM SIGCHI Conference on Artificial Intelligence.
          </p>
          <ul class="list-disc list-inside mt-2 text-blue-400">
            <li>
              <a href="https://example.com" class="hover:text-blue-300 hover:underline">
                Fast and Accurate Object Detection with a Single Convolutional Neural Network
              </a>
            </li>
            <li class="text-white">Face mask detection using a single convolutional neural network.</li>
          </ul>
        </div>
        <div class="py-2">
          <p class="text-gray-100">Extracurricular Activities</p>
          <ul class="list-disc list-inside mt-2 text-gray-100">
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li>
              Tempora esse, eaque delectus nulla quo doloribus itaque expedita alias natus optio totam maxime nihil
              excepturi velit a animi laborum hic similique.
            </li>
          </ul>
        </div>
        <div class="pt-4">
          <a
            href="https://example.com"
            class="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-400 transition duration-300"
          >
            My academic record
          </a>
        </div>
      </div>
    </div>
  </div>
</div>


        </>
    )

}
export default Education;