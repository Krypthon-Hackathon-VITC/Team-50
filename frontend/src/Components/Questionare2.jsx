import React from 'react'
import { Link } from "react-router-dom";

export const Questionare2 = () => {
  return (
    <div>
      <nav className='navbar'>
        <div className="logo">
          <img id='artemis-logo' src={require('../static/images/logo.png')} alt="Artemis Logo" />
        </div>
        <div className="personLogo">
          <img id='person-logo' src={require('../static/images/personLogo.png')} alt="Person Logo" />
        </div>
      </nav>
      <div className="box">
        <div className="top2">
          <div className="top-left"><h1>Medical Jargon</h1> </div>
          <div className="top-right"><h1>2/3</h1> </div>
        </div>
          <div className="query-box">
            <div className="flex">
              <label htmlFor="MedicalHistory"> Medical History</label>
              <input type="text" />
            </div>
            <div className="flex">
              <label htmlFor="ChronicConditions">Chronic Conditions</label>
              <input type="text" />
            </div>
            <div className="flex">
              <label htmlFor="Allergies">Allergies</label>
              <input type="text" />
            </div>
            <div className="flex">
              <label htmlFor="Medications">Medications</label>
              <input type="text" />
            </div>
            <div className="flex">
              <label htmlFor="FamHistory">Family History</label>
              <input type="text" />
            </div>
            <div className="flex">
              <label htmlFor="LifestyleFactors">Lifestyle Factors</label>
              <input type="text" />
            </div>
            <div className="flex">
              <label htmlFor="Recent Changes">Recent Changes</label>
              <input type="text" />
            </div>
          </div>
          <div className="bottomBox">
            <Link to="http://localhost:3000/questionare3"><button>Next</button></Link>
          </div>
        </div>
    </div>
  )
}


