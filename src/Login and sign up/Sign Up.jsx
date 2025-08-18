import { useState, useEffect, useContext } from "react";
import styles from "./SignUp.module.css";
function SignUp() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [passW, setPassW] = useState("");
  const [cPassW, setCpassW] = useState("");
  function handleFirstName(event) {
    setFname(event.target.value);
  }
  function handleLastName(event) {
    setLname(event.target.value);
  }
  function handleEmailchange(event) {
    setEmail(event.target.value);
  }
  function handlePhonechange(event) {
    setPhone(event.target.value);
  }
  function handlepassW(event) {
    setPassW(event.target.value);
  }
  function handlecPassW(event) {
    setCpassW(event.target.value);
  }
  return (
    <div className={styles.container}>
      <div className={styles.welcome}>
        <h1>
          <p>Welcome page</p>
        </h1>
      </div>
      <div className={styles.form}>
        <form>
          <h1>Register Here</h1>
          <div className="name">
            <label>
              <span>First name</span>
              <input
                type="text"
                placeholder="e.g John"
                value={fname}
                onChange={handleFirstName}
              />
            </label>
            <label>
              <span>Last name</span>
              <input
                type="text"
                placeholder="e.g Doe"
                value={lname}
                onChange={handleLastName}
              />
            </label>
          </div>
          <label>
            <span>Email</span>
            <input
              type="email"
              placeholder="e.g doeejohnn@gmail.com"
              value={email}
              onChange={handleEmailchange}
            />
          </label>
          <label>
            <span>Phone No</span>
            <input
              type="number"
              placeholder="+2348067223552"
              value={phone}
              onChange={handlePhonechange}
            />
          </label>
          <div className={styles.passwords}>
            <label>
              <span>Password</span>
              <input
                type="password"
                placeholder="Password"
                value={passW}
                onChange={handlepassW}
              />
            </label>
            <label>
              <span>Confirm Password</span>
              <input
                type="password"
                placeholder="Confirm Password"
                value={cPassW}
                onChange={handlecPassW}
              />
            </label>
          </div>
          <button className={styles.submit}>Register</button>
          <p>
            <span className={styles.signIn}>
              Already have an account?
              <a href="#">
                <span>Sign in</span>
              </a>
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}
export default SignUp;
