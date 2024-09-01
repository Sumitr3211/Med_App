import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import InstantConsultation from "./Components/InstantConsultationBooking/InstantConsultation";
import LandingPage from "./Components/Landing_Page/Landing_Page";
import SignUp from "./Components/Sign Up/Sign_Up";
import Login from "./Components/Login/Login";
import Navbar from "./Components/Navbar/Navbar";
import BookingConsultation from "./Components/BookingConsultation";
import Notification from "./Components/Notification/Notification";
import GiveReviews from "./Components/ReviewForm/ReviewForm";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Notification>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/givereview" element={<GiveReviews />} />
            <Route path="/instant-consultation" element={<InstantConsultation />} />
            <Route path="/booking-consultation" element={<BookingConsultation />} />
           
          </Routes>
        </Notification>
      </BrowserRouter>
    </div>
  );
}

export default App;
