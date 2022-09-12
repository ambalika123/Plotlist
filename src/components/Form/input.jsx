import React, { Component } from "react";
const Input = ({ name, label, error, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        //we are using props to set value
        {...rest}
        id={name}
        name={name}
        className="form-control mt-1"
        //ref={this.username}
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
