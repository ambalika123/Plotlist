import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
const List = () => {
  const [list, setList] = useState([]);

  const getListing = async () => {
    const url = "http://103.127.29.85:8085/plotlist/getListing";
    let authToken = localStorage.getItem("authToken");
    console.log(authToken);
    await axios
      .get(url, {
        headers: { "Authorization": `Bearer ${authToken} ` },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    const listData = res.data.listings;
    setList(listData);
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

      <Carousel autoPlay>
        {list &&
          list.map((lis, key) => (
            <div key={key}>
              <div style={{ width: "60%", display: "inline-block" }}>
                <img src={lis && lis.image} style={{ width: "50%" }} />
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

              <div style={{ width: "60%", display: "inline-block" }}>
                <img src={lis && lis.image} style={{ width: "50%" }} />
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
              <div style={{ width: "60%", display: "inline-block" }}>
                <img src={lis && lis.image} style={{ width: "50%" }} />
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

export default List;
