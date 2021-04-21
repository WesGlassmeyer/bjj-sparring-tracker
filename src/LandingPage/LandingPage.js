import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";

export default function LandingPage() {
  return (
    <div>
      <form action="tbd">
        <div class="container">
          <h1>Sign Up</h1>
          <p>Please fill in this form to create an account.</p>

          <label for="username">
            <b>Username</b>
          </label>
          <input
            type="username"
            placeholder="Username"
            name="username"
            required
          />
          <br />
          <label for="psw">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            required
          />

          <div class="signup">
            <button type="submit" class="signupbtn">
              Sign Up
            </button>
          </div>
          <div class="login">
            <p>
              Have an account? <br />
              <button type="submit" class="loginbtn">
                <Link to="/sparring_log">Login</Link>
              </button>
            </p>
          </div>
          <div class="demo">
            <p>
              Check it out using a demo account! <br />
              <button type="submit" class="demobtn">
                Demo
              </button>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}
