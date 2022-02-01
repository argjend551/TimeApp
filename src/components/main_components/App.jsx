import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "../../pages/Home";
import store from "../../js/localStore";
import Header from "./Header";
import MyTimezones from "../../pages/MyTimezones";
import DetailedCityPage from "../../pages/DetailedCityPage";
import Footer from "./Footer";

function App() {
  const [cities, setCities] = useState([]);

  useEffect(async () => {
    setCities(await (await fetch("/citiesList.json")).json());
  }, []);

  store.list = store.list || [];
  const [favoriteCities, setfavoriteCities] = useState(store.list);

  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <Home {...{ cities, favoriteCities, setfavoriteCities }} />
            }
          />
          <Route path="/MyTimezones" element={<MyTimezones />} />
          <Route
            path="/:cityview"
            element={<DetailedCityPage {...{ cities, favoriteCities }} />}
          />
          <Route
            path="/*"
            element={
              <Home {...{ cities, favoriteCities, setfavoriteCities }} />
            }
          />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </BrowserRouter>
  );
}

export default App;
