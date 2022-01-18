import React from "react";
import ReadCityList from "../components/ReadCityList";
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'

function Home() {
  return (
    <div>
      <Container align="center" fluid className="card-container">
        <Row></Row>
        <Row>
          <ReadCityList />
        </Row>
      </Container>
    </div>
  );
}

export default Home;
