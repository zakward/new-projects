import React from "react"
import {Routes, Route} from "react-router-dom"
import './App.css';
import Home from "./components/Home"
import Projects from "./components/Projects"
import Supplies from "./components/Supplies";

function App() {
  return (
    <> 
      <div className = "app-container"> 
        <Routes>
            <Route path = "/" element = {<Home />} />
            <Route path = "/projects" element = {<Projects />} />
            <Route path = "/supplies" element = {<Supplies /> } />
          </Routes>
      </div>
  

      
    </>
  )
}

export default App;
