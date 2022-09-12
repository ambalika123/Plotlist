import React, { Component } from "react";
import axios from "axios";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
class Lists extends Component {
  state = {
    listing: [],
  };
  getListing = async () => {
    const url = "http://103.127.29.85:8085/plotlist/getListing";
    console.log(url);
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NjI1NDg2MDUsImV4cCI6MTY2MjYzNTAwNX0.6lhMfueunMe2L5r2YyKhbBDTxqOQsvnbRv-utjDKjm0";
    console.log(token);
    const res = await axios.get(url, {
      headers: { Authorization: `Bearer ${token} ` },
    });
    console.log(res.data.listings);
    const listData = res.data.listings;
  };
  componentDidMount() {
    const { data } = this.getListing();
    // console.log(listData);
    this.setState({ data });
  }

  render() {
    const { listing } = this.state;
    //console.log(listing);
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
        <Carousel>
          {listing &&
            listing.listings &&
            listing.listings.categroyid &&
            listing.listings.categroyid.map((list) => (
              <>
                <div>
                  <div style={{ width: "50%", display: "inline-block" }}>
                    <img
                      src={
                        list &&
                        list.listings &&
                        list.listings.categroyid &&
                        list.listings.categroyid.image &&
                        "http://103.127.29.85:8085/plotlist/" +
                          list.listings.categroyid.image
                      }
                    />
                  </div>
                  {/* <div style={{ width: "50%", display: "inline-block" }}>
                    <p className="legend">Legend 1</p>
                  </div> */}
                </div>
                <div
                  style={{
                    width: "50%",
                    display: "inline-block",
                    margin: "20px",
                  }}
                >
                  {/* <img
                    src={
                      "http://103.127.29.85:8085/plotlist/" + list && list.image
                    }
                  /> */}
                </div>
                {/* <div>
                  <img
                    src={category.categories && category.categories[2].image}
                  />
                  <p className="legend">Legend 2</p>
                </div>
                <div>
                  <img
                    src={category.categories && category.categories[3].image}
                  />
                  <p className="legend">Legend 3</p>
                </div> */}
              </>
            ))}
        </Carousel>
      </>
    );
  }
}

export default Lists;
