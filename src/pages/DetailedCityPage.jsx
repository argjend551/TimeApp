import { useLocation } from "react-router-dom";
import React from "react";
import GetLocalTime from "../components/GetLocalTime";
import { useState } from "react";

function DetailedCityPage() {
  const { state } = useLocation();
  const { town } = state;
  const { id, city, timezone, image, imageBgr } = town;
  const [time, settime] = useState();

  return (
    <div
      className="cityBackgroundImg"
      style={{
        backgroundImage: `url(${imageBgr})`,
      }}
    >
      <h1 className="cityName">{city}</h1>
      <div className="citypagecontent">
        <h2>Analog Clock</h2>
        <GetLocalTime offset={timezone} settime={settime} />
        <div className="aboutCity">
          <h3 className="titleAboutCity">About {city}</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic facere
            perferendis, illo eius in repellat tenetur fugiat, quod vero,
            cupiditate repudiandae esse error amet aut magnam voluptatem cum
            tempore voluptates.
          </p>
        </div>
      </div>
    </div>
  );
}

export default DetailedCityPage;
