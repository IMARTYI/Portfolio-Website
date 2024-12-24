import React from "react";
import { Swiper,SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper/modules";
import "swiper/css"
import  "swiper/css/pagination"
import fullstackImage from './assets/fullstack.jpg';

function Pastprojects(){  

    return(
      <>
      <div className="flex w-full  items-center h-full">

        <Swiper
        slidesPerView={3}
        spaceBetween={2}
        pagination={{
          clickable: true,

        }}
        >

          <SwiperSlide className=" flex flex-col font-bold font-serif text-white">
          <div>
            <img className="" src={fullstackImage} alt="a Picture" />
          </div>
          <div>
          Full Stack Web Application
          </div>
            </SwiperSlide>
          <SwiperSlide className="font-bold font-serif text-white">
            Detoxifying GPT via Prompt Engineering
            </SwiperSlide>
          <SwiperSlide className="font-bold font-serif text-white">FTP Server</SwiperSlide>``
          <SwiperSlide className="font-bold font-serif text-white">Computer Vision Skateboarding Trick Classifier</SwiperSlide>
          <SwiperSlide className="font-bold font-serif text-white">Text Decryption via Genetic Algorithim</SwiperSlide>
          <SwiperSlide className="font-bold font-serif text-white">Snake Game</SwiperSlide>
          <SwiperSlide className="font-bold font-serif text-white">Andriod Language Translation App</SwiperSlide>
          <SwiperSlide className="font-bold font-serif text-white">Chat bot Page via Ollama</SwiperSlide>



        </Swiper>
        
      </div>
      
      </>    
    
    )
}
export default Pastprojects