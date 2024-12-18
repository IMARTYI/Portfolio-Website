import React from "react";


function ContactPage(){

    return(
        
        <>
    
<div className="flex items-center justify-center min-h-fit mt-20">
    
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />

    <div class=" w-full max-w-sm p-4 bg-blue-600 bg-opacity-50  border border-gray-200 rounded-lg shadow sm:p-6  dark:border-gray-700">

        <h5 class="mb-3 text-base font-semibold text-gray-900 md:text-xl dark:text-white bg-opacity-50">
            Find me on            
        </h5>

        <>
        <ul class="my-4 space-y-3 ">
            <li>
                <a href="https://github.com/IMARTYI" class="flex items-center p-3 text-base font-bold  rounded-lg   hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white bg-white">

                    <span class="flex-1 ml-3 whitespace-nowrap ">Git Hub</span>
                </a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/david-martin-a65351243/" class="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-blue-60  hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                    <span class="flex-1 ml-3 whitespace-nowrap">LinkedIn</span>
                </a>
            </li>


            <li>

            <span class="flex-1 ml-3 whitespace-nowrap" className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-blue-60  hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">Email Me</span>

            </li>
            
        </ul>
        
        </>
        
        <div>
          
        </div>
    </div>

    </div>
    
    </>
    )
}
export default ContactPage