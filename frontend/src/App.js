// import logo from './logo.svg';
import './App.css';
import {MainLanding} from "./components/MainLanding";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<MainLanding />} />
      </Routes>
    </div>
  );
}

export default App;
