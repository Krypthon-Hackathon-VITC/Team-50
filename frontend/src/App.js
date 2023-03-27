// import logo from './logo.svg';
import './App.css';
import {MainLanding} from "./components/MainLanding";
import {Choose} from './components/Choose'
import { DoctorLogin }  from './components/DoctorLogin';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<MainLanding />} />
        <Route exact path="/choose" element={<Choose />} />
        <Route exact path="/doctorLogin" element={<DoctorLogin />} />
      </Routes>
    </div>
  );
}

export default App;
