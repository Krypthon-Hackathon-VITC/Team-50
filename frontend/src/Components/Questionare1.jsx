import "./Questionare.css";
import axios from "axios";
import React, { useState } from "react";

export const Questionare1 = () => {

  const [data, setData] = useState({
    fullName: "",
    email: "",
    dateOfBirth: "",
    phoneNumber: "",
    occupation: "",
    address: "",
    medicalHistory: "",
    chronicConditions: "",
    allergies: "",
    medications: "",
    familyHistory: "",
    lifestyleFactors: "",
    recentChanges: "",
    preferredCommunication: "",
    healthcarePreferences: "",
    culturalConsiderations: "",
    currentIllness: "",
    status: "",
  });

  function submit(e) {
    e.preventDefault();
    console.log(data.dateOfBirth);
    axios
      .post(url, {
        fullName: data.fullName,
        email: data.email,
        dateOfBirth: data.dateOfBirth,
        occupation: data.occupation,
        address: data.address,
        phoneNumber: data.phoneNumber,
        medicalHistory: data.medicalHistory,
        chronicConditions: data.chronicConditions,
        allergies: data.allergies,
        medications: data.medications,
        familyHistory: data.familyHistory,
        lifestyleFactors: data.lifestyleFactors,
        recentChanges: data.recentChanges,
        preferredCommunication: data.preferredCommunication,
        healthcarePreferences: data.healthcarePreferences,
        culturalConsiderations: data.culturalConsiderations,
        currentIllness: data.currentIllness,
        status: "not assigned",
      })
      .then((res) => {
        console.log(res.data.error ? res.data.error : res.data);
        // feed.textContent = successMsg
      })
      .catch((err) => {
        console.log(err);
        // feed.textContent = "*" + err.response.data.error
      });
  }

  function handle(e) {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
  }

  const url = "http://localhost:3001/api/patients/patientForm";

  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <img
            id="artemis-logo"
            src={require("../static/images/logo.png")}
            alt="Artemis Logo"
          />
        </div>
        <div className="personLogo">
          <img
            id="person-logo"
            src={require("../static/images/personLogo.png")}
            alt="Person Logo"
          />
        </div>
      </nav>

      <div className="box">
        <div className="top2">
          <div className="top-left">
            <h1>Diagnostic Quiz</h1>{" "}
          </div>
          {/* <div className="top-right"><h1>1/3</h1> </div> */}
        </div>
        <form onSubmit={submit}>
          <div className="flex">
            <label htmlFor="FullName">Full Name</label>
            <input
              type="text"
              value={data.fullName}
              id="fullName"
              onChange={(e) => handle(e)}
            />
          </div>
          <div className="flex">
            <label htmlFor="Number">Phone Number</label>
            <input
              type="phone-number"
              value={data.phoneNumber}
              id="phoneNumber"
              onChange={(e) => handle(e)}
            />
          </div>
          <div className="flex">
            <label htmlFor="Occupation">Occupation</label>
            <input
              type="text"
              value={data.occupation}
              id="occupation"
              onChange={(e) => handle(e)}
            />
          </div>
          <div className="flex">
            <label htmlFor="Email">Email</label>
            <input
              type="text"
              value={data.email}
              id="email"
              onChange={(e) => handle(e)}
            />
          </div>
          <div className="flex">
            <label htmlFor="DateofBirth">Date of Birth</label>
            <input
              type="date"
              value={data.dateOfBirth}
              id="dateOfBirth"
              onChange={(e) => handle(e)}
            />
          </div>
          <div className="flex">
            <label htmlFor="Address">Address</label>
            <input
              type="text-area"
              value={data.address}
              id="address"
              onChange={(e) => handle(e)}
            />
          </div>
          <div className="flex">
            <label htmlFor="MedicalHistory"> Medical History</label>
            <input
              type="text"
              value={data.medicalHistory}
              id="medicalHistory"
              onChange={(e) => handle(e)}
            />
          </div>
          <div className="flex">
            <label htmlFor="ChronicConditions">Chronic Conditions</label>
            <input
              type="text"
              value={data.chronicConditions}
              id="chronicConditions"
              onChange={(e) => handle(e)}
            />
          </div>
          <div className="flex">
            <label htmlFor="Allergies">Allergies</label>
            <input
              type="text"
              value={data.allergies}
              id="allergies"
              onChange={(e) => handle(e)}
            />
          </div>
          <div className="flex">
            <label htmlFor="Medications">Medications</label>
            <input
              type="text"
              value={data.medications}
              id="medications"
              onChange={(e) => handle(e)}
            />
          </div>
          <div className="flex">
            <label htmlFor="FamHistory">Family History</label>
            <input
              type="text"
              value={data.familyHistory}
              id="familyHistory"
              onChange={(e) => handle(e)}
            />
          </div>
          <div className="flex">
            <label htmlFor="LifestyleFactors">Lifestyle Factors</label>
            <input
              type="text"
              value={data.lifestyleFactors}
              id="lifestyleFactors"
              onChange={(e) => handle(e)}
            />
          </div>
          <div className="flex">
            <label htmlFor="Recent Changes">Recent Changes</label>
            <input
              type="text"
              value={data.recentChanges}
              id="recentChanges"
              onChange={(e) => handle(e)}
            />
          </div>
          <div className="flex">
            <label htmlFor="Communication">
              Preferred form of Communication
            </label>
            <input
              type="text"
              value={data.preferredCommunication}
              id="preferredCommunication"
              onChange={(e) => handle(e)}
            />
          </div>
          <div className="flex">
            <label htmlFor="Preferences">Healthcare Preferences</label>
            <input
              type="text"
              value={data.healthcarePreferences}
              id="healthcarePreferences"
              onChange={(e) => handle(e)}
            />
          </div>
          <div className="flex">
            <label htmlFor="Considerations">
              Religious/Cultural Considerations
            </label>
            <input
              type="text"
              value={data.culturalConsiderations}
              id="culturalConsiderations"
              onChange={(e) => handle(e)}
            />
          </div>
          <div className="flex">
            <label htmlFor="CurrIllness">Current Illness</label>
            <select value={data.currentIllness} name="currentIllness" id="currentIllness" onChange={(e) => handle(e)}>
              <option value="Dermatology">Dermatology</option>
              <option value="Cardiology">Cardiology</option>
              <option value="Orthopedic">Orthopedic</option>
              <option value="Psychiatric">Psychiatric</option>
              <option value="Ophthalmology">Ophthalmology</option>
              <option value="Neurology">Neurology</option>
            </select>
          </div>
          <div className="bottomBox">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
};
