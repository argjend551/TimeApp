import { useState } from "react";
import GetLocalTime from "../main_components/GetLocalTime";
import RemoveButton from "./RemoveButton";

function FavoriteList(props) {
  const [time, settime] = useState();
  let { utc, city, indexId } = props;

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
          {/* <RemoveButton buttonId={indexId} /> */}
        </div>
      )}
    </>
  );
}

export default FavoriteList;
