import './App.css';
import { Questionare1 } from './components/Questionare1';
import { Questionare2 } from './components/Questionare2';
import { useState } from 'react';
import { MainLanding } from "./components/MainLanding";
import { Choose } from './components/Choose'
import { DoctorLogin } from './components/DoctorLogin';
import { Chat } from './components/Chat';
import { Route, Routes } from "react-router-dom";
import { PatientLogin } from "./components/PatientLogin";
import {PatientRegister} from "./components/PatientRegister";
import {DoctorLanding} from "./components/DoctorLanding";
import {PatientLanding} from "./components/PatientLanding";

function App() {

  const [LoginUser, setLoginUser] = useState({})


  const email = "abhi@gmail.com"

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<MainLanding />} />
        <Route exact path="/choose" element={<Choose />} />
        <Route exact path="/DoctorLogin" element={<DoctorLogin setLoginUser={setLoginUser} />} />
        <Route exact path="/questionare1" element={<Questionare1 />} />
        <Route exact path="/PatientLogin" element={<PatientLogin setLoginUser={setLoginUser} />} />
        <Route exact path="/PatientRegister" element={<PatientRegister />} />
        <Route exact path="/questionare2" element={<Questionare2 />} />
        <Route exact path="/chat" element={<Chat username={email} />} />
        <Route exact path="/PatientLanding" element={<PatientLanding />} />
        <Route exact path="/DoctorLanding" element={<DoctorLanding />} />
        <Route exact path="/PatientLanding" element={<PatientLanding />} />
      </Routes>
    </div>
  );
}

export default App;
