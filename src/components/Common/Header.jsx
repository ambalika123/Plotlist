import React, { Component } from "react";
import { NavLink } from "react-router-dom";
class Header extends Component {
  state = {};
  render() {
    return (
      <header
        className="header-area header-sticky wow slideInDown"
        data-wow-duration="0.75s"
        data-wow-delay="0s"
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="main-nav">
                <NavLink to="/home" className="logo"></NavLink>

                <ul className="nav">
                  <li>
                    <NavLink to="/home" className="active">
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/category">Category</NavLink>
                  </li>
                  <li>
                    <NavLink to="/listing">Listing</NavLink>
                  </li>
                  <li>
                    <NavLink to="/contact">Contact Us</NavLink>
                  </li>
                  {/* <li>
                    <NavLink to="/login">Login</NavLink>
                  </li> */}
                  <li>
                    <NavLink to="/logout">Logout</NavLink>
                  </li>
                  <li>
                    <div className="main-white-button">
                      <NavLink to="#">
                        <i className="fa fa-plus"></i> Add Your Listing
                      </NavLink>
                    </div>
                  </li>
                </ul>
                <a className="menu-trigger">
                  <span>Menu</span>
                </a>
              </nav>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
