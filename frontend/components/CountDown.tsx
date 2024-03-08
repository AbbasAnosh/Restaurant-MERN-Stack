"use client";
import React from "react";
import Countdown from "react-countdown";

const endingDate = new Date("2024-05-22");
const CountDown = () => {
  return <Countdown date={endingDate} />;
};

export default CountDown;
