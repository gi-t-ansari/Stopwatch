import React, { useState, useEffect } from "react";

const CountdownTimer = () => {
  const [initialTime, setInitialTime] = useState(60); // Initial countdown time in seconds
  const [timeRemaining, setTimeRemaining] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;

    if (isRunning && timeRemaining > 0) {
      timer = setInterval(() => {
        setTimeRemaining((prevTime) => prevTime - 1);
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [isRunning, timeRemaining]);

  useEffect(() => {
    if(timeRemaining === 0) {
        setIsRunning(false)
    }
  },[timeRemaining])

  const handleStart = () => {
    setIsRunning(true);
  };

  const handlePause = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setTimeRemaining(initialTime);
    setIsRunning(false);
  };

  const handleTimeChange = (e) => {
    const newTime = parseInt(e.target.value, 10);
    setInitialTime(newTime);
    setTimeRemaining(newTime);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  return (
    <div className="bg-gray-200 h-[100vh] flex flex-col justify-center items-center gap-4">
      <h1 className="text-3xl font-bold text-blue-500 text-center -mt-5">
        Countdown Timer
      </h1>
      <div>
        <input
          type="number"
          value={initialTime}
          onChange={handleTimeChange}
          disabled={isRunning}
          className="w-96 px-2 py-1 rounded-md block mx-auto my-3 bg-white"
        />
        <div className="flex justify-center gap-3 my-3">
          <button className="bg-green-400 px-3 py-1 rounded" onClick={handleStart} disabled={isRunning || timeRemaining === 0}>
            Start
          </button>
          <button className="bg-yellow-300 px-3 py-1 rounded" onClick={handlePause} disabled={!isRunning}>
            Pause
          </button>
          <button className="bg-blue-300 px-3 py-1 rounded" onClick={handleReset} disabled={isRunning}>
            Reset
          </button>
        </div>
      </div>

      <div className="mx-auto">
        <h2 className="text-center font-bold text-lg">Time Remaining - { timeRemaining === 0 ? "Countdown Completed! Please input a time and start again" :formatTime(timeRemaining)}</h2>
      </div>
    </div>
  );
};

export default CountdownTimer;
