import React, { Component } from "react";
import { Redirect } from "react-router-dom";
export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      matchNAme: "hruday@gmail.com",
      matchPassword: "hruday123",
    };
    this.handelInputChange = this.handelInputChange.bind(this);
    this.handelSubmit = this.handelSubmit.bind(this);
    // console.log(this.state)
  }
  handelInputChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };
  handelSubmit = (e) => {
    e.preventDefault();
    let value = this.state;
    // console.log(value);
    if (
      value.username !== value.matchNAme ||
      value.password !== value.matchPassword
    ) {
      return alert("Invalid user");
    } else {
      <Redirect exact to="/dashboard" />;
    }
  };

  render() {
    return (
      <>
        <form onSubmit={this.handelSubmit}>
          <div className="w-50 text-center">
            <div className="form-group">
              <input
                type="email"
                id="username"
                className="form-control"
                placeholder="UserName"
                onChange={this.handelInputChange}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                id="password"
                className="form-control"
                placeholder="PassWord"
                onChange={this.handelInputChange}
              />
            </div>
            <button type="submit" className="btn">
              Login
            </button>
          </div>
        </form>
      </>
    );
  }
}
