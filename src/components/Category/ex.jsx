import React, { Component } from "react";
import axios from "axios";
class Ex extends Component {
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
    return (
      <>
        <ul className="nav nav-tabs mb-3" id="ex-with-icons" role="tablist">
          {category.categories &&
            category.categories.map((cat) => (
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link active"
                  id={cat._id}
                  data-mdb-toggle="tab"
                  href="#ex-with-icons-tabs-1"
                  role="tab"
                  aria-controls="ex-with-icons-tabs-1"
                  aria-selected="true"
                >
                  <i className="fas fa-chart-pie fa-fw me-2"></i>
                  {cat.category_name}
                </a>
              </li>
            ))}
        </ul>
        <div className="tab-content" id="ex-with-icons-content">
          {category.categories &&
            category.categories.map((cat) => (
              <>
                <div
                  className="tab-pane fade show active"
                  id={cat._id}
                  role="tabpanel"
                  aria-labelledby="ex-with-icons-tab-1"
                >
                  Tab 1 content
                </div>
                <div
                  className="tab-pane fade"
                  id={cat._id}
                  role="tabpanel"
                  aria-labelledby="ex-with-icons-tab-2"
                >
                  Tab 2 content
                </div>
                <div
                  className="tab-pane fade"
                  id={cat._id}
                  role="tabpanel"
                  aria-labelledby="ex-with-icons-tab-3"
                >
                  Tab 3 content
                </div>
              </>
            ))}
        </div>
      </>
    );
  }
}

export default Ex;
