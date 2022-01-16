import { useState, useEffect } from "react";

function ReadCityList() {

  const [cities, setCities] = useState([]);

  useEffect(async () => {
    setCities(await (await fetch('/citiesList.json')).json());

  }, [])



  return <div className="citiesList-div">

    {console.log(cities)};

  </div>
}

export default ReadCityList;