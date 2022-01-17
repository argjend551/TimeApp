import { useState, useEffect } from "react";
import ReadCity from "./ReadCity";

function ReadCityList() {

  const [cities, setCities] = useState([]);

  useEffect(async () => {
    setCities(await (await fetch('/citiesList.json')).json());

  }, [])



  return <div className="citiesList-div">

    {cities.map(town => <ReadCity key={town.id}{...{ town }} />)}

  </div>
}

export default ReadCityList;