import React from "react";
import styles from "./login.module.css";

export default function Login() {
  return <div className={styles.container}>

    <form className={styles.form}>

        <div className={styles.inputContainer}>
            <p className={styles.formText}>Email Address</p>
            <input type='email' placeholder="johnDoe@emailaddress.com: "/>
        </div>

        <div className={styles.inputContainer}>
            <p className={styles.formText}>Password</p>
            <input type="password" placeholder="Enter Name: "/>
        </div>

        <div className={styles.ToS}>
            <input type='checkbox'/>
            <p>I agree to the </p>
            <a href="./">Terms & Service</a>
        </div>
    </form>
  </div>;
}
