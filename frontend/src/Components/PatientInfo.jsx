import React from 'react';
import './PatientInfo.css';
import { Link } from 'react-router-dom';

export const PatientInfo = () => {
    return (
        <div>
            <div className="sidenav">
                <img id='logo-small' src={require('../static/images/logo-small.png')} />
                <div id='mid-nav'>
                    <img id='home' src={require('../static/images/home.jpg')} />
                    <img id='group' src={require('../static/images/group.png')} />
                    <Link to='/Chat'>
                        <img id='chat' src={require('../static/images/chat.jpg')} />
                    </Link>
                    <img id='calendar' src={require('../static/images/calendar.png')} />
                </div>
                <img id='settings' src={require('../static/images/settings.png')} />
            </div>
            <div className="body">
                <div className="title">
                    <div className="text">
                        <span id='greet'>  Good Morning, <span id='name'> Dr. Mishra</span> </span>
                        <span id='small-text'>Only a life lived in the service to others is worth living</span>
                    </div>
                </div>
            </div>

            <div className="box">
                <div className="box1">
                    <h1>Ravi Gupta</h1>
                    <button>Message</button>
                    <button>Call</button>
                    <div className="inner-left-box">
                        <button>Patient Info</button>
                        <button>Labs</button>
                        <button>Prescriptions</button>
                    </div>
                </div>
                
                <div className="general-info">
                    <h1>General Information</h1>
                    <div>
                        <p>Date of Birth</p>
                        <span>4th July 1990</span>
                    </div>
                    <div>
                        <p>Status</p>
                        <span>Hospitalized</span>
                    </div>
                    <div>
                        <p>Sex</p>
                        <span>Male</span>
                    </div>
                    <div>
                        <p>Nationality</p>
                        <span>Indian</span>
                    </div>
                    <div>
                        <p>Preferred Language</p>
                        <span>Hindi</span>
                    </div>
                </div>
                <div className="medical-history">
                    <h1>Medical History</h1>
                    <div className="slider">

                    </div>
                    <div>
                        <p>Current Illness:</p>
                        <span>Mild Fever</span>
                    </div>
                    <div>
                        <p>Healthcare Preferences:</p>
                        <span>Allopathy</span>
                    </div>
                </div>
            </div>
        </div>
    )
}


