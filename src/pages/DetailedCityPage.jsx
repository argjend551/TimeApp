import { useLocation, useParams } from "react-router-dom";
import React from "react";
import ReadCityFromParams from "../components/ReadCityFromParams";
import ShowCityFromCard from "../components/ShowCityFromCard";

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
