// More info https://react-bootstrap.netlify.app/components/navbar/#navbars /Tim

import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Switch from "./Switch";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Header(props) {
  let { theme, toggleTheme } = props;

  return (
    <>
      <Navbar className="color-nav" variant="dark" sticky="top">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src="/timezone.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Timepoint
          </Navbar.Brand>

          <Row>
            <Col>
              <Switch theme={theme} toggleTheme={toggleTheme} />
            </Col>
            <Col>
              <div className="AddCityButton">
                <Button type="button" className="custom-btn" href="/add-city">Add City</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </Navbar>
    </>
  );
}
