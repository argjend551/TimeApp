import RenderCityDetails from "./RenderCityDetails";
import { useState, useEffect } from "react";

function ReadCityFromParams(props) {
  const { cities, cityview } = props;
  //const { id, city, timezone, image, imageBgr } = cities;
  let cityFound = true;
  const [town, setTown] = useState({});

  useEffect(() => findCity(), [cityview]);
  let foundTown;
  function findCity() {
    foundTown = cities.find(x => x.city === cityview.cityview);
    if (!foundTown) {
      cityFound = false;
      return;
    } else {
      setTown(foundTown);
    }
  }
  return (
    <>
      {!cityFound && <h1>Can't find city</h1>}
      {!!cityFound && <RenderCityDetails {...{ town }} />}
    </>
  );
}

export default ReadCityFromParams;
