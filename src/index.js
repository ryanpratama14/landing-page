import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Instagram from "./components/Instagram";
import CaseMusicalSchool from "./pages/subpages/CaseMusicalSchool";

export default function Routing() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="/case-musical-school" element={<CaseMusicalSchool />} />
        <Route path="*" element={<App />} />
      </Routes>
      <Footer />
      <Instagram />
    </HashRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>
);
