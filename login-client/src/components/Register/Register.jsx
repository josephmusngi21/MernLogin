import React from "react";
import styles from "./register.module.css";

export default function Register() {
  const handleClick = () => {};

  const handleSubmit = () => {};

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.inputContainer}>
          <p className={styles.formText}>Name</p>
          <input placeholder="Enter Name: "></input>
        </div>

        <div className={styles.inputContainer}>
          <p className={styles.formText}>Email Address</p>
          <input type="email" placeholder="johnDoe@emailaddress.com: " />
        </div>

        <div className={styles.inputContainer}>
          <p className={styles.formText}>Password</p>
          <input type="password" placeholder="Enter Name: " />
        </div>

        <div className={styles.ToS}>
          <input type="checkbox" />
          <p>I agree to the </p>
          <a href="./">Terms & Service</a>
          <button onClick={handleClick}>Login</button>
        </div>
      </form>
    </div>
  );
}
