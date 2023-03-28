import React from 'react';
import './Questionare.css';

export const Questionare3 = () => {
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
        <div className="top-container">
          <div className="head-left">
           Medical Jargon
          </div>
          <div className="head-right">3/3</div>
        </div>

        <div className="questions">
          <form >
            <label htmlFor="Communication">Preferred form of Communication</label>
            <input type="text" />
            <label htmlFor="Preferences">Healthcare Preferences</label>
            <input type="text" />
            <label htmlFor="Considerations">Religious/Cultural Considerations</label>
            <input type="text" />
            <label htmlFor="CurrIllness">Current Illness</label>
            <input type="text" />
            <label htmlFor="Status">Status</label>
            <input type="text" />
          </form>
        </div>
      </div>
    </div>
  )
}

