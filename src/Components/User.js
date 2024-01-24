import React, {useState,useEffect} from 'react'
import './Dash.css'

function User() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
      const timer = setInterval(() => {
        setTime(new Date());
      }, 1000);
  
      // Clear the timer when the component is unmounted
      return () => clearInterval(timer);
    }, []);
  
    return (
      <div>
        <h2>Login Time </h2>
        <p className='time'>{time.toLocaleTimeString()}</p>
      </div>
    );
  }

export default User
