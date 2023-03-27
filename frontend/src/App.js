import './App.css';
import { Questionare1 } from './components/Questionare1';
import { useState } from 'react';
import {MainLanding} from "./components/MainLanding";
import {Choose} from './components/Choose'
import { DoctorLogin }  from './components/DoctorLogin';
import { Route, Routes } from "react-router-dom";
import { PatientLogin } from "./components/PatientLogin";
import {Questionare2} from "./components/Questionare2"

function App() {

  const [ setLoginUser] = useState({})

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<MainLanding />} />
        <Route exact path="/choose" element={<Choose />} />
        <Route exact path="/DoctorLogin" element={<DoctorLogin setLoginUser={setLoginUser}/>} />
        <Route exact path="/questionare1" element={<Questionare1 />} />
        <Route exact path="/PatientLogin" element={<PatientLogin setLoginUser={setLoginUser}/>} />
        <Route exact path="/questionare2" element={<Questionare2 />} />
      </Routes>
    </div>
  );
}

export default App;
