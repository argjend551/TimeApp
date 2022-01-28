import GetLocalTime from "../main_components/GetLocalTime";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

function ReadFavoriteCity(props) {
  let { favoriteTown } = props;
  let { city, timezone } = favoriteTown;
  const [time, settime] = useState();

  const navigate = useNavigate();


  return (
    <Col>
      <Card className="city-card" style={{ width: "19rem" }}>
        <Card.Img variant="top" src={`https://source.unsplash.com/random/640x360${city}`} />
        <Card.Body>
          <Card.Title>{city}</Card.Title>

          <GetLocalTime offset={timezone} settime={settime} />

          <Button
            variant="primary"
            onClick={() => navigate(`${city}`, { state: { ...{ favoriteTown } } })}
          >
            More Info
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default ReadFavoriteCity;
