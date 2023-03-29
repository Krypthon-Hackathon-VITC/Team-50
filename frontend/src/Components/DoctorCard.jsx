import React from 'react';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from "swiper";  
import'./PatientCard.css';
import 'swiper/css'
import "swiper/css/free-mode";

export const DoctorCard = () => {
    const [doctors, setDoctors] = useState([
        { name: 'Dr. Ramesh R.',  speciality: 'Cardiologist',  id: 1 },
        { name: 'Dr. Kamala H.',  speciality: 'Dermatologist',  id: 2 },
        { name: 'Dr. Arpit B.',  speciality: 'Endocrinologist',  id: 3 },
        { name: 'Dr. Sagar C.',  speciality: 'Gastroenterologist',  id: 4 },
        { name: 'Dr. Gregory H.',  speciality: 'Neurologist',  id: 5 },
        { name: 'Dr. Lisa C.',  speciality: 'Oncologist', id: 6 },
        { name: 'Dr. Chase R.',  speciality: 'Pediatrician', id: 7 },
        { name: 'Dr. Ramesh R.',  speciality: 'Psychiatrist',  id: 8 },
        // img: '../static/Docs/1.png', 
        // img: '../static/Docs/2.png', 
        // img: '../static/Docs/3.png', 
        // img: '../static/Docs/4.png', 
        // img: '../static/Docs/5.png', 
        // img: '../static/Docs/6.png', 
        // img: '../static/Docs/7.png', 
        // img: '../static/Docs/1.png', 
    ])
    return (
        <div className='card'>
            
            <Swiper
                freeMode={true}
                grabCursor={true}
                modules={[FreeMode]}
                className="mySwiper"
                slidesPerView={5}   
                spaceBetween={30}
            >
                {doctors.map((doctor) => (
                    <SwiperSlide>
                        {/* <img src={require(doctor.img)} alt="none" /> */}
                        <div className="doctorDetails" key={doctor.id}>
                            <p id='ddo'>{doctor.name}</p>
                            <p id='ddt'>Speciality:{doctor.speciality}</p>
                            <button>Book</button>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}


