import GetLocalTime from "../main_components/GetLocalTime";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { AiFillStar } from "react-icons/ai";

function ReadFavoriteCity(props) {
  let { favoriteTown } = props;
  let { city, timezone } = favoriteTown;
  const [time, settime] = useState();

  const navigate = useNavigate();

  //The design for the favorite-cards. Adds a star icon to indicate that it's a favorite city, one that the user created.


  return (
    <Col>
      <Card
        className="city-card"
        style={{ width: "19rem" }}
        onClick={() => navigate(`${city}`, { state: { ...{ favoriteTown } } })}
      >
        <Card.Img
          variant="top"
          src={`https://source.unsplash.com/random/640x360${city}`}
        />
        <Card.Body>
          <AiFillStar />
          <Card.Title>{city}</Card.Title>
          <GetLocalTime offset={timezone} settime={settime} />
        </Card.Body>
      </Card>
    </Col>
  );
}

export default ReadFavoriteCity;
