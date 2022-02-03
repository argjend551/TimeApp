import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Footer() {
  return (
    <Container fluid>
      <Row>
        <Col>
          <p>Copyright &copy; 2022 TheTimepointCompany</p>
        </Col>
      </Row>
    </Container>
  );
}
