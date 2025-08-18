import { useState, useEffect, useContext } from "react";
import styles from "./login.module.css";
function Login() {
  return (
    <div className={styles.formContainer}>
      <form className={styles.form}>
        <h1>Login page</h1>
        <div className={styles.profpic}></div>
        <label>
          <span>Email</span>
          <input type="email" placeholder="Enter Email or Username" />
        </label>
        <label>
          <span>Password</span>
          <input type="password" placeholder="Enter Password" />
        </label>
        <button className={styles.submit}>Sign In</button>
      </form>
      <p>
        Not registered <a href="#">Sign up</a>
      </p>
    </div>
  );
}
export default Login;
