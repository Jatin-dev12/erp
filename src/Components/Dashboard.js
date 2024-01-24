import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './Dash.css'

const Dashboard = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const navigate = useNavigate();
    
    const handleSubmit = (e) => {
      e.preventDefault();
      if (username === 'erp' && password === '123') {
      
        navigate('/User');
      } else {
        setError(true);
      }
    };
    const [loginTime, setLoginTime] = useState(null);

    // Set the login time when the user logs in
    const handleLogin = () => {
      setLoginTime(new Date());
    };
  
    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label><br />
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                <label htmlFor="password">Password:</label><br />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <input type="submit" value="Login" onClick={handleLogin} />
            </form>
            {error && <p>Invalid username or password</p>}
        </div>
    );
};

export default Dashboard;