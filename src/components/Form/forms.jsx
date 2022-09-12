import React, { Component } from "react";

import Footer from "../Common/Footer";
import Header from "../Common/Header";
import LoginForm from "./loginForm";
import Banner from "../Home/Banner";

class Forms extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Header />
        {/* <Banner /> */}
        <LoginForm />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Forms;
