/*import { useState, useEffect } from 'react';
/*import { useState, useEffect } from 'react';
import './login.css';
import Header from './Header2';
import { useNavigate } from 'react-router-dom';  // Corrected import

const LoginComponent = () => {
  const history = useNavigate();  // Get the history object

  const [showLogin, setShowLogin] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    setTimeout(() => {
      setShowLogin(true);
    }, 500);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === 'user1' && password === 'pass1') {
      alert('Logged in successfully!');
      history('/dashboard');  // Use the navigate function directly
    } else {
      alert('Sorry, login failed.');
    }
  };

  return (
    <div className="login-body">
      <div className="header_login">
        <Header />
      </div>
      <div className='login-wrapper'>  
        <div className="login-body-content rounded-xl m-1">
          <div
            className={`login-container ${showLogin ? 'show' : ''} p-5 shadow-lg rounded-md`}  
           
          >
            <h2 className='component-heading text-center mb-5 font-bold capitalize'>
              Login
            </h2>
            <form className="login-form items-center" onSubmit={handleSubmit}>
              <div className="form-group mb-5">
                <label htmlFor="username" className="font-bold form-input">
                  Username:
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="p-2 border border-solid border-slate-700 rounded bg-white"
                />
              </div>
              <div className="form-group mb-5">
                <label htmlFor="password" className="font-bold form-input">
                  Password:
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="p-2 border border-solid border-slate-700 rounded bg-white"
                />
              </div>
              <button 
                className="button-login 2xl:p-3 p-1 pt-2 pb-2 bg-[#108fe4] hover:bg-[#3cb1ff]"
                type="submit"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;*/

import { useState, useEffect } from "react";
import "./login.css";
import Header from "./Header2";
import { useNavigate } from "react-router-dom"; // Corrected import

const LoginComponent = () => {
  const history = useNavigate(); // Get the history object

  const [showLogin, setShowLogin] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setShowLogin(true);
    }, 500);
  }, []);

  const login = (e) => {
    e.preventDefault();
    const userData = {
      username,
      password,
    };
    if (username === "Rana.singh" && password === "Singh@JNU") {
      alert("Logged in successfully!");
      localStorage.setItem("token-info", JSON.stringify(userData));
      // setIsLoggedIn(true);
      history("/dashboard"); // Use the navigate function directly
      window.location.reload();
    } else {
      alert("Sorry, login failed.");
    }
  };

  return (
    <div className="login-body">
      <div className="header_login">
        <Header />
      </div>
      <div className="login-wrapper">
        <div className="login-body-content rounded-xl m-1">
          <div
            className={`login-container ${
              showLogin ? "show" : ""
            } p-5 shadow-lg rounded-md`}
            /*duration-500 animate-slideAndRotate*/
          >
            <h2 className="component-heading text-center mb-5 font-bold capitalize">
              Login
            </h2>
            <form className="login-form items-center" onSubmit={login}>
              <div className="form-group mb-5">
                <label htmlFor="username" className="font-bold form-input">
                  Username:
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="p-2 border border-solid border-slate-700 rounded bg-white"
                />
              </div>
              <div className="form-group mb-5">
                <label htmlFor="password" className="font-bold form-input">
                  Password:
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="p-2 border border-solid border-slate-700 rounded bg-white"
                />
              </div>
              <button
                className="button-login 2xl:p-3 p-1 pt-2 pb-2 bg-[#108fe4] hover:bg-[#3cb1ff]"
                type="submit"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;