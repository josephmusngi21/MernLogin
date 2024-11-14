import React, { useState } from "react";
import styles from './App.css';
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";

export default function App() {
  // mode can be 'Login', 'Register', 'Welcome'
  const [isLoginMode, setIsLoginMode] = useState(false);

  const toggleMode = () => {
    setIsLoginMode(!isLoginMode);
  };

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <p className={styles.title}>Get Started</p>
        <p className={styles.description}>Enter your credentials to access your account</p>
        <div className={styles.inputContainer}>
          {isLoginMode ? <Login /> : <Register />}
        </div>
        <p className={styles.set}>
          Have an account? 
          <span onClick={toggleMode}> 
            {isLoginMode ? <span>Sign In</span> : <span>Sign Up</span>}
          </span>
        </p>
      </div>
      <div className={styles.box}></div>
    </div>
  );
}
