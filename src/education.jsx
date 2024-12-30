import React from "react";
import brockPhoto from "./assets/brock.png"


function Education(){

    return(
        <>
<div class="flex flex-col items-center justify-center m-4 w-full">
  <div class="w-full md:w-9/12">
    <div
      class="bg-green-600  shadow-xl border border-gray-300 rounded-lg hover:border-green-400 hover:shadow-2xl transition duration-300 bg-opacity-50"
    >
      <div class="p-6">
        <div class="flex flex-row justify-between items-center">  
          <h5 class="md:text-xl font-serif text-white">Bachelor of Science in Computer Science (Honours)</h5>
          <small class="text-gray-200">Sept 2020 - July2025</small>
        </div>

        <div className=" flex flex-col space-y-2">  
        <h6 class="text-lg font-serifs text-white font-serif">
           Brock University
        </h6>
        <div  className=" ">

<img alt="image" src={brockPhoto} className="rounded-md h-20 w-20"/>'
</div>
        </div>
        
        <div class="py-2">
          <p class="text-white font-semibold">
            Relevant Course Material
          </p>
          <ul class="list-disc list-inside mt-2 text-white">
            <li>
              
              Data Structures & Algorithms, Computer Architecture, Computer Networking, Mobile
              Computing, Internet Technologies, Natural Language Processing, Machine Learning
              
            </li>

          </ul>
        </div>
        <div class="py-2">
          <p class="text-gray-100 font-semibold ">Notable projects</p>
          <ul class="list-disc list-inside mt-2 text-gray-100">
          <li> Detoxifying ChatGPT via Prompt Engineering: Leveraged advanced techniques to filter harmful or inappropriate outputs utilizing the safe edit dataset and prompt enginnering techniques.</li>

            <li>
              Genetic Algorithm to decrypt text. Employing Algorithms such as tournament selection, Crossover methods, Mutation and Elieteism. Regularly converged on 93% accuracy. 
            </li>
          </ul>
        </div>
       
      </div>
    </div>
  </div>
</div>


        </>
    )

}
export default Education;