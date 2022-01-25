import { useLocation, useParams } from "react-router-dom";
import React from "react";
import ReadCityFromParams from "../components/ReadCityFromParams";
import ShowCityFromCard from "../components/ShowCityFromCard";

//If there is a state set from cards and retrieved through useLocation(),
//the ShowCityFromCard component is mounted. Otherwise ReadCityFromParams is mounted.
function DetailedCityPage(props) {
  const cityview = useParams();
  const { cities } = props;
  const { state } = useLocation();

  return (
    <>
      {!state && <ReadCityFromParams {...{ cities, cityview }} />}
      {!!state && <ShowCityFromCard {...{ state }} />}
    </>
  );
}

export default DetailedCityPage;
