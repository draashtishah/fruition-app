import React from "react";

function Login(props) {
  const {
    email,
    setEmail,
    passowrd,
    setPassword,
    handleLogin,
    handleSignup,
    hasAccount,
    setHasAccount,
    emailError,
    passowrdError,
  } = props;
  return (
    <div className="login">
      <div className="loginContainer">
        <div className="auth-header">
          {hasAccount ? (
            <>
              <h1>Login</h1>
            </>
          ) : (
            <>
              <h1>Register</h1>
            </>
          )}
        </div>
        <label>User Name</label>
        <input
          type="text"
          autoFocus
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <p className="errorMsg">{emailError}</p>
        <label>Password</label>
        <input
          type="password"
          required
          value={passowrd}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <p className="errorMsg">{passowrdError}</p>
        <div className="btnContainer">
          {hasAccount ? (
            <>
              <button onClick={handleLogin} className="auth-button">Sign in</button>
              <p>
                Dont have an account?
                <span onClick={() => setHasAccount(!hasAccount)}>Sign up</span>
              </p>
            </>
          ) : (
            <>
              <button onClick={handleSignup} className="auth-button">Signup</button>
              <p>
                Have an account ?
                <span onClick={() => setHasAccount(!hasAccount)}>Sign in</span>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;
