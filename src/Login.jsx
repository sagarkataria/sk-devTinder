import { useState } from 'react';
import axios from 'axios';
const Login = () => {
  const [emailId, setEmailID] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const res = axios.post(
        'http://localhost:7777/login',
        {
          emailId,
          password,
        },
        { withCredentials: true },
      );
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="flex py-10 justify-center">
      <div className="card bg-base-200 w-96 shadow-sm">
        <div className="card-body">
          <h2 className="card-title justify-center">Login</h2>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Email id</legend>
            <input
              type="text"
              className="input"
              value={emailId}
              placeholder="Enter email here"
              onChange={(e) => setEmailID(e.target.value)}
            />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Password</legend>
            <input
              type="password"
              className="input"
              value={password}
              placeholder="Enter Password here"
              onChange={(e) => setPassword(e.target.value)}
            />
          </fieldset>
          <div className="card-actions justify-center">
            <button className="btn btn-primary" onClick={handleLogin}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
