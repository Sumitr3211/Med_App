import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

import LandingPage from "./Components/Landing_Page/Landing_Page";
import SignUp from "./Components/Sign Up/Sign_Up";
import Login from "./Components/Login/Login";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<LandingPage />}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/login" element={<Login/>}/>
     
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
