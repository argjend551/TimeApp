ShowCityFromCard;

import RenderCityDetails from "./RenderCityDetails";

function ShowCityFromCard(props) {
  const { state } = props;
  const { town } = state;

  const { id, city, timezone, image, imageBgr } = town;

  return (
    <>
      <RenderCityDetails {...{ town }} />
    </>
  );
}

export default ShowCityFromCard;
