import React, { useState, useEffect } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date());
  const [twelveHourTimeFormat, setTwelveHourTimeFormat] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const timeFormat = (date) => {
    let hours, minutes, seconds, amOrpm;
    if (twelveHourTimeFormat) {
      hours = date.getHours() <= 12 ? date.getHours() : date.getHours() - 12;
      amOrpm = date.getHours() < 12 ? "AM" : "PM";
    } else {
      hours = date.getHours();
      amOrpm = hours < 12 ? "AM" : "PM";
    }
    minutes = date.getMinutes();
    seconds = date.getSeconds();

    return `${hours} : ${minutes} : ${seconds} ${amOrpm}`;
  };

  console.log(time)
  return (
    <div>
      <h1>Clock</h1>
      <p>{timeFormat(time)}</p>
      <button onClick={()=>setTwelveHourTimeFormat(!twelveHourTimeFormat)}>switch time format</button>
    </div>
  );
};

export default Clock;
