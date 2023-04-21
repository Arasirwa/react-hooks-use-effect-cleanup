import React, { useState, useEffect } from "react";

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalID = setInterval(() => {
      console.log("running");
      setTime(new Date());
    }, 1000);

    // clean up

    return function () {
      clearInterval(intervalID);
    };
  }, []);

  return <div>{time.toString()}</div>;
}

export default Clock;
