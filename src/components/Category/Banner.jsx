import React, { Component } from "react";
import axios from "axios";
class Banner extends Component {
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
    //console.log(category);
  }

  render() {
    const { category } = this.state;
    //console.log(category.categories);
    return (
      <>
        <div class="page-heading">
          <div class="container">
            <div class="row">
              <div class="col-lg-8">
                <div class="top-text header-text">
                  <h6>Categories with Simple Tabs</h6>
                  <h2>We have a wide range of business categories for you</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-12">
          <form
            id="search-form"
            name="gs"
            method="submit"
            role="search"
            action="#"
          >
            <div className="row">
              <div className="col-lg-3 align-self-center">
                <fieldset>
                  <select
                    name="area"
                    className="form-select"
                    aria-label="Area"
                    id="chooseCategory"
                  >
                    <option>All Areas</option>
                    <option value="New Village">New Village</option>
                    <option value="Old Town">Old Town</option>
                    <option value="Modern City">Modern City</option>
                  </select>
                </fieldset>
              </div>
              <div className="col-lg-3 align-self-center">
                <fieldset>
                  <input
                    type="address"
                    name="address"
                    className="searchText"
                    placeholder="Enter a location"
                    autoComplete="on"
                    required
                  />
                </fieldset>
              </div>
              <div className="col-lg-3 align-self-center">
                <fieldset>
                  <select
                    name="price"
                    className="form-select"
                    aria-label="Default select example"
                    id="chooseCategory"
                  >
                    <option defaultValue={"selected"}>Price Range</option>
                    <option value="$100 - $250">$100 - $250</option>
                    <option value="$250 - $500">$250 - $500</option>
                    <option value="$500 - $1000">$500 - $1,000</option>
                    <option value="$1000+">$1,000 or more</option>
                  </select>
                </fieldset>
              </div>
              <div className="col-lg-3">
                <fieldset>
                  <button className="main-button">
                    <i className="fa fa-search"></i> Search Now
                  </button>
                </fieldset>
              </div>
            </div>
          </form>
        </div>
        <div className="col-lg-10 offset-lg-1">
          <ul className="categories">
            {category.categories &&
              category.categories.map((cat) => (
                <li>
                  <a href="category.html">
                    <span className="icon">
                      <img
                        src={
                          "http://103.127.29.85:8085/plotlist/" + cat &&
                          cat.icon
                        }
                      />
                    </span>
                    {cat.category_name}
                  </a>
                </li>
              ))}
          </ul>
        </div>
      </>
    );
  }
}

export default Banner;
