import React from "react";
import { NavLink } from "react-router-dom";
const SignupForm = ({
  name,
  email,
  password,
  setName,
  setEmail,
  setPassword,
  handleSubmit,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="inputBox">
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label>Name</label>
      </div>
      <div className="inputBox">
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label>Email</label>
      </div>
      <div className="inputBox">
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <label>Password</label>
      </div>
      <div className="links">
        <NavLink to="/forgotpassword">Forgot Password</NavLink>
        <NavLink to="/login">Login</NavLink>
      </div>
      <div className="inputBox">
        <input type="submit" value="Signup" />
      </div>
    </form>
  );
};

export default SignupForm;
