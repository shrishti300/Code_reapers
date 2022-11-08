import React from "react";

import './App.css';
import "tailwindcss/tailwind.css";

import Register from "./Pages/Register.js";
import FetchDetails from "./Pages/FetchDetails";

import FetchDisplay from "./Pages/FetchDisplay";

//import './App.css';
import "tailwindcss/tailwind.css";
import {
  Routes,
  Route,
  BrowserRouter as Router,
  Navigate,
} from "react-router-dom";

import DashBoard from "./Pages/DashBoard.js";

import LocationDetails from "./Pages/LocationDetails.js";
import PenaltiesDisplay from "./Pages/PenaltiesDisplay.js";
import ChooseDisplay from "./Pages/ChooseDisplay.js";
const App=()=> {
  return (
    <Router>
    <Routes>
     <Route
            path="/dashboard" element={<DashBoard />} />
          <Route path="/register" element={<Register />} />

<Route path="/fetchdetails" element={<FetchDetails />} />

          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/register" element={<Register />} />
          <Route path="/fetchdisplay" element={<FetchDisplay />} />
          <Route path="/fetchdetails" element={<FetchDetails />} />
          <Route path="/choosedisplay" element={<ChooseDisplay />} />
          <Route path="/penaltiesdisplay" element={<PenaltiesDisplay/>} />
          <Route path="/locationDetails" element={<LocationDetails/>} />
      </Routes>

    </Router>
  );
}

export default App;