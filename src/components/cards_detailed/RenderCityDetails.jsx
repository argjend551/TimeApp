import Clock from "../main_components/Clock";
import { useState, useEffect } from "react";
import GetLocalTime from "../main_components/GetLocalTime";
import Toggle from "./Toggle";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function RenderCityDetails(props) {
  const { town } = props;
  const { id, city, timezone, image, imageBgr } = town;
  const [time, settime] = useState();
  const [toggled, setToggled] = useState(false);

  //Invert previous state. If true, change to false.
  const handleClick = () => {
    setToggled((s) => !s);
  };

  //Scroll to top of page when component mounts the first time.
  useEffect(() => {
    scrollTo(0, 0);
  }, []);

  return (
    <Container
      fluid
      className="cityBackgroundImg"
      style={{
        backgroundImage:
          imageBgr === "None"
            ? `url(https://source.unsplash.com/random/1920x1272${city})`
            : `url(${imageBgr})`
      }}
    >
      <Row>
        <Col className="col-12">
          <h1 className="cityName">{city}</h1>
        </Col>
        <Col className="citypagecontent col-12">
          {!toggled && <Clock offset={timezone} settime={settime} />}
          {!!toggled && (
            <div className="digitalClockCityPage">
              <GetLocalTime offset={timezone} settime={settime} />
            </div>
          )}
        </Col>
        <Col className="col-12">
          <Toggle toggled={toggled} onClick={handleClick} />
        </Col>
      </Row>
    </Container>
  );
}

export default RenderCityDetails;
