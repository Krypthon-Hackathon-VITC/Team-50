import './App.css';
import { Questionare1 } from './Components/Questionare1';

import {MainLanding} from "./components/MainLanding";
import {Choose} from './components/Choose'
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<MainLanding />} />
        <Route exact path="/choose" element={<Choose />} />
      </Routes>
    </div>
  );
}

export default App;
