import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
const Slider = () => {
  const [list, setList] = useState([]);

  const getListing = async () => {
    const url = "http://103.127.29.85:8085/plotlist/getListing";
    console.log(url);
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NjI1NDg2MDUsImV4cCI6MTY2MjYzNTAwNX0.6lhMfueunMe2L5r2YyKhbBDTxqOQsvnbRv-utjDKjm0";
    console.log(token);
    const res = await axios.get(url, {
      headers: { Authorization: `Bearer ${token} ` },
    });
    const listData = res.data.listings;
    setList(listData);
    //   console.log(listData);
  };

  // const dataFetch = () => {
  //   const { data: listings } = getListing();
  // };

  useEffect(() => {
    getListing();
    //  console.log(list);
  }, []);

  return (
    <>
      <div className="recent-listing">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-heading">
                <h2>Recent Listing</h2>
                <h6>Check Them Out</h6>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Carousel
        className="carousel"
        showIndicators={false}
        showStatus={false}
        autoPlay={true}
        infiniteLoop={true}
      >
        {list &&
          list.slice(1, 5).map((lis, key) => (
            <div key={key}>
              <div
                style={{
                  width: "60%",
                  display: "inline-block",
                }}
              >
                <img
                  src={lis && lis.image}
                  style={{ width: "50%", boxSizing: "50%", overflow: "hidden" }}
                />
              </div>
              <div
                style={{
                  width: "30%",
                  display: "inline-block",
                  textAlign: "center",
                  margin: "20px",
                }}
              >
                <h3 style={{ marginTop: "50px" }}>
                  {lis && lis.categroyid.title}
                </h3>
              </div>
            </div>
          ))}
      </Carousel>
    </>
  );
};

export default Slider;
