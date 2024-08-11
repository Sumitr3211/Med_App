import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from "./Navbar/Navbar";
import LandingPage from "./Landing_Page/Landing_Page";
import SignUp from "./Sign Up/Sign_Up";
import Login from "./Login/Login";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
     
      <Routes>
      <Route path="/" element={<LandingPage/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/login" element={<Login/>}/>
     
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
