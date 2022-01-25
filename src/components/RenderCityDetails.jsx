RenderCityDetails;
import Clock from "../components/Clock";
import { useState, useEffect } from "react";
import GetLocalTime from "../components/GetLocalTime";

function RenderCityDetails(props) {
  const { town } = props;
  const { id, city, timezone, image, imageBgr } = town;
  const [time, settime] = useState();
  const [showAnalog, setShowAnalog] = useState(true);

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
          {!!showAnalog && <Clock offset={timezone} settime={settime} />}
          {!showAnalog && (
            <div className="digitalClockCityPage">
              <GetLocalTime offset={timezone} settime={settime} />
            </div>
          )}
          <div>
            {!!showAnalog && (
              <button
                className="btnToggle"
                onClick={() => setShowAnalog(false)}
              >
                Show Digital Clock
              </button>
            )}
            {!showAnalog && (
              <button className="btnToggle" onClick={() => setShowAnalog(true)}>
                Show Analog Clock
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default RenderCityDetails;
