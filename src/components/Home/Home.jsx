import React, { Component } from "react";
import Header from "../Common/Header";
import Banner from "./Banner";
import PopularCategories from "./PopularCategories";
import Lists from "./Lists";
import Footer from "../Common/Footer";
import List from "./List";
import Slider from "./Slider";
import Slider1 from "./Slider1";
import Slider2 from "./Slider2";
class Home extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Header />
        <Banner />
        <PopularCategories />
        {/* <Lists /> */}
        <List />
        {/* <Slider />
        <Slider1 />
        <Slider2 /> */}
        <Footer />
      </React.Fragment>
    );
  }
}

export default Home;
