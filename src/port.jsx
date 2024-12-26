import React from "react";
import { Swiper,SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper/modules";
import "swiper/css"
import  "swiper/css/pagination"
import fullstackImage from './assets/fullstack.png';
import FTPImage from './assets/FTP.png'

function Pastprojects(){    

    return(
      <>
      <div className="flex w-full  items-center h-full">

        <Swiper
        slidesPerView={3}
        spaceBetween={20}
        pagination={{
          clickable: true,

        }}
        >

<div>

<SwiperSlide className="flex flex-col font-bold text-white transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:translate-y-2 rounded-b-lg">
  <div className="relative overflow-hidden">
    <img className="w-full h-64 object-cover transform transition-transform duration-300 ease-in-out hover:scale-110" src={fullstackImage} alt="Hugo Profile" />
  </div>

  <div className="bg-green-600 bg-opacity-50 text-center p-3">
    <h3 className="text-lg font-semibold">Full Stack Web Application</h3>
  </div>

  <div className="text-white p-3 bg-green-600 bg-opacity-50">
    <p>
      This simple Fullstack application was built using modern tools and technologies.
    </p>
  </div>

  <div className="flex flex-wrap justify-between items-center p-3 bg-green-600 bg-opacity-50">
    <div className="space-x-1">
      <span className="badge bg-gray-600 text-white px-2 py-1 rounded text-sm">Python</span>
      <span className="badge bg-gray-600 text-white px-2 py-1 rounded text-sm">HTML/CSS</span>
      <span className="badge bg-gray-600 text-white px-2 py-1 rounded text-sm">Javascript</span>
    </div>

    <div className="flex space-x-3 mt-2">
      <a href="mailto:?subject=Hugo%20Profile%20Template&body=Check%20it%20out:%20https%3a%2f%2fhugo-profile.netlify.app%2fblog%2fmarkdown-syntax" target="_blank" className="text-white hover:text-green-500">
        <svg className="w-5 h-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"></path></svg>
      </a>

      <a href="https://github.com/gurusabarish/hugo-profile" target="_blank" className="text-white hover:text-green-500">
        <svg className="w-5 h-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>
      </a>

      <a href="https://twitter.com/intent/tweet?text=Check+it+out:&url=https%3A%2F%2Fgithub.com%2Fgurusabarish%2Fhugo-profile" target="_blank" className="text-white hover:text-green-500">
        <svg className="w-5 h-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.798-2.423-15.777-2.423-23.756 0-57.529 46.73-104.963 104.963-104.963 30.249 0 57.468 12.753 76.546 33.194 23.44-4.548 45.568-13.234 65.266-25.196-7.797 24.527-24.48 45.221-46.132 58.576 21.133-2.408 41.876-8.448 60.743-16.56-14.162 20.647-32.016 38.882-52.517 56.557z"></path></svg>
      </a>
    </div>
  </div>
</SwiperSlide>
<SwiperSlide className="flex flex-col font-bold text-white transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:translate-y-2">
  <div className="relative overflow-hidden">
    <img className="w-full h-64 object-cover transform transition-transform duration-300 ease-in-out hover:scale-110" src={FTPImage} alt="Hugo Profile" />
  </div>

  <div className="bg-green-600 bg-opacity-50 text-center p-3">
    <h3 className="text-lg font-semibold">FTP Server</h3>
  </div>

  <div className="text-white p-3 bg-green-600 bg-opacity-50">
    <p>
      A simple Client-Server Achritecture for users to save files onto a server. Monitored peformance with Open Telemetry and visulaization with Jaeger.
    </p>
  </div>

  <div className="flex flex-wrap justify-between items-center p-3 bg-green-600 bg-opacity-50">
    <div className="space-x-1">
      <span className="badge bg-gray-600 text-white px-2 py-1 rounded text-sm">Python</span>
      <span className="badge bg-gray-600 text-white px-2 py-1 rounded text-sm">Flask</span>
      <span className="badge bg-gray-600 text-white px-2 py-1 rounded text-sm">Jeager</span>
     
    </div>

    <div className="flex space-x-3 mt-2">
      <a href="mailto:?subject=Hugo%20Profile%20Template&body=Check%20it%20out:%20https%3a%2f%2fhugo-profile.netlify.app%2fblog%2fmarkdown-syntax" target="_blank" className="text-white hover:text-green-500">
        <svg className="w-5 h-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"></path></svg>
      </a>

      <a href="https://github.com/gurusabarish/hugo-profile" target="_blank" className="text-white hover:text-green-500">
        <svg className="w-5 h-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>
      </a>

      <a href="https://twitter.com/intent/tweet?text=Check+it+out:&url=https%3A%2F%2Fgithub.com%2Fgurusabarish%2Fhugo-profile" target="_blank" className="text-white hover:text-green-500">
        <svg className="w-5 h-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.798-2.423-15.777-2.423-23.756 0-57.529 46.73-104.963 104.963-104.963 30.249 0 57.468 12.753 76.546 33.194 23.44-4.548 45.568-13.234 65.266-25.196-7.797 24.527-24.48 45.221-46.132 58.576 21.133-2.408 41.876-8.448 60.743-16.56-14.162 20.647-32.016 38.882-52.517 56.557z"></path></svg>
      </a>
    </div>
  </div>
</SwiperSlide>
          <SwiperSlide className="font-bold font-serif text-white">Computer Vision Skateboarding Trick Classifier</SwiperSlide>
          <SwiperSlide className="font-bold font-serif text-white">Text Decryption via Genetic Algorithim</SwiperSlide>
          <SwiperSlide className="font-bold font-serif text-white">Snake Game</SwiperSlide>
          <SwiperSlide className="font-bold font-serif text-white">Andriod Language Translation App</SwiperSlide>
          <SwiperSlide className="font-bold font-serif text-white">Chat bot Page via Ollama</SwiperSlide>

        </div>
        </Swiper>
      </div>
      
      
      </>    
    
    )
}
export default Pastprojects