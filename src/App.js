import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Quiz from "./components/Quiz";
import FinalScore from "./components/FinalScore";


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/quiz" element={<Quiz />} />
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/finalScore" element={<FinalScore/>} />
      </Routes>
    </Router>
  );
}

export default App;
