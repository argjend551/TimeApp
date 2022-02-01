// import React, { Component } from "react";
import Col from 'react-bootstrap/Col'
import { useEffect, useState } from 'react';

function Clock(props) {
  let { offset, settime } = props
  const setTime = useState(new Date());
  // creates an instance of the date and stores it in the variable date
  let date = new Date();

  // creates another object for the date based of of timezone
  let utcTime = date.getTime() + date.getTimezoneOffset() * 60000;

  let time = new Date(utcTime + 3600000 * offset);
  // vaues used to rotate the different hands by x degrees for y time passed
  let minutes = time.getMinutes()
  let hours = time.getHours()
  let seconds = time.getSeconds()
  let localtime = seconds + minutes + hours

  // updates clock ever 0.8 seconds
  useEffect(() => {
    setInterval(() => settime(localtime), 800);
  });



  return (
    <Col className="d-flex justify-content-center">
      <div className="clock" align="center">
        <div className="hour_hand"
          // rotates the hour hand by 30 degrees for each hour gone, aswell as 0.5 degrees for every minute making clock
          //look more true to a regular clock
          style={{ transform: `rotateZ(${hours * 30 + minutes * 0.5}deg)` }}
        >

        </div>
        <div className="min_hand"
          // rotates the min hand by 6 degrees per minute aswell as 0.1 degrees for each second
          // to make it look true to a regular clock aswell
          style={{ transform: `rotateZ(${minutes * 6 + seconds * 0.1}deg)` }}>

        </div>
        <div className="sec_hand"
          // rotates sec hand by 6 degrees per second
          style={{ transform: `rotateZ(${seconds * 6}deg)` }}>
        </div>
        {/* writes out the clock numbers */}
        <span className="one">1</span>
        <span className="two">2</span>
        <span className="three">3</span>
        <span className="four">4</span>
        <span className="five">5</span>
        <span className="six">6</span>
        <span className="seven">7</span>
        <span className="eight">8</span>
        <span className="nine">9</span>
        <span className="ten">10</span>
        <span className="eleven">11</span>
        <span className="twelve">12</span>

      </div>


    </Col>
  );
}
export default Clock