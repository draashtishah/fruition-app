import React from "react";

import logo from "../images/logo.png";
import NewPlan from "./NewPlan";
import Admin from "./Admin";
import Message from "./Message";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import FrontPage from "./FrontPage";
function Main({ auth, user }) {
  // console.log(user);
  const unique_id = "XiMugIq8GFZ39wRMpa4X74V9NDn2";
  const unique_id2 = "j5eNSL91UXUAU5L5CaLnfFdqgI82";
  return (
    <div className="fruition">
      <BrowserRouter>
        {user.uid != unique_id && user.uid != unique_id2 ? (
          <>
            <div className="container">
              <nav>
                <Link to={`/fruition-app`}>
                  <img src={logo} className="logo"></img>
                </Link>
                <span className="navigate-links">
                  <Link to={`/booking`} className="nav-link">
                    New Booking
                  </Link>
                  <Link to={`/message`} className="nav-link">
                    Message Us
                  </Link>
                  <Link to={`/fruition-app`} className="nav-link">
                    Our Services
                  </Link>
                </span>
                <button onClick={() => {auth.signOut()}}>Logout</button>
              </nav>
              <Routes>
                <Route path="/fruition-app" element={<FrontPage />} />
                <Route path="/message" element={<Message />} />
                <Route path="/booking" element={<NewPlan />} />
              </Routes>
            </div>{" "}
          </>
        ) : (
          <>
            <nav>
              <Link to={`/fruition-app`}>
                <img src={logo} className="logo"></img>
              </Link>
              <button onClick={() => auth.signOut()}>Logout</button>
            </nav>
            <Admin />
          </>
        )}
      </BrowserRouter>
    </div>
  );
}

export default Main;
