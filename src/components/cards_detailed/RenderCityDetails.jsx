RenderCityDetails;
import Clock from "../main_components/Clock";
import { useState, useEffect } from "react";
import GetLocalTime from "../main_components/GetLocalTime";

function RenderCityDetails(props) {
  const { town } = props;
  const { id, city, timezone, image, imageBgr } = town;
  const [time, settime] = useState();

  //Scroll to top of page when component mounts the first time.
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
