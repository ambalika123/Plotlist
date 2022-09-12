import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import jwtDecode from "jwt-decode";
import "react-pro-sidebar/dist/css/styles.css";
import Category from "./components/Category/Category";
import Home from "./components/Home/Home";
import Listing from "./components/Listing/Listing";
import Contact from "./components/Contact/Contact";
import LoginForm from "./components/Form/loginForm";
import "./Header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Common/Header";
import Forms from "./components/Form/forms";
import Logout from "./components/Form/logout";
function App() {
  if (!localStorage.getItem("token") == "") {
    let token = localStorage.getItem("token");
    const { exp } = jwtDecode(token);
    // const { iat } = jwtDecode(token);
    // console.log(exp);
    // console.log(iat);
    // const Time = exp - 1140000;
    // console.log(Time);
    // let currentTime = Math.floor(Date.now() / 1000);
    // console.log(currentTime);
    console.log(exp);
    const expirationTime = exp * 1000 - 60000;
    console.log(expirationTime);
    console.log(Date.now());
    if (Date.now() >= expirationTime) {
      localStorage.clear();
      alert("You have been logged out");
      window.location = "/signin";
      // props.history.push("/signin");
      //<Redirect to="/signin" />;
    } else {
      return (
        // you can set your headers directly here based on the old token
        <React.Fragment>
          <Switch>
            <Route path="/category" component={Category} />
            <Route path="/home" component={Home} />
            <Redirect from="/" exact to="/login" />
            <Route path="/listing" component={Listing} />
            <Route path="/contact" component={Contact} />
            <Route path="/login" render={(props) => <LoginForm {...props} />} />
            <Route path="/logout" component={Logout} />
          </Switch>
        </React.Fragment>
      );
    }
  } else {
    return (
      <>
        <Route path="/login" render={(props) => <LoginForm {...props} />} />
        <Redirect from="/" exact to="/login" />
      </>
    );
  }
}

export default App;
