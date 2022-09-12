import React, { Component } from "react";
import axios from "axios";
import CategoryLayout from "./category";
import Ex from "./ex";
import { Link } from "react-scroll";
class PopularCategories extends Component {
  state = {
    category: [],
  };
  getCategories = () => {
    const url = "http://103.127.29.85:8085/plotlist/getCategory";
    return axios.get(url);
  };
  async componentDidMount() {
    const { data: category } = await this.getCategories();
    this.setState({ category });
  }
  render() {
    const { category } = this.state;
    let category_name = category && category.categories;
    //console.log(category_name);
    return (
      <div class="popular-categories">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="section-heading">
                <h2>Popular Categories</h2>
                <h6>Check Them Out</h6>
              </div>
            </div>
            <div class="col-lg-12">
              <div class="naccs">
                <div class="grid">
                  <div class="row">
                    <div class="col-lg-3">
                      <div class="menu">
                        {" "}
                        {/* {category.categories &&
                          category.categories.map((cat) => ( */}
                        <>
                          <div class="first-thumb active">
                            <div class="thumb">
                              <span class="icon">
                                <img
                                  src="assets/images/search-icon-01.png"
                                  alt=""
                                />
                              </span>{" "}
                              {category.categories &&
                                category.categories[0].category_name}
                            </div>
                          </div>
                          <div>
                            <div class="thumb">
                              <span class="icon">
                                <img
                                  src="assets/images/search-icon-02.png"
                                  alt=""
                                />
                              </span>{" "}
                              {category.categories &&
                                category.categories[1].category_name}
                            </div>
                          </div>
                          <div>
                            <div class="thumb">
                              <span class="icon">
                                <img
                                  src="assets/images/search-icon-03.png"
                                  alt=""
                                />
                              </span>{" "}
                              {category.categories &&
                                category.categories[2].category_name}
                            </div>
                          </div>
                          <div>
                            <div class="thumb">
                              <span class="icon">
                                <img
                                  src="assets/images/search-icon-04.png"
                                  alt=""
                                />
                              </span>{" "}
                              {category.categories &&
                                category.categories[3].category_name}
                            </div>
                          </div>
                        </>
                        {/* ))} */}
                      </div>
                    </div>
                    <div class="col-lg-9 align-self-center">
                      <ul class="nacc">
                        <li class="active">
                          <div>
                            <div class="thumb">
                              <div class="row">
                                <div class="col-lg-5 align-self-center">
                                  <div class="left-text">
                                    <h4>
                                      {category.categories &&
                                        category.categories[0].title}
                                    </h4>
                                    <p>
                                      {category.categories &&
                                        category.categories[0].sort_descripiton}
                                    </p>
                                    <div class="main-white-button">
                                      <a href="#">
                                        <i class="fa fa-eye"></i> Discover More
                                      </a>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-lg-7 align-self-center">
                                  <div class="right-image">
                                    <img
                                      src={
                                        category.categories &&
                                        category.categories[0].image
                                      }
                                      alt="Travelling around"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div>
                            <div class="thumb">
                              <div class="row">
                                <div class="col-lg-5 align-self-center">
                                  <div class="left-text">
                                    <h4>
                                      {category.categories &&
                                        category.categories[1].title}
                                    </h4>
                                    <p>
                                      {category.categories &&
                                        category.categories[1].sort_descripiton}
                                    </p>
                                    <div class="main-white-button">
                                      <a href="#">
                                        <i class="fa fa-eye"></i> Explore More
                                      </a>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-lg-7 align-self-center">
                                  <div class="right-image">
                                    <img
                                      src={
                                        category.categories &&
                                        category.categories[1].image
                                      }
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div>
                            <div class="thumb">
                              <div class="row">
                                <div class="col-lg-5 align-self-center">
                                  <div class="left-text">
                                    <h4>
                                      {category.categories &&
                                        category.categories[2].title}
                                    </h4>
                                    <p>
                                      {category.categories &&
                                        category.categories[2].sort_descripiton}
                                    </p>
                                    <div class="main-white-button">
                                      <a href="listing.html">
                                        <i class="fa fa-eye"></i> More Listing
                                      </a>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-lg-7 align-self-center">
                                  <div class="right-image">
                                    <img
                                      src={
                                        category.categories &&
                                        category.categories[2].image
                                      }
                                      alt="cars in the city"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div>
                            <div class="thumb">
                              <div class="row">
                                <div class="col-lg-5 align-self-center">
                                  <div class="left-text">
                                    <h4>
                                      {category.categories &&
                                        category.categories[3].title}
                                    </h4>
                                    <p>
                                      {category.categories &&
                                        category.categories[3].sort_descripiton}
                                    </p>
                                    <div class="main-white-button">
                                      <a href="#">
                                        <i class="fa fa-eye"></i> Discover More
                                      </a>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-lg-7 align-self-center">
                                  <div class="right-image">
                                    <img
                                      src={
                                        category.categories &&
                                        category.categories[3].image
                                      }
                                      alt="Shopping Girl"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PopularCategories;
{
  /* <Ex /> */
}

{
  /* {category.categories &&
                    category.categories.map((cat) => {
                      cat.category_name;
                    })} */
}

{
  /*
                  {category.categories &&
                    category.categories.map((cat) => (
                      <>
                        <div className="row">
                          <div className="col-lg-3">
                            <div className="menu">
                              <div className="first-thumb active">
                                <button className="thumb">
                                  <Link to="categ">
                                    <span className="icon">
                                      <img
                                        src={
                                          "http://103.127.29.85:8085/plotlist/" +
                                            cat && cat.icon
                                        }
                                      />
                                    </span>
                                    {cat.category_name}
                                  </Link>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div id="categ" key={cat._id}>
                          <div className="col-lg-9 align-self-center">
                            <ul className="nacc">
                              <li className="active">
                                <div>
                                  <div className="thumb">
                                    <div className="row">
                                      <div className="col-lg-5 align-self-center">
                                        <div className="left-text">
                                          <h4>{cat._id.title}</h4>
                                          <p>
                                            Plot Listing is a responsive
                                            Bootstrap 5 website template that
                                            included 4 different HTML pages.
                                            This template is provided by
                                            TemplateMo website. You can apply
                                            this layout for your static or
                                            dynamic CMS websites.
                                          </p>
                                          <div className="main-white-button">
                                            <a href="#">
                                              <i className="fa fa-eye"></i>{" "}
                                              Discover More
                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-lg-7 align-self-center">
                                        <div className="right-image">
                                          <img
                                            src={
                                              "http://103.127.29.85:8085/plotlist/" +
                                                cat && cat.icon
                                            }
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </>
                    ))} */
}
