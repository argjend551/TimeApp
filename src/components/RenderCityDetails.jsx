RenderCityDetails;
import Clock from "../components/Clock";
import { useState, useEffect } from "react";
import GetLocalTime from "../components/GetLocalTime";

function RenderCityDetails(props) {
  const { town } = props;
  const { id, city, timezone, image, imageBgr } = town;
  const [time, settime] = useState();

  useEffect(() => {
    scrollTo(0, 0);
  }, []);

  return (
    <>
      <div
        className="cityBackgroundImg"
        style={{
          backgroundImage: `url(${imageBgr})`,
        }}
      >
        <h1 className="cityName">{city}</h1>
        <div className="citypagecontent">
          <Clock offset={timezone} settime={settime} />
          <div className="digitalClockCityPage">
            {" "}
            <GetLocalTime offset={timezone} settime={settime} />
          </div>
        </div>
      </div>
    </>
  );
}

export default RenderCityDetails;
