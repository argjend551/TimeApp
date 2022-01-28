import React from "react";
import ReadCityList from "../components/cards_detailed/ReadCityList";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { useState, useEffect } from "react";
import Clock from "../components/main_components/Clock";
import ReadFavoriteCityList from "../components/cards_detailed/ReadFavoriteCityList";

function Home(props) {
  const { cities, favoriteCities, setfavoriteCities } = props;
  const [time, settime] = useState();

  return (
    <Container align="center" className="card-container">
      <Row>
        <Clock offset={1} settime={settime} />
      </Row>
      <ReadFavoriteCityList {...{ favoriteCities }} />
      <ReadCityList {...{ cities }} />
    </Container>
  );
}

export default Home;
