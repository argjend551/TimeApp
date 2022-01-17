function GetLocalTime(props) {
  let { offset, settime } = props;
  // create Date object for current location
  let date = new Date();

  // convert to milliseconds, add local time zone offset and get UTC time in milliseconds
  let utcTime = date.getTime() + date.getTimezoneOffset() * 60000;

  // time offset for the city
  let timeOffset = offset;

  // create new Date object for a different timezone using supplied its GMT offset.
  let time = new Date(utcTime + 3600000 * timeOffset);
  let hours = time.getHours();
  let minutes = time.getMinutes();
  let seconds = time.getSeconds();
  let localtime = hours + ":" + minutes + ":" + seconds;

  // inteval every second, updates the time.
  setInterval(() => {
    settime(localtime);
  }, 1000);

  return (
    <>
      <h4>{localtime}</h4>
    </>
  );
}

export default GetLocalTime;
