import './App.css';
import { Questionare1 } from './components/Questionare1';
import { MainLanding } from "./components/MainLanding";
import { Choose } from './components/Choose'
import { Chat } from './components/Chat'
import { Route, Routes } from "react-router-dom";

function App() {

  const email = "abhi@gmail.com"

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<MainLanding />} />
        <Route exact path="/choose" element={<Choose />} />
        <Route exact path="/questionare1" element={<Questionare1 />} />
        <Route exact path="/chat" element={<Chat username={email} />} />
      </Routes>
    </div>
  );
}

export default App;
