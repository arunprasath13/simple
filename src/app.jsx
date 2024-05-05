import { useState } from "preact/hooks";
import preactLogo from "./assets/preact.svg";
import viteLogo from "/vite.svg";
import "./app.css";
import Signup from "./pages/Signup";
import dummyImg from "./assets/images/img.png";
import logo from "./assets/images/logo.jpg";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Login from "./pages/Login";
import Forgotpassword from "./pages/Forgotpassword";
export function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Signup img={dummyImg} logo={logo} />} />
          <Route path="/login" element={<Login img={dummyImg} logo={logo} />} />
          <Route path="/forgotpassword" element={<Forgotpassword img={dummyImg} logo={logo} />} />
        </Routes>
      </Router>
    </>
  );
}
