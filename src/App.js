import React from "react";
<<<<<<< Updated upstream
import './App.css';
import "tailwindcss/tailwind.css";
<<<<<<< Updated upstream
import Register from "./Pages/Register.js";
import FetchDetails from "./Pages/FetchDetails";
<<<<<<< HEAD
=======
>>>>>>> Stashed changes
=======
import FetchDisplay from "./Pages/FetchDisplay";

>>>>>>> e795428c70da02083be8470092c269d5c77cc7f7
=======
//import './App.css';
import "tailwindcss/tailwind.css";
>>>>>>> Stashed changes
import {
  Routes,
  Route,
  BrowserRouter as Router,
  Navigate,
} from "react-router-dom";

import DashBoard from "./Pages/DashBoard.js";
<<<<<<< Updated upstream
import LocationDetails from "./Pages/LocationDetails.js";
import PenaltiesDisplay from "./Pages/PenaltiesDisplay.js";
=======

>>>>>>> Stashed changes
const App=()=> {
  return (
    <Router>
    <Routes>
<<<<<<< Updated upstream
<<<<<<< HEAD
     <Route
            path="/dashboard" element={<DashBoard />} />
<<<<<<< Updated upstream
          <Route path="/register" element={<Register />} />

<Route path="/fetchdetails" element={<FetchDetails />} />
=======
         
>>>>>>> Stashed changes
            </Routes>
            
=======
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/register" element={<Register />} />
          <Route path="/fetchdisplay" element={<FetchDisplay />} />
          <Route path="/fetchdetails" element={<FetchDetails />} />
          <Route path="/penaltiesdisplay" element={<PenaltiesDisplay/>} />
          <Route path="/locationDetails" element={<LocationDetails/>} />
      </Routes>
          
>>>>>>> e795428c70da02083be8470092c269d5c77cc7f7
=======
     <Route
            path="/dashboard" element={<DashBoard />} />
         
            </Routes>
            
>>>>>>> Stashed changes
    </Router>
  );
}

export default App;