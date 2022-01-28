import RenderCityDetails from "./RenderCityDetails";

function ShowCityFromCard(props) {
  const { state } = props;
  const { town } = state;

  return (
    <>
      <RenderCityDetails {...{ town }} />
    </>
  );
}

export default ShowCityFromCard;
