import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Header from "./Header";
import MyTimezones from "../pages/MyTimezones";
import DetailedCityPage from "../pages/DetailedCityPage";
import Footer from "./Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/MyTimezones" element={<MyTimezones />} />
          <Route path="/city" element={<DetailedCityPage />} />
          <Route path="/*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
