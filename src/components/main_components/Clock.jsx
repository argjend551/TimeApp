// import React, { Component } from "react";
import Col from 'react-bootstrap/Col'
import { useEffect, useState } from 'react';

function Clock(props) {
  let { offset, settime } = props
  const setTime = useState(new Date());

  let date = new Date();


  let utcTime = date.getTime() + date.getTimezoneOffset() * 60000;

  let time = new Date(utcTime + 3600000 * offset);
  let minutes = time.getMinutes()
  let hours = time.getHours()
  let seconds = time.getSeconds()
  let localtime = seconds + minutes + hours

  // setInterval(1000)
  // useEffect(() => {
  //   setInterval(Clock, 1000);
  // });
  // useEffect(() => {
  //   const interval = setInterval(
  //     () => setTime(new Date()),
  //     1000
  //   )
  // })
  useEffect(() => {
    setInterval(() => settime(localtime), 800);
  });



  return (
    <Col className="d-flex justify-content-center">
      <div className="clock" align="center">
        <div className="hour_hand"
          style={{ transform: `rotateZ(${hours * 30 + minutes * 0.5}deg)` }}
        >

        </div>
        <div className="min_hand"
          style={{ transform: `rotateZ(${minutes * 6}deg)` }}>

        </div>
        <div className="sec_hand"
          style={{ transform: `rotateZ(${seconds * 6}deg)` }}>

        </div>


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
        {/* <span className="circle"></span> */}


      </div>


    </Col>
  );
}
// }
// }
// class Clock extends Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       time: new Date()
//     };
//   }

// componentDidMount() {
//   this.timeId = setInterval(() => {
//     this.setState({
//       time: new Date()
//     })
//   }, 1000);
// }

//   componentWillMount() {
//     clearInterval(this.timeId)
//   }

//   render() {
export default Clock