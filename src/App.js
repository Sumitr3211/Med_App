import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import InstantConsultation from "./Components/InstantConsultationBooking/InstantConsultation";
import LandingPage from "./Components/Landing_Page/Landing_Page";
import SignUp from "./Components/Sign Up/Sign_Up";
import Login from "./Components/Login/Login";

import AppointmentFormIC from "./Components/InstantConsultationBooking/AppointmentFormIC/AppointmentFormIC";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<LandingPage />}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/instant-consultation" element={<InstantConsultation/>}/>
      
      <Route path="/appointment" element={<AppointmentFormIC/>}/>
      
     
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
