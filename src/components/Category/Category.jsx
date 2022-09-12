import React, { Component } from "react";
import Footer from "../Common/Footer";
import Header from "../Common/Header";
import Banner from "../Home/Banner";
import Ex from "./ex";
class Category extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Header />
        <Banner />
        <Footer />
        <Ex />
      </React.Fragment>
    );
  }
}

export default Category;
