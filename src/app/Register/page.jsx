"use client";
import axios from "axios";
import React from "react";

export default function page() {
  const handleRegister = async (e) => {
    e.preventDefault();

    const username = e.target.username.value;
    const password = e.target.password.value;

    const userInfo = { username, password };

    try {
      const res = await axios.post(
        "http://localhost:5000/api/register",
        userInfo
      );
      console.log("Response:", res.data);
      alert(res.data.message); // optional: show success message
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
      alert(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Registration</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form className="fieldset" onSubmit={handleRegister}>
                <label className="label">User Name</label>
                <input
                  type="text"
                  name="username"
                  className="input"
                  placeholder="User Name"
                />

                <label className="label">Password</label>
                <input
                  type="password"
                  className="input"
                  placeholder="Password"
                  name="password"
                />

                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>

                <button type="submit" className="btn btn-neutral mt-4">
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
