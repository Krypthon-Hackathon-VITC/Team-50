import React from 'react';
import './Questionare.css';

export const Questionare1 = () => {
  return (
    <>
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
          <div className="top-left"><h1>Basics</h1> </div>
          <div className="top-right"><h1>1/3</h1> </div>
        </div>
        <div className="main-box">
          <div className="main-box-left">
            <label htmlFor="FirstName">First Name</label>
            <input type="text" />
            <label htmlFor="Number">Phone Number</label>
            <input type="number" />
            <label htmlFor="Occupation">Occupation</label>
            <input type="text" />
          </div>
          <div className="main-box-right">
            <label htmlFor="LastName">Last Name</label>
            <input type="text" />
            <label htmlFor="DateofBirth">Date of Birth</label>
            <input type="date" />
            <label htmlFor="BloodGroup">Blood Group</label>
            <input type="text" />
          </div>

        </div>
      </div>
    </>
  )
}


