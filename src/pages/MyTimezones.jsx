import React from "react";
import AddCity from "../components/my_timezones/AddCity";
import FavoriteItem from "../components/my_timezones/FavoriteItem";
import FavoriteList from "../components/my_timezones/FavoriteList";

import { useState } from "react";
import store from "../js/localStore";


function Favorites() {
  store.list = store.list || [];
  store.save();

  const [stateList, setStateList] = useState(store.list);

  function setAndSaveItems(items) {
    setStateList(items);
    store.list = items;
    store.save();
  }


  return (
    <div className="favoriteSite">

      <h1>Add a timezone</h1>
      <AddCity setAndSaveItems={setAndSaveItems} stateList={stateList} />


      <div className="favoriteList">
        <FavoriteList setAndSaveItems={setAndSaveItems} stateList={stateList} />
      </div>

    </div>
  );
}

export default Favorites;
