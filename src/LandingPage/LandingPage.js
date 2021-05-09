import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";

export default class LandingPage extends Component {
  state = {
    username: "",
    password: "",
    loginErrors: "",
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    // const { username, password } = this.state;

    //   axios
    //     .post(
    //       "http://localhost:3001/sessions",
    //       {
    //         user: {
    //           email: email,
    //           password: password,
    //         },
    //       },
    //       { withCredentials: true }
    //     )
    //     .then((response) => {
    //       if (response.data.logged_in) {
    //         this.props.handleSuccessfulAuth(response.data);
    //       }
    //     })
    //     .catch((error) => {
    //       console.log("login error", error);
    //     });
    event.preventDefault();
  };

  render() {
    return (
      <div className="landing-page">
        <form onSubmit={this.handleSubmit}>
          <div className="landing-input">
            <label htmlFor="username">
              <b>Username</b>
            </label>
            <input
              type="username"
              name="username"
              placeholder="Enter username"
              value={this.state.username}
              onChange={this.handleChange}
              required
            />{" "}
          </div>
          <br />
          <div className="landing-input">
            <label htmlFor="password">
              <b>Password</b>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              value={this.state.password}
              onChange={this.handleChange}
              required
            />
          </div>
          <br />
          <button type="submit" className="landing-page-btn">
            <Link to="/sparring_log">Log In</Link>
          </button>
          <br />
          <span className="landing-span">
            Don't have an account? <br />
            <button type="submit" className="landing-page-btn">
              <Link to="/sparring_log">Sign Up</Link>
            </button>
            <br />
          </span>
          <span className="landing-span">
            Check it out using a demo account! <br />
            <button type="submit" className="landing-page-btn">
              <Link to="/sparring_log">Demo</Link>
            </button>
          </span>
        </form>
      </div>
    );
  }
}
