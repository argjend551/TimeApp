import RenderFavoriteCityDetails from "./RenderFavoriteCityDetails";

function ShowFavoriteCityFromCard(props) {
  const { state } = props;
  const { favoriteTown } = state;

  return (
    <>
      <RenderFavoriteCityDetails {...{ favoriteTown }} />
    </>
  );
}

export default ShowFavoriteCityFromCard;
