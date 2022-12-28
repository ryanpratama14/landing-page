import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Telegram from "./components/Telegram";
import CaseMusicalSchool from "./pages/subpages/CaseMusicalSchool";
import CaseRestaurant from "./pages/subpages/CaseRestaurant";
import CasePersonalBrand from "./pages/subpages/CasePersonalBrand";
import CasePropertyAgency from "./pages/subpages/CasePropertyAgency";

export default function Routing() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="/case-musical-school" element={<CaseMusicalSchool />} />
        <Route path="/case-restaurant" element={<CaseRestaurant />} />
        <Route path="/case-personal-brand" element={<CasePersonalBrand />} />
        <Route path="/case-property-agency" element={<CasePropertyAgency />} />
        <Route path="*" element={<App />} />
      </Routes>
      <Footer />
      <Telegram />
    </HashRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>
);
