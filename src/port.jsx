import React from "react";
import { Swiper,SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper/modules";
import "swiper/css"
import  "swiper/css/pagination"

function Pastprojects(){  

    return(
      <>
      <div className="flex w-full bg-slate-200 items-center">

        <Swiper
        slidesPerView={3}
        spaceBetween={5}
        pagination={{
          clickable: true,

        }}
        >

          <SwiperSlide className="bg-">Test # 1</SwiperSlide>
          <SwiperSlide>Test # 1</SwiperSlide>
          <SwiperSlide>Test # 1</SwiperSlide>``
          <SwiperSlide>Test # 1</SwiperSlide>
          <SwiperSlide>Test # 1</SwiperSlide>


        </Swiper>
        
      </div>
      
      </>    
    
    )
}



export default Pastprojects