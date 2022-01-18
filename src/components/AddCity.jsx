import { useState } from "react";
import MyForm from "./Form";
import FavoriteList from "./FavoriteList";
function AddCity() {
  const [add, addCity] = useState([]);

  return (
    <>
      <MyForm addCity={addCity} add={add}></MyForm>
      <div className="favoriteList">
        {add.map(({ city, utc, index }) => (
          <FavoriteList
            key={index}
            {...{
              city,
              utc,
            }}
          />
        ))}
      </div>
    </>
  );
}

export default AddCity;
