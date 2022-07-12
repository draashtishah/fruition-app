import "./App.css";
import { auth, db } from "./components/fire";
import Login from "./components/Login";
import React, { useState, useEffect } from "react";
import Main from "./components/Main";
import { DatePicker } from "react-datepicker";
import Invite from "./components/Invite";
function App() {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passowrdError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState(false);

  const clearInputs = () => {
    setEmail("");
    setPassword("");
  };
  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
  };
  const handleLogin = () => {
    clearErrors();

    auth.signInWithEmailAndPassword(email, password).catch((err) => {
      switch (err.code) {
        case "auth/invalid-email":
        case "auth/user-disabled":
        case "auth/user-not-found":
          setEmailError(err.message);
          break;
        case "auth/wrong-password":
          setPasswordError(err.message);
          break;
      }
    });
  };

  const handleSignup = () => {
    clearErrors();
    auth.createUserWithEmailAndPassword(email, password).catch((err) => {
      switch (err.code) {
        case "auth/email-already-in-use":
        case "auth/invalid-email":
          setEmailError(err.message);
          break;
        case "auth/waek-password":
          setPasswordError(err.message);
          break;
      }
    });
  };

  const handleLogout = () => {
    // console.log("i am in logout");
    auth.signOut();
  };

  const authListener = () => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        clearInputs();
        setUser(user);
      } else {
        setUser("");
      }
    });
  };

  useEffect(() => {
    authListener();
  }, []);
  return (
    <div classNameName="App">
      {user != "" ? (
        <>
          {console.log(user)}
          <Main auth={auth} user={user}  />
        </>
      ) : (
        <Login
          email={email}
          setEmail={setEmail}
          passowrd={password}
          setPassword={setPassword}
          handleLogin={handleLogin}
          handleSignup={handleSignup}
          hasAccount={hasAccount}
          setHasAccount={setHasAccount}
          emailError={emailError}
          passowrdError={passowrdError}
        />
      )}

      
    </div>
  );
}

export default App;
