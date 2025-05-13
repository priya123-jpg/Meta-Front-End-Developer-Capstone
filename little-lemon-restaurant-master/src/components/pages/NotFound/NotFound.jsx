import "./NotFound.css";
import { useState } from "react";

const NotFound = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // In a real application, you would send this data to a server for authentication.
    // For this example, we'll just simulate a check.
    if (username === 'user' && password === 'password') {
      alert('Login successful!');
      // In a real app, you would likely redirect the user or update the application state.
    } else {
      setError('Invalid username or password.');
    }

    // Optionally clear the form after submission
    setUsername('');
    setPassword('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="login-container">
      <h2>Login</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={handleUsernameChange}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <button type="submit">Login</button>
      </div>
    </form>
  );
};

export default NotFound;
