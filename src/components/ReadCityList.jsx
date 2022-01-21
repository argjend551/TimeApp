import ReadCity from "./ReadCity";
import Row from "react-bootstrap/Row";

function ReadCityList(props) {
  const { cities } = props;

  return (
    <Row>
      {cities.map(town => (
        <ReadCity key={town.id} {...{ town }} />
      ))}
    </Row>
  );
}

export default ReadCityList;
