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
                {patients.map((doctor) => (
                    <SwiperSlide>
                        <div className="doctorDetails" key={doctor.id}>
                            <p>Name:{doctor.name}</p>
                            <p>Speciality:{doctor.speciality}</p>
                            <button>Book</button>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

