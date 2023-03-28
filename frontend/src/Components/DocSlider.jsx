import React from 'react';
import {Swiper,SwiperSlide} from 'swiper/react';
import {FreeMode} from "swiper";
import 'swiper/css';
import "swiper/css/free-mode";
import {PatientCard} from "./PatientCard";

export const DocLanding = () => {
  return (
    <div>
         <div className="bottom-container">
            <PatientCard/>
         </div>
    </div>
  )
}


