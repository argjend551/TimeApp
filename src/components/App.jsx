import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Header from "./Header";
import Favorites from "../pages/Favorites";
import Footer from "./Footer";
import ReadCityList from "./ReadCityList";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
      <ReadCityList />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
