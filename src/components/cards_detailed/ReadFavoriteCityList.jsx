import ReadFavoriteCity from "./ReadFavoriteCity";
import Row from "react-bootstrap/Row";

function ReadFavoriteCityList(props) {
  const { favoriteCities } = props;

  //Mapping the FavoriteCities Array with the info from local Storage. 
  //<ReadFavoritecity /> adds the code and design for the cards.

  return (
    <Row>
      {favoriteCities.map(favoriteTown => (
        <ReadFavoriteCity key={favoriteTown.id}{...{ favoriteTown }} />
      ))}
    </Row>
  );
}

export default ReadFavoriteCityList;
