import { useLocation, useParams } from "react-router-dom";
import { useState } from "react";
import ReadCityFromParams from "../components/cards_detailed/ReadCityFromParams";
import ShowCityFromCard from "../components/cards_detailed/ShowCityFromCard";
import ShowFavoriteCityFromCard from "../components/cards_detailed/ShowFavoriteCityFromCard";

//If there is a state set from cards and retrieved through useLocation(),
//the ShowCityFromCard component is mounted. Otherwise ReadCityFromParams is mounted.
function DetailedCityPage(props) {
  const cityview = useParams();
  const { cities, favoriteCities } = props;
  const { state } = useLocation();
  const [town, setTown] = useState();
  return (
    <>
      {!state && (
        <ReadCityFromParams
          {...{ cities, favoriteCities, cityview, town, setTown }}
        />
      )}
      {!!state && !!state.town && <ShowCityFromCard {...{ state }} />}
      {!!state && !state.town && <ShowFavoriteCityFromCard {...{ state }} />}
    </>
  );
}

export default DetailedCityPage;
