"use client";

import React from "react";

const LoginContainer = () => {
  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSignUp}>
      <h3>SignUp Here</h3>

      <label>Name</label>
      <input name="name" type="text" placeholder="name" id="name" />

      <label>Username</label>
      <input name="username" type="text" placeholder="Username" id="username" />

      <label>Email</label>
      <input name="email" type="email" placeholder="Email" id="email" />

      <label>Password</label>
      <input
        name="password"
        type="password"
        placeholder="Password"
        id="password"
      />

      <button>Log In</button>
    </form>
  );
};

export default LoginContainer;
