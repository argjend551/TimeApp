import GetLocalTime from "../main_components/GetLocalTime";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

function ReadCity(props) {
  let { town } = props;
  let { city, timezone, image } = town;
  const [time, settime] = useState();

  const navigate = useNavigate();

  //The code for the card that prints on the startpage.
  return (
    <Col>
      <Card
        className="city-card"
        style={{ width: "19rem" }}
        onClick={() => navigate(`${city}`, { state: { ...{ town } } })}
      >
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{city}</Card.Title>

          <GetLocalTime offset={timezone} settime={settime} />
        </Card.Body>
      </Card>
    </Col>
  );
}

export default ReadCity;
