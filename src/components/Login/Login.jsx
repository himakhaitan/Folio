import classes from "./Login.module.css";
import { useState } from "react";

// Import UI Component
import Button from "../../UI/Button/Button";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = (e) => {
    e.preventDefault();

    const loginData = {
      username,
      password,
    };

    console.log(loginData);
    setPassword("");
    setUsername("");
  };

  const usernameHandler = (e) => {
    setUsername(e.target.value);
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className={classes.login}>
      {/* Logo */}
      <div className={classes.logo_container}>
        <img
          className={classes.logo}
          src='/ui_pack/folio.png'
          alt='Folio Logo'
        />
      </div>

      {/* Divs */}
      <div className={classes.login_container}>
        <h3>Sign In</h3>
        <div className={classes.input_container}>
          <div className={classes.input_item}>
            <input
              onChange={usernameHandler}
              value={username}
              type='text'
              placeholder='Username or E-mail'
            />
          </div>
          <div className={classes.input_item}>
            <input
              onChange={passwordHandler}
              value={password}
              type='password'
              placeholder='Password'
            />
          </div>
        </div>
        <div className={classes.login_submit}>
          <Button onClick={loginHandler} theme='dark' label='Login to Folio' />
        </div>
      </div>
    </div>
  );
};

export default Login;
