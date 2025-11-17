//? add firebase

import React, { useState } from "react";
import "./Auth.css";
import { useNavigate } from "react-router-dom";
import { BiLogoMediumOld } from "react-icons/bi";
import loginImg from "../Assests/login.webp";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { getAppAuth, getAppDB } from "../firebase";

const Signup = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);


  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (!form.name || !form.email || !form.password || !form.confirmPassword) {
      alert("Please fill all fields");
      return;
    }

    if (form.password.length < 6) {
      alert("Password must be at least 6 characters");
      return;
    }

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const auth = getAppAuth();
      const db = getAppDB();

      const userCredential = await createUserWithEmailAndPassword(
        auth,
        form.email,
        form.password
      );

      const user = userCredential.user;

      await setDoc(doc(db, "users", user.uid), {
        name: form.name,
        email: form.email,
        createdAt: new Date(),
      });

      alert("Signup successful!");
      navigate("/login");
    } catch (err) {
      alert(err.message);
    }
    setLoading(false);
  };

  return (
    <div className="auth__wrapper">
      <div className="auth__visual">
        <img src={loginImg} alt="Signup" className="auth__img" />
        <div className="auth__text">
          <h2>Join Our Travel Community!</h2>
          <p>
            Sign up to start discovering top destinations and personalized deals.
          </p>
        </div>
      </div>

      <div className="auth__panel">
        <BiLogoMediumOld className="auth__icon" />

        <h2>Create Your Account</h2>
        <p className="auth__subtext">Start your adventure with us today!</p>

        {/* <form onSubmit={handleSubmit} className="auth__form">
          <input type="text" name="name" placeholder="Full Name"
            value={form.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email Address"
            value={form.email} onChange={handleChange} required />
          <input type="password" name="password" placeholder="Password"
            value={form.password} onChange={handleChange} required />
          <input type="password" name="confirmPassword"
            placeholder="Confirm Password" value={form.confirmPassword}
            onChange={handleChange} required />

          <button type="submit" className="auth__btn"  disabled={loading}>
            Sign Up
          </button>
           {loading ? "Signing up..." : "Signup"}
        </form> */}

        <form onSubmit={handleSubmit} className="auth__form">
  <input
    type="text"
    name="name"
    placeholder="Full Name"
    value={form.name}
    onChange={handleChange}
    required
  />

  <input
    type="email"
    name="email"
    placeholder="Email Address"
    value={form.email}
    onChange={handleChange}
    required
  />

  <input
    type="password"
    name="password"
    placeholder="Password"
    value={form.password}
    onChange={handleChange}
    required
  />

  <input
    type="password"
    name="confirmPassword"
    placeholder="Confirm Password"
    value={form.confirmPassword}
    onChange={handleChange}
    required
  />

  <button
    type="submit"
    className="auth__btn"
    disabled={loading}
  >
    {loading ? "Signing up..." : "Sign Up"}
  </button>
</form>


        <p className="auth__bottom-text">
          Already have an account?{" "}
          <span onClick={() => navigate("/login")} className="auth__link">
            Login here
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signup;
