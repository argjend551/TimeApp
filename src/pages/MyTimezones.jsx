import React from "react";
import AddCity from "../components/my_timezones/AddCity";
import FavoriteList from "../components/my_timezones/FavoriteList";
function Favorites() {
  return (
    <div className="favoriteSite">
      <h1>Add a timezone</h1>
      <AddCity></AddCity>


      {/* <FavoriteList></FavoriteList> */}
    </div>
  );
}

export default Favorites;
