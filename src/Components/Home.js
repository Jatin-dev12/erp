import React, { useState } from 'react';
import './Side.css';
import '../App.css'

function Home() {
  const [loginTime, setLoginTime] = useState(new Date() - 5 * 60 * 60 * 1000 - 30 * 60 * 1000);
  const [elapsedTime, setElapsedTime] = useState(0);

  // Calculate the elapsed time and update the state
  const updateElapsedTime = () => {
    const newElapsedTime = Math.floor((new Date() - loginTime) / 1000);
    setElapsedTime(newElapsedTime);
  };

  // Update the elapsed time every second
  React.useEffect(() => {
    const interval = setInterval(() => {  
      updateElapsedTime();
    }, 1000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(interval);
  }, []);

  // Format the elapsed time as a clock
  const formatter = new Intl.DateTimeFormat('Kolkata', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  });

  const clock = formatter.format(elapsedTime * 1000);

  return (
    <div className="home">
      <p>Logged in for {clock} </p>
      {/* other components and JSX */}
    </div>
  );
}

export default Home;