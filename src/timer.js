import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval;

    if (isActive) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isActive]);

  const handleStart = () => {
    setIsActive(true);
  };

  const handleStop = () => {
    setIsActive(false);
  };

  const handleReset = () => {
    setSeconds(0);
    setIsActive(false);
  };

  return (
    <div>
      <p>Time: {seconds} seconds</p>
      <button onClick={handleStart} style={{ color: 'white', backgroundColor: 'green',marginRight: '10px',height: '25px'}} disabled={isActive}>
        Start
      </button>
      <button onClick={handleStop} style={{ color: 'white', backgroundColor: 'red', marginRight: '10px',height: '25px'}} disabled={!isActive}>
        Stop
      </button>
      <button onClick={handleReset} style={{ color: 'white', backgroundColor: 'blue',height: '25px' }}>Reset</button>
    </div>
  );
};

export default Timer;