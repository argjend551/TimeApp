import ReadFavoriteCity from "./ReadFavoriteCity";
import Row from "react-bootstrap/Row";

function ReadFavoriteCityList(props) {
  const { favoriteCities } = props;

  return (
    <Row>
      {favoriteCities.map(favoriteTown => (
        <ReadFavoriteCity{...{ favoriteTown }} />
      ))}
    </Row>
  );
}

export default ReadFavoriteCityList;
