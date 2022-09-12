import React, { Component } from "react";
import Header from "../Common/Header";
class Contact extends Component {
  state = {};
  render() {
    return (
      <>
        <Header />
        <div className="page-heading">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="top-text header-text">
                  <h6>Keep in touch with us</h6>
                  <h2>
                    Feel free to send us a message about your business needs
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-page">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="inner-content">
                  <div className="row">
                    <div className="col-lg-6">
                      {/* <div id="map">
                        <iframe
                          src="https://maps.google.com/maps?q=Av.+L%C3%BAcio+Costa,+Rio+de+Janeiro+-+RJ,+Brazil&t=&z=13&ie=UTF8&iwloc=&output=embed"
                          width="100%"
                          height="650px"
                          allowFullScreen
                        ></iframe>
                      </div> */}
                    </div>
                    <div className="col-lg-6 align-self-center">
                      <form id="contact" action="" method="get">
                        <div className="row">
                          <div className="col-lg-6">
                            <fieldset>
                              <input
                                type="name"
                                name="name"
                                id="name"
                                placeholder="Name"
                                autoComplete="on"
                                required
                              />
                            </fieldset>
                          </div>
                          <div className="col-lg-6">
                            <fieldset>
                              <input
                                type="surname"
                                name="surname"
                                id="surname"
                                placeholder="Surname"
                                autoComplete="on"
                                required
                              />
                            </fieldset>
                          </div>
                          <div className="col-lg-12">
                            <fieldset>
                              <input
                                type="text"
                                name="email"
                                id="email"
                                pattern="[^ @]*@[^ @]*"
                                placeholder="Your Email"
                                required=""
                              />
                            </fieldset>
                          </div>
                          <div className="col-lg-12">
                            <ul>
                              <li>
                                <input
                                  type="checkbox"
                                  name="option1"
                                  value="cars"
                                />
                                <span>Cars</span>
                              </li>
                              <li>
                                <input
                                  type="checkbox"
                                  name="option2"
                                  value="aparmtents"
                                />
                                <span>Apartments</span>
                              </li>
                              <li>
                                <input
                                  type="checkbox"
                                  name="option3"
                                  value="shopping"
                                />
                                <span>Shopping</span>
                              </li>
                              <li>
                                <input
                                  type="checkbox"
                                  name="option4"
                                  value="food"
                                />
                                <span>Food &amp; Life</span>
                              </li>
                              <li>
                                <input
                                  type="checkbox"
                                  name="option5"
                                  value="traveling"
                                />
                                <span>Traveling</span>
                              </li>
                            </ul>
                          </div>
                          <div className="col-lg-12">
                            <fieldset>
                              <textarea
                                name="message"
                                type="text"
                                className="form-control"
                                id="message"
                                placeholder="Message"
                                required=""
                              ></textarea>
                            </fieldset>
                          </div>
                          <div className="col-lg-12">
                            <fieldset>
                              <button
                                type="submit"
                                id="form-submit"
                                className="main-button"
                              >
                                <i className="fa fa-paper-plane"></i> Send
                                Message
                              </button>
                            </fieldset>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Contact;
