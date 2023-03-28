import React from 'react'
import './DoctorLanding.css'
import { Link } from 'react-router-dom';
import { Name } from "./PatientLogin";
import { useLocation, useNavigate } from "react-router-dom";

export const PatientLanding = () => {
  const location = useLocation();
  return (
   
    <div>
        <div className="sidenav">
                <img id='logo-small'  src={require('../static/images/logo-small.png')} />
                    <div id='mid-nav'>
                        <img id='home'  src={require('../static/images/home.jpg')} />
                        <img id='group'  src={require('../static/images/group.png')} />
                        <img id='micro'  src={require('../static/images/micro.jpg')} />
                        <Link to='/Chat'>
                            <img id='chat'  src={require('../static/images/chat.jpg')} />
                        </Link>
                        <img id='call'  src={require('../static/images/call.jpg')} />
                        <img id='pres'  src={require('../static/images/pres.jpg')} />
                    </div>
                <img id='settings'  src={require('../static/images/settings.png')} />
      </div>
      <div className="body">
        <div className="title">
          <div className="text"> 
            <span id='greet'>  Welcome, <span id='name'>{location.state.id}</span> </span>
            <span>Only a life lived in the service to others is worth living</span>
          </div>
          <div className="icons">
            <span className="sq"><img id='search' src={require('../static/images/search.png')} /></span>
            <span className="sq"><img id='bell' src={require('../static/images/bell.png')} /></span>
            <span className="sq"><img id='person' src={require('../static/images/personLogo.png')} /></span>
          </div>
        </div>
        <div className="profile">
          <div className="sqboxButton">
            <a href='http://localhost:3000/Questionare1'>
              <button><img id='clip' src={require('../static/images/clipboard.png')}/>Take A Quick Diagnostic Quiz</button>
            </a>
          </div>
        </div>
        <div className="recent">
          <h3>Currently Available Specialists</h3>
          <div className="mainboxes">
            <span className="sqbox2">AA</span>
            <span className="sqbox2">BB</span>
            <span className="sqbox2">CC</span>
          </div>
        </div>
        <div className="available">
          <h3>Our Best Specialists</h3>
          <div className="mainboxes2">
            <span className="sqbox3">AAA</span>
            <span className="sqbox3">BBB</span>
            <span className="sqbox3">CCC</span>
          </div>
        </div>
      </div>
    </div>
  )
}




