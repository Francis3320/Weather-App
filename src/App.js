import React from "react";
import Weather from "./pages/weather/weather";
import "./App.css";
import Home from "./pages/home/home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";




function App(){

  return (
    <div>
    <Router>
        <Routes>
              <Route path="/" index element={<Home />}>
              </Route>
              <Route path="/weather" element={<Weather />}>
              </Route>
        </Routes>
    </Router>
    </div>
  );
}

export default App;