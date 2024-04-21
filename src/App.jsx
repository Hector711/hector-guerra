import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import Navbar from "./Sections/Navbar.jsx";
import Footer from "./Sections/Footer";

export default function App() {
  return (
    <>
      <HashRouter>
        <Navbar />
        <main className="animate-fade-in-up">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </HashRouter>
    </>
  );
}

