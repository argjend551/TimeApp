import GetLocalTime from "./GetLocalTime";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

function ReadCity(props) {
  let { town } = props;
  let { id, city, timezone, image, imageBgr } = town;
  const [time, settime] = useState();


  return (
    <Col lg={3} md={6} sm={12}>
      <Card className="city-card" style={{ width: '18rem' }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{city}</Card.Title>
          <Card.Text>
            <GetLocalTime offset={timezone} settime={settime} />
          </Card.Text>
          <Button variant="primary">More Info</Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default ReadCity;
