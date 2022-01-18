import { useState } from "react";
import GetLocalTime from "./GetLocalTime";

function FavoriteList(props) {
  const [time, settime] = useState();
  let { utc, city } = props;

  var background = {
    backgroundImage: `url("https://source.unsplash.com/random/440x360/?${city}")`,
  };

  return (
    <>
      <div className="favoriteCity" style={background}>
        <h1>{city}</h1>
        {utc && <GetLocalTime offset={utc} settime={settime} />}
      </div>
    </>
  );
}

export default FavoriteList;
