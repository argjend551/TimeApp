import React from "react";
import ReadCityList from "../components/ReadCityList";
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'

function Home() {
  return (
    <Container align="center" className="card-container">
      <Row>
        KLOCKA
      </Row>
      <ReadCityList />
    </Container>
  );
}

export default Home;
