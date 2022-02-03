import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "../../pages/Home";
import store from "../../js/localStore";
import Header from "./Header";
import MyTimezones from "../../pages/MyTimezones";
import DetailedCityPage from "../../pages/DetailedCityPage";
import Footer from "./Footer";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "../../js/themes";
import { useDarkMode } from '../../js/useDarkMode';

const StyledApp = styled.div`
    color : ${props => props.theme.fontColor} 
  `;

function App() {
  const [cities, setCities] = useState([]);

  const [theme, toggleTheme, componentMounted] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  useEffect(async () => {
    setCities(await (await fetch("/citiesList.json")).json());
  }, []);

  store.list = store.list || [];
  const [favoriteCities, setfavoriteCities] = useState(store.list);

  if (!componentMounted) {
    return <div />
  };

  return (

    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <StyledApp >

        <BrowserRouter>
          <Header theme={theme} toggleTheme={toggleTheme} />
          <main>
            <Routes>
              <Route
                path="/"
                element={
                  <Home {...{ cities, favoriteCities, setfavoriteCities }} />
                }
              />
              <Route path="/add-city" element={<MyTimezones />} />
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
      </StyledApp>
    </ThemeProvider >
  );
}

export default App;
