import React from 'react';
import { Link } from "react-router-dom";
import './Choose.css';

export const Choose = () => {
    return (
        <div>
            <h1 className='displayText'>You are signing in as...</h1>

            <div className="reg-log-container">
                <div className="doc">
                    <Link to="/DoctorLogin"> <img id="doctor" src={require('../static/images/doctor.png')} alt="doctor" /> </Link>
                    <p id='doc-text'>Doctor</p>
                </div>
                <div className="pat">
                    <Link to="/PatientLogin"><img id="patient" src={require('../static/images/patient.png')} alt="patient" /></Link>

                    <p id='pat-text'>Patient</p>
                </div>
            </div>
        </div>
    )
}

