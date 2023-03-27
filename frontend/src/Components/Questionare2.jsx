import React from 'react'

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
         <div className="top">
          <div className="top-left"><h1>Medical Jargon</h1> </div>
          <div className="top-right"><h1>2/3</h1> </div>
        </div>
         <div className="query-box">
            <label htmlFor="MedicalHistory"Medical History></label>
            <input type="text" />
            <label htmlFor="ChronicConditions">Chronic Conditions</label>
            <input type="text" />
            <label htmlFor="Allergies">Allergies</label>
            <input type="text" />
            <label htmlFor="Medications">Medications</label>
            <input type="text" />
            <label htmlFor="FamHistory">Family History</label>
            <input type="text" />
            <label htmlFor="LifestyleFactors">Lifestyle Factors</label>
            <input type="text" />
            <label htmlFor="Recent Changes">Recent Changes</label>
            <input type="text" />
         </div>
         </div>
    </div>
  )
}


