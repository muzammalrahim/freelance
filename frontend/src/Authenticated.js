import React, { useState, useEffect } from "react";
//import { firebaseAuth } from "../firebase";
import { Redirect } from "react-router-dom";
// import setAuthToken from "../utils/setAuthToken";
// import jwt_decode from "jwt-decode";

const Authenticated = (props) => {
  const [loggedIn, setloggedIn] = useState(null);
  const token = localStorage.token;
  useEffect(() => {
    if (localStorage.token) {
      //Set auth token header auth

    //   setAuthToken(token);
    //   const decoded = jwt_decode(token);
    //   const currentTime = Date.now() / 1000; // to get in milliseconds
      // console.log("decode token", decoded);
      setloggedIn(true);
    //   if (decoded.exp < currentTime) {
    //     localStorage.removeItem("jwtToken");
    //     setAuthToken(false);
    //     setloggedIn(false);
    //     // Redirect to login
    //   }
    } else {
      setloggedIn(false);
    }
  }, [token]);

  if (props.nonAuthenticated) {
    if (loggedIn === null) {
      return "Loading....";
    } else if (!loggedIn) {
      return props.children;
    } else if (loggedIn) {
      return <Redirect to="/" />;
    }
  } else {
    if (loggedIn === null) {
      return "Loading....";
    } else if (loggedIn) {
      return props.children;
    } else if (!loggedIn) {
      return <Redirect to="/login" />;
    }
  }
};

export default Authenticated;