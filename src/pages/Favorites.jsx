import React from "react";
import AddCity from "../components/AddCity";
import FavoriteList from "../components/FavoriteList";
function Favorites() {
  return (
    <div className="favoriteSite">
      <h1>Add a timezone</h1>
      <AddCity></AddCity>

      <FavoriteList></FavoriteList>
    </div>
  );
}

export default Favorites;
