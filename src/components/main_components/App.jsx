import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "../../pages/Home";
import Header from "./Header";
import MyTimezones from "../../pages/MyTimezones";
import DetailedCityPage from "../../pages/DetailedCityPage";
import Footer from "./Footer";

function App() {
  const [cities, setCities] = useState([]);

  useEffect(async () => {
    setCities(await (await fetch("/citiesList.json")).json());
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home {...{ cities }} />} />
          <Route path="/MyTimezones" element={<MyTimezones />} />
          <Route
            path="/:cityview"
            element={<DetailedCityPage {...{ cities }} />}
          />
          <Route path="/*" element={<Home {...{ cities }} />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
