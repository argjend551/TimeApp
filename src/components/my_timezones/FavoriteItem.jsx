import { useState } from "react";
import GetLocalTime from "../main_components/GetLocalTime";
import RemoveButton from "./RemoveButton";


// FavoriteItem är ett bättre namn för object i våran lista.

function FavoriteList(props) {
  const [time, settime] = useState();
  let { utc, city, indexId, setAndSaveItems, stateList } = props;

  var background = {
    backgroundImage: `url("https://source.unsplash.com/random/440x360/?${city}")`,
  };

  return (
    <>
      {utc && (
        <div className="favoriteCity" style={background}>
          <div className="content-city">
            <p>{city}             </p>
            <GetLocalTime offset={utc} settime={settime} />
          </div>
          <RemoveButton buttonId={indexId} setAndSaveItems={setAndSaveItems} stateList={stateList} />
        </div>
      )}
    </>
  );
}

export default FavoriteList;
