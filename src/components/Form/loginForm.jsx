import React from "react";
import Joi from "joi-browser";
import Form from "./Form";
import auth from "./authService";

class LoginForm extends Form {
  state = {
    data: {
      email: "",
      password: "",
    },
    errors: {},
  };

  schema = {
    email: Joi.string().required().email().label("Email"),
    password: Joi.string().required().label("Password"),
  };

  doSubmit = async () => {
    //Call the server
    try {
      const { data } = this.state;
      //fetching token
      await auth.login(data.email, data.password);
      const { state } = this.props.location;
      //if state is not defined we will redirect the user to the homepage
      window.location = state ? state.from.pathname : "/home";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        alert("User not found!! Please enter valid credentials");
      }
    }
  };

  //   componentDidMount() {
  //     this.username.current.focus();
  //   }
  render() {
    return (
      <>
        <div className="Auth-form-container">
          <form onSubmit={this.handleSubmit} className="Auth-form">
            <div className="Auth-form-content">
              <h3 className="Auth-form-title">LogIn</h3>
              <div className="form-group mt-3">
                {this.renderInput("email", "Email")}
              </div>
              <div className="form-group mt-3">
                {this.renderInput("password", "Password", "password")}
              </div>
              <div className="d-grid gap-2 mt-3">
                {this.renderButton("Login")}
              </div>
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default LoginForm;
