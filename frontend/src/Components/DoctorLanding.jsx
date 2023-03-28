import React from 'react'
import './DoctorLanding.css'

export const DoctorLanding = () => {
  return (
    <div>
      <div className="sidenav">sidenav</div>
      <div className="body">
        <div className="title">
          <div className="text">Lorem ipsum dolor sit amet consectetur </div>
          <div className="icons">
            <span className="sq">a</span>
            <span className="sq">a</span>
            <span className="sq">a</span>
          </div>
        </div>
        <div className="profile">
          <div className="sqbox">A</div>
          <div className="sqbox">B</div>
          <div className="sqbox">C</div>
          <div className="rec">R</div>
        </div>
        <div className="recent">
          <h3>Recent Patients</h3>
          <div className="mainboxes">
            <span className="sqbox2">AA</span>
            <span className="sqbox2">BB</span>
            <span className="sqbox2">CC</span>
          </div>
        </div>
        <div className="available">
          <h3>Available Patients</h3>
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



