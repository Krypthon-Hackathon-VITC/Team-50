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
        <div className="top2">
          <div className="top-left"><h1>Medical Jargon</h1> </div>
          <div className="top-right"><h1>3/3</h1> </div>
        </div>

        <div className="questions">
          <form >
            <div className="flex">
              <label htmlFor="Communication">Preferred form of Communication</label>
              <input type="text" />
            </div>
            <div className="flex">
              <label htmlFor="Preferences">Healthcare Preferences</label>
              <input type="text" />
            </div>
            <div className="flex">
              <label htmlFor="Considerations">Religious/Cultural Considerations</label>
              <input type="text" />
            </div>
            <div className="flex">
              <label htmlFor="CurrIllness">Current Illness</label>
              <input type="text" />
            </div>
            <div className="flex">
              <label htmlFor="Status">Status</label>
              <input type="text" />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

