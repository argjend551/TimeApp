import RenderCityDetails from "./RenderCityDetails";
import { useState, useEffect } from "react";

function ReadCityFromParams(props) {
  const { cities, cityview } = props;
  //const { id, city, timezone, image, imageBgr } = cities;
  let cityFound = true;
  const [town, setTown] = useState();

  //Finding (and setting) city (cityview) from url in cities-list when city changes.
  //Mounts RenderCityDetails with the foundTown as props if city is found in the list.
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
      {!town && <h1>Can't find city</h1>}
      {!!town && <RenderCityDetails {...{ town }} />}
    </>
  );
}

export default ReadCityFromParams;
