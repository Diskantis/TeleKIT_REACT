import React, { useState } from "react";

const Clock = () => {
  const [clock, setClock] = useState('')

const showTime = () => {
    const date = new Date();
    return setClock(date.toLocaleTimeString())
  }

  setTimeout(showTime, 1000);

  return (
    <time className={"clock"}>{clock}</time>
  );
};

export default Clock;
