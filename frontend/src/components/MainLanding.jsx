import React from 'react';
import { Link } from "react-router-dom";
import "./MainLanding.css";

export const MainLanding = () => {
    return (
        <div id='page'>

            <div className="artemis">
                <img id='artemis-logo' src={require('../static/images/logo.png')} alt="Artemis Logo" />
            </div>

            <Link id="login-register" to="/choose">Login / Sign Up</Link>

            <div className="box2">
                <div className="text-box">
                    <div className="text">
                        <h3 id="text">   Skip the Hassle ! <br /> Meet your Doctor Online</h3>
                        <div id="small-text"><p>Private Diagnosis + Audio call + Online Prescription</p></div>
                    </div>
                    <Link id="button" to="/PatientLogin"> <b>  Consult Now </b></Link>
                </div>
                <div className="image">
                    <img id="docImg" src={require('../static/images/doc.png')} alt="doctor" />
                </div>

            </div>
            <div className="white-box">
                <div className="top">
                    <div className="top-content">
                        <div className="text-content">
                            <h1 id='head'>25+ Specialities</h1>
                            <p id='consult-text'>Consult with top doctors across specialities</p>
                        </div>
                        <button id='see-all' >See All</button>
                    </div>
                    <div className="options">
                        <div className="doctor2" >
                            <img className='option-image' src={require('../static/images/dermatology.png')} alt="doctor" />
                            <p className='doctor-type'>Dermatology</p>
                        </div>

                        <div className="doctor2" >
                            <img className='option-image' src={require('../static/images/general.png')} alt="doctor" />
                            <p className='doctor-type'>General</p>
                        </div>

                        <div className="doctor2" >
                            <img className='option-image' src={require('../static/images/kidney.png')} alt="doctor" />
                            <p className='doctor-type'>Kidney</p>
                        </div>

                        <div className="doctor2" >
                            <img className='option-image' src={require('../static/images/pedriatic.png')} alt="doctor" />
                            <p className='doctor-type'>Pediatric</p>
                        </div>

                        <div className="doctor2"  >
                            <img className='option-image' src={require('../static/images/psychiatrist.png')} alt="doctor" />
                            <p className='doctor-type'>Psychiatric</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}


