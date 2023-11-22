import "./App.css";
import React, { useState, useEffect } from "react";

export default function App() {
  const [running, setRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setElapsedTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  const startTimer = () => {
    setRunning((prevState) => !prevState);
  };

  const resetTimer = () => {
    setRunning(false);
    setElapsedTime(0);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes} : ${remainingSeconds}`;
  };
  return (
    <div className="container">
      <h1 className="heading">Stopwatch</h1>
      <p className="timer">{formatTime(elapsedTime)}</p>
      <button className="btn" onClick={startTimer}>
        {running ? "Stop" : "Start"}
      </button>
      <button className="btn" onClick={resetTimer}>
        Reset
      </button>
    </div>
  );
}
