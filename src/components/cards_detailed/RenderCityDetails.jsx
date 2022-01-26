import Clock from "../main_components/Clock";
import { useState, useEffect } from "react";
import GetLocalTime from "../main_components/GetLocalTime";
import Toggle from "./Toggle";

function RenderCityDetails(props) {
  const { town } = props;
  const { id, city, timezone, image, imageBgr } = town;
  const [time, settime] = useState();
  const [toggled, setToggled] = useState(false);

  //Invert previous state. If true, change to false.
  const handleClick = () => {
    setToggled(s => !s);
  };

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
          {!toggled && <Clock offset={timezone} settime={settime} />}
          {!!toggled && (
            <div className="digitalClockCityPage">
              <GetLocalTime offset={timezone} settime={settime} />
            </div>
          )}
          <Toggle toggled={toggled} onClick={handleClick} />
        </div>
      </div>
    </>
  );
}

export default RenderCityDetails;
