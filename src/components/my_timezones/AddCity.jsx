import { useState } from "react";
import MyForm from "./Form";
import FavoriteList from "./FavoriteList";
import PresistantData from "./PresistantData";

function AddCity() {
  const [add, addCity] = useState([]);

  return (
    <>
      <MyForm addCity={addCity} add={add}></MyForm>
      <div className="favoriteList">

        <PresistantData />
      </div>
    </>
  );
}

export default AddCity;
