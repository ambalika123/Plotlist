import React, { Component } from "react";
import Footer from "../Common/Footer";
import Header from "../Common/Header";
import Banner from "../Home/Banner";
class Category extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Header />
        <Banner />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Category;
