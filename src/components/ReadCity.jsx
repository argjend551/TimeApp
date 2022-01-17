import GetLocalTime from "./GetLocalTime";
import { useState } from "react";
function ReadCity(props) {

  let { town } = props;
  let { id, city, timezone, image } = town;
  const [time, settime] = useState();




  return (
    <div className="city">
      <img src={image} />
      <h3>{city}</h3>
      <GetLocalTime offset={timezone} settime={settime} />
    </div>
  );
}

export default ReadCity;