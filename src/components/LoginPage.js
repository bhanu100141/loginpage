import React, { useState } from "react";
import axios from "axios";
import { Link,useNavigate } from "react-router-dom";
import "./LoginPage.css";

function LoginPage() {
  const [formData, setFormData] = useState({
    user_email: "",
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
    try {
      const response = await axios.post(
        "https://syoft.dev/Api/userlogin/api/userlogin",
        formData
      );
      if (response.data.status) {
        const userData = response.data.user_data[0];
        localStorage.setItem("user", JSON.stringify(userData));
        navigate("/dashboardpage");
      } else {
        alert(response.data.msg);
      }
    } catch (error) {
      console.error("There was an error logging in!", error);
    }
  };

  return (
    <div className="loginpage-container">
      <div className="login-left-container">
        <h1>Login</h1>
        <form className="login-form" onSubmit={handleSubmit}>
          <label htmlFor="user_email">Mail*</label>
          <input
            type="email"
            name="user_email"
            placeholder="Email"
            onChange={handleChange}
            required
          />
          <label htmlFor="user_password">Password*</label>
          <input
            type="password"
            name="user_password"
            placeholder="Password"
            onChange={handleChange}
            required
          />
          <button type="submit">Login</button>
        </form>
        <p>
            New User?{" "}
            <Link className="signup-link" to="/">
              <span className="login-span">Sign in</span>
            </Link>
          </p>
      </div>
      <div className="login-right-container">
        <h1>
          Hello,<br></br>
          <span>Welcome to</span> <br></br> Login <span>Page</span>
        </h1>
      </div>
    </div>
  );
}
export default LoginPage;
