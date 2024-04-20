import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import Navbar from "@/layouts/Navbar";
import Footer from "@/layouts/Footer";

export default function App() {
  return (
    <>
      <HashRouter>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </HashRouter>
    </>
  );
}
