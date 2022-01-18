import { useState, useEffect } from "react";
import ReadCity from "./ReadCity";
import Row from 'react-bootstrap/Row'

function ReadCityList() {

  const [cities, setCities] = useState([]);

  useEffect(async () => {
    setCities(await (await fetch('/citiesList.json')).json());

  }, [])


  return <Row>

    {cities.map(town => <ReadCity key={town.id}{...{ town }} />)}

  </Row>
}

export default ReadCityList;