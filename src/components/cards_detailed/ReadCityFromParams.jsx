import RenderCityDetails from "./RenderCityDetails";
import { useState, useEffect } from "react";

function ReadCityFromParams(props) {
  const { cities, favoriteCities, cityview, town, setTown } = props;

  let cityFound = true;

  //Finding (and setting) city (cityview) from url in cities-list. If not found in cities-list
  // favoriteCities-list is searched.
  //Mounts RenderCityDetails with the foundTown as props if city is found in the list.
  useEffect(() => findCity(), [cityview]);
  let foundTown;
  function findCity() {
    foundTown = cities.find(x => x.city === cityview.cityview);
    if (!foundTown) {
      foundTown = favoriteCities.find(x => x.city === cityview.cityview);
      if (!foundTown) {
        cityFound = false;
        return;
      } else {
        setTown(foundTown);
      }
    } else {
      setTown(foundTown);
    }
  }

  return (
    <>
      {!!town && <RenderCityDetails {...{ town }} />}
      {!town && <h1 className="pageNotFound">Page not found</h1>}
    </>
  );
}

export default ReadCityFromParams;
