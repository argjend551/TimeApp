import { useState } from "react";
import MyForm from "./Form";
import FavoriteList from "./FavoriteList";
import store from "../js/localStore";


function PresistantData() {

  // För att ta bort localstorage inlägg
  //localStorage.clear();

  if (store.list != null) {

    var data = JSON.stringify(store.list);
    const items = JSON.parse(data);

    // populate list from localstorage.
    const itemRows = [];
    for (let item of items) {
      const row = (
        <FavoriteList key={item.id}{...{ city: item.city, utc: item.timezone, }} />
      );
      itemRows.push(row);
    }

    return <>
      {itemRows}
    </>
  }
  else {
    return <>
      <p> Localstorage is empty</p>
    </>
  }
}

export default PresistantData;
