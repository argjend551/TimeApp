// More info https://react-bootstrap.netlify.app/components/navbar/#navbars /Tim

import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Header() {

  return <>
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="/timezone.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          TimeApp
        </Navbar.Brand>
      </Container>
    </Navbar>
  </>
}