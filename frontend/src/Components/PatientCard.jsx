import React from 'react';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from "swiper";
import './PatientCard.css';
import 'swiper/css'
import "swiper/css/free-mode";
export const PatientCard = () => {
    var i = 0;
    const [patients, setPatients] = useState([
        { name: 'Ravi', age: '25', gender: 'Male', diagnosis: 'Fever', id: 1 },
        { name: 'Geet', age: '29', gender: 'Female', diagnosis: 'Cough', id: 2 },
        { name: 'Jhon', age: '18', gender: 'Male', diagnosis: 'Dengue', id: 3 },
        { name: 'Ritik', age: '28', gender: 'Male', diagnosis: 'Skin Infection', id: 4 },
        { name: 'Sheena', age: '39', gender: 'Female', diagnosis: 'Diabetes', id: 5 },
        { name: 'Leena', age: '25', gender: 'Female', diagnosis: 'Artheritis', id: 6 },
        { name: 'Harpreet', age: '40', gender: 'Male', diagnosis: 'Headache', id: 7 },
        { name: 'Raaga', age: '30', gender: 'Female', diagnosis: 'Obesity', id: 8 },
        { name: 'Ishani', age: '35', gender: 'Female', diagnosis: 'High BP', id: 9 },
        { name: 'Ishani', age: '35', gender: 'Female', diagnosis: 'High BP', id: 10 },
        { name: 'Prisha', age: '45', gender: 'Female', diagnosis: 'Sugar', id: 11 },
        { name: 'Manav', age: '48', gender: 'Male', diagnosis: 'Cnacer', id: 12 },
        { name: 'Advait', age: '38', gender: 'Male', diagnosis: 'Asthma', id: 13 },
        { name: 'Jhanvi', age: '34', gender: 'Female', diagnosis: 'Pneumonia', id: 14 },
        { name: 'Akshay', age: '44', gender: 'Male', diagnosis: 'Tuberculosis', id: 15 },
        { name: 'Rahul', age: '24', gender: 'Male', diagnosis: 'Emphysema', id: 16 },
        { name: 'Ayesha Khan', age: '27', gender: 'Female', diagnosis: 'Migraine headaches', id: 17 },
        { name: 'Ethan Kim', age: '19', gender: 'Male', diagnosis: 'Anxiety disorder', id: 18 },
        { name: 'Maya Gupta', age: '42', gender: 'Female', diagnosis: 'Breast cancer', id: 19 },
        { name: 'William Thompson', age: '58', gender: 'Male', diagnosis: 'Coronary artery disease', id: 20 }
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
                {patients.map((patient) => (
                    <SwiperSlide>
                        <div className="patientDetails" key={patient.id}>
                            <p>Name:{patient.name}</p>
                            <p>Age:{patient.age}</p>
                            <p>Gender:{patient.gender}</p>
                            <p>Diagnosis:{patient.diagnosis}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}


