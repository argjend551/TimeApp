import ReadCity from "./ReadCity";
import Row from "react-bootstrap/Row";

function ReadCityList(props) {
  const { cities } = props;

  //Mapping the Cities Array with the info from the cities.JSON, the JSON info is read at home.jsx.
  //<Readcity /> adds the code and design for the cards.


  return (
    <Row>
      {cities.map(town => (
        <ReadCity key={town.id} {...{ town }} />
      ))}
    </Row>
  );
}

export default ReadCityList;
