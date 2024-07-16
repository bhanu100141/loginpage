import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./SignUpPage.css";

function SignUpPage() {
  const [formData, setFormData] = useState({
    user_firstname: "",
    user_email: "",
    user_phone: "",
    user_password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      ...formData,
      user_lastname: "Doe",
      user_city: "Hyderabad",
      user_zipcode: "500072",
    };

    try {
      const response = await axios.post(
        "https://syoft.dev/Api/user_registeration/api/user_registeration",
        payload
      );

      if (response.data.status) {
        alert("Registration Successful");
        navigate("/loginpage");
      } else {
        alert(response.data.msg);
      }
    } catch (error) {
      console.error("There was an error registering!", error);
      alert("Registration failed. Please try again.");
    }
  };

  return (
    <div className="main-Container">
      <div className="left-container">
        <h1>
          Welcome to <br />
          our community
        </h1>
        <p>
          Fuse helps developers to build organized and well coded <br />
          dashboards full of beautiful and rich modules. Join us and start
          <br /> building your application
        </p>
        <div className="join-us">
          <img
            src="https://res.cloudinary.com/dgkru5vsg/image/upload/v1710757530/blsx1w3tkkthtjl1zlgr.jpg"
            className="person"
            alt=""
          />
          <img
            src="https://res.cloudinary.com/dgkru5vsg/image/upload/v1707901613/eewotdexfwnqkebav7uw.jpg"
            className="person"
            alt=""
          />
          <img
            src="https://res.cloudinary.com/dgkru5vsg/image/upload/v1710757530/blsx1w3tkkthtjl1zlgr.jpg"
            className="person"
            alt=""
          />
          <img
            src="https://res.cloudinary.com/dgkru5vsg/image/upload/v1707901613/eewotdexfwnqkebav7uw.jpg"
            className="person"
            alt=""
          />
          <p>More than 17k people joined us, it's your turn</p>
        </div>
      </div>
      <div className="right-container">
        <div className="signup-container">
          <img
            src="https://res.cloudinary.com/dgkru5vsg/image/upload/v1721050618/pngtree-abstract-triangle-sign-illustration-logo-vector-image_283616-removebg-preview_vz0oin.png"
            className="logo"
            alt=""
          />
          <h2>Sign Up</h2>
          <p>
            Already have an account?{" "}
            <Link className="signup-link" to="/loginpage">
              <span>Sign in</span>
            </Link>
          </p>

          <form className="signup-form" onSubmit={handleSubmit}>
            <label htmlFor="user_firstname">Full Name*</label>
            <input
              type="text"
              id="user_firstname"
              name="user_firstname"
              placeholder="First Name"
              onChange={handleChange}
              required
            />
            <label htmlFor="user_email">Mail*</label>
            <input
              type="email"
              id="user_email"
              name="user_email"
              placeholder="Email"
              onChange={handleChange}
              required
            />
            <label htmlFor="user_phone">Mobile Number*</label>
            <input
              type="text"
              id="user_phone"
              name="user_phone"
              placeholder="Phone"
              onChange={handleChange}
              required
            />
            <label htmlFor="user_password">Password*</label>
            <input
              type="password"
              id="user_password"
              name="user_password"
              placeholder="Password"
              onChange={handleChange}
              required
            />
            <div className="checkbox-container">
              <input
                type="checkbox"
                name="agree"
                id="checkbox"
                onChange={handleChange}
                required
              />
              <label className="label" htmlFor="checkbox">
                I agree to the <span>Terms of Service</span> and{" "}
                <span>Privacy Policy</span>
              </label>
            </div>
            <button className="submit-button" type="submit">
              Create your free account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
