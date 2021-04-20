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

          <label for="email">
            <b>Email</b>
          </label>
          <input type="text" placeholder="Enter Email" name="email" required />

          <label for="psw">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            required
          />

          <label for="username">
            <b>Username</b>
          </label>
          <input
            type="username"
            placeholder="Username"
            name="username"
            required
          />
          <div class="signup">
            <button type="submit" class="signupbtn">
              Sign Up
            </button>
          </div>

          <p>
            Have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </form>
    </div>
  );
}

{
  /* <a href="#">Login</a>. */
}
