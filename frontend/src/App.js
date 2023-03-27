import './App.css';
import { Questionare1 } from './components/Questionare1';
import { Questionare2 } from './components/Questionare2';

import {MainLanding} from "./components/MainLanding";
import {Choose} from './components/Choose'
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<MainLanding />} />
        <Route exact path="/choose" element={<Choose />} />
        <Route exact path="/questionare1" element={<Questionare1 />} />
        <Route exact path="/questionare2" element={<Questionare2 />} />
      </Routes>
    </div>
  );
}

export default App;
