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
      <h1>{city}</h1>
      <h2>Analog Clock</h2>
      <GetLocalTime offset={timezone} settime={settime} />
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic facere
        perferendis, illo eius in repellat tenetur fugiat, quod vero, cupiditate
        repudiandae esse error amet aut magnam voluptatem cum tempore
        voluptates.
      </p>
    </div>
  );
}

export default DetailedCityPage;
