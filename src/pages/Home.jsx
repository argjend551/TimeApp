import React from "react";
import ReadCityList from "../components/cards_detailed/ReadCityList";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Clock from "../components/main_components/Clock";

function Home(props) {
  const { cities } = props;

  return (
    <Container align="center" className="card-container">
      <Row>
        <Clock offset={1} />
      </Row>
      <ReadCityList {...{ cities }} />
    </Container>
  );
}

export default Home;
