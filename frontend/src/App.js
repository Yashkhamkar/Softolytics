import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import ScrollDownButton from "./components/ScrollDownButton";
import Services from "./components/Services";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Services />
      <Contact />
      <ScrollDownButton />
    </div>
  );
}

export default App;
