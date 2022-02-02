// More info https://react-bootstrap.netlify.app/components/navbar/#navbars /Tim

import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

export default function Header() {
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
            TimeApp
          </Navbar.Brand>
          <Button className="custom-btn" href="/add-city">Add City</Button>
        </Container>
      </Navbar>
    </>
  );
}
